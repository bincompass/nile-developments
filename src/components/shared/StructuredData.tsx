export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "شركة النيل للتطوير العقاري",
    alternateName: "Nile Developments",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logos/main-logo.svg`,
    description:
      "نايل للتطوير العقاري هي شركة مساهمة مصرية ومقيدة بالبورصة وهيئة الاستثمار أسست بواسطة المهندس محمد طاهر و الأستاذ محمود طاهر.",
    "foundingDate": "2002",
    "founder": [
      {
        "@type": "Person",
        "name": "المهندس محمد طاهر"
      },
      {
        "@type": "Person",
        "name": "الأستاذ محمود طاهر"
      }
    ],
    sameAs: [
      "https://www.facebook.com/niledevelopmentseg",
      "https://www.instagram.com/niledevelopmentseg",
      "https://www.linkedin.com/company/nile-developments",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressRegion: "Cairo",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "شركة النيل للتطوير العقاري",
    "url": baseUrl,
    "description": "رواد ناطحات السحاب في مصر",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "شركة النيل للتطوير العقاري",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logos/main-logo.svg`,
    description:
      "شركة رائدة في التطوير العقاري في العاصمة الإدارية الجديدة والقاهرة الجديدة والمنصورة",
    "areaServed": [
      {
        "@type": "City",
        "name": "العاصمة الإدارية الجديدة"
      },
      {
        "@type": "City",
        "name": "القاهرة الجديدة"
      },
      {
        "@type": "City",
        "name": "المنصورة"
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
        "name": "الرئيسية",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "من نحن",
        "item": `${baseUrl}/#about-us`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "مشاريعنا",
        "item": `${baseUrl}/#projects`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "العقارات",
        "item": `${baseUrl}/#properties`
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
