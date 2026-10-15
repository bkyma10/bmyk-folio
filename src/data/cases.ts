import { allWorks } from './site';

function caseImg(dir: string, name: string, fallbackExt: 'png' | 'jpg' = 'png') {
  const base = `/images/cases/${dir}/${name}`;
  const fallbackType = fallbackExt === 'jpg' ? ('image/jpeg' as const) : ('image/png' as const);
  return {
    webpSrcSet: `${base}-960.webp 960w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`,
    fallbackSrcSet: `${base}-960.${fallbackExt} 960w`,
    fallbackType,
    fallbackSrc: `${base}-960.${fallbackExt}`,
  };
}

function nextProject(slug: string) {
  const item = allWorks.items.find((i) => i.slug === slug) ?? allWorks.items[0];
  return {
    title: item.title,
    href: item.href,
    image: {
      webpSrcSet: item.webpSrcSet,
      fallbackSrcSet: item.fallbackSrcSet,
      fallbackType: item.fallbackType,
      fallbackSrc: item.fallbackSrc,
      alt: item.alt,
      width: item.width,
      height: item.height,
    },
  };
}

export type CaseBlock =
  | {
      type: 'copy';
      heading: string;
      headingLevel?: 2 | 3;
      h2Look?: boolean;
      bodyStyle?: 'lg' | 'md' | 'rich';
      align?: 'left' | 'right';
      paragraphs: string[];
      rich?: { title?: string; body: string }[];
      cta?: { label: string; href: string };
    }
  | {
      type: 'images';
      images: {
        src?: string;
        webpSrcSet: string;
        fallbackSrcSet: string;
        fallbackType: 'image/png' | 'image/jpeg';
        fallbackSrc: string;
        alt: string;
      }[];
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
    fallbackType: 'image/png' | 'image/jpeg';
    fallbackSrc: string;
    alt: string;
    width: number;
    height: number;
  };
  sections: CaseSection[];
};

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
      ...caseImg('coredao', 'keyvisual', 'png'),
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
              { ...caseImg('coredao', 'color-board', 'png'), alt: 'Core Dao color board exploration' },
              { ...caseImg('coredao', 'gradient-inspirations', 'png'), alt: 'Gradient inspiration boards' },
              { ...caseImg('coredao', 'gradient-tests', 'png'), alt: 'Gradient tests' },
              { ...caseImg('coredao', '3d-shapes', 'png'), alt: '3D shape explorations' },
              { ...caseImg('coredao', 'examples', 'png'), alt: 'Brand application examples' },
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
              { ...caseImg('coredao', 'navigation', 'png'), alt: 'Website navigation wireframes' },
              { ...caseImg('coredao', 'homepage-wire', 'png'), alt: 'Homepage wireframe' },
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
            h2Look: true,
            bodyStyle: 'rich',
            align: 'left',
            paragraphs: [
              'With the visual language and wireframes in place, the website design unfolded as a natural extension of our strategy. I created key sections featuring custom illustrations and refined 3D treatments of the Core logo. Metaphorical visuals simplified complex ideas and added emotional depth, blending technical precision with a human touch. Built in Spline, the interactive 3D logo responded smoothly to user movement, inviting engagement while preserving a clean, focused interface.',
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg('coredao', 'homepage-full', 'png'), alt: 'Core Dao homepage full design' },
              { ...caseImg('coredao', 'homepage-ui', 'png'), alt: 'Homepage UI detail' },
              { ...caseImg('coredao', 'satoshi-plus', 'png'), alt: 'Satoshi Plus section' },
              { ...caseImg('coredao', 'core-in-numbers', 'png'), alt: 'Core in numbers section' },
              { ...caseImg('coredao', 'bitcoin-yield', 'png'), alt: 'Low fee high TPS Bitcoin yield section' },
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
              { ...caseImg('coredao', 'social-1', 'png'), alt: 'Core Dao social media post design' },
              { ...caseImg('coredao', 'social-2', 'png'), alt: 'Core Dao social media campaign visuals' },
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
            project: nextProject('sentience'),
          },
        ],
      },
    ],
  },
  "sail": {
    slug: "sail",
    title: "Sentience AI Labs - Game UI Design",
    pageTitle: "Sentience AI Labs - Game UI Design",
    year: "2025",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Graphic Design", href: "/categories/graphic-design" },
      { label: "Motion Graphics", href: "/categories/motion-graphics" },
    ],
    keyVisual: {
      ...caseImg("sail", "keyvisual", "png"),
      alt: "Sentience AI Labs - Game UI Design key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "Sophiaverse is a gamified metaverse where AI and Web3 converge, centered around Soph the humanoid robot and her digital companions. It reimagines how people interact with artificial intelligence through play, creativity, and decentralized technology. I joined the team as lead UI designer, shaping how users explore and connect within this evolving digital world.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "Sophiaverse set out to bridge a tricky divide between traditional gamers and the complexities of Web3. New players were daunted by features like wallets and NFTs, while experienced users wanted advanced tools without extra friction. Adding to the challenge, the idea of gamified AI conversations was completely new demanding an interface that felt intuitive, inviting, and unlike anything before.",
            ],
          },
          {
            type: 'copy',
            heading: "UI Guidelines",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "As UI design lead, my first goal was to build a unified design system that brought consistency to Sophiaverse’s futuristic identity. From button styles to navigation flows, every interaction was standardized to feel seamless whether users were gaming, chatting with AI, or exploring Web3 features. I built the entire system in Figma with reusable components and dynamic variants, enabling effortless collaboration and pixel‑perfect consistency across the platform.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("sail", "img-1", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-2", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-3", "png"), alt: "Sentience AI Labs - Game UI Design" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "UI Design",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "My goal was to design a futuristic interface infused with HUD‑style overlays and dynamic data streams, inspired by games like Cyberpunk 2077 and Death Stranding. I drew on familiar motifs from character‑selection screens in Street Fighter to compact mission panels in Final Fantasy to ground users in recognizable patterns. This approach bridged the gap between gaming and Web3, introducing wallets and NFTs as natural quest rewards, while on‑demand tooltips made new concepts easy to grasp without breaking immersion.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("sail", "img-1-2", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-2-2", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-3-2", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-4", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-5", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-6", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-7", "png"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-8", "png"), alt: "Sentience AI Labs - Game UI Design" },
            ],
          },
          {
            type: 'copy',
            heading: "Evolution of Dialogue UI",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "Designing the dialogue interface for Sophiaverse’s AI‑powered NPCs meant venturing into new territory real‑time conversations in games. We prototyped and animated different layouts to find what felt most intuitive, blending classic multiple‑choice prompts with free‑form input so players could type naturally or choose from guided responses. After user testing and team reviews, we settled on a minimal layout tucked in the lower‑left corner to preserve immersion. Clear buttons, simple choices, and quick chat access kept the interaction fluid and focused enhancing engagement without breaking the flow of play.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("sail", "img-1-3", "jpg"), alt: "Sentience AI Labs - Game UI Design" },
              { ...caseImg("sail", "img-2-3", "png"), alt: "Sentience AI Labs - Game UI Design" },
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Motion Design",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "Beyond UI, I led the motion design work building gameplay simulations that developers could replicate in Unity. From pulsing rewards to smooth quest‑complete transitions, each animation added “game juice” that turned routine Web3 actions into rewarding, immersive moments. This hands‑on process sharpened my skills in futuristic HUD motion and particle effects while providing devs with precise timing blueprints, bridging SophiaVerse’s Web3 depth with the excitement of modern gaming.",
            ],
          },
          {
            type: 'embeds',
            embeds: [
              { title: "YouTube embed", src: "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fb3WtabrgPYU%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Db3WtabrgPYU&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fb3WtabrgPYU%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube" },
              { title: "YouTube embed", src: "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FoNjEMbUflSc%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoNjEMbUflSc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoNjEMbUflSc%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "The Open Alpha launch of SAIL marked SophiaVerse’s bold debut in the Web3 AI gaming world. Designed as a free‑to‑play experience, it offered seamless onboarding through either email or wallet login instantly engaging thousands of followers and SOPH token holders. This smooth, intuitive flow transformed community excitement into active participation, proving the power of SophiaVerse’s fusion of AI companionship, progression mechanics, and metaverse immersion.",
            ],
          },
          {
            type: 'copy',
            heading: "Key Learnings",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
            ],
            rich: [
              {
                title: "Design Leadership",
                body: "As UI lead, I guided cross‑team collaboration to align visuals with SophiaVerse’s futuristic vision. By maintaining a consistent design system and clear feedback loops, I streamlined production and ensured scalability across platforms.\n‍",
              },
              {
                title: "HUD & Futuristic UI",
                body: "I honed my HUD design skills, blending sci‑fi aesthetics with intuitive layouts. Translucent overlays and subtle motion made AI chats and Web3 features feel seamless within gameplay.\n‍",
              },
              {
                title: "Motion Design",
                body: "Using After Effects and Blender, I animated prototypes that clarified timing and elevated immersion. These motion cues turned functional Web3 interactions into engaging, game‑like experiences.",
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
            heading: "Next Project",
            project: nextProject("coredao"),
          },
        ],
      },
    ],
  },
  "sentience": {
    slug: "sentience",
    title: "Sentience - Web / App UI Design",
    pageTitle: "Sentience - Web / App UI Design",
    year: "2024",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Graphic Design", href: "/categories/graphic-design" },
    ],
    keyVisual: {
      ...caseImg("sentience", "keyvisual", "png"),
      alt: "Sentience - Web / App UI Design key visual",
      width: 4500,
      height: 3000,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "Sentience is a next‑generation Web3 and AI portal that unites blockchain and artificial intelligence in one seamless experience. It streamlines crypto, NFT, and token interactions within the SingularityNET ecosystem. As lead designer, I collaborated with their team to craft the user interfaces for both the Chrome extension and mobile app.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "Sentience needed a secure, intuitive wallet that made managing crypto assets and using dApps effortless across desktop and mobile. Unlike many fragmented Web3 wallets, it had to deliver a consistent, trustworthy interface that simplified complex blockchain actions into clear, guided flows whether in a compact Chrome extension or a mobile‑first experience.",
            ],
          },
          {
            type: 'copy',
            heading: "UI Guideline",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "As UI design lead, I developed Sentience’s visual identity using sharp pink accents over deep purples to convey futuristic sophistication. I embraced a subtle Neumorphic style gentle shadows, gradients, and embossed details to add tactile realism and softness to the digital experience. This approach made key actions stand out naturally, guiding users through complex crypto interactions with clarity and confidence across both Chrome extension and mobile interfaces.",
              "‍",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("sentience", "img-1", "png"), alt: "Sentience - Web / App UI Design" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Chrome Extension UI",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "I followed Sentience’s UI guidelines to create a cohesive, Neumorphism‑inspired interface with soft shadows, gradients, and embossed details in the brand’s pink‑purple palette for a refined, tactile feel. Working over an open‑source wallet foundation, I focused on enhancing the visual hierarchy and call‑to‑action clarity elevating usability and coherence without altering the core transaction logic across SingularityNET’s dApps.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("sentience", "img-1-2", "png"), alt: "Sentience - Web / App UI Design" },
              { ...caseImg("sentience", "img-2", "png"), alt: "Sentience - Web / App UI Design" },
              { ...caseImg("sentience", "img-3", "png"), alt: "Sentience - Web / App UI Design" },
              { ...caseImg("sentience", "img-4", "png"), alt: "Sentience - Web / App UI Design" },
              { ...caseImg("sentience", "img-5", "png"), alt: "Sentience - Web / App UI Design" },
            ],
          },
          {
            type: 'copy',
            heading: "Mobile App UI",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "For Sentience’s mobile app, I applied the same Neumorphic visual language soft shadows, gradients, and embossed effects in the signature pink‑purple palette to create a tactile, touch‑friendly experience. Due to Android Studio’s performance limits, I optimized by reducing depth intensity and simplifying layers, balancing visual richness with smooth responsiveness to maintain the wallet’s immersive, high‑end feel.",
              "‍",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("sentience", "img-1-3", "png"), alt: "Sentience - Web / App UI Design" },
              { ...caseImg("sentience", "img-2-2", "png"), alt: "Sentience - Web / App UI Design" },
              { ...caseImg("sentience", "img-3-2", "png"), alt: "Sentience - Web / App UI Design" },
              { ...caseImg("sentience", "img-4-2", "png"), alt: "Sentience - Web / App UI Design" },
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Impact & Results",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "‍",
            ],
            rich: [
              {
                title: "Project Launch and Early Traction",
                body: "Sentience ID launched its core platform features around mid-2024, with the Chrome extension going public on October 17, 2024, via the Chrome Web Store, while the mobile app remains in development as an upcoming feature within the SingularityNET ecosystem. As the UI design lead, my intuitive interfaces for both the extension and app supported around 500 global users by Q3 2024, driving steady growth through streamlined crypto, NFT, and token management that reduced onboarding friction and fostered cross-chain dApp interactions.",
              },
              {
                title: "Design Impact on Adoption",
                body: "My neumorphic UI featuring tactile shadows, gradients, and the signature pink-purple palette minimized user drop-offs by prioritizing accessibility, thumb-friendly CTAs, and low cognitive load, directly enhancing engagement and data sovereignty for SingularityNET users. This user-centric approach not only amplified early traction but also positioned Sentience ID as a key enabler for democratizing decentralized AI tools, paving the way for broader ecosystem adoption.",
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
            heading: "Key Learnings",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "‍",
            ],
            rich: [
              {
                title: "Balancing Constraints in Open-Source UX",
                body: "Working within an open-source crypto wallet taught me to maximize impact through surface-level UI enhancements like Neumorphism shadows and intuitive CTAs when core UX flows can't be altered, emphasizing strategic adaptation over full redesign for faster delivery and ecosystem compatibility.‍",
              },
              {
                title: "Mobile app development constraints",
                body: "Sentience's mobile UI constraints taught me to adapt Neumorphism effects for Android Studio by simplifying shadows into static images, balancing visual depth with performance to avoid memory lag. This honed my skill in platform-adaptive restraint over uncompromising aesthetics.",
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
            heading: "Next Project",
            project: nextProject("coredao"),
          },
        ],
      },
    ],
  },
  "playasiaxp": {
    slug: "playasiaxp",
    title: "PlayasiaXP - Web Design",
    pageTitle: "PlayasiaXP - Web Design",
    year: "2025",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Webflow", href: "/categories/webflow" },
      { label: "Motion Graphics", href: "/categories/motion-graphics" },
    ],
    keyVisual: {
      ...caseImg("playasiaxp", "keyvisual", "png"),
      alt: "PlayasiaXP - Web Design key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "PlayasiaXP is a community‑driven gaming hub where players discover new titles, connect, and earn rewards through engagement. The team brought me on to craft a website that captured this vision with clarity and energy. As both designer and Webflow developer, I led everything from UX architecture to responsive design and CMS integration, building a site that felt as dynamic as the platform itself.",
            ],
            cta: { label: "Visit Website", href: "https://www.playasiaxp.com/" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "PlayasiaXP faced a tough challenge explaining its mix of AI discovery, blockchain ownership, and play‑to‑earn features without losing new users in the complexity. My focus was on clarity and flow: structuring the experience so each idea unfolds naturally, guiding players from curiosity to engagement while keeping the platform inviting and easy to grasp.",
            ],
          },
          {
            type: 'copy',
            heading: "Mapping Web3 & Gamer Audiences",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "I started with a deep dive into gaming platforms to uncover what truly draws players in. Collaborating with the team, I used AI to shape detailed personas and journey maps that brought player motivations and their pain points to life.\n\nPlayers long to see Web3 meet traditional gaming, drawn by the promise of true ownership. Yet behind that excitement, our research uncovered familiar hurdles high fees, security worries, and a lack of inclusivity. Building trust means educating players early, but many still stumble through confusing wallet setups that break the magic before it begins.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("playasiaxp", "img-1", "png"), alt: "PlayasiaXP - Web Design" },
              { ...caseImg("playasiaxp", "img-2", "png"), alt: "PlayasiaXP - Web Design" },
              { ...caseImg("playasiaxp", "img-3", "png"), alt: "PlayasiaXP - Web Design" },
            ],
          },
          {
            type: 'copy',
            heading: "Sitemaps to Wireframes",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "I turned the client’s investor deck into a clear sitemap and wireframes that brought structure to their vision. Early reviews revealed that a single‑page layout told the story more clearly and kept the experience focused. This shift not only streamlined collaboration but also crystallized the audience, refined the brand’s position, and paved a confident path forward.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("playasiaxp", "img-1-2", "png"), alt: "PlayasiaXP - Web Design" },
              { ...caseImg("playasiaxp", "img-2-2", "png"), alt: "PlayasiaXP - Web Design" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Intuitive Web3 Design",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "The PlayasiaXP design simplifies Web3 complexity with a modular layout that turns dense features into clear, accessible sections. Each pillar personalized discovery, ownership, play‑to‑earn, exclusive content, and community stands out through bold visuals and concise messaging. The purple‑driven branding, playful icons, and inclusive imagery make the experience vibrant, intuitive, and inviting for every type of gamer.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("playasiaxp", "img-1-3", "png"), alt: "PlayasiaXP - Web Design" },
              { ...caseImg("playasiaxp", "img-2-3", "png"), alt: "PlayasiaXP - Web Design" },
              { ...caseImg("playasiaxp", "img-3-2", "png"), alt: "PlayasiaXP - Web Design" },
              { ...caseImg("playasiaxp", "img-4", "png"), alt: "PlayasiaXP - Web Design" },
            ],
          },
          {
            type: 'copy',
            heading: "Japanese Rank Hierarchy Design",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "One of my favorite modules to design was the PlayasiaXP social leaderboard. Inspired by Japanese ranking color charts, I used distinct hues to symbolize player progression from novice to elite. With AI‑generated illustrations, each rank became a vibrant avatar full of personality. The UI drew from classic character‑selection screens, blending motion and storytelling to capture the spirit of gaming.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("playasiaxp", "img-1-4", "png"), alt: "PlayasiaXP - Web Design" },
              { ...caseImg("playasiaxp", "img-2-4", "png"), alt: "PlayasiaXP - Web Design" },
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "One-Click Explainer Video",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "Alongside the website, I created a fast‑paced two‑minute explainer video that introduced PlayasiaXP’s AI discovery, Web3 ownership, and community rewards in one clear story. From scripting to animation, every scene was crafted to feel like a game trailer bold visuals, sharp motion, and an energetic soundtrack turning complex ideas into an exciting, instantly graspable experience.",
            ],
          },
          {
            type: 'embeds',
            embeds: [
              { title: "YouTube embed", src: "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F0-OSDvd3GEE%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0-OSDvd3GEE&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0-OSDvd3GEE%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "After launch, the PlayasiaXP site and explainer video sparked strong engagement, drawing thousands of visitors from Southeast Asia’s Web3 gaming scene. The video’s “game‑like energy” and clear storytelling earned enthusiastic feedback, while social posts about leaderboards and rewards fueled early community buzz. Together, the design and media turned curiosity into action, inspiring players to dive in and explore their personalized gaming journeys.",
            ],
          },
          {
            type: 'copy',
            heading: "Key Learnings",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "‍",
            ],
            rich: [
              {
                title: "User‑Centric Insights",
                body: "Personas and journey maps exposed key Web3 hurdles high fees, wallet friction, and inclusivity gaps. By rethinking onboarding as education‑first, I turned complex processes into flows that felt natural and approachable.\n‍",
              },
              {
                title: "Creative AI Integration",
                body: "Using Midjourney, I designed Japanese‑inspired leaderboards that proved AI can speed up custom visuals while deepening the story through cultural style and playful interactivity.",
              },
              {
                title: "Lottie Animation",
                body: "For the homepage hero, I built a lightweight Lottie animation that delivered game‑like motion without slowing performance. Exported via Bodymovin and embedded in Webflow, it kept visuals crisp, smooth, and fully in sync across devices.",
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
            heading: "Next Project",
            project: nextProject("coredao"),
          },
        ],
      },
    ],
  },
  "coredao---token2049-onepager": {
    slug: "coredao---token2049-onepager",
    title: "Core Dao - Token2049 Web Design",
    pageTitle: "Core Dao - Token2049 Web Design",
    year: "2025",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Webflow", href: "/categories/webflow" },
    ],
    keyVisual: {
      ...caseImg("coredao---token2049-onepager", "keyvisual", "png"),
      alt: "Core Dao - Token2049 Web Design key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "Core DAO is a decentralized organization developing the Core blockchain a next‑generation network that blends Bitcoin’s security with modern scalability was gearing up for TOKEN2049, the world's premier crypto conference series. Tasked with boosting their event visibility, I designed and built a high-conversion one-pager in Webflow for the Bitcoin Fusion side event and Ledger giveaway, distilling complex yield products into a scannable funnel that drove hundreds of sign-ups.",
            ],
            cta: { label: "Visit Website", href: "https://token2049.coredao.org/" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "Core needed a focused one‑pager for TOKEN2049 that clearly explained Bitcoin Fusion a self‑custodial Bitcoin staking and yield‑generating ecosystem while driving attendance and sign‑ups on a crowded conference floor. Their previous messaging was too technical and product‑heavy, making it hard for retail holders, whales, and institutions to quickly grasp the value of Core’s Bitcoin DeFi stack and the side‑event giveaway; the challenge was to distill complex concepts like Dual Staking, lstBTC, and miner participation into a simple, scrollable page that felt premium, easy to scan, and action‑oriented.",
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Design",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "The design is structured as a tight, single‑scroll event funnel that blends marketing and education: a bold, dark hero foregrounds TOKEN2049 details and the Ledger giveaway, while subsequent sections introduce Bitcoin Fusion as a thought‑leadership hub and break down Core’s staking and yield products into digestible blocks and FAQs. Clear visual hierarchy, repeated value‑driven phrases (“unlock Bitcoin’s yield potential,” “Bitcoin Everything Chain”), and prominent CTAs create a narrative‑driven experience that helps both technical and non‑technical users understand Core’s role in Bitcoin DeFi and quickly move from interest to action.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("coredao---token2049-onepager", "img-1", "png"), alt: "Core Dao - Token2049 Web Design" },
              { ...caseImg("coredao---token2049-onepager", "img-2", "png"), alt: "Core Dao - Token2049 Web Design" },
              { ...caseImg("coredao---token2049-onepager", "img-3", "png"), alt: "Core Dao - Token2049 Web Design" },
              { ...caseImg("coredao---token2049-onepager", "img-4", "png"), alt: "Core Dao - Token2049 Web Design" },
              { ...caseImg("coredao---token2049-onepager", "img-5", "png"), alt: "Core Dao - Token2049 Web Design" },
            ],
          },
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "The TOKEN2049 one‑pager drove hundreds of direct sign‑ups via its embedded popup form, contributing to Core's strong side‑event presence at the conference, which drew 15,000 total attendees from 150+ countries. This high conversion rate validated the design's ability to cut through the noise of 200+ exhibitors and 500+ side events, turning passive browsers into engaged leads for Bitcoin Fusion panels and the Ledger giveaway. By simplifying complex Bitcoin DeFi concepts like Dual Staking and lstBTC into scannable, action‑oriented sections, the page amplified Core's positioning as a Bitcoin yield leader, aligning with broader momentum like 5,000+ BTC dual‑staked across their ecosystem.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("sentience"),
          },
        ],
      },
    ],
  },
  "coredao---cartel-onepager": {
    slug: "coredao---cartel-onepager",
    title: "Core Dao - Cartel Web Design",
    pageTitle: "Core Dao - Cartel Web Design",
    year: "2025",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Webflow", href: "/categories/webflow" },
    ],
    keyVisual: {
      ...caseImg("coredao---cartel-onepager", "keyvisual", "png"),
      alt: "Core Dao - Cartel Web Design key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "Core Cartel is an exclusive community within the Core Chain Ventures ecosystem, uniting high-caliber Bitcoin and DeFi builders, developers, and enthusiasts through VIP access to yield opportunities and strategic insights. Tasked with elevating their digital presence, I designed and built a dynamic one-pager in Webflow.",
            ],
            cta: { label: "Visit Website", href: "https://corechain.ventures/core-cartel" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "Core Chain Ventures needed a standout landing page for Core Cartel that captured its elite community vibe for builders and developers, clearly communicating membership perks like exclusive Bitcoin yield strategies and VIP insights, amid a cluttered Web3 landscape where generic designs fail to convert discerning DeFi talent.",
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Design & Webflow Development",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "The page employs a sleek dark theme with custom-coded interactions mouse cursor proximity triggers animated orange grid boxes for a premium, responsive feel that immerses developers in the \"cartel\" aesthetic from the hero section onward. Scannable sections break down benefits (yield access, builder events, strategic resources) with bold typography and hover effects, funneling visitors toward membership CTAs while balancing exclusivity with accessibility for Bitcoin and DeFi developers.",
              "‍",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("coredao---cartel-onepager", "img-1", "png"), alt: "Core Dao - Cartel Web Design" },
              { ...caseImg("coredao---cartel-onepager", "img-2", "png"), alt: "Core Dao - Cartel Web Design" },
              { ...caseImg("coredao---cartel-onepager", "img-3", "png"), alt: "Core Dao - Cartel Web Design" },
              { ...caseImg("coredao---cartel-onepager", "img-4", "png"), alt: "Core Dao - Cartel Web Design" },
            ],
          },
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "The interactive one-pager boosted Core Cartel visibility among developers, generating strong membership interest and reinforcing Core Chain Ventures' position in the Bitcoin DeFi space through a design that turned passive scrolls into engaged builder onboarding.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("playasiaxp"),
          },
        ],
      },
    ],
  },
  "guardians": {
    slug: "guardians",
    title: "Sentience AI Labs - Guardians UI Design",
    pageTitle: "Sentience AI Labs - Guardians UI Design",
    year: "2025",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Motion Graphics", href: "/categories/motion-graphics" },
    ],
    keyVisual: {
      ...caseImg("guardians", "keyvisual", "png"),
      alt: "Sentience AI Labs - Guardians UI Design key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "SophiaVerse Guardians are dedicated community members who stake SOPH tokens to earn protective equipment like shields, signifying roles and in-game effects within the ecosystem. As design lead I was tasked with designing the UX/UI for token staking.",
            ],
            cta: { label: "Visit Website", href: "https://guardians.sophiaverse.ai/" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "SophiaVerse needed an intuitive staking UX for earning Guardian shields, as the process felt intimidating for users unfamiliar with Web3 mechanics, lacking clear steps and feedback to build confidence from token input to reward visualization.",
            ],
          },
          {
            type: 'copy',
            heading: "Userflow",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "The staking process is distilled into a linear four-step flow: users first select their SOPH amount using a horizontal input UI with fixed options, then choose a stake duration via a similar slider, preview the earned Guardian rank and shield effects, and finally review details before confirming all achievable in just three clicks total.",
              "‍",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("guardians", "img-1", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
            ],
          },
          {
            type: 'copy',
            heading: "UI Guidelines & Logo",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "The design adopts a modern HUD style with glassmorphism, blue neon gradients, and dark backgrounds to align with in-game visuals, featuring horizontal sliders for fixed amount/duration presets, step-wise rank/shield previews, bold labels, minimal text, and confirmation modals for clarity. The Guardian logo two variants of a geometric shield with inner glow uses layered blues for futuristic depth, embodying protection while integrating into UI headers and previews.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("guardians", "img-1-2", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
              { ...caseImg("guardians", "img-2", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
              { ...caseImg("guardians", "img-3", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "UI Design",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "The interface breaks staking into four labeled steps SOPH amount, stake duration, Guardian rank preview, and confirmation using horizontal input sliders for fixed options that require only three clicks total, including final approval. A modern HUD-style UI mirrors the game's aesthetic for ecosystem consistency, with clear progress indicators and previews reducing cognitive load and making Web3 actions feel accessible and game-like.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("guardians", "img-1-3", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
              { ...caseImg("guardians", "img-2-2", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
              { ...caseImg("guardians", "img-3-2", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
              { ...caseImg("guardians", "img-4", "png"), alt: "Sentience AI Labs - Guardians UI Design" },
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Tutorial",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "I created a step-by-step After Effects tutorial video demonstrating the staking UX flow, breaking down the three-click process with animated overlays to illustrate user interactions, slider presets, and reward previews enhancing developer handoff and community onboarding.",
            ],
          },
          {
            type: 'embeds',
            embeds: [
              { title: "YouTube embed", src: "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDq5TpeciSSw%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDq5TpeciSSw&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDq5TpeciSSw%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "The simplified three-click flow and step-by-step clarity lowered barriers to staking participation, boosting Guardian shield adoption and community engagement by making token utility tangible and rewarding within SophiaVerse.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("sail"),
          },
        ],
      },
    ],
  },
  "ecomatrix": {
    slug: "ecomatrix",
    title: "Ecomatrix - Webflow",
    pageTitle: "Ecomatrix - Webflow",
    year: "2022",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Webflow", href: "/categories/webflow" },
    ],
    keyVisual: {
      ...caseImg("ecomatrix", "keyvisual", "png"),
      alt: "Ecomatrix - Webflow key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "EcoMatrix ESG is a sustainability intelligence platform helping organizations measure and improve their environmental and social performance. I designed and developed its website on Webflow, creating a modern, credible digital presence that reflects the brand’s mission of responsible innovation.",
            ],
            cta: { label: "Visit Website", href: "https://www.ecomatrixesg.com/" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "EcoMatrix needed to communicate complex ESG solutions clearly and engagingly. Their previous materials lacked a cohesive digital identity, so the challenge was to design a site that simplified technical content while building trust with investors and partners.",
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Web Design & Webflow Development",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "I created a modular, responsive design system combining clarity, subtle motion, and intuitive interaction. The key visual features a dynamic video background of gently turning windmills, adding a sense of movement and energy that keeps the site from feeling static. On Webflow, I built a scalable CMS structure optimized for accessibility, SEO, and easy content management by the internal team.",
              "‍",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("ecomatrix", "img-1", "png"), alt: "Ecomatrix - Webflow" },
              { ...caseImg("ecomatrix", "img-2", "png"), alt: "Ecomatrix - Webflow" },
              { ...caseImg("ecomatrix", "img-3", "png"), alt: "Ecomatrix - Webflow" },
              { ...caseImg("ecomatrix", "img-4", "png"), alt: "Ecomatrix - Webflow" },
              { ...caseImg("ecomatrix", "img-5", "png"), alt: "Ecomatrix - Webflow" },
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("playasiaxp"),
          },
        ],
      },
    ],
  },
  "robustus": {
    slug: "robustus",
    title: "Robustus - Webflow",
    pageTitle: "Robustus - Webflow",
    year: "2022",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Webflow", href: "/categories/webflow" },
    ],
    keyVisual: {
      ...caseImg("robustus", "keyvisual", "png"),
      alt: "Robustus - Webflow key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "Robustus is an investment management platform that provides tools and insights for professional investors. I designed and developed its marketing website in Webflow to present the brand as modern, trustworthy, and performance-driven.",
            ],
            cta: { label: "Visit Website", href: "https://www.robustusim.com/" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "The team needed a clear, professional web presence that could communicate a complex investment platform to time-poor financial decision makers. The challenge was to simplify technical concepts and product structures into an intuitive, confident, and conversion-focused experience.",
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Web Design & Webflow Development",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "I created a clean, grid-based layout with strong typography and focused use of color to reinforce clarity and trust. Built in Webflow, the site uses reusable components and CMS collections so the team can update content efficiently while maintaining responsive behavior and consistency across devices.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("robustus", "img-1", "png"), alt: "Robustus - Webflow" },
              { ...caseImg("robustus", "img-2", "png"), alt: "Robustus - Webflow" },
              { ...caseImg("robustus", "img-3", "png"), alt: "Robustus - Webflow" },
              { ...caseImg("robustus", "img-4", "png"), alt: "Robustus - Webflow" },
              { ...caseImg("robustus", "img-5", "png"), alt: "Robustus - Webflow" },
            ],
          },
          {
            type: 'copy',
            heading: "Interactive Elements",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "Above the fold, I custom-coded interactive backgrounds that respond to user movement, creating subtle engagement without distraction. This technical flourish gives the site a sophisticated, professional edge that aligns with Robustus's innovative brand identity.",
              "‍",
              "Test it live at https://www.robustusim.com",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("coredao"),
          },
        ],
      },
    ],
  },
  "the-capital-trends---webflow": {
    slug: "the-capital-trends---webflow",
    title: "The Capital Trends - Webflow",
    pageTitle: "The Capital Trends - Webflow",
    year: "2023",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Webflow", href: "/categories/webflow" },
    ],
    keyVisual: {
      ...caseImg("the-capital-trends---webflow", "keyvisual", "jpg"),
      alt: "The Capital Trends - Webflow key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "The Capital Trends is a digital publication that explores global financial insights, innovation, and investment trends. I was responsible for designing and developing the full website on Webflow, creating a professional yet modern platform that positions the brand as a credible voice in finance. The goal was to communicate authority and clarity through a sleek editorial layout and an intuitive user experience.",
            ],
            cta: { label: "Visit Website", href: "https://www.thecapitaltrends.com/" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "The client needed a modern online presence that could differentiate them from traditional finance websites often cluttered, text-heavy, and difficult to navigate. They sought a solution that would present complex economic content in a visually engaging, easy-to-digest way, while maintaining a strong professional identity aligned with their brand’s editorial vision.",
            ],
          },
          {
            type: 'copy',
            heading: "Web Design & Webflow Development",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "I designed a minimalist, grid-based layout with clear typographic hierarchy to highlight articles and data-driven features. Every design decision from the use of negative space to subtle motion effects was meant to enhance reading flow and emphasize credibility. On the development side, I custom-built the site in Webflow, implementing dynamic CMS collections for scalable content management, smooth animations for transitions, and full responsiveness across devices.",
              "‍",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("the-capital-trends---webflow", "img-1", "jpg"), alt: "The Capital Trends - Webflow" },
              { ...caseImg("the-capital-trends---webflow", "img-2", "jpg"), alt: "The Capital Trends - Webflow" },
              { ...caseImg("the-capital-trends---webflow", "img-3", "jpg"), alt: "The Capital Trends - Webflow" },
              { ...caseImg("the-capital-trends---webflow", "img-4", "jpg"), alt: "The Capital Trends - Webflow" },
              { ...caseImg("the-capital-trends---webflow", "img-5", "jpg"), alt: "The Capital Trends - Webflow" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "The new website elevated The Capital Trends’ digital identity, increasing content readability and engagement metrics. The streamlined experience helped readers discover insights faster, and the flexible CMS made it easy for the client’s editorial team to publish and update articles independently. Overall, the redesign reinforced the brand’s presence as a forward-thinking financial media platform.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("sail"),
          },
        ],
      },
    ],
  },
  "singularitynews---webflow": {
    slug: "singularitynews---webflow",
    title: "SingularityNews - Webflow",
    pageTitle: "SingularityNews - Webflow",
    year: "2023",
    tags: [
      { label: "UX/UI Design", href: "/categories/ux-ui-design" },
      { label: "Webflow", href: "/categories/webflow" },
    ],
    keyVisual: {
      ...caseImg("singularitynews---webflow", "keyvisual", "jpg"),
      alt: "SingularityNews - Webflow key visual",
      width: 1920,
      height: 1080,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "Following the success of The Capital Trends website, I was commissioned to design and develop Singularity News a digital publication focusing on emerging technologies, AI breakthroughs, and the future of innovation. The goal was to build a platform that felt more progressive and tech‑oriented while maintaining the editorial clarity and structure that defined The Capital Trends. My responsibility covered the entire creative direction, interface design, and Webflow development, bringing the publication’s futuristic vision to life through clean aesthetics and dynamic storytelling.",
            ],
            cta: { label: "Visit Website", href: "https://singularity-news.webflow.io/" },
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "The client needed a visual identity and web experience that could capture the tone of technological advancement without overwhelming readers with visual noise. The challenge was to balance sophistication with energy: to present complex tech narratives in a way that felt sleek, credible, and forward‑thinking. The design also needed to distinguish Singularity News as a standalone brand, while retaining subtle continuity with The Capital Trends ecosystem.",
            ],
          },
          {
            type: 'copy',
            heading: "Web Design & Webflow Development",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "I approached the design with a focus on luminosity, space, and movement using gradients, subtle glow effects, and modular grids to echo the theme of digital progress. The interface was built around a scalable CMS in Webflow, allowing the editorial team to manage articles, categories, and highlights with ease. I implemented custom animations and scroll‑based transitions to create a sense of flow between sections, aligning the reading experience with the publication’s vision of innovation. The entire site was optimized for responsiveness and performance, ensuring smooth interactions across devices.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("singularitynews---webflow", "img-1", "jpg"), alt: "SingularityNews - Webflow" },
              { ...caseImg("singularitynews---webflow", "img-2", "jpg"), alt: "SingularityNews - Webflow" },
              { ...caseImg("singularitynews---webflow", "img-3", "jpg"), alt: "SingularityNews - Webflow" },
              { ...caseImg("singularitynews---webflow", "img-4", "jpg"), alt: "SingularityNews - Webflow" },
              { ...caseImg("singularitynews---webflow", "img-5", "jpg"), alt: "SingularityNews - Webflow" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "Singularity News successfully positioned itself as a contemporary platform for technology journalism. The refined UX and visual system helped elevate the brand’s authority while engaging a broader audience interested in AI and emerging innovation. The client praised the seamless Webflow integration and intuitive content management, which enabled faster publishing and more flexible storytelling. The project reinforced my expertise in designing editorial platforms that merge narrative clarity with modern, tech‑driven aesthetics.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("sentience"),
          },
        ],
      },
    ],
  },
  "livi-bank": {
    slug: "livi-bank",
    title: "Livi Bank",
    pageTitle: "Livi Bank",
    year: "2020",
    tags: [
      { label: "Graphic Design", href: "/categories/graphic-design" },
    ],
    keyVisual: {
      ...caseImg("livi-bank", "keyvisual", "jpg"),
      alt: "Livi Bank key visual",
      width: 1920,
      height: 1280,
    },
    sections: [
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Project Brief",
            headingLevel: 2,
            bodyStyle: "lg",
            align: "left",
            paragraphs: [
              "In 2020, I collaborated with Livi Bank’s design team to help establish the bank’s visual and digital identity ahead of its official launch. Working closely with the Head of UX/UI, I contributed to developing a cohesive brand system that balanced modern fintech aesthetics with user trust and accessibility. The project encompassed digital interface design, visual language definition, and brand consistency across both mobile and web platforms.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'copy',
            heading: "Problem Statement",
            headingLevel: 3,
            bodyStyle: "md",
            align: "right",
            paragraphs: [
              "As one of Hong Kong’s first virtual banks, Livi Bank needed a distinct identity that would communicate innovation, credibility, and ease of use to a largely traditional banking audience. The challenge was to design an approachable, tech-forward experience that could build user confidence in a digital-only financial platform while expressing the bank’s fresh, optimistic personality.",
            ],
          },
          {
            type: 'copy',
            heading: "Brand Identity",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "I worked with livi bank to create a consistent and appealing brand identity that can be applied across different platforms and channels. Selecting a modern and elegant sans-serif font that reflects their digital-first and customer-centric approach. I also adjusted their color scheme to enhance readability and contrast on various devices. Using the updated branding guidelines, I designed new digital ads that showcase livi bank’s features and benefits. The ads were integrate into their social media and display networks, resulting in increased engagement and conversions.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("livi-bank", "img-1", "jpg"), alt: "Livi Bank" },
              { ...caseImg("livi-bank", "img-2", "jpg"), alt: "Livi Bank" },
              { ...caseImg("livi-bank", "img-3", "jpg"), alt: "Livi Bank" },
              { ...caseImg("livi-bank", "img-4", "jpg"), alt: "Livi Bank" },
              { ...caseImg("livi-bank", "img-5", "jpg"), alt: "Livi Bank" },
              { ...caseImg("livi-bank", "img-6", "jpg"), alt: "Livi Bank" },
              { ...caseImg("livi-bank", "img-7", "jpg"), alt: "Livi Bank" },
            ],
          },
        ],
      },
      {
        dark: false,
        blocks: [
          {
            type: 'copy',
            heading: "Social Media Ads",
            headingLevel: 3,
            h2Look: true,
            bodyStyle: "rich",
            align: "left",
            paragraphs: [
              "Following the creation of Livi Bank’s brand guidelines, I extended the visual system into a series of social media campaigns that brought the brand to life across everyday touchpoints. The ads translated Livi’s friendly, lifestyle-focused identity into scroll-stopping visuals, combining bold colour blocking, clean typography, and simple iconography with concise, benefit-led messaging. I designed modular layouts that could flex across formats (stories, feed posts, carousels) while maintaining strong brand recognition and consistency. These assets helped reinforce Livi’s positioning as an approachable, digital-first bank by showcasing real-life use cases, playful motion, and clear calls-to-action that encouraged users to explore the app and its features.",
            ],
          },
          {
            type: 'images',
            images: [
              { ...caseImg("livi-bank", "img-1-2", "jpg"), alt: "Livi Bank" },
            ],
          },
          {
            type: 'copy',
            heading: "Impact",
            headingLevel: 3,
            bodyStyle: "rich",
            align: "right",
            paragraphs: [
              "Livi’s early growth was strongly supported by a design language that made a completely new virtual bank feel simple, human, and low-friction to use. The bright, lifestyle-led visual identity, conversational tone, and clean UI helped reduce the perceived risk of trying a digital-only bank, which contributed to livi attracting over 41,000 customers in its first year. Consistent branding across the app, marketing, and product touchpoints reinforced trust and recognition, laying the foundation for livi to scale to more than 150,000, then 200,000 customers and roughly HKD3 billion in deposits as the brand matured. By tightly aligning the brand identity with an intuitive UX, the design made livi’s value proposition immediately legible and approachable, directly supporting user acquisition, ongoing engagement, and growing confidence in its digital services.",
            ],
          },
        ],
      },
      {
        dark: true,
        blocks: [
          {
            type: 'next',
            heading: "Next Project",
            project: nextProject("playasiaxp"),
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
