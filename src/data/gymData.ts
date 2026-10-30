/**
 * Real Business Data for Burn & Blast Gym (बर्न एंड ब्लास्ट जिम)
 * Chhatrapati Sambhajinagar, Maharashtra
 */

export interface GymService {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'strength' | 'cardio' | 'workout' | 'lifestyle';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  isReal?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  source: string;
  highlight: string;
}

export const BUSINESS_INFO = {
  name: 'Burn & Blast Gym',
  hindiName: 'बर्न एंड ब्लास्ट जिम',
  tagline: 'A Journey To Your Fit Life',
  category: 'Gym and Fitness Center',
  rating: 4.4,
  reviewCount: 70,
  phoneDisplay: '088060 60605',
  phoneTel: '08806060605',
  whatsappNumber: '918806060605',
  whatsappDisplay: '+91 88060 60605',
  address: 'V9H7+667 Connaught Place, N 5, Cidco Road, Cannought Garden, CIDCO Cannought, Chhatrapati Sambhajinagar, Maharashtra 431003',
  landmark: 'Maharana Pratap Singh Garden',
  city: 'Chhatrapati Sambhajinagar, Maharashtra',
  trainerName: 'Mohsin Tamboli',
  trainerRole: 'Head Coach & Personal Trainer',
  // Static paths served from public/ directory for 100% reliability on Vercel
  trainerRealImage: '/images/trainer_mohsin_deadlift.jpeg',
  storefrontRealImage: '/images/gym_storefront.jpeg',
  floorRealImage: '/images/gym_hall_main.jpeg',
  communityRealImage: '/images/gym_community.jpeg',
  equipmentRealImage: '/images/gym_hall_consistency.jpeg',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Burn+and+Blast+Gym+Chhatrapati+Sambhajinagar',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Burn+and+Blast+Gym+Chhatrapati+Sambhajinagar&output=embed'
};

