// Portfolio data taken from the supplied resumes.
// `kind` separates professional work from independent and open-source work.
// Contributor and employer names are intentionally omitted; the portfolio
// disclaimer explains that the work was done for the developers employers.
// External links are included only where an official site or store listing was verified.

export const projects = [
  {
    id: 'ixfi',
    name: 'IXFI — Crypto Wallet & Debit Card',
    category: 'mobile',
    kind: 'professional',
    type: 'Fintech · Android & iOS',
    description:
      'A blockchain-based crypto wallet and VISA debit card product with trading, wallet and payment flows. The Android work contributed to a 40% increase in transaction volume within six months.',
    contributions: [
      'Secure client-server communication with AES/RSA encryption and SSL pinning, multi-module Compose architecture, Web3 wallet and real-time transaction updates.',
      'Led iOS development of the IXFI Crypto World app, delivered new features and optimised performance for App Store releases.',
      'Built the trading app UI fully in Jetpack Compose, with Ktor WebSockets for market data plus buy, sell, convert and wallet modules.',
    ],
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Ktor WebSockets',
      'Swift',
      'SwiftUI',
      'AES/RSA',
      'SSL pinning',
    ],
    visual: 'phone',
    tone: 'blue',
    image: 'projects/ixfi.webp',
    imageAlt:
      'IXFI crypto app screenshot from its Google Play listing, showing the dashboard and brand.',
    link: {
      label: 'View on Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.ixfi&hl=en',
    },
  },
  {
    id: 'zee5',
    name: 'Zee5 Premium — OTT Streaming',
    category: 'mobile',
    kind: 'professional',
    type: 'Media · Android',
    description:
      'Android work on the Zee5 Premium streaming application, covering media playback and the account, offer and payment journeys that support subscriptions.',
    contributions: [
      'Implemented ExoPlayer video and MediaPlayer audio playback, resolved 150+ production bugs, and enhanced the Wallet, Offer, Profile and Payment modules.',
    ],
    technologies: [
      'Android',
      'Kotlin',
      'ExoPlayer',
      'MediaPlayer',
      'REST APIs',
      'Analytics',
    ],
    visual: 'phone',
    tone: 'rose',
    image: 'projects/zee5.webp',
    imageAlt:
      'Zee5 streaming app screenshot from its Google Play listing, showing the Z5 logo and a movie on a phone.',
    link: {
      label: 'View on Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.graymatrix.did&hl=en',
    },
  },
  {
    id: 'tgi-connect',
    name: 'TGI Connect — Fleet Telematics',
    category: 'backend',
    kind: 'professional',
    type: 'Logistics platform · Backend',
    description:
      'A satellite-based trailer asset tracking and fleet management platform. Backend services standardise data exchange with dispatch and ELD systems and turn telemetry into alerts and reports.',
    contributions: [
      'Built REST microservices and integration adapters, AWS Lambda telemetry ingestion, real-time geofence and device alerts, and device assignment features.',
    ],
    technologies: [
      'Node.js',
      'AWS Lambda',
      'Amazon ECS',
      'SQS & SNS',
      'PostgreSQL',
      'MongoDB',
      'Snowflake',
      'Redis',
    ],
    visual: 'dashboard',
    tone: 'indigo',
    link: {
      label: 'Official product site',
      url: 'https://tgi-connect.com/',
    },
  },
  {
    id: 'stepup-horse',
    name: 'StepUp Horse — Horse Tracking',
    category: 'mobile',
    kind: 'professional',
    type: 'Tracking app · iOS',
    description:
      'An iOS application for horse tracking, shipped through the full App Store lifecycle.',
    contributions: [
      'iOS development and App Store delivery as part of his mobile project portfolio.',
    ],
    technologies: ['Swift', 'iOS', 'App Store'],
    visual: 'phone',
    tone: 'green',
    link: {
      label: 'Official product site',
      url: 'https://stepuphorse.com/',
    },
  },
  {
    id: 'swiss-watch-auction',
    name: 'Swiss Watch Auction',
    category: 'mobile',
    kind: 'professional',
    type: 'Marketplace · Android',
    description:
      'Buyer and seller apps for live watch auctions, where bids and catalogue media need to update quickly and stay in sync.',
    contributions: [
      'Implemented real-time bidding with Socket.IO and secure, scalable image storage on AWS S3.',
    ],
    technologies: ['Android', 'Socket.IO', 'AWS S3', 'REST APIs'],
    visual: 'phone',
    tone: 'amber',
    link: null,
  },
  {
    id: 'zidni-academy',
    name: 'Zidni Academy — E-Learning Platform',
    category: 'backend',
    kind: 'professional',
    type: 'Education · Backend',
    description:
      'An online education platform serving approximately 45,000 users, with course delivery, live video and payment flows behind the student experience.',
    contributions: [
      'Designed backend microservices and integrated real-time video and payment flows for the platform.',
    ],
    technologies: [
      'Node.js',
      'Microservices',
      'REST APIs',
      'Payments',
      'Real-time video',
    ],
    visual: 'dashboard',
    tone: 'teal',
    link: null,
  },
  {
    id: 'kpmg-asset-assurance',
    name: 'KPMG Asset Assurance Tool',
    category: 'backend',
    kind: 'professional',
    type: 'Enterprise tool · Backend & mobile',
    description:
      'Backend services and a mobile QR-scanning component for managing large-scale asset data and producing reports.',
    contributions: [
      'Developed backend services and the mobile QR-scanning component used for large-scale asset data and reporting.',
    ],
    technologies: ['Node.js', 'REST APIs', 'QR scanning', 'Reporting'],
    visual: 'dashboard',
    tone: 'slate',
    link: null,
  },
  {
    id: 'onevasco',
    name: 'OneVasco — Visa Application',
    category: 'mobile',
    kind: 'professional',
    type: 'Visa services · Flutter',
    description:
      'A cross-platform visa application that simplifies the visa workflow for international travellers, with real-time status updates, document handling and multi-language support.',
    contributions: [
      'Developed key app features with Flutter and GetX, Google/Apple/email sign-in, CleverTap integration, app links and localization.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'GetX',
      'Firebase',
      'CleverTap',
      'App Linking',
      'REST APIs',
    ],
    visual: 'phone',
    tone: 'blue',
    link: null,
  },
  {
    id: 'cruizz',
    name: 'Cruizz — Ride Sharing',
    category: 'mobile',
    kind: 'professional',
    type: 'Ride sharing · Flutter',
    description:
      'A ride-sharing app connecting drivers and passengers, with live location tracking, route visualization and in-app notifications.',
    contributions: [
      'Built ride-matching logic, polyline route visualization and real-time location tracking with Google Maps and Firebase.',
    ],
    technologies: [
      'Flutter',
      'GetX',
      'Google Maps API',
      'Polyline routes',
      'Firebase',
    ],
    visual: 'phone',
    tone: 'teal',
    link: null,
  },
  {
    id: 'trust-money',
    name: 'Trust Money — Investments & KYC',
    category: 'mobile',
    kind: 'professional',
    type: 'Fintech · Flutter',
    description:
      'An investment app for bonds, IPOs and Sovereign Gold Bonds, with a guided onboarding and KYC flow, secure document upload and real-time status tracking.',
    contributions: [
      'Implemented the PAN-based KYC flow, secure document uploads and investment tracking with Riverpod and Flutter Hooks.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Flutter Hooks',
      'Firebase Messaging',
      'REST APIs',
      'KYC',
    ],
    visual: 'phone',
    tone: 'green',
    link: null,
  },
  {
    id: 'vani',
    name: 'VANI — AI Voice Translation',
    category: 'mobile',
    kind: 'professional',
    type: 'AI translation · Flutter',
    description:
      'A translation app offering voice-to-voice, voice-to-text and text-to-voice modes across multiple languages.',
    contributions: [
      'Integrated Google Speech-to-Text, Text-to-Speech and translation APIs, along with audio recording and multi-language support.',
    ],
    technologies: [
      'Flutter',
      'GetX',
      'Google Speech-to-Text',
      'Text-to-Speech',
      'Translation API',
    ],
    visual: 'phone',
    tone: 'indigo',
    link: null,
  },
  {
    id: 'vision-jrf',
    name: 'Vision JRF — Education Platform',
    category: 'backend',
    kind: 'independent',
    type: 'Education · Compose Multiplatform',
    description:
      'An education platform covering student workflows, admin operations, payments, analytics and reporting, delivered end to end as an independent consultant.',
    contributions: [
      'Owned development of the admin panel and student dashboard, Razorpay payments and subscriptions, analytics workflows, API design and deployment.',
    ],
    technologies: [
      'Compose Multiplatform',
      'Kotlin',
      'Firebase',
      'REST APIs',
      'Node.js',
      'GoLang',
      'Razorpay',
    ],
    visual: 'dashboard',
    tone: 'blue',
    link: null,
  },
  {
    id: 'compose-libraries',
    name: 'EasyNiddle & CottonSheet',
    category: 'open-source',
    kind: 'open-source',
    type: 'Open source · Jetpack Compose',
    description:
      'Two open-source Android libraries: EasyNiddle brings type-safe, boilerplate-free APIs to Jetpack Navigation 3, and CottonSheet provides a Material 3 bottom sheet with smooth gestures.',
    contributions: [
      'Designed and published both libraries for the Android developer community.',
    ],
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Jetpack Navigation 3',
      'Material 3',
    ],
    visual: 'code',
    tone: 'indigo',
    link: null,
  },
]

export const projectFilters = [
  { label: 'All projects', value: 'all' },
  { label: 'Mobile apps', value: 'mobile' },
  { label: 'Backend & platforms', value: 'backend' },
  { label: 'Open source', value: 'open-source' },
]
