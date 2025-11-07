// Site configuration constants
export const SITE_CONFIG = {
    title: 'Misowebs',
    description: 'We create modern, responsive websites for businesses to establish a strong online presence with custom designs.',
    socialLinks: {
      instagram: 'https://www.instagram.com/va_ou_/',
      linkedin: 'https://www.linkedin.com/company/vaou/',
      email: 'mailto:info@misowebs.com'
    }
  };
  
  // CDN base URL with fallback  *********************************************** !!! Fix !!! ***********************************************
  export const CDN = import.meta.env.VITE_CDN_BASE || '/public/images';
  