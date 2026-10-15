import { allWorks } from './site';

function caseImg(name: string) {
  const base = `/images/cases/coredao/${name}`;
  return {
    webpSrcSet: `${base}-960.webp 960w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`,
    fallbackSrcSet: `${base}-960.png 960w`,
    fallbackType: 'image/png' as const,
    fallbackSrc: `${base}-960.png`,
  };
}

export type CaseBlock =
  | {
      type: 'copy';
      heading: string;
      headingLevel?: 2 | 3;
      /** Live .description-lg vs .description-md / rich-text */
      bodyStyle?: 'lg' | 'md' | 'rich';
      /**
       * Live .case-info-wrapper[.right] — pushes the 60% copy column
       * to the left or right of the content area (not text-align).
       */
      align?: 'left' | 'right';
      paragraphs: string[];
      /** Optional HTML-ish rich paragraphs with bold leads */
      rich?: { title?: string; body: string }[];
      cta?: { label: string; href: string };
    }
  | {
      type: 'images';
      images: { src: string; webpSrcSet: string; fallbackSrcSet: string; fallbackType: 'image/png'; fallbackSrc: string; alt: string }[];
    }
  | {
      type: 'embeds';
      embeds: { title: string; src: string }[];
    }
  | {
      type: 'next';
      heading: string;
      project: {
        title: string;
        href: string;
        image: {
          webpSrcSet: string;
          fallbackSrcSet: string;
          fallbackType: 'image/jpeg' | 'image/png';
          fallbackSrc: string;
          alt: string;
          width: number;
          height: number;
        };
      };
    };

