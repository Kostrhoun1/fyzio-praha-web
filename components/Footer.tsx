import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="relative w-40 h-14">
              <Image
                src="/images/logo-transparent.png"
                alt="Fyzio Praha Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fyzioterapie na míru, která sedne.<br />
              Individuální, cílený a odborný přístup.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/o-mne" className="text-gray-400 hover:text-accent transition-colors">
                  O mně
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="text-gray-400 hover:text-accent transition-colors">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="/cenik" className="text-gray-400 hover:text-accent transition-colors">
                  Ceník
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+420604477935" className="hover:text-white transition-colors">
                  604 477 935
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@fyzio-praha.cz" className="hover:text-white transition-colors">
                  info@fyzio-praha.cz
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Andrštova 1339/4<br />
                  180 00 Praha 8-Libeň
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Provozní doba</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Po - Pá:</span>
                <span className="font-medium text-white">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>So - Ne:</span>
                <span className="font-medium">Zavřeno</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs">
                  <span className="text-accent">●</span> Na objednávku
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Fyzio Praha - Bc. Veronika Jansová. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/ochrana-udaju" className="text-gray-400 hover:text-white transition-colors">
              Ochrana osobních údajů
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
