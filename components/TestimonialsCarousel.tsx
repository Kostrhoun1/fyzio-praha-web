'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Jana K.',
    treatment: 'Terapie bolestí zad',
    text: 'Po třech seancích jsem konečně cítila výrazné zlepšení. Paní Jansová je nejen profesionální, ale hlavně velmi empatická.',
  },
  {
    name: 'Petr M.',
    treatment: 'Pooperační rehabilitace',
    text: 'Výborný přístup a viditelné výsledky. Po operaci kolene jsem potřeboval kvalitní rehabilitaci a tady jsem ji našel.',
  },
  {
    name: 'Michaela S.',
    treatment: 'Dětská fyzioterapie',
    text: 'Naše dcera má vadné držení těla a paní Jansová s ní pracuje úžasně. Je trpělivá, milá a vidíme velký pokrok.',
  },
  {
    name: 'Martin V.',
    treatment: 'Sportovní úrazy',
    text: 'Jako běžec jsem měl problémy s koleny. Díky cílenému přístupu jsem se vrátil ke sportu rychleji, než jsem čekal.',
  },
  {
    name: 'Lucie H.',
    treatment: 'Terapie migrén',
    text: 'Trpěla jsem častými migrénovými záchvaty. Po sérii terapií se frekvence migrén výrazně snížila. Jsem velmi vděčná.',
  },
  {
    name: 'Tomáš D.',
    treatment: 'Skolióza',
    text: 'Profesionální přístup a cílené cviky pomohly zlepšit mé držení těla. Cítím se mnohem lépe a bolesti zmizely.',
  },
];

export default function TestimonialsCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setIsAutoPlaying(false);
    setCurrentPage(page);
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Co říkají moji klienti
          </h2>
          <p className="text-lg text-gray-600">
            Zpětná vazba od lidí, kterým jsem pomohla
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            className={`hidden xl:flex absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center transition-all z-10 ${
              currentPage === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50 hover:scale-110'
            }`}
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            className={`hidden xl:flex absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center transition-all z-10 ${
              currentPage === totalPages - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white shadow-lg text-gray-700 hover:bg-gray-50 hover:scale-110'
            }`}
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={currentPage * itemsPerPage + index}
                className="bg-gray-50 rounded-2xl p-6 lg:p-8 relative flex flex-col"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-0.5 mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{testimonial.treatment}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation - Mobile only */}
          <div className="flex lg:hidden justify-center space-x-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-accent w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
