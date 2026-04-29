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
  description = "Direct Global: tecnologia, seguran\u00e7a e engenharia para sistemas digitais cr\u00edticos, opera\u00e7\u00f5es multiind\u00fastria e crescimento global.",
  keywords = "Technology, Security, Systems Engineering, AI, Automation, Data Engineering, Franchises, Global Operations, Maykon Lincoln, Direct Global",
  image = "/Cover image.png",
  url = "https://directplatform.com",
}: SEOProps) {
  const siteTitle = title ? `${title} | Direct Global` : "Direct Global | Technology Security Engineering";

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
