import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů | Fyzio Praha',
  description: 'Zásady ochrany osobních údajů (GDPR) pro Fyzio Praha - Bc. Veronika Jansová. Informace o zpracování osobních údajů.',
  alternates: {
    canonical: 'https://www.fyzio-praha.cz/ochrana-udaju',
  },
};

export default function OchranaUdajuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ochrana osobních údajů
            </h1>
            <p className="text-xl text-white/90">
              Zásady zpracování osobních údajů (GDPR)
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="prose prose-lg max-w-none">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Správce osobních údajů</h2>
                <p className="text-gray-600 mb-6">
                  Správcem osobních údajů je <strong>Bc. Veronika Jansová</strong>, provozovatel Fyzio Praha,
                  se sídlem Andrštova 1339/4, 180 00 Praha 8 - Libeň.
                </p>
                <p className="text-gray-600 mb-8">
                  Kontakt: <a href="mailto:info@fyzio-praha.cz" className="text-primary hover:underline">info@fyzio-praha.cz</a>,
                  tel.: <a href="tel:+420604477935" className="text-primary hover:underline">604 477 935</a>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Jaké osobní údaje zpracováváme</h2>
                <p className="text-gray-600 mb-4">V rámci poskytování fyzioterapeutických služeb zpracováváme:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li><strong>Identifikační údaje:</strong> jméno, příjmení, datum narození</li>
                  <li><strong>Kontaktní údaje:</strong> e-mail, telefon, adresa</li>
                  <li><strong>Zdravotní údaje:</strong> anamnéza, diagnóza, průběh terapie, zdravotní dokumentace</li>
                  <li><strong>Fakturační údaje:</strong> údaje pro vystavení faktury</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Účel zpracování osobních údajů</h2>
                <p className="text-gray-600 mb-4">Vaše osobní údaje zpracováváme za účelem:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li>Poskytování fyzioterapeutických služeb a vedení zdravotní dokumentace</li>
                  <li>Komunikace s klienty (objednávky, připomínky termínů)</li>
                  <li>Plnění zákonných povinností (účetnictví, archivace)</li>
                  <li>Zlepšování kvality služeb</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Právní základ zpracování</h2>
                <p className="text-gray-600 mb-4">Osobní údaje zpracováváme na základě:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li><strong>Plnění smlouvy:</strong> poskytování fyzioterapeutických služeb</li>
                  <li><strong>Zákonná povinnost:</strong> vedení zdravotnické dokumentace, účetnictví</li>
                  <li><strong>Oprávněný zájem:</strong> ochrana práv správce, zlepšování služeb</li>
                  <li><strong>Souhlas:</strong> marketingová komunikace (pokud je udělen)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Doba uchovávání údajů</h2>
                <p className="text-gray-600 mb-4">Osobní údaje uchováváme po dobu:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li><strong>Zdravotní dokumentace:</strong> 10 let od poslední návštěvy (dle zákona)</li>
                  <li><strong>Účetní doklady:</strong> 10 let (dle zákona)</li>
                  <li><strong>Kontaktní údaje:</strong> po dobu trvání smluvního vztahu + 3 roky</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vaše práva</h2>
                <p className="text-gray-600 mb-4">V souvislosti se zpracováním osobních údajů máte právo na:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li><strong>Přístup k údajům:</strong> informace o tom, jaké údaje o vás zpracováváme</li>
                  <li><strong>Opravu údajů:</strong> aktualizaci nepřesných nebo neúplných údajů</li>
                  <li><strong>Výmaz údajů:</strong> v případech stanovených zákonem</li>
                  <li><strong>Omezení zpracování:</strong> dočasné omezení zpracování</li>
                  <li><strong>Přenositelnost údajů:</strong> získání údajů ve strukturovaném formátu</li>
                  <li><strong>Námitku:</strong> proti zpracování na základě oprávněného zájmu</li>
                  <li><strong>Odvolání souhlasu:</strong> kdykoliv, bez vlivu na zákonnost předchozího zpracování</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Zabezpečení údajů</h2>
                <p className="text-gray-600 mb-8">
                  Vaše osobní údaje chráníme pomocí vhodných technických a organizačních opatření.
                  Přístup k údajům mají pouze oprávněné osoby vázané mlčenlivostí.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Předávání údajů třetím stranám</h2>
                <p className="text-gray-600 mb-8">
                  Osobní údaje nepředáváme třetím stranám s výjimkou případů stanovených zákonem
                  (např. kontrolní orgány) nebo zpracovatelů, kteří pro nás zajišťují technické služby
                  (rezervační systém, účetnictví).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontakt</h2>
                <p className="text-gray-600 mb-4">
                  V případě dotazů ohledně zpracování osobních údajů nás kontaktujte:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <p className="text-gray-600">
                    <strong>E-mail:</strong> <a href="mailto:info@fyzio-praha.cz" className="text-primary hover:underline">info@fyzio-praha.cz</a><br />
                    <strong>Telefon:</strong> <a href="tel:+420604477935" className="text-primary hover:underline">604 477 935</a><br />
                    <strong>Adresa:</strong> Andrštova 1339/4, 180 00 Praha 8 - Libeň
                  </p>
                </div>

                <p className="text-gray-500 text-sm">
                  Tyto zásady jsou platné od 1. 1. 2025 a mohou být průběžně aktualizovány.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
