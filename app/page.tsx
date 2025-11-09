import Image from 'next/image';
import Link from 'next/link';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  Profesionální fyzioterapie v Praze 8
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Fyzioterapie na míru,<br />
                <span className="text-primary">která sedne</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Fyzioterapie s úsměvem<br />
                <span className="font-semibold text-gray-800">
                  Individuální, cílený a odborný přístup
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/rezervace"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
                >
                  Rezervovat
                </Link>
                <a
                  href="mailto:info@fyzio-praha.cz"
                  className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg text-center"
                >
                  Napsat email
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">let praxe</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600">certifikací</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">osobní přístup</div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/veronika-foto2.jpg"
                  alt="Bc. Veronika Jansová - Fyzioterapeut"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Bc. Veronika Jansová</div>
                    <div className="text-sm text-gray-600">Registrovaný fyzioterapeut</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Na co se specializuji
            </h2>
            <p className="text-lg text-gray-600">
              Nabízím širokou škálu fyzioterapeutických služeb pro děti i dospělé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-gray-100 hover:border-accent"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/sluzby"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <span>Zobrazit všechny služby</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/fyzioterapie-praxe.webp"
                alt="Fyzioterapie v praxi"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Proč si vybrat mě?
              </h2>

              <div className="space-y-6">
                {whyChooseMe.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="text-white/90">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href="/o-mne"
                  className="inline-flex items-center space-x-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  <span>Více o mně</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ceník služeb
            </h2>
            <p className="text-lg text-gray-600">
              Transparentní ceny bez skrytých poplatků
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                  plan.popular
                    ? 'border-4 border-accent shadow-2xl transform scale-105'
                    : 'border-2 border-gray-200 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      ⭐ Nejvýhodnější
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                    {plan.duration}
                    <span className="text-2xl text-gray-500"> min</span>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mt-4">
                    {plan.price}
                    <span className="text-xl text-gray-500"> Kč</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Ideální pro:</h3>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/rezervace"
                  className={`block text-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Rezervovat
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p>Platba: hotově, kartou nebo QR kódem</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-16 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Připraveni začít?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Kontaktujte mě a domluvíme si termín, který vám bude vyhovovat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rezervace"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Rezervovat
              </Link>
              <a
                href="mailto:info@fyzio-praha.cz"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Napsat email
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold">Adresa</span>
                  </div>
                  <p className="text-white/90">
                    Andrštova 1339/4<br />
                    180 00 Praha 8-Libeň
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Provozní doba</span>
                  </div>
                  <p className="text-white/90">
                    Po - Pá: 8:00 - 17:00<br />
                    Na objednávku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Data
const services = [
  {
    title: 'Bolesti pohybového aparátu',
    description: 'Účinná terapie akutních i chronických bolestí zad, kloubů a svalů',
    image: '/images/services/bolesti-pohyboveho-aparatu.jpg',
  },
  {
    title: 'Dětská fyzioterapie',
    description: 'Specializovaná péče pro děti od 6 let s individuálním přístupem',
    image: '/images/services/detska-fyzioterapie.jpg',
  },
  {
    title: 'Pooperační rehabilitace',
    description: 'Komplexní rehabilitace po operacích a úrazech',
    image: '/images/services/pooperacni-rehabilitace.jpg',
  },
  {
    title: 'Vadné držení těla',
    description: 'Korekce držení těla, skoliózy a posturální problémy',
    image: '/images/services/vadne-drzeni-tela.jpg',
  },
  {
    title: 'Bolesti hlavy a vertigo',
    description: 'Specializovaná terapie migrén, závratí a kraniocervikálních potíží',
    image: '/images/services/bolesti-hlavy-vertigo.jpg',
  },
  {
    title: 'Hluboký stabilizační systém',
    description: 'Cvičení pro aktivaci a posílení hlubokých stabilizátorů páteře',
    image: '/images/services/hluboke-stabilizacni-cviceni.jpg',
  },
];

const whyChooseMe = [
  {
    title: 'Individuální přístup',
    description: 'Každá terapie je šitá na míru vašim konkrétním potřebám a cílům',
  },
  {
    title: '15+ let zkušeností',
    description: 'Dlouholetá praxe v ambulantní i lůžkové fyzioterapii',
  },
  {
    title: 'Neustálé vzdělávání',
    description: 'Více než 20 postgraduálních kurzů a certifikací v oboru',
  },
  {
    title: 'Komplexní péče',
    description: 'Široké spektrum terapeutických metod a technik pod jednou střechou',
  },
];

const pricing = [
  {
    duration: '30',
    price: '750',
    popular: false,
    features: [
      'Kontrolní vyšetření',
      'Tejpování',
      'Cílená terapie',
    ],
  },
  {
    duration: '45',
    price: '1000',
    popular: false,
    features: [
      'Komplexní terapie',
      'Kombinace technik',
      'Edukace a cviky',
    ],
  },
  {
    duration: '60',
    price: '1300',
    popular: true,
    features: [
      'První návštěva',
      'Podrobné vyšetření',
      'Individuální plán',
    ],
  },
];
