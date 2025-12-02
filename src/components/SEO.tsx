import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../constants/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = SITE_CONFIG.fullTitle,
  description = SITE_CONFIG.fullDescription,
  image = SITE_CONFIG.image,
  url = SITE_CONFIG.url,
  type = 'website'
}) => {
  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.companyName,
    alternateName: SITE_CONFIG.title,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.image,
    description: SITE_CONFIG.fullDescription,
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.founder
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.location.address,
      addressCountry: SITE_CONFIG.location.addressCountry
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@misowebs.com',
      contactType: 'Customer Service'
    },
    sameAs: SITE_CONFIG.social ? Object.values(SITE_CONFIG.social).filter(Boolean) : []
  };

  // Structured Data for WebSite
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.title,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.fullDescription,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.companyName,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.image
      }
    }
  };

  // Structured Data for LocalBusiness (if applicable)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.companyName,
    image: SITE_CONFIG.image,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Norman',
      addressRegion: 'Oklahoma',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.2226,
      longitude: -97.4395
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={SITE_CONFIG.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={SITE_CONFIG.title} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </>
  );
};

export default SEO;

