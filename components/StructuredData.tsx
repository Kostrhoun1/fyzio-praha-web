export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Fyzio Praha - Bc. Veronika Jansová",
    "image": "https://www.fyzio-praha.cz/images/logo-transparent.png",
    "@id": "https://www.fyzio-praha.cz",
    "url": "https://www.fyzio-praha.cz",
    "telephone": "+420604477935",
    "email": "info@fyzio-praha.cz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Andrštova 1339/4",
      "addressLocality": "Praha 8-Libeň",
      "postalCode": "180 00",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.1098,
      "longitude": 14.4844
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "14:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "10:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "10:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "14:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "priceRange": "750 Kč - 1000 Kč",
    "description": "Fyzioterapie na míru v Praze 8. Specializace: bolesti zad, rehabilitace, dětská fyzioterapie, vertigo, podologie.",
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
