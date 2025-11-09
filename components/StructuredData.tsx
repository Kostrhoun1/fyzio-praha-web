export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Fyzio Praha - Bc. Veronika Jansová",
    "image": "https://fyzio-praha.cz/images/logo-transparent.png",
    "@id": "https://fyzio-praha.cz",
    "url": "https://fyzio-praha.cz",
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
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "800 Kč - 1200 Kč",
    "medicalSpecialty": "Physiotherapy",
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
