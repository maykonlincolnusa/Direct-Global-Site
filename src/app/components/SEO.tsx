import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title,
  description = "Direct Global: inteligência artificial, engenharia de dados e automação gerencial para operações de alta performance.",
  keywords = "AI, Business Intelligence, Data Engineering, Automation, Maykon Lincoln, Direct Global",
  image = "/Cover image.png",
  url = "https://directplatform.com",
}: SEOProps) {
  const siteTitle = title ? `${title} | Direct Global` : "Direct Global | Intelligence Scale Engine";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
