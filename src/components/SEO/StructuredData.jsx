import React from "react";

const StructuredData = ({ page = "home", product = null, category = null }) => {
  const baseUrl = "https://tartupharmamedics.com";

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tartupharma Medical Equipments",
    url: baseUrl,
    logo: `${baseUrl}/images/tartupharma-logo.png`,
    description:
      "Leading supplier of pharmaceutical equipment in Kenya. Quality medical machinery for pharmaceutical manufacturing.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Riia tn 142",
      addressLocality: "Tartu",
      postalCode: "50411",
      addressCountry: "EE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+372-7-123-456",
      contactType: "sales",
      email: "sales@tartupharma.com",
    },
    sameAs: [
      "https://www.facebook.com/tartupharma",
      "https://www.linkedin.com/company/tartupharma",
      "https://twitter.com/tartupharma",
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tartupharma Medical Equipments",
    url: baseUrl,
    description: "Pharmaceutical equipment supplier in Kenya",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/machines?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Product Schema (for individual products)
  const getProductSchema = (productData) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: productData.name,
    description:
      productData.description ||
      `${productData.name} - Professional pharmaceutical equipment`,
    manufacturer: {
      "@type": "Organization",
      name: productData.manufacturer,
    },
    model: productData.model,
    image: `${baseUrl}${productData.image}`,
    url: `${baseUrl}/product/${productData.id}`,
    category: "Pharmaceutical Equipment",
    brand: {
      "@type": "Brand",
      name: productData.manufacturer,
    },
  });

  // Category Schema (for category pages)
  const getCategorySchema = (categoryData) => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: categoryData.title,
    description: categoryData.description,
    url: `${baseUrl}/machines/${category}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryData.count,
      itemListElement:
        categoryData.products?.slice(0, 10).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.name,
            url: `${baseUrl}/product/${product.id}`,
            image: `${baseUrl}${product.image}`,
          },
        })) || [],
    },
  });

  // Breadcrumb Schema
  const getBreadcrumbSchema = () => {
    const breadcrumbs = [{ name: "Home", url: baseUrl }];

    if (page === "machines" || page === "product-detail") {
      breadcrumbs.push({ name: "Machines", url: `${baseUrl}/machines` });
    }

    if (category && page !== "home") {
      breadcrumbs.push({
        name: category.title || category,
        url: `${baseUrl}/machines/${category}`,
      });
    }

    if (product && page === "product-detail") {
      breadcrumbs.push({
        name: product.name,
        url: `${baseUrl}/product/${product.id}`,
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  };

  // Combine schemas based on page type
  const schemas = [organizationSchema, websiteSchema];

  if (page !== "home") {
    schemas.push(getBreadcrumbSchema());
  }

  if (product && page === "product-detail") {
    schemas.push(getProductSchema(product));
  }

  if (category && page === "machines") {
    schemas.push(getCategorySchema(category));
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2),
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;
