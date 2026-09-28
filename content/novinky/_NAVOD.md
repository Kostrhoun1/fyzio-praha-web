# Novinky – jak přidat článek

1. Zkopíruj `_sablona.md` a pojmenuj ho podle adresy článku, např. `letni-dovolena.md`
   → článek bude na `www.fyzio-praha.cz/novinky/letni-dovolena` (malá písmena, bez diakritiky, pomlčky místo mezer).
2. Vyplň hlavičku:
   - `title` – nadpis
   - `date` – datum ve tvaru `RRRR-MM-DD` (řadí se podle něj, nejnovější první). Když vyjde víc článků ve stejný den, přidej čas: `2026-09-28T14:00:00` – na webu se zobrazí jen datum.
   - `excerpt` – krátké shrnutí (kartička + Google)
   - `image` – nepovinné; cesta k obrázku v `public/`, např. `/images/services/tejpovani.jpg`. Bez obrázku se zobrazí modrá kartička s ikonou.
3. Pod hlavičku napiš text v Markdownu (`## nadpis`, `**tučně**`, `- odrážka`, `[odkaz](/cenik)`).
4. Commit + push → Vercel web sám nasadí. Článek se objeví na /novinky, na homepage (poslední 3) i v sitemapě.

Soubory začínající `_` (šablona a tento návod) se na webu nezobrazují. Smazáním souboru článek zmizí.
