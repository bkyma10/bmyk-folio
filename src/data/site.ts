export const site = {
  name: 'Brendan Ma',
  title: 'Brendan Ma — Lead UXUI Designer / Webflow Developer',
  description:
    'Lead UXUI Designer & Webflow Developer with over 10 years of experience spanning web3, startups & advertising agencies.',
  email: 'brendan@collabdgt.com',
  location: 'Hong Kong | Remote',
  url: 'https://www.bmyk.design',
  social: {
    dribbble: 'https://dribbble.com/bykm',
    instagram: 'https://www.instagram.com/bkumayk/',
    linkedin: 'https://www.linkedin.com/in/brendanma/',
  },
} as const;

export const navLinks = [
  { label: 'All Work', href: '/allworks' },
] as const;

export const hero = {
  greeting: "Hello I'm Brendan",
  role: 'Lead UXUI Designer & Webflow Developer',
  summary:
    'With over 10 years of experience spanning web3, startups & advertising agencies, I craft user-centered digital experiences that balance aesthetics with functionality, leveraging strong problem-solving skills and deep digital expertise to deliver impactful results.',
  cta: {
    label: 'Check out my portfolio',
    href: '/allworks',
  },
  portrait: {
    alt: 'Portrait of Brendan Ma',
    webpSrcSet:
      '/images/portrait-800.webp 800w, /images/portrait-1200.webp 1200w, /images/portrait-1600.webp 1600w, /images/portrait-2048.webp 2048w',
    jpegSrcSet: '/images/portrait-800.jpg 800w, /images/portrait-1600.jpg 1600w',
    fallbackSrc: '/images/portrait-1600.jpg',
    sizes: '(max-width: 767px) 100vw, (max-width: 991px) 70vw, 940px',
    width: 2048,
    height: 1152,
  },
} as const;
