import Image from 'next/image';
import Link from 'next/link';
import { formatDate, type NewsPost } from '@/lib/novinky';

export default function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/novinky/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary to-primary-light">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <time dateTime={post.date} className="text-sm font-semibold text-accent mb-2">
          {formatDate(post.date)}
        </time>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 flex-1">{post.excerpt}</p>
        <span className="inline-flex items-center space-x-1 mt-4 text-primary font-semibold">
          <span>Číst dál</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
