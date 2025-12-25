import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O mně - Bc. Veronika Jansová | Fyzio Praha',
  description: 'Bc. Veronika Jansová - fyzioterapeutka Praha 8 s 15+ lety praxe ✓ Bolesti zad, vertebrogenní obtíže, dětská fyzio, podologie ✓ 20+ certifikací ✓ U metra Palmovka',
  alternates: {
    canonical: 'https://www.fyzio-praha.cz/o-mne',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              O mně
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Registrovaný fyzioterapeut s vášní pro pomoc lidem
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/veronika-foto2.jpg"
                alt="Bc. Veronika Jansová"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Bc. Veronika Jansová
                </h2>
                <p className="text-xl text-primary font-semibold">
                  Registrovaný fyzioterapeut
                </p>
              </div>

              <div className="prose prose-lg text-gray-600">
                <p>
                  Jsem <strong>časově flexibilní, registrovaný fyzioterapeut</strong> s několikaletou
                  praxí v oboru ve složce ambulantní i lůžkové. Mým cílem je poskytovat{' '}
                  <strong>individuální, cílený a odborný přístup</strong> každému pacientovi.
                </p>
                <p>
                  Fyzioterapii se věnuji s láskou a úsměvem. Věřím, že každý člověk je jedinečný
                  a zaslouží si terapii šitou přímo na míru svým potřebám a cílům.
                </p>
                <p>
                  Jsem zodpovědná, samostatná, s chutí se <strong>neustále vzdělávat</strong> a učit
                  se novým věcem. Proto jsem absolvovala více než 20 postgraduálních kurzů a školení
                  v různých oblastech fyzioterapie.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">let praxe v oboru</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600">certifikací a kurzů</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Profesní zkušenosti
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Fyzioterapii se věnuji <strong>více než 15 let</strong>. Za tu dobu jsem získala rozsáhlé
                zkušenosti v ambulantní i lůžkové péči, včetně vedoucích pozic v renomovaných
                rehabilitačních ambulancích.
              </p>
              <p className="text-lg leading-relaxed">
                Pracovala jsem s pacienty všech věkových kategorií – od dětí po seniory,
                s kardiologickými i onkologickými pacienty, i se sportovci. Tato rozmanitost
                mi umožnila vybudovat komplexní pohled na fyzioterapii a přizpůsobit péči
                potřebám každého jednotlivce.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600 font-semibold">let praxe</div>
                <div className="text-sm text-gray-500 mt-2">v ambulantní i lůžkové péči</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-accent mb-2">20+</div>
                <div className="text-gray-600 font-semibold">certifikací</div>
                <div className="text-sm text-gray-500 mt-2">postgraduální vzdělávání</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-primary-light mb-2">100%</div>
                <div className="text-gray-600 font-semibold">osobní přístup</div>
                <div className="text-sm text-gray-500 mt-2">každému pacientovi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postgraduate Education Section - HLAVNÍ VIZUÁLNÍ PRVEK */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Specializace a certifikace
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Neustále se vzdělávám a rozšiřuji své dovednosti, abych vám mohla nabídnout
                tu nejlepší péči založenou na aktuálních poznatcích fyzioterapie
              </p>
            </div>

            {/* Kategorie kurzů */}
            <div className="space-y-12">
              {courseCategories.map((category, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-3xl">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{category.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {category.courses.map((course, index) => (
                      <div
                        key={index}
                        className="bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-all duration-300 group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-3 h-3 bg-accent rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <p className="text-white/95 leading-relaxed group-hover:text-white transition-colors">
                            {course}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Vzdělání - kompaktní */}
            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Základní vzdělání</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-accent font-bold mb-2">{edu.period}</div>
                    <div className="text-xl font-bold mb-2">{edu.degree}</div>
                    <div className="text-white/90">{edu.school}</div>
                    {edu.note && (
                      <div className="text-sm text-white/70 mt-2">{edu.note}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pojďme společně pracovat na vašem zdraví
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontaktujte mě a domluvíme si termín konzultace
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
const education = [
  {
    period: '2005 – 2008',
    degree: 'Fyzioterapie',
    school: 'Univerzita Jana Evangelisty Purkyně, Ústav zdravotnických studií',
    note: 'Bakalářské studium',
  },
  {
    period: '2001 – 2005',
    degree: 'Všeobecná sestra',
    school: 'Střední zdravotnická a Vyšší zdravotnická škola (Ústí n/L)',
    note: 'Maturita s vyznamenáním',
  },
];

const courseCategories = [
  {
    icon: '🦶',
    title: 'Podologie a noha',
    courses: [
      'Dětská noha - podologie a fyzioterapie, sportovní obuv',
      'Funkční diagnostika nohy a aktivní kinezioterapie',
      'Formthotics systém - individuální stélky',
    ],
  },
  {
    icon: '🧠',
    title: 'Neurologické a psychosomatické přístupy',
    courses: [
      'Současné trendy ve fyzioterapii neurologicky nemocných',
      'Diagnostika a terapie závratí (Vertigo)',
      'Základy komplexního psychosomatického přístupu',
    ],
  },
  {
    icon: '🏋️',
    title: 'Terapeutické koncepty a cvičení',
    courses: [
      'Terapeutický koncept BPP (Bazální podprogramy)',
      'Spiral stabilization 1A + 1B',
      'Kurz Forma - Funkce - Facilitace',
      'Aktivace hlubokého stabilizačního systému páteře',
      'Cvičení na míči, labilních plochách a s overbally',
    ],
  },
  {
    icon: '👐',
    title: 'Manuální techniky',
    courses: [
      'Měkké a mobilizační techniky (Rehex-Edu)',
      'Terapie funkčních poruch ramenního kloubu dle BPP',
      'Manuální lymfodrenáž těla v regeneraci',
      'Terapeutické využití kineziologických tejpů',
    ],
  },
  {
    icon: '⚡',
    title: 'Specializované metody',
    courses: [
      'Využití rázové vlny v rehabilitaci a ortopedii',
      'Redcord – Fyzioterapie v souvislosti',
      'Certifikát celoživotního vzdělávání UNIFY',
    ],
  },
  {
    icon: '📚',
    title: 'Konference a další vzdělávání',
    courses: [
      'Ústecké rehabilitační konference (pasivní účast)',
      'Rehabilitační konference Krajské zdravotní a.s. (aktivní účast)',
    ],
  },
];