export type CaseSection = {
  dark?: boolean;
  blocks: CaseBlock[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  pageTitle: string;
  year: string;
  tags: { label: string; href: string }[];
  keyVisual: {
    webpSrcSet: string;
    fallbackSrcSet: string;
    fallbackType: 'image/png';
    fallbackSrc: string;
    alt: string;
    width: number;
    height: number;
  };
  sections: CaseSection[];
};

const sentience = allWorks.items.find((i) => i.slug === 'sentience')!;

export const caseStudies: Record<string, CaseStudy> = {
  coredao: {
    slug: 'coredao',
    title: 'Core Dao - Brand Redesign',
    pageTitle: 'Core Dao - Brand Redesign',
    year: '2025',
    tags: [
      { label: 'UX/UI Design', href: '/categories/ux-ui-design' },
      { label: 'Graphic Design', href: '/categories/graphic-design' },
      { label: 'Motion Graphics', href: '/categories/motion-graphics' },
    ],
    keyVisual: {
      ...caseImg('keyvisual'),
      alt: 'Core Dao brand redesign key visual',
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: 'Project Brief',
            headingLevel: 2,
            bodyStyle: 'lg',
            align: 'left',
            paragraphs: [
              'Core DAO is a decentralized organization developing the Core blockchain a next‑generation network that blends Bitcoin’s security with modern scalability. I joined as a contract designer to support their rebrand, collaborating with the design lead and cross‑functional teams to create a cohesive brand direction that elevated Core DAO’s presence across platforms and within the wider crypto ecosystem.',
            ],
            cta: { label: 'Visit Website', href: 'https://coredao.org/' },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: 'Problem Statement',
            headingLevel: 3,
            bodyStyle: 'md',
            align: 'right',
            paragraphs: [
              'Core DAO had outgrown its startup aesthetic the brand no longer reflected its stature as a leader in blockchain. The visuals lacked consistency and the sense of trust and maturity the team aimed to project. Our goal as the design team was to revitalize the identity and website with a refined, unified style that honored the original brand while conveying the confidence and authority of an established Web3 leader.',
            ],
          },
          {
            type: 'copy',
            heading: 'Design Discovery',
            headingLevel: 3,
            bodyStyle: 'rich',
            align: 'right',
            paragraphs: [
              'Our discovery phase focused on redefining Core DAO’s visual voice. We dove into research studying trends, mapping competitors, and exploring visual directions through iterative moodboards.',
              'The result was a refined identity that blends Bitcoin’s stability with DeFi’s forward momentum bold yet restrained, technical yet human. Clean gradients, precise typography, and minimal compositions came together to express trust, innovation, and confidence.',
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg('color-board'), alt: 'Core Dao color board exploration' },
              { ...caseImg('gradient-inspirations'), alt: 'Gradient inspiration boards' },
              { ...caseImg('gradient-tests'), alt: 'Gradient tests' },
              { ...caseImg('3d-shapes'), alt: '3D shape explorations' },
              { ...caseImg('examples'), alt: 'Brand application examples' },
            ],
          },
          {
            type: 'copy',
            heading: 'Optimized UX Wireframing',
            headingLevel: 3,
            bodyStyle: 'rich',
            align: 'right',
            paragraphs: [
              'Core DAO’s website needed to serve many audiences individuals, developers, institutions, and community members each with different goals. The old navigation buried key content in dense text and unclear structure. We redesigned it around user needs, introducing clear audience‑based categories and intuitive dropdowns for quick access.',
              'Simplified wireframes, larger headers, and concise visuals turned complex Web3 content into a clean, engaging experience that guided every user with ease.',
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg('navigation'), alt: 'Website navigation wireframes' },
              { ...caseImg('homepage-wire'), alt: 'Homepage wireframe' },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: 'Web Design',
            headingLevel: 3,
            bodyStyle: 'rich',
            align: 'left',
            paragraphs: [
              'With the visual language and wireframes in place, the website design unfolded as a natural extension of our strategy. I created key sections featuring custom illustrations and refined 3D treatments of the Core logo. Metaphorical visuals simplified complex ideas and added emotional depth, blending technical precision with a human touch. Built in Spline, the interactive 3D logo responded smoothly to user movement, inviting engagement while preserving a clean, focused interface.',
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg('homepage-full'), alt: 'Core Dao homepage full design' },
              { ...caseImg('homepage-ui'), alt: 'Homepage UI detail' },
              { ...caseImg('satoshi-plus'), alt: 'Satoshi Plus section' },
              { ...caseImg('core-in-numbers'), alt: 'Core in numbers section' },
              { ...caseImg('bitcoin-yield'), alt: 'Low fee high TPS Bitcoin yield section' },
            ],
          },
          {
            type: 'copy',
            heading: 'Social Media',
            headingLevel: 3,
            bodyStyle: 'rich',
            align: 'right',
            paragraphs: [
              'With the new brand style in place, I brought Core DAO’s refreshed look to life across social media. Each post blended gradients, abstract visuals, and subtle 3D effects to capture the brand’s modern, polished tone turning technical updates into sleek, engaging stories that stood out in the fast‑moving Web3 space.',
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg('social-1'), alt: 'Core Dao social media post design' },
              { ...caseImg('social-2'), alt: 'Core Dao social media campaign visuals' },
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: 'Motion Graphics',
            headingLevel: 3,
            bodyStyle: 'rich',
            align: 'left',
            paragraphs: [
              'Drawing on my motion design experience, I brought Core DAO’s X posts to life with subtle, loop‑ready animations soft text reveals, shifting gradients, and smooth background motion that felt elegant and seamless. These micro‑interactions acted as visual hooks in busy feeds, adding movement and polish without distraction, reinforcing the brand’s modern, refined presence.',
            ],
          },
          {
            type: 'embeds',
            embeds: [
              {
                title: 'Core Dao motion post',
                src: 'https://cdn.embedly.com/widgets/media.html?type=text%2Fhtml&key=c4e54deccf4d4ec997a64902e9a30300&schema=twitter&url=https%3A//x.com/Coredao_Org/status/1963935225777668570%3Fs%3D20&image=',
              },
              {
                title: 'Core Dao motion post 2',
                src: 'https://cdn.embedly.com/widgets/media.html?type=text%2Fhtml&key=c4e54deccf4d4ec997a64902e9a30300&schema=twitter&url=https%3A//x.com/Coredao_Org/status/1961398504401899920%3Fs%3D20&image=',
              },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: 'Impact',
            headingLevel: 3,
            bodyStyle: 'rich',
            align: 'right',
            paragraphs: [
              'Launched in July 2025, the Core DAO rebrand elevated its standing as the leading Bitcoin‑integrated Layer‑1 blockchain. The new identity helped drive rapid ecosystem growth fueling a 2,800% rise in developers, over 350 active contributors, and strong dApp engagement across millions of users and transactions. The refreshed visual language positioned Core DAO as a more trusted, mature, and authoritative presence within the Web3 space.',
            ],
          },
          {
            type: 'copy',
            heading: 'Key Learnings',
            headingLevel: 3,
            bodyStyle: 'rich',
            align: 'right',
            paragraphs: [],
            rich: [
              {
                title: 'Stakeholder Alignment',
                body: 'Rapid moodboarding and visual testing with cross‑functional teams and Web3 community members fast‑tracked alignment, proving that early prototypes communicate strategy far better than static decks.',
              },
              {
                title: 'User‑Centric Navigation',
                body: 'Organizing navigation by audience Individuals, Developers, and Institutions turned a cluttered interface into intuitive user journeys, greatly improving content discoverability across all segments.',
              },
              {
                title: 'Design Methodlogies',
                body: 'Working with Core’s design team deepened my understanding of structured design processes like the Double Diamond framework, especially in guiding a large‑scale rebrand. Under the lead designer’s mentorship, I learned how to motivate and manage a cross‑disciplinary team through stand‑ups, one‑on‑ones and workshops. Skills I now carry forward into future collaborations.',
              },
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: 'Next Project',
            project: {
              title: sentience.title,
              href: sentience.href,
              image: {
                webpSrcSet: sentience.webpSrcSet,
                fallbackSrcSet: sentience.fallbackSrcSet,
                fallbackType: sentience.fallbackType,
                fallbackSrc: sentience.fallbackSrc,
                alt: sentience.alt,
                width: sentience.width,
                height: sentience.height,
              },
            },
          },
        ],
      },
    ],
  },
};

export function getCaseStudy(slug: string | undefined) {
  if (!slug) return null;
  return caseStudies[slug] ?? null;
}
