import { stories as storiesIndex } from './site';

export type StoryPhoto = {
  webpSrcSet: string;
  fallbackSrcSet: string;
  fallbackType: 'image/jpeg' | 'image/png';
  fallbackSrc: string;
  alt: string;
  variant: 'tall' | 'wide';
};

export type StoryPost = {
  slug: string;
  title: string;
  pageTitle: string;
  tag: string;
  paragraphs: string[];
  photos: StoryPhoto[];
};

function storyPhoto(slug: string, name: string, ext: 'jpg' | 'png', variant: 'tall' | 'wide', alt: string): StoryPhoto {
  const base = `/images/stories/${slug}/${name}`;
  return {
    webpSrcSet: `${base}-640.webp 640w, ${base}-960.webp 960w, ${base}-1280.webp 1280w`,
    fallbackSrcSet: `${base}-960.${ext} 960w`,
    fallbackType: ext === 'jpg' ? 'image/jpeg' : 'image/png',
    fallbackSrc: `${base}-960.${ext}`,
    alt,
    variant,
  };
}

export const storyPosts: Record<string, StoryPost> = {
  "the-quiet-teacher": {
    slug: "the-quiet-teacher",
    title: "Tennis - the quiet teacher",
    pageTitle: "Tennis - the quiet teacher",
    tag: "Sports",
    paragraphs: [
      "I’ve always loved sports. Growing up, the court or the field was my playground basketball, football, anything that demanded energy, teamwork, and a bit of grit. But somewhere along the way, the collisions started to sting more than they used to. Recovery took longer. My body began whispering something I didn’t want to admit: it was time to rethink the kind of hobby I wanted to have.",
      "That’s when I found tennis. Or maybe it found me. At first, it was just curiosity a way to stay active without getting battered. But the first time I hit a ball cleanly, really cleanly, I felt something click. The sound, that crisp pop of strings meeting felt, was instantly addictive. There’s a strange peace that comes from rallying that steady rhythm of movement and contact. It’s meditative. And soon, I was completely hooked.",
      "What started as a casual experiment became a ritual. Two, sometimes three sessions a week. My social feeds transformed into endless clips of forehands, serves, Federer highlights. I wasn’t just playing anymore I was chasing that perfect shot, that perfect moment of connection.",
      "Tennis, I’ve learned, is a quiet teacher. It humbles you, over and over again. You can lose half the points in a match and still win something Roger Federer once mentioned in his Dartmouth speech. That lesson stuck with me. You can’t dwell on mistakes. A missed shot doesn’t define you; what matters is how quickly you reset. Point lost? Deep breath. Start again. That’s not just tennis that’s life.",
      "And then there’s repetition. Countless swings under the afternoon sun, forehands that go wide, serves that clip the net. Improvement doesn’t come from thinking about it it comes from doing it, thousands of times. You step onto the court, hit, miss, adjust and repeat. The rhythm becomes your meditation, the progress almost invisible until one day it’s just there.",
      "Early on, I thought tennis was about hitting winners. I’d swing for the lines, trying to end points in style. But the pros don’t play that way. Their secret is patience the art of not giving points away. They win by playing smart, not flashy. Over time, I realized that consistency, not risk, is what wins in the long run. The same truth applies off the court too: steady effort always beats bursts of brilliance.",
      "The more I played, the more I noticed how much of my body needed to work together legs, hips, core, shoulders, all in sync. Before, I’d overuse my arms and feel the strain after every session. But when everything aligns when movement flows from the ground up the ball flies effortlessly. It’s a small miracle every time, the kind that keeps you coming back.",
      "Two years in, tennis has reshaped how I think and how I live. It’s taught me discipline, patience, and the beauty of repetition. It’s reconnected me with that childlike joy of chasing improvement, and introduced me to friends who share the same spark.",
    ],
    photos: [
      storyPhoto("the-quiet-teacher", 'photo-tall', "jpg", 'tall', "Tennis - the quiet teacher"),
      storyPhoto("the-quiet-teacher", 'photo-wide', "jpg", 'wide', "Tennis - the quiet teacher"),
    ],
  },
  "first-time-pawrenting": {
    slug: "first-time-pawrenting",
    title: "Iridescent - first-time pawrenting",
    pageTitle: "Iridescent - first-time pawrenting",
    tag: "Lifestyle",
    paragraphs: [
      "I’ve always loved animals. There’s just something about dogs the wagging tails, the curious eyes, the unfiltered joy that brings me instant happiness. But growing up, I never had one. My parents loved animals too, but my mom had a phobia of fur, so pets were simply not part of our home.",
      "Years later, when my wife and I got married and moved out, the timing still didn’t feel right. We both loved dogs her family had one that we adored like our own whenever we visited but we enjoyed the freedom of our new chapter. We wanted to travel, explore, and our apartment contract had a strict “no pets” policy anyway.",
      "Then Iri came along. Out of nowhere.",
      "Maybe it was the quiet days during COVID, when home started to feel smaller and the outside world more distant. One of our friends was fostering a puppy, and we went to visit just to “help find her a home.” That’s what we said to each other. Iri wasn’t the conventionally cute type a mixed breed of mongrel and strong Shar Pei features: folds, wrinkles, and a slightly confused expression. We were told that no one wanted her because she didn’t “look cute” in photos. But when we met her, none of that mattered. She bounded up with pure energy, tail wagging, showering us in relentless, happy licks.",
      "Something changed in that moment.",
      "We drove home still pretending we were “helping find her a family.” But really, we were already looking up our lease agreement to see if “no pets” could somehow mean “no cats, but maybe one small dog.” Within weeks, we found ourselves packing up kibble, a dog bed, and bringing her home this confused little creature who didn’t yet know we were going to be her forever humans.",
      "People often say children change you, that they shift your priorities and deepen your sense of love. I never truly understood that until we became pawrents. From the moment Iri stepped into our home, everything changed from how we planned weekends to the way we looked forward to coming home. We stopped thinking of plans in terms of “what we want to do” and started thinking, “Can Iri come along?” It wasn’t a loss of freedom; it was a gain in meaning.",
      "We became a team instinctively dividing responsibilities, learning her quirks, laughing at her endless need for food, but also worrying when she didn’t eat. Our home started to feel fuller, warmer. Taking care of her wasn’t just about responsibility; it was about learning empathy, patience, and unconditional love.",
      "Being a pawrent changes you. It softens your edges. You start noticing small things the way she tilts her head when you talk, the rhythm of her paws against the floor when she hears you come home. And every time she runs to the door, tail wagging uncontrollably, you feel a wave of joy that’s hard to put into words.",
      "Yes, there are sacrifices  fewer late nights, less spontaneous travel  but you gain something far greater. You learn how love grows when you give it, how companionship reshapes your world.",
    ],
    photos: [
      storyPhoto("first-time-pawrenting", 'photo-tall', "png", 'tall', "Iridescent - first-time pawrenting"),
      storyPhoto("first-time-pawrenting", 'photo-wide', "jpg", 'wide', "Iridescent - first-time pawrenting"),
    ],
  },
  "a-framework-for-how-to-live": {
    slug: "a-framework-for-how-to-live",
    title: "About time - a framework for how to live",
    pageTitle: "About time - a framework for how to live",
    tag: "Cinema",
    paragraphs: [
      "There are movies you enjoy, movies you remember, and then there are ones that quietly stay with you reshaping how you see your life long after the credits roll. About Time has been that film for me. It’s not a story about time travel in the traditional sense. There’s no grand adventure to rewrite history, no futuristic machines or paradoxes. Instead, it’s a soft, deeply human story about what it means to live to notice the people you love, and the moments that make life truly matter.",
      "Tim, the protagonist, discovers he can travel back and relive moments from his own life. At first, he uses this power the way any of us probably would to fix mistakes, to get the girl, to make awkward situations perfect. But what makes the film so beautiful is that, over time, Tim realizes perfection isn’t the point at all. Happiness doesn’t come from perfect days it comes from seeing ordinary ones differently.",
      "That message struck me the first time I watched it, but I didn’t fully understand it until much later. The film offers this quiet philosophy: live every day twice once with all the stress, the rush, the noise, and then again as if you already know how precious it is. The second time, you notice the sunlight through the window, the warmth of a quiet breakfast, the small kindness of a stranger. You begin to realize that no time travel is needed to live more deeply only presence.",
      "About Time also carries the weight of love and loss especially through Tim’s relationship with his father. Their scenes together remind you how fragile time really is, how days slip by without us realizing which ones will be the last. The movie doesn’t shy away from grief instead, it gently insists that loving people deeply, while you can, is the best use of any time you’re given.",
      "And maybe that’s why I’ve grown so attached to this film because it doesn’t pretend that life can be controlled. It reminds us that we can’t re-edit our past or engineer happiness, but we can pay attention. We can fill the ordinary with meaning, simply by being fully there.",
      "Over time, this film became more than just a story I loved it became a quiet framework for how I see my relationship with my wife. The way About Time celebrates the “extraordinary ordinary” mirrors how I feel when I’m with her. Every simple act watching tv shows, playing Tetris, and our deep conversations feels like that “second life” the film describes. A life you’d relive not to change anything, but just to experience it again.",
    ],
    photos: [
      storyPhoto("a-framework-for-how-to-live", 'photo-tall', "jpg", 'tall', "About time - a framework for how to live"),
      storyPhoto("a-framework-for-how-to-live", 'photo-wide', "jpg", 'wide', "About time - a framework for how to live"),
    ],
  },
  "skogskyrkogarden": {
    slug: "skogskyrkogarden",
    title: "Skogskyrkogården - designed for the living",
    pageTitle: "Skogskyrkogården - designed for the living",
    tag: "Travel",
    paragraphs: [
      "When I visited Sweden in June 2025, Skogskyrkogården came up again and again as a must-see. A UNESCO World Heritage site since 1994, it’s often described as a masterpiece of early 20th-century landscape design a collaboration between architects Gunnar Asplund and Sigurd Lewerentz. But no amount of research or photos could prepare me for what it actually felt like to walk through it.",
      "From the entrance alone, it’s clear this isn’t an ordinary cemetery. The design carries you on a deliberate journey a slow transition from the noise of the city into a place of stillness and reflection. The air feels quieter. The tall pines stand like sentinels, framing the paths that wind through open fields and clusters of graves. Everything invites you to slow down.",
      "One of the most striking places is Almhöjden, or Elm Hill a crescent-shaped, man-made hill topped by a meditation grove. The stone staircase leading up becomes shallower the higher you go, almost as if the walk itself wants to teach you something: the climb gets easier the closer you come to peace. At the top, surrounded by trees, you feel held not by walls or monuments, but by nature itself.",
      "Coming from an Asian background, cemeteries have always carried a very different tone for me. They’re sacred, yes, but also somber compact spaces built to serve the dead rather than comfort the living. Visiting them often feels obligatory, heavy, marked by grief rather than reflection. Skogskyrkogården, however, turned that idea upside down.",
      "It’s a space for the living. A tranquil, contemplative landscape that merges architecture and nature in a way that feels spiritual but never oppressive. Families stroll through its paths, people sit beneath the pines, and there’s a quiet acceptance in the air not of death itself, but of life continuing around it. It’s a cemetery that heals as much as it mourns.",
      "Along the way, I came across one of its most memorable details inscribed at the Woodland Chapel are the words “Hodie Mihi, Cras Tibi”, Latin for “Today for me, tomorrow for you.” It’s a gentle reminder of our shared mortality not as a threat, but as an invitation to live more fully right now. Standing there, I didn’t feel sadness. I felt gratitude.",
      "I had come at a time in my life when I was stressed and stretched thin caught up in momentum, always moving, never pausing. But in that quiet space, I felt something shift. For the first time in a while, I allowed myself to stop thinking about deadlines or worries and just be. The place didn’t make me think about death, but about living consciously, curiously, and with appreciation for the small moments.",
      "Since that visit, I’ve started to look at design and life differently. Cemeteries, I realized, don’t only commemorate the past; they can also teach us how to be more present. Skogskyrkogården embodies that idea perfectly: beauty built for reflection, not sorrow; a space where architecture doesn’t just hold memory, but gives life back to the living.",
    ],
    photos: [
      storyPhoto("skogskyrkogarden", 'photo-tall', "jpg", 'tall', "Skogskyrkogården - designed for the living"),
      storyPhoto("skogskyrkogarden", 'photo-wide', "jpg", 'wide', "Skogskyrkogården - designed for the living"),
    ],
  },
};

export function getStoryPost(slug: string | undefined) {
  if (!slug) return null;
  return storyPosts[slug] ?? null;
}

/** Other stories for the “More Stories” grid (excludes current). */
export function getMoreStories(slug: string) {
  return storiesIndex.items.filter((item) => !item.href.endsWith('/' + slug));
}
