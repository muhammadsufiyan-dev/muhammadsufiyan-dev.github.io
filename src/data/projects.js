import cityGuidePhones from '../assets/cityguide-phones.jpg'
import cityGuidePdfCover from '../assets/cityguide-pdf-cover.jpg'
import cityGuidePdfAbout from '../assets/cityguide-pdf-about.jpg'
import cartivaPdfCover from '../assets/cartiva-pdf-cover.jpg'

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

export const projects = [
  {
    id: 'ecommerce',
    category: 'Web',
    label: 'Web development · Freelance',
    title: 'E-commerce Website Development',
    tagline:
      'A fully functional e-commerce site with product listings, shopping cart functionality, and a responsive, mobile-first layout for smooth navigation.',
    description:
      "Built as a freelance client project, this store covers the essentials a small business needs to sell online: browsable product listings, a shopping cart that actually works, and an interface that stays usable from a phone in one hand. The focus throughout was smooth navigation and a modern, uncluttered interface.",
    role: 'End-to-end freelance development — from front-end layout and styling to the PHP/MySQL back-end powering products and cart logic, plus ongoing UI/UX refinement based on client feedback.',
    features: [
      'Full product listing and browsing experience',
      'Working shopping cart with quantity and item management',
      'Responsive, mobile-first layout',
      'Clean, modern storefront interface',
      'PHP & MySQL back-end for product and order data',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    thumbType: 'icon',
    gallery: [],
    demoUrl: null,
    githubUrl: null,
  },
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
    thumbImage: cartivaPdfCover,
    heroImage: cartivaPdfCover,
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
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
