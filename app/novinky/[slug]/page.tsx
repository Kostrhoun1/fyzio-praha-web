import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NewsCard from '@/components/NewsCard';
import { formatDate, getAllNews, getNewsBySlug } from '@/lib/novinky';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllNews().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};

  const url = `https://www.fyzio-praha.cz/novinky/${post.slug}`;
  return {
    title: `${post.title} | Novinky | Fyzio Praha`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  const otherPosts = getAllNews().filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image ? `https://www.fyzio-praha.cz${post.image}` : undefined,
    author: { '@type': 'Person', name: 'Bc. Veronika Jansová' },
    publisher: { '@type': 'Organization', name: 'Fyzio Praha' },
    mainEntityOfPage: `https://www.fyzio-praha.cz/novinky/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/novinky"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Všechny novinky</span>
            </Link>
            <time dateTime={post.date} className="block text-accent font-semibold mb-3">
              {formatDate(post.date)}
            </time>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-3xl mx-auto">
            {post.image && (
              <div className="relative h-[260px] lg:h-[420px] rounded-3xl overflow-hidden shadow-xl mb-10">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              </div>
            )}
            <div className="news-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Chcete se objednat?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Vyberte si volný termín online nebo mi zavolejte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rezervace"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Rezervovat
              </Link>
              <a
                href="tel:+420604477935"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Zavolat: 604 477 935
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other News */}
      {otherPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
              Další novinky
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {otherPosts.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
