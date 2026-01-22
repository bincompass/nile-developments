export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nile Developments",
    "alternateName": "Nile Development Group",
    "url": "https://nile-developments.com",
    "logo": "https://nile-developments.com/assets/images/logos/main-logo.svg",
    "description": "Nile Developments is an Egyptian joint stock company listed on the Stock Exchange and the Investment Authority. It established by Eng. Mohamed Taher and Mr. Mahmoud Taher",
    "foundingDate": "2002",
    "founder": [
      {
        "@type": "Person",
        "name": "Eng. Mohamed Taher"
      },
      {
        "@type": "Person",
        "name": "Mr. Mahmoud Taher"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/niledevelopmentseg",
      "https://www.instagram.com/niledevelopmentseg",
      "https://www.linkedin.com/company/nile-developments"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG",
      "addressRegion": "Cairo"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nile Developments",
    "url": "https://nile-developments.com",
    "description": "The pioneer of skyscrapers in Egypt",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nile-developments.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Nile Developments",
    "url": "https://nile-developments.com",
    "logo": "https://nile-developments.com/assets/images/logos/main-logo.svg",
    "description": "Leading real estate developer in New Administrative Capital, New Cairo, and Al Mansoura",
    "areaServed": [
      {
        "@type": "City",
        "name": "New Administrative Capital"
      },
      {
        "@type": "City",
        "name": "New Cairo"
      },
      {
        "@type": "City",
        "name": "Al Mansoura"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nile-developments.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://nile-developments.com/#about-us"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://nile-developments.com/#projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Properties",
        "item": "https://nile-developments.com/#properties"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
