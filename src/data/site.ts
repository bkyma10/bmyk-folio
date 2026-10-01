export const site = {
  name: 'Brendan Ma',
  title: 'Brendan Ma : Lead UXUI Designer / Webflow Developer',
  description:
    "Hey I'm Brendan, a Lead UXUI Designer / Webflow Developer with over 10 years of experience spanning tech & web3 startups, advertising agencies, and design studios, I craft user-centered digital experiences that balance aesthetics with functionality, leveraging strong problem-solving skills and deep digital expertise to deliver impactful results.",
  email: 'brendan@collabdgt.com',
  location: 'Hong Kong | Remote',
  url: 'https://www.bmyk.design',
  resumeUrl:
    'https://cdn.prod.website-files.com/66fe0de054207bcf50920737/698b0b4bdbac67fa0b659cb0_brendanma-resume2026.pdf',
  social: {
    dribbble: 'https://dribbble.com/bykm',
    instagram: 'https://www.instagram.com/bkumayk/',
    linkedin: 'https://www.linkedin.com/in/brendanma/',
  },
} as const;

export const navLinks = [{ label: 'All Work', href: '/allworks' }] as const;

function media(
  base: string,
  fallbackExt: 'jpg' | 'png',
  width: number,
  height: number,
) {
  return {
    webpSrcSet: `${base}-640.webp 640w, ${base}-960.webp 960w, ${base}-1280.webp 1280w`,
    fallbackSrcSet: `${base}-960.${fallbackExt} 960w`,
    fallbackType: `image/${fallbackExt === 'jpg' ? 'jpeg' : 'png'}` as const,
    fallbackSrc: `${base}-960.${fallbackExt}`,
    width,
    height,
  };
}

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
    fallbackSrcSet: '/images/portrait-800.jpg 800w, /images/portrait-1600.jpg 1600w',
    fallbackType: 'image/jpeg' as const,
    fallbackSrc: '/images/portrait-1600.jpg',
    sizes: '(max-width: 767px) 100vw, (max-width: 991px) 70vw, 940px',
    width: 2048,
    height: 1152,
  },
} as const;

export const aboutIntro = {
  playasia: {
    alt: 'Example of mobile web design for PlayAsia',
    webpSrcSet: '/images/about/playasia-scene-640.webp 640w, /images/about/playasia-scene-960.webp 960w',
    fallbackSrcSet: '/images/about/playasia-scene-960.png 960w',
    fallbackType: 'image/png' as const,
    fallbackSrc: '/images/about/playasia-scene-960.png',
  },
  sophiaverse: {
    alt: 'Example of UI design for Sophiaverse',
    webpSrcSet: '/images/about/sophiaverse-640.webp 640w, /images/about/sophiaverse-960.webp 960w',
    fallbackSrcSet: '/images/about/sophiaverse-960.jpg 960w',
    fallbackType: 'image/jpeg' as const,
    fallbackSrc: '/images/about/sophiaverse-960.jpg',
  },
  corecover: {
    alt: 'Example of web design for Core Dao',
    webpSrcSet: '/images/about/corecover-640.webp 640w, /images/about/corecover-960.webp 960w',
    fallbackSrcSet: '/images/about/corecover-960.jpg 960w',
    fallbackType: 'image/jpeg' as const,
    fallbackSrc: '/images/about/corecover-960.jpg',
  },
} as const;

export const clients = {
  heading: "I've worked with companies like",
  items: [
    {
      id: 'singularitynet',
      name: 'SingularityNet',
      alt: 'Visual of SingularityNet',
      ...media('/images/clients/singularitynet', 'jpg', 1280, 835),
    },
    {
      id: 'hanson',
      name: 'Hanson Robotics',
      alt: 'Visual of Hanson Robotics',
      ...media('/images/clients/hanson', 'jpg', 1280, 853),
    },
    {
      id: 'coredao',
      name: 'Core Dao',
      alt: 'Visual of Core Dao',
      ...media('/images/clients/coredao', 'jpg', 1280, 714),
    },
    {
      id: 'playasia',
      name: 'Playasia',
      alt: 'Visual of PlayAsia',
      ...media('/images/clients/playasia', 'jpg', 1280, 836),
    },
  ],
} as const;

export const skills = {
  heading: 'My Skills',
  items: [
    { label: 'UX/UI Design', href: '/categories/ux-ui-design' },
    { label: 'Webflow', href: '/categories/webflow' },
    { label: 'Graphic Design', href: '/categories/graphic-design' },
    { label: 'Motion Graphics', href: '/categories/motion-graphics' },
  ],
} as const;

function workMedia(
  base: string,
  fallbackExt: 'jpg' | 'png',
  width: number,
  height: number,
) {
  return {
    webpSrcSet: `${base}-640.webp 640w, ${base}-960.webp 960w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`,
    fallbackSrcSet: `${base}-960.${fallbackExt} 960w, ${base}-1280.${fallbackExt} 1280w`,
    fallbackType: `image/${fallbackExt === 'jpg' ? 'jpeg' : 'png'}` as const,
    fallbackSrc: `${base}-1280.${fallbackExt}`,
    width,
    height,
  };
}

