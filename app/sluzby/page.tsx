import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Služby - Fyzioterapie a rehabilitace | Fyzio Praha',
  description: 'Komplexní fyzioterapeutické služby: dětská fyzioterapie, bolesti pohybového aparátu, pooperační rehabilitace, tejpování a více. Praha 8.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Na co se specializuji
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Komplexní fyzioterapeutické služby pro děti i dospělé
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center bg-gray-50 rounded-3xl p-6 lg:p-12`}
              >
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  {service.includes && (
                    <div className="pt-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Co zahrnuje:</h3>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Zajímá vás některá z těchto služeb?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontaktujte mě a společně najdeme nejlepší řešení pro vás
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
const services = [
  {
    icon: '🦴',
    title: 'Akutní a chronické bolesti pohybového aparátu',
    image: '/images/services/bolesti-pohyboveho-aparatu.jpg',
    description: 'Komplexní terapie bolestí zad, kloubů a svalů. Zaměřuji se na odhalení příčiny problémů a jejich dlouhodobé řešení, nikoli pouze na tlumení příznaků.',
    includes: [
      'Vertebrogenní obtíže (bolesti páteře)',
      'Bolesti kloubů (rameno, koleno, kyčel)',
      'Svalové dysbalance a spazmy',
      'Artrózy a degenerativní změny',
    ],
    benefits: [
      'Úleva od bolesti',
      'Zlepšení pohyblivosti',
      'Prevence recidiv',
      'Návrat k běžným aktivitám',
    ],
  },
  {
    icon: '👶',
    title: 'Dětská fyzioterapie (od 6 let)',
    image: '/images/services/detska-fyzioterapie.jpg',
    description: 'Specializovaná péče pro děti s individuálním a citlivým přístupem. Terapie formou hry, která děti baví a motivuje k pokroku.',
    includes: [
      'Vadné držení těla',
      'Skoliózy a posturální vady',
      'Ploché nohy a problémy chodidel',
      'Poúrazové stavy',
      'Neurologické diagnózy',
    ],
    benefits: [
      'Hravá forma terapie',
      'Zapojení rodičů',
      'Prevence problémů v dospělosti',
      'Individuální cvičební plán',
    ],
  },
  {
    icon: '🦶',
    title: 'Ploché nohy u dětí i dospělých',
    image: '/images/services/ploske-nohy.jpg',
    description: 'Specializace na diagnostiku a terapii problémů chodidel včetně možnosti individuálních korekcí (Formthotics systém, stélky).',
    includes: [
      'Funkční diagnostika nohy',
      'Aktivní kinezioterapie',
      'Individuální korekce (stélky)',
      'Cvičení a edukace',
    ],
    benefits: [
      'Zmírnění bolestí',
      'Zlepšení stability',
      'Správné rozložení zátěže',
      'Prevence komplikací',
    ],
  },
  {
    icon: '🧘',
    title: 'Vadné držení těla a skoliózy',
    image: '/images/services/vadne-drzeni-tela.jpg',
    description: 'Korekce držení těla pomocí moderních terapeutických konceptů a individuálního cvičebního plánu.',
    includes: [
      'Vyšetření posturálních vad',
      'Terapie skolióz',
      'Korekční cvičení',
      'Spiral Stabilization',
    ],
    benefits: [
      'Zlepšení držení těla',
      'Prevence progrese skoliózy',
      'Úleva od bolestí',
      'Větší sebevědomí',
    ],
  },
  {
    icon: '💆',
    title: 'Výhřezy meziobratlových plotének',
    image: '/images/services/vyhrezy-plotynek.jpg',
    description: 'Konzervativní léčba výhřezů plotének s důrazem na aktivaci hlubokého stabilizačního systému páteře.',
    includes: [
      'Terapie akutních stavů',
      'Aktivace HSS (hluboký stabilizační systém)',
      'Mobilizační techniky',
      'Prevence recidiv',
    ],
    benefits: [
      'Zmírnění bolesti',
      'Stabilizace páteře',
      'Návrat k aktivitám',
      'Prevence operace',
    ],
  },
  {
    icon: '🌀',
    title: 'Bolesti hlavy a závrať (Vertigo)',
    image: '/images/services/bolesti-hlavy-vertigo.jpg',
    description: 'Specializovaný přístup k terapii migrén, tenzních bolestí hlavy a vestibulárních poruch.',
    includes: [
      'Diagnostika závratí',
      'Terapie kraniocervikálních problémů',
      'Vestibulární rehabilitace',
      'Měkké techniky',
    ],
    benefits: [
      'Úleva od bolestí hlavy',
      'Snížení záv ratí',
      'Zlepšení rovnováhy',
      'Lepší kvalita života',
    ],
  },
  {
    icon: '🎯',
    title: 'Cvičení k aktivaci hlubokého stabilizačního systému',
    image: '/images/services/hluboke-stabilizacni-cviceni.jpg',
    description: 'Cílené cvičení pro posílení hlubokých stabilizátorů páteře, které jsou klíčové pro správnou funkci pohybového aparátu.',
    includes: [
      'Diagnostika HSS',
      'Individuální cvičební program',
      'Terapie na labilních plochách',
      'Spiral Stabilization',
    ],
    benefits: [
      'Stabilní páteř',
      'Prevence bolestí',
      'Lepší výkon',
      'Dlouhodobé řešení',
    ],
  },
  {
    icon: '🏥',
    title: 'Pooperační a poúrazová rehabilitace',
    image: '/images/services/pooperacni-rehabilitace.jpg',
    description: 'Komplexní rehabilitační program po operacích a úrazech s respektováním hojících procesů.',
    includes: [
      'Rehabilitace po ortopedických operacích',
      'Poúrazové stavy',
      'Obnova plného rozsahu pohybu',
      'Postupný návrat k aktivitám',
    ],
    benefits: [
      'Rychlejší hojení',
      'Plný rozsah pohybu',
      'Prevence komplikací',
      'Návrat do běžného života',
    ],
  },
  {
    icon: '❤️',
    title: 'Rehabilitace kardiků a onkologických pacientů',
    image: '/images/services/kardio-onko-rehabilitace.jpg',
    description: 'Šetrná a bezpečná rehabilitace přizpůsobená specifickým potřebám pacientů po kardiologických nebo onkologických diagnózách.',
    includes: [
      'Individuální přístup',
      'Bezpečné cvičební programy',
      'Postupné zvyšování zátěže',
      'Edukace a podpora',
    ],
    benefits: [
      'Zvýšení kondice',
      'Lepší kvalita života',
      'Bezpečné prostředí',
      'Psychická podpora',
    ],
  },
  {
    icon: '👐',
    title: 'Měkké a mobilizační techniky, reflexní masáž zad',
    image: '/images/services/mekke-techniky-masaz.jpg',
    description: 'Manuální techniky pro uvolnění napětí, zlepšení prokrvení a obnovení pohyblivosti tkání.',
    includes: [
      'Měkké techniky',
      'Mobilizace kloubů',
      'Reflexní masáž zad',
      'Trigger point terapie',
    ],
    benefits: [
      'Uvolnění svalů',
      'Lepší pohyblivost',
      'Zmírnění bolesti',
      'Relaxace',
    ],
  },
  {
    icon: '💧',
    title: 'Manuální lymfodrenáž',
    image: '/images/services/lymfodrenaz.jpg',
    description: 'Jemná technika pro podporu lymfatického systému, vhodná pro otoky, těžké nohy a regeneraci.',
    includes: [
      'Celotělová lymfodrenáž',
      'Terapie otoků',
      'Regenerace sportovců',
      'Post-traumatické stavy',
    ],
    benefits: [
      'Redukce otoků',
      'Lepší detoxikace',
      'Regenerace',
      'Úleva od těžkých nohou',
    ],
  },
  {
    icon: '🩹',
    title: 'Tejpování',
    image: '/images/services/tejpovani.jpg',
    description: 'Kineziologické tejpování pro podporu svalů, kloubů a lymfatického systému.',
    includes: [
      'Sportovní tejpování',
      'Terapeutické tejpování',
      'Lymfatické tejpování',
      'Stabilizační tejpování',
    ],
    benefits: [
      'Podpora svalů',
      'Stabilizace kloubů',
      'Úleva od bolesti',
      'Zlepšení výkonu',
    ],
  },
];
