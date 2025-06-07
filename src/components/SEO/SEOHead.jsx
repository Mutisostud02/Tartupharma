import React, { useEffect } from "react";

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
}) => {
  const baseUrl = "https://tartupharmamedics.com";
  const defaultTitle =
    "Tartupharma Medical Equipments - Pharmaceutical Machinery & Equipment Kenya";
  const defaultDescription =
    "Leading supplier of pharmaceutical equipment in Kenya. Granulators, tablet presses, capsule filling machines, coating equipment, and more. Quality medical machinery for pharmaceutical manufacturing.";
  const defaultKeywords =
    "pharmaceutical equipment Kenya, medical machinery, tablet presses, granulators, capsule filling machines, coating equipment, pharmaceutical manufacturing, medical equipment supplier";
  const defaultOgImage = `${baseUrl}/images/tartupharma-logo-og.png`;

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || baseUrl;
  const finalOgImage = ogImage || defaultOgImage;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Primary meta tags
    updateMetaTag("description", finalDescription);
    updateMetaTag("keywords", finalKeywords);
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", finalTitle, true);
    updateMetaTag("og:description", finalDescription, true);
    updateMetaTag("og:url", finalCanonical, true);
    updateMetaTag("og:image", finalOgImage, true);
    updateMetaTag("og:type", ogType, true);

    // Twitter tags
    updateMetaTag("twitter:title", finalTitle, true);
    updateMetaTag("twitter:description", finalDescription, true);
    updateMetaTag("twitter:image", finalOgImage, true);

    // Canonical URL
    updateLinkTag("canonical", finalCanonical);

    // Cleanup function to reset to defaults when component unmounts
    return () => {
      document.title = defaultTitle;
      updateMetaTag("description", defaultDescription);
      updateMetaTag("keywords", defaultKeywords);
      updateMetaTag("robots", "index, follow");
      updateMetaTag("og:title", defaultTitle, true);
      updateMetaTag("og:description", defaultDescription, true);
      updateMetaTag("og:url", baseUrl, true);
      updateMetaTag("og:image", defaultOgImage, true);
      updateMetaTag("og:type", "website", true);
      updateMetaTag("twitter:title", defaultTitle, true);
      updateMetaTag("twitter:description", defaultDescription, true);
      updateMetaTag("twitter:image", defaultOgImage, true);
      updateLinkTag("canonical", baseUrl);
    };
  }, [
    finalTitle,
    finalDescription,
    finalKeywords,
    finalCanonical,
    finalOgImage,
    ogType,
    noindex,
  ]);

  return null; // This component doesn't render anything
};

export default SEOHead;
