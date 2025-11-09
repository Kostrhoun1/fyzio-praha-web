import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Fyzioterapie Praha 8 Libeň | Fyzio Praha',
  description: 'Kontaktujte nás: tel. 604 477 935, email info@fyzio-praha.cz. Ordinace v Praze 8 - Libeň, Andrštova 1339/4. Po-Pá 8:00-17:00.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kontakt
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Těším se na setkání s vámi
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Kontaktní údaje
                </h2>

                <div className="space-y-6">
                  {/* Name */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Jméno</div>
                      <div className="text-gray-600">Bc. Veronika Jansová</div>
                      <div className="text-sm text-gray-500">Registrovaný fyzioterapeut</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                      <a href="tel:+420604477935" className="text-primary hover:text-primary-light text-lg font-semibold transition-colors">
                        604 477 935
                      </a>
                      <div className="text-sm text-gray-500 mt-1">Po-Pá 8:00 - 17:00</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">E-mail</div>
                      <a href="mailto:info@fyzio-praha.cz" className="text-primary hover:text-primary-light text-lg font-semibold transition-colors">
                        info@fyzio-praha.cz
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Adresa ordinace</div>
                      <div className="text-gray-600">
                        Andrštova 1339/4<br />
                        180 00 Praha 8-Libeň
                      </div>
                      <a
                        href="https://maps.google.com/?q=Andrštova+1339/4,+180+00+Praha+8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-primary hover:text-primary-light font-semibold text-sm transition-colors"
                      >
                        Zobrazit na mapě →
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <div className="font-semibold text-gray-900 mb-2">Provozní doba</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-gray-600">
                          <span>So:</span>
                          <span className="font-semibold text-gray-900">9:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Po - Pá:</span>
                          <span className="font-semibold text-accent text-sm">od ledna 2026</span>
                        </div>
                        <div className="text-sm text-accent mt-3 pt-3 border-t border-gray-200">
                          ● Na objednávku
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Parkování</div>
                      <div className="text-gray-600">
                        Možnost parkování na ulici v okolí ordinace
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Potřebujete se objednat?</h3>
                <p className="text-white/90 mb-4">
                  Zavolejte mi nebo napište email a domluvíme si termín.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+420604477935"
                    className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-full font-semibold text-center transition-all duration-300"
                  >
                    Zavolat
                  </a>
                  <a
                    href="mailto:info@fyzio-praha.cz"
                    className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300"
                  >
                    Napsat email
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kde nás najdete
              </h2>
              <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8!2d14.4844!3d50.1098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b945c1f8be5c1%3A0x8e8c8b9e4c8c8c8c!2sAndrstova%201339%2F4%2C%20180%2000%20Praha%208-Liben!5e0!3m2!1scs!2scz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Fyzio Praha"
                ></iframe>
              </div>
              <div className="mt-6 bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm">
                  📍 Praha 8 - Libeň, pár minut od metra Palmovka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
