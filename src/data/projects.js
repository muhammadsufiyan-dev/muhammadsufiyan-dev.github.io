import cityGuidePhones from '../assets/cityguide-phones.jpg'
import cityGuidePdfCover from '../assets/cityguide-pdf-cover.jpg'
import cityGuidePdfAbout from '../assets/cityguide-pdf-about.jpg'
import cartivaPdfCover from '../assets/cartiva-pdf-cover.jpg'
import mindoraPdfCover from '../assets/mindora-pdf-cover.jpg'
import roamoraPdfCover from '../assets/roamora-pdf-cover.jpg'

// All 24 pages of the City Guide case study PDF, auto-imported and sorted by filename
const pdfPageModules = import.meta.glob('../assets/pdf-pages/*.jpg', { eager: true, import: 'default' })
const pdfPageUrls = Object.keys(pdfPageModules)
  .sort()
  .map((key) => pdfPageModules[key])

// All 15 pages of the Cartiva case study PDF
const cartivaPageModules = import.meta.glob('../assets/pdf-pages-cartiva/*.jpg', { eager: true, import: 'default' })
const cartivaPageUrls = Object.keys(cartivaPageModules)
  .sort()
  .map((key) => cartivaPageModules[key])

// All 11 pages of the Mindora case study PDF
const mindoraPageModules = import.meta.glob('../assets/pdf-pages-mindora/*.jpg', { eager: true, import: 'default' })
const mindoraPageUrls = Object.keys(mindoraPageModules)
  .sort()
  .map((key) => mindoraPageModules[key])

// All 16 pages of the Roamora case study PDF
const roamoraPageModules = import.meta.glob('../assets/pdf-pages-roamora/*.jpg', { eager: true, import: 'default' })
const roamoraPageUrls = Object.keys(roamoraPageModules)
  .sort()
  .map((key) => roamoraPageModules[key])

const pdfPageTitles = [
  'Cover — Introducing The City Guide',
  'What is The City Guide?',
  'Splash Screen',
  'Onboarding',
  'Create Account',
  'Login Screen',
  'Home Screen',
  'Explore Screen',
  'Place Details',
  'Saved Places',
  'Profile Screen',
  'Edit Profile',
  'Settings',
  'Admin Panel — Overview',
  'Admin — Control Panel',
  'Admin — Navigation',
  'Admin — Manage Cities',
  'Admin — Add New City',
  'Admin — Manage Places',
  'Admin — Add Place',
  'Admin — User Management',
  'Admin — User Profile',
  'Admin — Manage Reviews',
  "Let's Connect",
]

const cityGuideGallery = pdfPageUrls.map((src, i) => ({
  src,
  alt: `City Guide case study — page ${i + 1}: ${pdfPageTitles[i] || ''}`,
  caption: pdfPageTitles[i] || `Page ${i + 1}`,
}))

const cartivaPageTitles = [
  'Cover — Introducing Cartiva',
  'What is Cartiva?',
  'Key Features',
  'Home Page — Hero & Popular Right Now',
  'Home Page — Categories & Footer',
  'Shop — Browse Everything',
  'Smart Category Filters',
  'Product Details',
  'Shopping Cart',
  'Secure Checkout',
  'Order Confirmed',
  'Order History',
  'My Account',
  'Your Wishlist',
  "Let's Connect",
]

const cartivaGallery = cartivaPageUrls.map((src, i) => ({
  src,
  alt: `Cartiva case study — page ${i + 1}: ${cartivaPageTitles[i] || ''}`,
  caption: cartivaPageTitles[i] || `Page ${i + 1}`,
}))

const mindoraPageTitles = [
  'Cover — Introducing Mindora',
  'What is Mindora?',
  'Key Features',
  'Overview — Your study overview',
  'My Notes',
  'Capture an idea',
  'Flashcards',
  'Quick quiz',
  'Focus room',
  'Study helper',
  "Let's Connect",
]

const mindoraGallery = mindoraPageUrls.map((src, i) => ({
  src,
  alt: `Mindora case study — page ${i + 1}: ${mindoraPageTitles[i] || ''}`,
  caption: mindoraPageTitles[i] || `Page ${i + 1}`,
}))

const roamoraPageTitles = [
  'Cover — Introducing Roamora',
  'What is Roamora?',
  'Key Features',
  'The Home Page',
  'Plan, Guides & Inbox',
  'Explore — Find your somewhere',
  'Destination Details',
  'Itinerary & Notes',
  'Trip Planner',
  'My Trips',
  'Saved Destinations',
  'Your Profile',
  'Contact — Say Hello',
  'FAQ — Quick Answers',
  'Info Pages — About, Terms & Privacy',
  "Let's Connect",
]

