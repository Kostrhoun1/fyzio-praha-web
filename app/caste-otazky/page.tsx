import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Časté otázky - FAQ | Fyzio Praha',
  description: 'Odpovědi na nejčastější otázky o fyzioterapii v Praze 8. Ceny, pojišťovny, délka terapie, parkování a více.',
  alternates: {
    canonical: 'https://www.fyzio-praha.cz/caste-otazky',
  },
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema
          })
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">❓ Máte dotazy?</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Časté otázky o fyzioterapii
            </h1>
            <p className="text-xl text-white/90">
              Odpovědi na nejčastější dotazy k fyzioterapii v Praze 8
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">

            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {faq.question}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* CTA na konci FAQ */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Nenašli jste odpověď na svou otázku?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Kontaktujte mě a ráda vám pomohu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+420604477935"
                  className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
                >
                  📞 Zavolat: 604 477 935
                </a>
                <Link
                  href="/rezervace"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
                >
                  Rezervovat termín
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// FAQ Data
const faqData = [
  {
    question: "Přijímáte nové klienty?",
    answer: `
      <p class="mb-4">Ano, v současné době přijímám nové klienty. Volné termíny obvykle nabízím do 3-7 dnů. Pro akutní stavy se snažím najít termín do 24-48 hodin.</p>
      <p class="mb-2"><strong>Objednat se můžete:</strong></p>
      <ul class="list-disc pl-6 space-y-2">
        <li>📞 Telefonicky: <a href="tel:+420604477935" class="text-primary font-semibold hover:underline">604 477 935</a> (Po-Pá 8-18h)</li>
        <li>💬 SMS: 604 477 935</li>
        <li>🌐 Online: <a href="/rezervace" class="text-primary font-semibold hover:underline">www.fyzio-praha.cz/rezervace</a></li>
      </ul>
      <p class="mt-4">Těším se na setkání!</p>
    `
  },
  {
    question: "Kolik stojí jedna návštěva u fyzioterapeuta?",
    answer: `
      <p class="mb-4">Nabízím dvě délky terapie podle vašich potřeb:</p>
      <div class="space-y-4">
        <div class="bg-gray-50 p-4 rounded-xl">
          <div class="font-bold text-gray-900 mb-1">⏱️ 30 minut = 750 Kč</div>
          <div class="text-gray-600">Ideální pro: kontrolní vyšetření, tejpování, cílená terapie</div>
        </div>
        <div class="bg-accent/10 p-4 rounded-xl border-2 border-accent">
          <div class="font-bold text-gray-900 mb-1">⏱️ 60 minut = <span class="line-through text-gray-400">1300 Kč</span> <span class="text-accent">1000 Kč</span> 🎉 ZAVÁDĚCÍ CENA</div>
          <div class="text-gray-600">Ideální pro: kompletní vyšetření + terapie, nové obtíže</div>
        </div>
      </div>
      <p class="mt-4">Ceny zahrnují kompletní vyšetření, hands-on terapii a edukaci (domácí cviky).</p>
      <p class="mt-2">💳 Přijímám platbu kartou i hotovost.</p>
    `
  },
  {
    question: "Je potřeba doporučení od lékaře?",
    answer: `
      <p class="mb-4"><strong>Ne, doporučení od lékaře není potřeba.</strong> Můžete přijít přímo.</p>
      <p class="mb-4">Fyzioterapie je dostupná jako privátní péče, takže se můžete objednat kdykoliv podle vašich potřeb.</p>
      <p>Pokud máte nějaké lékařské zprávy, RTG nebo MRI vyšetření, je dobré je vzít s sebou na první návštěvu - pomůže mi to lépe pochopit váš stav.</p>
    `
  },
  {
    question: "Hradí fyzioterapii pojišťovna?",
    answer: `
      <p class="mb-4">Poskytuji privátní péči, která není přímo hrazená pojišťovnou.</p>
      <p class="mb-2"><strong>💡 VÝHODA PRIVÁTNÍ PÉČE:</strong></p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Termíny do 3-7 dnů (ne měsíce čekání)</li>
        <li>45-60 minut individuální péče (ne 10 min)</li>
        <li>Moderní terapeutické metody</li>
        <li>Osobní přístup bez časového tlaku</li>
      </ul>
    `
  },
  {
    question: "Provádíte dětskou fyzioterapii?",
    answer: `
      <p class="mb-4">Ano, specializuji se na dětskou fyzioterapii od 6 let věku.</p>
      <p class="mb-2"><strong>👶 CO ŘEŠÍME:</strong></p>
      <ul class="list-disc pl-6 space-y-2 mb-4">
        <li>Vadné držení těla a skoliózy</li>
        <li>Bolesti růstu</li>
        <li>Pooperační stavy</li>
        <li>Sportovní úrazy</li>
        <li>Plochonoží</li>
      </ul>
      <p class="mb-4"><strong>🎯 MŮJ PŘÍSTUP:</strong><br/>
      Pracuji hravou formou s individuálním přístupem. Rodiče jsou u terapie přítomni a dostávají instrukce pro domácí cvičení.</p>
      <p>První návštěva trvá 60 minut a zahrnuje kompletní vyšetření + terapii.</p>
    `
  },
  {
    question: "Kde mohu zaparkovat?",
    answer: `
      <p class="mb-4">Parkování máte hned u ordinace i v okolí:</p>
      <p class="mb-2"><strong>🅿️ MOŽNOSTI:</strong></p>
      <ol class="list-decimal pl-6 space-y-2 mb-4">
        <li>Ulice Andrštova (přímo před ordinací) - modré zóny</li>
        <li><strong>Fialové zóny v ulicích:</strong> náměstí Dr. Václava Holého, U Libeňského pivovaru, Na Rokytce, Pivovarnická</li>
        <li>Parkoviště Palmovka - 5 minut chůze</li>
      </ol>
      <p class="mb-2"><strong>🚇 VEŘEJNÁ DOPRAVA:</strong></p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Metro B - Palmovka (7 minut chůze)</li>
        <li>Tram 1, 2, 5, 6, 7, 8, 11, 12 - zastávka Palmovka</li>
        <li>Autobus 109, 136, 175 - zastávka Palmovka</li>
      </ul>
      <p class="mt-4">Ordinace je v přízemí, bezbariérově přístupná.</p>
    `
  },
  {
    question: "Jak vypadá první návštěva u fyzioterapeuta?",
    answer: `
      <p class="mb-4">První návštěva trvá obvykle 60 minut a probíhá v těchto krocích:</p>
      <div class="space-y-4">
        <div class="bg-gray-50 p-4 rounded-xl">
          <div class="font-bold text-gray-900 mb-1">1️⃣ ANAMNÉZA (15-20 min)</div>
          <div class="text-gray-600">Podrobný rozhovor o vašich potížích, historie, lifestyle</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl">
          <div class="font-bold text-gray-900 mb-1">2️⃣ VYŠETŘENÍ (10-15 min)</div>
          <div class="text-gray-600">Funkční testy pohyblivosti, svalové síly, držení těla</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl">
          <div class="font-bold text-gray-900 mb-1">3️⃣ DIAGNÓZA & PLÁN (5 min)</div>
          <div class="text-gray-600">Vysvětlím co je příčinou potíží a navrhnu terapii</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl">
          <div class="font-bold text-gray-900 mb-1">4️⃣ TERAPIE (20-25 min)</div>
          <div class="text-gray-600">Hands-on práce: mobilizace, měkké techniky, cvičení</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl">
          <div class="font-bold text-gray-900 mb-1">5️⃣ DOMÁCÍ CVIKY (5 min)</div>
          <div class="text-gray-600">Instrukce cvičení pro doma + edukace</div>
        </div>
      </div>
      <p class="mt-4"><strong>📋 CO SI VZÍT S SEBOU:</strong></p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Pohodlné oblečení (tepláky, tričko)</li>
        <li>Ručník (pokud budeme pracovat s kůží)</li>
        <li>Lékařské zprávy (RTG, MRI) pokud máte</li>
      </ul>
    `
  },
  {
    question: "Jaké potíže řešíte nejčastěji?",
    answer: `
      <p class="mb-4">Moje hlavní specializace:</p>
      <div class="space-y-4">
        <div>
          <div class="font-bold text-gray-900 mb-2">🔥 BOLESTI POHYBOVÉHO APARÁTU</div>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>Bolesti zad (krční, hrudní, bederní páteře)</li>
            <li>Bolesti kloubů (rameno, koleno, kyčel)</li>
            <li>Vertebrogenní obtíže</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-gray-900 mb-2">💆 BOLESTI HLAVY & ZÁVRATĚ</div>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>Cervikogenní bolesti hlavy</li>
            <li>Migrény</li>
            <li>Vertigo (závrať)</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-gray-900 mb-2">👶 DĚTSKÁ FYZIOTERAPIE (od 6 let)</div>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>Vadné držení těla</li>
            <li>Skoliózy</li>
            <li>Plochonoží</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-gray-900 mb-2">🏥 POOPERAČNÍ REHABILITACE</div>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>Operace kloubů</li>
            <li>Zlomeniny</li>
            <li>Úrazy</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-gray-900 mb-2">⚡ HLUBOKÝ STABILIZAČNÍ SYSTÉM</div>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>Prevence bolestí zad</li>
            <li>Posílení core svalstva</li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-gray-900 mb-2">🦶 PODOLOGIE (DĚTSKÁ I DOSPĚLÁ)</div>
          <ul class="list-disc pl-6 space-y-1 text-gray-600">
            <li>Funkční diagnostika nohy</li>
            <li>Individuální stélky (Formthotics systém)</li>
            <li>Dětská noha a sportovní obuv</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    question: "Jaká je provozní doba?",
    answer: `
      <p class="mb-4">Ordinuji v pracovní dny, o víkendech je zavřeno.</p>
      <p class="mb-2"><strong>📅 PROVOZNÍ DOBA:</strong></p>
      <div class="bg-gray-50 p-4 rounded-xl space-y-1">
        <div>Pondělí: 14:00 - 20:00</div>
        <div>Úterý: 10:00 - 17:00</div>
        <div>Středa: 10:00 - 17:00</div>
        <div>Čtvrtek: 14:00 - 20:00</div>
        <div>Pátek: 9:00 - 15:00</div>
        <div class="text-gray-400">Sobota - Neděle: Zavřeno</div>
      </div>
      <p class="mt-4"><strong>💡 TIP:</strong> Doporučuji objednat se předem:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>📞 <a href="tel:+420604477935" class="text-primary font-semibold hover:underline">604 477 935</a></li>
        <li>🌐 <a href="/rezervace" class="text-primary font-semibold hover:underline">www.fyzio-praha.cz/rezervace</a></li>
      </ul>
    `
  },
  {
    question: "Je ordinace bezbariérově přístupná?",
    answer: `
      <p class="mb-4">Ano, ordinace je plně bezbariérově přístupná.</p>
      <p class="mb-2"><strong>♿ BEZBARIÉROVOST:</strong></p>
      <ul class="list-none space-y-2 mb-4">
        <li>✅ Přízemí budovy</li>
        <li>✅ Žádné schody</li>
        <li>✅ Široké dveře</li>
        <li>✅ Dostatek prostoru pro pohyb</li>
        <li>✅ Parkování v blízkosti</li>
      </ul>
      <p class="mb-2"><strong>📍 ADRESA:</strong></p>
      <div class="bg-gray-50 p-4 rounded-xl">
        Andrštova 1339/4<br/>
        Praha 8 - Libeň, 180 00
      </div>
      <p class="mt-4">Pokud máte speciální potřeby nebo dotazy, neváhejte se předem ozvat:<br/>
      📞 <a href="tel:+420604477935" class="text-primary font-semibold hover:underline">604 477 935</a></p>
    `
  }
];

// Schema.org FAQPage markup
const faqSchema = faqData.map(faq => ({
  "@type": "Question",
  "name": faq.question,
  "acceptedAnswer": {
    "@type": "Answer",
    "text": faq.answer.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  }
}));
