import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'cat_electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Discover the latest in consumer electronics and gadgets.',
    image: '/images/categories/electronics.jpg',
    featured: true,
    subCategories: ['cat_audio', 'cat_computers', 'cat_gaming']
  },
  {
    id: 'cat_audio',
    name: 'Audio',
    slug: 'audio',
    description: 'High-quality headphones, speakers, and audio accessories.',
    image: '/images/categories/audio.jpg',
    featured: false,
    parentId: 'cat_electronics'
  },
  {
    id: 'cat_computers',
    name: 'Computers & Tablets',
    slug: 'computers-tablets',
    description: 'Laptops, desktops, and tablets for work and play.',
    image: '/images/categories/computers.jpg',
    featured: true,
    parentId: 'cat_electronics'
  },
  {
    id: 'cat_gaming',
    name: 'Gaming',
    slug: 'gaming',
    description: 'Gaming consoles, accessories, and peripherals.',
    image: '/images/categories/gaming.jpg',
    featured: true,
    parentId: 'cat_electronics'
  },
  {
    id: 'cat_wearables',
    name: 'Wearable Tech',
    slug: 'wearable-tech',
    description: 'Smartwatches, fitness trackers, and other wearable technology.',
    image: '/images/categories/wearables.jpg',
    featured: true
  },
  {
    id: 'cat_furniture',
    name: 'Furniture',
    slug: 'furniture',
    description: 'Modern and ergonomic furniture for home and office.',
    image: '/images/categories/furniture.jpg',
    featured: true,
    subCategories: ['cat_office_furniture', 'cat_home_furniture']
  },
  {
    id: 'cat_office_furniture',
    name: 'Office Furniture',
    slug: 'office-furniture',
    description: 'Ergonomic chairs, desks, and office organization solutions.',
    image: '/images/categories/office-furniture.jpg',
    featured: false,
    parentId: 'cat_furniture'
  },
  {
    id: 'cat_home_furniture',
    name: 'Home Furniture',
    slug: 'home-furniture',
    description: 'Stylish and comfortable furniture for your living space.',
    image: '/images/categories/home-furniture.jpg',
    featured: false,
    parentId: 'cat_furniture'
  },
  {
    id: 'cat_photography',
    name: 'Photography',
    slug: 'photography',
    description: 'Cameras, lenses, and photography accessories for professionals and enthusiasts.',
    image: '/images/categories/photography.jpg',
    featured: true
  },
  {
    id: 'cat_fitness',
    name: 'Fitness & Wellness',
    slug: 'fitness-wellness',
    description: 'Equipment and accessories for your fitness journey and wellness routine.',
    image: '/images/categories/fitness.jpg',
    featured: true,
    subCategories: ['cat_yoga', 'cat_cardio']
  },
  {
    id: 'cat_yoga',
    name: 'Yoga & Meditation',
    slug: 'yoga-meditation',
    description: 'Yoga mats, blocks, and meditation accessories for mindful practice.',
    image: '/images/categories/yoga.jpg',
    featured: false,
    parentId: 'cat_fitness'
  },
  {
    id: 'cat_cardio',
    name: 'Cardio Equipment',
    slug: 'cardio-equipment',
    description: 'Treadmills, exercise bikes, and other cardio equipment for home workouts.',
    image: '/images/categories/cardio.jpg',
    featured: false,
    parentId: 'cat_fitness'
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getFeaturedCategories = (limit: number = 6): Category[] => {
  return categories
    .filter(category => category.featured)
    .slice(0, limit);
};

export const getSubcategories = (parentId: string): Category[] => {
  return categories.filter(category => category.parentId === parentId);
};

export const getCategoryPath = (categoryId: string): Category[] => {
  const result: Category[] = [];
  let currentCategory = getCategoryById(categoryId);

  while (currentCategory) {
    result.unshift(currentCategory);
    if (currentCategory.parentId) {
      currentCategory = getCategoryById(currentCategory.parentId);
    } else {
      break;
    }
  }

  return result;
};
