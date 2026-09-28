import { MetadataRoute } from 'next'
import { getAllNews } from '@/lib/novinky'

// Sitemap updated 2025-11-16 - Canonical URL fix - All URLs now use www variant
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fyzio-praha.cz'
  const lastModified = new Date()

  const news = getAllNews().map((post) => ({
    url: `${baseUrl}/novinky/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/o-mne`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sluzby`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cenik`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rezervace`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/caste-otazky`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/novinky`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...news,
  ]
}
