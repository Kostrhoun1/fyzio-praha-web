import type { Metadata } from 'next';
import NewsCard from '@/components/NewsCard';
import { getAllNews } from '@/lib/novinky';

export const metadata: Metadata = {
  title: 'Novinky - Aktuality z ordinace | Fyzio Praha',
  description: 'Novinky a aktuality z ordinace fyzioterapie Praha 8 - Libeň ✓ Změny provozní doby, nové služby, tipy pro zdravá záda ☎ 604 477 935',
  alternates: {
    canonical: 'https://www.fyzio-praha.cz/novinky',
  },
};

export default function NewsPage() {
  const posts = getAllNews();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Novinky
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Aktuality z ordinace, nové služby a tipy pro vaše zdraví
            </p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">
              Zatím tu nejsou žádné novinky. Brzy se tu objeví.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