export const latestWork = {
  heading: 'Latest Work',
  items: [
    {
      title: 'Core Dao - Brand Redesign',
      href: '/cases/coredao',
      alt: 'Core Dao brand redesign key visual',
      ...workMedia('/images/work/coredao', 'png', 1920, 1080),
    },
    {
      title: 'Sentience AI Labs - Game UI Design',
      href: '/cases/sail',
      alt: 'Sentience AI Labs game UI design key visual',
      ...workMedia('/images/work/sail', 'png', 1920, 1080),
    },
    {
      title: 'Sentience - Web / App UI Design',
      href: '/cases/sentience',
      alt: 'Sentience web and app UI design key visual',
      ...workMedia('/images/work/sentience', 'jpg', 1920, 1280),
    },
    {
      title: 'PlayasiaXP - Web Design',
      href: '/cases/playasiaxp',
      alt: 'PlayasiaXP web design key visual',
      ...workMedia('/images/work/playasiaxp', 'jpg', 1920, 1080),
    },
  ],
} as const;

export const testimonials = {
  heading: 'Testimonials',
  items: [
    {
      quote:
        'Brendan is comfortable working across multiple tools and mediums ... this allowed him to contribute beyond static design work, often helping bridge the gap between concept, interaction, and implementation.',
      name: 'Mathieu Henrijean',
      role: 'Design Lead at Core DAO',
    },
    {
      quote:
        'He works at lightning speed without sacrificing quality, handles large workloads with ease, and still maintains the attention to detail required to polish complex systems and interfaces.',
      name: 'Sean “Eloh” Allum',
      role: 'Art Director at Sophiaverse',
    },
    {
      quote:
        'His ability to translate complex ideas into intuitive design solutions made a significant impact on both project outcomes and client satisfaction.',
      name: 'Kath Yeung',
      role: 'Director of Operations at Hanson Robotics',
    },
    {
      quote:
        'Brendan has proven to be strong in his project management and communication skills, as well as shown good sensible technical knowledge to handle a variety of projects.',
      name: 'Anne Chan',
      role: 'Head of Digital Production at TBWA HK',
    },
    {
      quote:
        "Brendan's positive attitude and friendly character makes him easy to work with and shows tremendous potential to further grow and lead a team.",
      name: 'Jonathan Lo',
      role: 'Managing Director at Lolli Media',
    },
  ],
} as const;

export const education = {
  heading: 'Education',
  items: [
    { title: 'Google UX Design', org: 'Google' },
    { title: 'BA Visual Arts Major', org: 'The University of British Columbia' },
  ],
} as const;

export const tools = {
  heading: 'Tools',
  items: [
    'Figma',
    'Webflow',
    'Photoshop',
    'Illustrator',
    'Flora AI',
    'Cursor',
    'Stitch',
    'Agentic AI',
    'After Effects',
    'Premiere Pro',
    'HTML / CSS / jQuery',
  ],
} as const;

export const experience = {
  heading: 'Experience',
  resumeLabel: 'Download my résumé',
  items: [
    {
      role: 'Founder & Senior Designer',
      company: 'Collab Digital Limited',
      dates: '04/2025 - Current',
    },
    {
      role: 'Lead Visual & UX/UI Designer',
      company: 'SingularityNet (Sophiaverse)',
      dates: '06/2023 - 03/2025',
    },
    {
      role: 'Lead Digital Content & Visual Designer',
      company: 'Hanson Robotics',
      dates: '06/2022 – 05/2023',
    },
    {
      role: 'Multimedia & Brand Designer',
      company: 'Freelance',
      dates: '10/2019 – 05/2022',
    },
    {
      role: 'Project Manager & UX/UI Designer',
      company: 'Emali Limited',
      dates: '08/2017 - 11/2019',
    },
    {
      role: 'Digital Producer',
      company: 'TBWA Hong Kong',
      dates: '07/2015 - 05/2017',
    },
  ],
} as const;

export const stories = {
  heading: 'My Stories',
  items: [
    {
      category: 'Sports',
      title: 'Tennis - the quiet teacher',
      href: '/blog-posts/the-quiet-teacher',
      alt: 'Tennis court photograph',
      ...media('/images/stories/tennis', 'jpg', 960, 1280),
    },
    {
      category: 'Lifestyle',
      title: 'Iridescent - first-time pawrenting',
      href: '/blog-posts/first-time-pawrenting',
      alt: 'Illustration about first-time pet parenting',
      ...media('/images/stories/pawrenting', 'png', 960, 1280),
    },
    {
      category: 'Cinema',
      title: 'About time - a framework for how to live',
      href: '/blog-posts/a-framework-for-how-to-live',
      alt: 'Cinema still inspired by About Time',
      ...media('/images/stories/cinema', 'jpg', 758, 842),
    },
    {
      category: 'Travel',
      title: 'Skogskyrkogården - designed for the living',
      href: '/blog-posts/skogskyrkogarden',
      alt: 'Photograph from Skogskyrkogården',
      ...media('/images/stories/travel', 'jpg', 720, 1080),
    },
  ],
} as const;
