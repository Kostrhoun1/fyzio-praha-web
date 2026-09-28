import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const NEWS_DIR = path.join(process.cwd(), 'content/novinky');

export type NewsPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  image?: string;
  html: string;
};

// Načte všechny články z content/novinky/*.md, nejnovější první.
// Soubory začínající podtržítkem (např. _sablona.md) se nezobrazují.
export function getAllNews(): NewsPost[] {
  if (!fs.existsSync(NEWS_DIR)) return [];

  return fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(NEWS_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title),
        date: normalizeDate(data.date),
        excerpt: String(data.excerpt ?? ''),
        image: data.image ? String(data.image) : undefined,
        html: marked.parse(content, { async: false }),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return getAllNews().find((post) => post.slug === slug);
}

export function formatDate(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function normalizeDate(value: unknown): string {
  // gray-matter převádí YYYY-MM-DD na Date objekt
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}