const roamoraGallery = roamoraPageUrls.map((src, i) => ({
  src,
  alt: `Roamora case study — page ${i + 1}: ${roamoraPageTitles[i] || ''}`,
  caption: roamoraPageTitles[i] || `Page ${i + 1}`,
}))

export const projects = [
  {
    id: 'cityguide',
    category: 'Mobile',
    label: 'Flutter · Firebase · Full-stack',
    title: 'City Guide App',
    tagline:
      'A cross-platform Flutter travel app for discovering tourist places, restaurants, hotels and events across Pakistan — with a full admin panel behind it.',
    description:
      'City Guide is a full-stack travel discovery platform built for exploring Pakistan. On the user side, people can browse places by city and category, save favourites, and leave reviews — each place has its own detail screen with ratings, location, and highlights. On the back end, Firebase and Cloud Firestore handle data in real time, while a dedicated admin panel gives full control over every city, place, user and review on the platform, backed by a live analytics dashboard.',
    role: 'Designed and built the entire app in Flutter, structured the Firestore data model, implemented state management with Provider, and built the companion admin panel used to manage the platform\'s content and users.',
    stats: [
      { value: '5', label: 'Cities' },
      { value: '100', label: 'Places' },
      { value: '5', label: 'Users' },
      { value: '3.5', label: 'Avg rating' },
    ],
    features: [
      'Search and filter places by city and category',
      'Featured and popular listings on the home screen',
      'Save favourite places and write reviews',
      'Secure accounts for both users and admins',
      'Full admin panel — dashboard analytics, city & place management, user control, review moderation',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Provider'],
    thumbType: 'image',
    thumbImage: cityGuidePhones,
    heroImage: cityGuidePdfCover,
    gallery: cityGuideGallery,
    demoUrl: null,
    githubUrl: null,
    // BASE_URL ensures this resolves correctly under a GitHub Pages subpath
    // (e.g. /muhammadsufiyan-dev/city-guide-case-study.pdf) instead of 404ing
    // at the domain root.
    pdfUrl: `${import.meta.env.BASE_URL}city-guide-case-study.pdf`,
    pdfLabel: 'View full case study (PDF)',
    pdfCover: cityGuidePdfAbout,
    pdfPages: 24,
    pdfBlurb:
      "A complete 24-page walkthrough — every screen from splash to settings, the full admin panel, and the thinking behind each decision.",
  },
  {
    id: 'cartiva',
    category: 'Web',
    label: 'Web development · E-commerce',
    title: 'Cartiva — E-commerce Website',
    tagline:
      'A modern, fully responsive online store — products, cart, wishlist, accounts and checkout, powered by Firebase.',
    description:
      'Cartiva is a modern, fully responsive e-commerce website that delivers a smooth shopping experience across desktop, tablet and mobile. Shoppers can browse products, search and filter by category or brand, manage their cart and wishlist, create an account, place orders and review their order history. Firebase Authentication and Cloud Firestore power accounts and data, while the interface — built with HTML, CSS, JavaScript and Bootstrap — focuses on clean navigation, fast product browsing and a polished shopping experience.',
    role: 'Designed and built the entire store solo — the responsive front-end with Bootstrap, the product catalog with search/category/brand filtering, the cart, wishlist and checkout flow, and the Firebase Authentication + Cloud Firestore back-end behind accounts, orders and order history.',
    stats: [
      { value: '15', label: 'Products' },
      { value: '3', label: 'Categories' },
      { value: 'Live', label: 'On GitHub Pages' },
    ],
    features: [
      'Product browsing — listings and detailed product pages',
      'Search & filters — search, category, brand and sorting',
      'Wishlist — user-specific saved products',
      'Shopping cart — account-based cart with live order summary',
      'Authentication — secure sign in with Firebase',
      'Checkout — delivery details form and order placement',
      'Order history — every past order in one place with status badges',
      'Responsive design — desktop, tablet and mobile',
      'Cloud database — Firebase Firestore for products, orders and users',
      'Contact form and a custom 404 page',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Firebase Authentication', 'Cloud Firestore', 'GitHub Pages'],
    thumbType: 'image',
    thumbImage: cartivaPageUrls[3],
    heroImage: cartivaPageUrls[3],
    gallery: cartivaGallery,
    demoUrl: 'https://muhammadsufiyan-dev.github.io/cartiva',
    githubUrl: 'https://github.com/muhammadsufiyan-dev/cartiva',
    pdfUrl: `${import.meta.env.BASE_URL}cartiva-case-study.pdf`,
    pdfLabel: 'View full case study (PDF)',
    pdfCover: cartivaPdfCover,
    pdfPages: 15,
    pdfBlurb:
      'A complete 15-page walkthrough — the home page, shop and filters, product and cart flow, checkout, account and wishlist, plus the thinking behind each screen.',
  },
  {
    id: 'mindora',
    category: 'Web',
    label: 'React · Vite · AI Study Assistant',
    title: 'Mindora — AI Study Assistant',
    tagline:
      'A calm, modern study workspace — notes, flashcards, quizzes, a focus timer and a study helper, all in one place.',
    description:
      'Mindora is an AI-powered study assistant built to help students learn smarter and stay organized. An overview dashboard surfaces focus time, notes, flashcards and a daily streak at a glance, while dedicated tools cover note-taking by subject, flip-card flashcards for active recall, multiple-choice quizzes with a progress bar, a distraction-free focus room with 15/25/50-minute sessions, and a study helper that turns a topic or pasted notes into a clear study guide.',
    role: 'Designed and built the entire app solo with React and Vite — the dashboard, notes library, flashcard deck, quiz engine, focus timer and study helper — focused on a calm, responsive interface that keeps studying simple.',
    stats: [
      { value: '6', label: 'Study tools' },
      { value: '3', label: 'Session lengths' },
      { value: 'Live', label: 'On GitHub Pages' },
    ],
    features: [
      'Overview dashboard — focus time, notes, flashcards and streak at a glance',
      'Study notes — create and organize notes by subject',
      'Flashcards — flip-card active recall with a deck counter',
      'Quick quiz — multiple-choice questions with a progress bar',
      'Focus room — 15, 25 and 50 minute distraction-free sessions',
      "Study helper — turn a topic or pasted notes into a study guide",
      "Today's plan — a simple daily checklist",
      'Responsive design — a modern interface across devices',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub Pages'],
    thumbType: 'image',
    thumbImage: mindoraPageUrls[3],
    heroImage: mindoraPageUrls[3],
    gallery: mindoraGallery,
    demoUrl: 'https://muhammadsufiyan-dev.github.io/ai-study-assistant',
    githubUrl: 'https://github.com/muhammadsufiyan-dev/ai-study-assistant',
    pdfUrl: `${import.meta.env.BASE_URL}mindora-case-study.pdf`,
    pdfLabel: 'View full case study (PDF)',
    pdfCover: mindoraPdfCover,
    pdfPages: 11,
    pdfBlurb:
      'An 11-page walkthrough — the overview dashboard, notes, flashcards, quiz, focus room and study helper, plus the thinking behind each screen.',
  },
  {
    id: 'roamora',
    category: 'Web',
    label: 'Web development · Travel · Firebase',
    title: 'Roamora — Travel Discovery & Trip Planning',
    tagline:
      'Discover destinations, save favorites and plan your next trip — a modern travel website built with Firebase.',
    description:
      'Roamora is a modern travel discovery and trip-planning website that helps travelers explore destinations around the world, save favourite places and organize future adventures. Destination cards carry ratings, estimated prices and photo galleries, each place has its own detail page with a story, a suggested itinerary and traveler notes, and a trip planner lets users build a simple plan with a destination, dates and travelers. Firebase powers accounts, favourites and cloud data behind the scenes.',
    role: 'Designed and built the entire site solo — the destination explorer with search and filters, destination detail pages, favourites, the trip planner and "My trips" journal, the profile page, and the Firebase Authentication + Firestore back end behind accounts and saved data.',
    stats: [
      { value: '8', label: 'Destinations' },
      { value: '5', label: 'Travel styles' },
      { value: 'Live', label: 'On GitHub Pages' },
    ],
    features: [
      'Explore destinations — images, descriptions, ratings and prices',
      'Search & filters — travel style, region and sorting',
      'Destination details — stories, itineraries and photo galleries',
      'Favorites — save and manage places you love',
      'Trip planner — create, organize and manage plans',
      'Accounts & profile — registration, login and profile',
      'Traveler notes — ratings and reviews on every place',
      'Firebase integration — authentication and cloud data',
      'Helpful pages — Contact, FAQ, About, Terms, Privacy',
      'Responsive design — desktop, tablet and mobile',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Git', 'GitHub Pages'],
    thumbType: 'image',
    thumbImage: roamoraPageUrls[3],
    heroImage: roamoraPageUrls[3],
    gallery: roamoraGallery,
    demoUrl: 'https://muhammadsufiyan-dev.github.io/roamora',
    githubUrl: 'https://github.com/muhammadsufiyan-dev/roamora',
    pdfUrl: `${import.meta.env.BASE_URL}roamora-case-study.pdf`,
    pdfLabel: 'View full case study (PDF)',
    pdfCover: roamoraPdfCover,
    pdfPages: 16,
    pdfBlurb:
      'A complete 16-page walkthrough — home, explore, destination details, itinerary, trip planner, saved places, profile and contact, plus the thinking behind each screen.',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
