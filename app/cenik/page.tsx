import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ceník - Ceny fyzioterapie | Fyzio Praha',
  description: 'Transparentní ceník fyzioterapeutických služeb. Terapie 30, 45 nebo 60 minut. Platba hotově, kartou nebo QR kódem. Praha 8.',
};

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ceník služeb
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Transparentní ceny bez skrytých poplatků
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
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
                  <h3 className="font-bold text-gray-900 text-lg mb-4">{plan.ideal}</h3>
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

                <a
                  href="tel:+420604477935"
                  className={`block text-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Rezervovat termín
                </a>
              </div>
            ))}
          </div>

          {/* Payment Info */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Platební možnosti
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">Hotově</div>
                  <div className="text-sm text-gray-600">Platba na místě v hotovosti</div>
                </div>

                <div className="space-y-2">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">Kartou</div>
                  <div className="text-sm text-gray-600">Platba platební kartou</div>
                </div>

                <div className="space-y-2">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900">QR kódem</div>
                  <div className="text-sm text-gray-600">Rychlá platba přes QR kód</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Časté dotazy
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Připraveni objednat se?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontaktujte mě a domluvíme si termín, který vám bude vyhovovat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+420604477935"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Zavolat: 604 477 935
              </a>
              <Link
                href="/kontakt"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Kontaktní formulář
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Data
const pricing = [
  {
    duration: '30',
    price: '750',
    popular: false,
    ideal: 'Ideální pro:',
    features: [
      'Kontrolní vyšetření',
      'Tejpování',
      'Cílená terapie jedné oblasti',
      'Následné kontroly',
    ],
  },
  {
    duration: '45',
    price: '1000',
    popular: false,
    ideal: 'Ideální pro:',
    features: [
      'Komplexní terapie',
      'Kombinace více technik',
      'Cvičební program',
      'Edukace a instruktáž',
    ],
  },
  {
    duration: '60',
    price: '1300',
    popular: true,
    ideal: 'Ideální pro:',
    features: [
      'První návštěva',
      'Podrobné vyšetření',
      'Individuální terapeutický plán',
      'Komplexní péče',
    ],
  },
];

const faqs = [
  {
    question: 'Jak si mohu rezervovat termín?',
    answer: 'Termín si můžete domluvit telefonicky na čísle 604 477 935 nebo přes kontaktní formulář na webu. Snažím se vyjít vstříc vašim časovým možnostem.',
  },
  {
    question: 'Je potřeba nějaké doporučení od lékaře?',
    answer: 'Pro návštěvu fyzioterapeuta není potřeba doporučení od lékaře. Můžete přijít i na preventivní vyšetření nebo s akutními obtížemi.',
  },
  {
    question: 'Jak dlouho trvá jedna terapie?',
    answer: 'Nabízím terapie v délce 30, 45 nebo 60 minut. První návštěva bývá delší (60 minut) kvůli podrobnému vyšetření. Další terapie přizpůsobím vašim potřebám.',
  },
  {
    question: 'Hradí terapii pojišťovna?',
    answer: 'Naše služby jsou hrazeny přímo pacientem. Některé pojišťovny však nabízejí příspěvek na soukromou fyzioterapii - informujte se u své pojišťovny.',
  },
  {
    question: 'Co si mám vzít s sebou na první návštěvu?',
    answer: 'Vezměte si pohodlné oblečení, ve kterém se můžete pohybovat. Pokud máte nějaké lékařské zprávy nebo výsledky vyšetření týkající se vašich potíží, vezměte je také.',
  },
  {
    question: 'Mohu zrušit nebo přesunout termín?',
    answer: 'Ano, prosím zrušte nebo přesuňte termín alespoň 24 hodin předem telefonicky nebo SMS. Děkuji za pochopení.',
  },
];
