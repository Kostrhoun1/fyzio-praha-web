import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies | Fyzio Praha',
  description: 'Informace o používání cookies na webu Fyzio Praha - Bc. Veronika Jansová. Zásady používání souborů cookies.',
  alternates: {
    canonical: 'https://www.fyzio-praha.cz/cookies',
  },
};

export default function CookiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Cookies
            </h1>
            <p className="text-xl text-white/90">
              Informace o používání souborů cookies
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

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Co jsou cookies?</h2>
                <p className="text-gray-600 mb-8">
                  Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě webových stránek.
                  Pomáhají nám zajistit správné fungování webu, analyzovat návštěvnost a zlepšovat uživatelský zážitek.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Jaké cookies používáme</h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="font-bold text-gray-900 mb-2">Nezbytné cookies</h3>
                    <p className="text-gray-600 mb-2">
                      Tyto cookies jsou nezbytné pro základní fungování webu. Bez nich by web nefungoval správně.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 text-sm">
                      <li>Uchovávání stavu přihlášení</li>
                      <li>Zapamatování preferencí (jazyk, cookies consent)</li>
                      <li>Zabezpečení webu</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="font-bold text-gray-900 mb-2">Analytické cookies</h3>
                    <p className="text-gray-600 mb-2">
                      Pomáhají nám pochopit, jak návštěvníci používají web. Data jsou anonymizována.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 text-sm">
                      <li>Google Analytics - analýza návštěvnosti</li>
                      <li>Statistiky návštěvnosti stránek</li>
                      <li>Doba strávená na webu</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="font-bold text-gray-900 mb-2">Funkční cookies</h3>
                    <p className="text-gray-600 mb-2">
                      Zajišťují rozšířené funkce webu a personalizaci.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 text-sm">
                      <li>Rezervační systém Reservanto</li>
                      <li>Zapamatování vašich preferencí</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Správa cookies</h2>
                <p className="text-gray-600 mb-4">
                  Cookies můžete kdykoliv spravovat nebo zakázat v nastavení vašeho prohlížeče:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li><strong>Chrome:</strong> Nastavení &gt; Soukromí a zabezpečení &gt; Soubory cookie</li>
                  <li><strong>Firefox:</strong> Nastavení &gt; Soukromí a zabezpečení &gt; Cookies</li>
                  <li><strong>Safari:</strong> Předvolby &gt; Soukromí &gt; Cookies</li>
                  <li><strong>Edge:</strong> Nastavení &gt; Soubory cookie a oprávnění webů</li>
                </ul>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
                  <p className="text-gray-700">
                    <strong>Upozornění:</strong> Pokud zakážete některé cookies, může to ovlivnit funkčnost webu,
                    například rezervační systém nebo zobrazení některých prvků.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Doba uchovávání cookies</h2>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-gray-50 rounded-xl">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Typ cookie</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Doba uchovávání</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-3 text-gray-600">Nezbytné</td>
                        <td className="px-6 py-3 text-gray-600">Do konce relace / 1 rok</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-gray-600">Analytické</td>
                        <td className="px-6 py-3 text-gray-600">2 roky</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-gray-600">Funkční</td>
                        <td className="px-6 py-3 text-gray-600">1 rok</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
                <p className="text-gray-600 mb-4">
                  Máte-li dotazy ohledně používání cookies, kontaktujte nás:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <p className="text-gray-600">
                    <strong>E-mail:</strong> <a href="mailto:info@fyzio-praha.cz" className="text-primary hover:underline">info@fyzio-praha.cz</a><br />
                    <strong>Telefon:</strong> <a href="tel:+420604477935" className="text-primary hover:underline">604 477 935</a>
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