export const SERVICES_LIST: GymService[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    category: 'Hypertrophy & Power',
    description: 'Build muscular power and functional strength utilizing high-grade Olympic barbells, heavy dumbbells, and specialized resistance machines.',
    iconName: 'Dumbbell',
    image: '/images/trainer_mohsin_deadlift.jpeg',
    features: ['Compound lifts', 'Form perfection', 'Progressive loading']
  },
  {
    id: 'cardio-training',
    title: 'Cardio Training',
    category: 'Endurance & Heart Health',
    description: 'Improve aerobic capacity, cardiovascular stamina, and daily energy on premium commercial treadmills and cross-trainers.',
    iconName: 'Flame',
    image: '/images/gym_cardio_stretch_1793352856772.jpg',
    features: ['Aerobic conditioning', 'Stamina building', 'Heart health monitoring']
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'One-on-One Coaching',
    description: 'Receive dedicated 1-on-1 coaching and technique supervision from Coach Mohsin Tamboli designed around your unique body and goals.',
    iconName: 'UserCheck',
    image: '/images/trainer_mohsin_deadlift.jpeg',
    features: ['Custom routine', 'Individual attention', 'Continuous motivation']
  },
  {
    id: 'weight-management',
    title: 'Weight Management',
    category: 'Body Transformation',
    description: 'Evidence-based exercise guidance and sustainable routine adjustments to support safe weight loss or healthy muscle weight gain.',
    iconName: 'Scale',
    image: '/images/gym_hall_main.jpeg',
    features: ['Fat loss guidance', 'Lean mass gain', 'Metabolism boost']
  },
  {
    id: 'workout-planning',
    title: 'Workout Planning',
    category: 'Structured Routines',
    description: 'Systematic split routines balancing push, pull, legs, and core training to keep you consistent without overtraining or burnout.',
    iconName: 'CalendarCheck',
    image: '/images/gym_hall_consistency.jpeg',
    features: ['Split scheduling', 'Exercise selection', 'Rest & recovery balance']
  },
  {
    id: 'diet-guidance',
    title: 'Diet Guidance',
    category: 'Nutritional Habits',
    description: 'Practical, everyday dietary advice and protein intake recommendations to fuel tough workouts and optimize muscle recovery.',
    iconName: 'Apple',
    image: '/images/gym_cardio_stretch_1793352856772.jpg',
    features: ['Daily macro awareness', 'Hydration timing', 'Pre/post workout fuel']
  },
  {
    id: 'stretching-flexibility',
    title: 'Stretching & Flexibility',
    category: 'Mobility & Recovery',
    description: 'Dedicated stretching area with mats and foam rollers to improve joint range of motion, relieve soreness, and prevent workout injuries.',
    iconName: 'Activity',
    image: '/images/gym_cardio_stretch_1793352856772.jpg',
    features: ['Dynamic warm-ups', 'Cool-down stretches', 'Injury prevention']
  },
  {
    id: 'fitness-guidance',
    title: 'Fitness Guidance',
    category: 'Orientation & Support',
    description: 'Friendly onboarding for beginners and intermediate lifters to establish proper gym etiquette, posture, and long-term habits.',
    iconName: 'Compass',
    image: '/images/gym_community.jpeg',
    features: ['Beginner orientation', 'Posture checks', 'Habit building']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-real-storefront',
    title: 'Official Gym Storefront & 3D Signboard',
    category: 'interior',
    categoryLabel: 'Storefront',
    imageUrl: '/images/gym_storefront.jpeg',
    caption: 'Official entrance at Connaught Place: "BURN & BLAST GYM - A JOURNEY TO YOUR FIT LIFE (बर्न & ब्लास्ट जिम)".',
    isReal: true
  },
  {
    id: 'gal-real-trainer',
    title: 'Coach Mohsin Tamboli - Deadlift Station',
    category: 'strength',
    categoryLabel: 'Trainer In Action',
    imageUrl: '/images/trainer_mohsin_deadlift.jpeg',
    caption: 'Trainer Mohsin Tamboli lifting on the wooden deadlift platform with Elefas bumper plates at Burn & Blast Gym.',
    isReal: true
  },
  {
    id: 'gal-real-floor',
    title: 'Main Workout Hall & USI Boxing Bag',
    category: 'interior',
    categoryLabel: 'Gym Interior',
    imageUrl: '/images/gym_hall_main.jpeg',
    caption: 'Long training aisle featuring USI Universal punch bag, overhead geometric lighting, and "FOCUS" pillar.',
    isReal: true
  },
  {
    id: 'gal-real-community',
    title: 'Burn & Blast Gym Community Celebration',
    category: 'lifestyle',
    categoryLabel: 'Gym Community',
    imageUrl: '/images/gym_community.jpeg',
    caption: 'Members, trainers, and family gathered inside Burn & Blast Gym for celebration and motivation.',
    isReal: true
  },
  {
    id: 'gal-real-equipment',
    title: 'Consistency Pillar & Training Hall',
    category: 'strength',
    categoryLabel: 'Strength Zone',
    imageUrl: '/images/gym_hall_consistency.jpeg',
    caption: 'Comprehensive workout hall showing preacher curl bench, resistance machines, and "CONSISTENCY" pillar.',
    isReal: true
  },
  {
    id: 'gal-cardio',
    title: 'Cardio Deck & Endurance Station',
    category: 'cardio',
    categoryLabel: 'Cardio Area',
    imageUrl: '/images/gym_cardio_stretch_1793352856772.jpg',
    caption: 'Commercial treadmills, rowers, and stretching mats in an atmospheric training room.'
  }
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Verified Gym Member',
    initials: 'VM',
    rating: 5,
    date: 'Google Review',
    text: 'Joining Burn & Blast Gym has been one of the best decisions for my fitness journey. The biggest reason is our trainer Mohsin Tamboli — not just an amazing coach but truly like a big brother to everyone in the gym.',
    source: 'Google Review',
    highlight: 'Trainer Mohsin is like a big brother to everyone'
  },
  {
    id: 'rev-2',
    name: 'Fitness Enthusiast',
    initials: 'FE',
    rating: 5,
    date: 'Google Review',
    text: 'Burn and Blast Gym really impressed me with its certified trainers and the way they give personal guidance during every session. The equipment is top quality, the coaches stay motivating throughout, and the place feels clean and energetic.',
    source: 'Google Review',
    highlight: 'Top quality equipment, clean and energetic space'
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Supportive Trainers',
    description: 'Attentive coaches who encourage you every step of the way without intimidation.',
    iconName: 'Users'
  },
  {
    title: 'Personal Guidance',
    description: 'Detailed focus on correct posture, safe range of motion, and injury-free mechanics.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Quality Equipment',
    description: 'Well-maintained iron weights, barbells, benches, and resistance machines for serious workouts.',
    iconName: 'Zap'
  },
  {
    title: 'Clean Environment',
    description: 'Hygienic training floor, sanitized handles, and clean restrooms for peace of mind.',
    iconName: 'Sparkles'
  },
  {
    title: 'Cardio & Stretching Area',
    description: 'Dedicated zones designed for warm-ups, running, rowers, and post-session recovery.',
    iconName: 'HeartPulse'
  },
  {
    title: 'Motivating Atmosphere',
    description: 'High-energy soundtrack, neon orange ambiance, and peers who push you to stay consistent.',
    iconName: 'Trophy'
  }
];
