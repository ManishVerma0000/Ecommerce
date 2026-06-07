export interface Product {
  id: number;
  name: string;
  category: string;
  audience: "Men" | "Women" | "Kids" | "Unisex";
  price: number;
  originalPrice?: number;
  colors: number;
  image: string;
  isOnSale?: boolean;
  isNew?: boolean;
  collection: string;
  sizes: string[];
  tags: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Cosmic Unity",
    category: "Basketball",
    audience: "Unisex",
    price: 459,
    colors: 3,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&h=700&fit=crop",
    isNew: true,
    collection: "Performance",
    sizes: ["40", "41", "42", "43", "44"],
    tags: ["Sustainable Materials", "Basketball", "Training"],
    description: "Responsive court cushioning with a secure upper built for quick cuts and long sessions.",
  },
  {
    id: 2,
    name: "Nike Air Max Plus 3",
    category: "Lifestyle",
    audience: "Men",
    price: 799,
    originalPrice: 899,
    colors: 1,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=700&h=700&fit=crop",
    isOnSale: true,
    collection: "Air Icons",
    sizes: ["40", "42", "44", "45"],
    tags: ["Men's Shoe", "Casual", "Air Max"],
    description: "A bold street profile with visible Air cushioning and all-day structure.",
  },
  {
    id: 3,
    name: "Nike Air Max Plus",
    category: "Lifestyle",
    audience: "Men",
    price: 379,
    colors: 2,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=700&h=700&fit=crop",
    collection: "Air Icons",
    sizes: ["39", "40", "41", "42", "43"],
    tags: ["Men's Shoe", "Casual", "Classic"],
    description: "Tuned support and a sculpted upper made for everyday rotation.",
  },
  {
    id: 4,
    name: "Nike Revolution 6",
    category: "Running",
    audience: "Kids",
    price: 199,
    colors: 4,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=700&h=700&fit=crop",
    isNew: true,
    collection: "Run Ready",
    sizes: ["35", "36", "37", "38", "39"],
    tags: ["Kids' Shoe", "Running", "Training"],
    description: "Lightweight comfort for school days, practice, and weekend miles.",
  },
  {
    id: 5,
    name: "Nike Court Borough",
    category: "Lifestyle",
    audience: "Women",
    price: 319,
    colors: 5,
    image: "https://images.unsplash.com/photo-1552346154-ff0ee11b779?w=700&h=700&fit=crop",
    collection: "Court Classics",
    sizes: ["36", "37", "38", "39", "40", "41"],
    tags: ["Women's Shoe", "Casual", "Classic"],
    description: "A clean court-inspired sneaker with soft padding and versatile daily style.",
  },
  {
    id: 6,
    name: "Nike Blazer Mid",
    category: "Casual",
    audience: "Women",
    price: 429,
    originalPrice: 499,
    colors: 3,
    image: "https://images.unsplash.com/photo-1595777707802-9b2a66948e75?w=700&h=700&fit=crop",
    isOnSale: true,
    collection: "Court Classics",
    sizes: ["36", "38", "39", "40", "42"],
    tags: ["Casual", "Mid Top", "Classic"],
    description: "Vintage basketball style with a durable mid-cut silhouette.",
  },
  {
    id: 7,
    name: "Nike Pegasus Turbo",
    category: "Running",
    audience: "Men",
    price: 289,
    colors: 2,
    image: "https://images.unsplash.com/photo-1597045866519-bf8a50a53b59?w=700&h=700&fit=crop",
    isNew: true,
    collection: "Run Ready",
    sizes: ["40", "41", "42", "43", "44", "45", "47"],
    tags: ["Running", "Training", "Lightweight"],
    description: "Fast, springy cushioning for tempo runs, workouts, and daily training.",
  },
  {
    id: 8,
    name: "Nike Cortez",
    category: "Classic",
    audience: "Unisex",
    price: 349,
    colors: 6,
    image: "https://images.unsplash.com/photo-1606107557529-da4dd904b48e?w=700&h=700&fit=crop",
    collection: "Heritage",
    sizes: ["36", "37", "38", "40", "42", "44"],
    tags: ["Classic", "Casual", "Heritage"],
    description: "A low-profile heritage runner with crisp lines and everyday comfort.",
  },
  {
    id: 9,
    name: "Adidas Campus 00s",
    category: "Lifestyle",
    audience: "Unisex",
    price: 269,
    colors: 4,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=700&h=700&fit=crop",
    isNew: true,
    collection: "Street Edit",
    sizes: ["36", "38", "40", "42", "44"],
    tags: ["Lifestyle", "Streetwear", "Classic"],
    description: "Chunky suede-inspired street style with a low profile and easy everyday comfort.",
  },
  {
    id: 10,
    name: "New Balance 327",
    category: "Classic",
    audience: "Women",
    price: 329,
    colors: 3,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=700&h=700&fit=crop",
    collection: "Heritage",
    sizes: ["36", "37", "38", "39", "40"],
    tags: ["Classic", "Lifestyle", "Retro"],
    description: "Retro running lines with a bold outsole and soft daily cushioning.",
  },
  {
    id: 11,
    name: "StepHub Tech Hoodie",
    category: "Apparel",
    audience: "Men",
    price: 149,
    colors: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&h=700&fit=crop",
    isNew: true,
    collection: "Street Edit",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Hoodie", "Apparel", "Model", "Streetwear"],
    description: "A structured everyday hoodie with a soft interior and clean athletic fit.",
  },
  {
    id: 12,
    name: "StepHub Run Jacket",
    category: "Apparel",
    audience: "Women",
    price: 179,
    originalPrice: 219,
    colors: 3,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=700&h=700&fit=crop",
    isOnSale: true,
    collection: "Run Ready",
    sizes: ["XS", "S", "M", "L"],
    tags: ["Jacket", "Apparel", "Model", "Running"],
    description: "A light layer for warmups and city runs, styled with a breathable relaxed fit.",
  },
  {
    id: 13,
    name: "StepHub Training Set",
    category: "Apparel",
    audience: "Unisex",
    price: 199,
    colors: 2,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&h=700&fit=crop",
    collection: "Performance",
    sizes: ["S", "M", "L", "XL"],
    tags: ["Training", "Apparel", "Model", "Set"],
    description: "A coordinated training look built for movement, travel, and recovery days.",
  },
];

export const navItems = [
  { label: "New Releases", href: "/new-releases" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Sale", href: "/sale" },
  { label: "Collections", href: "/collections" },
];

export function getProduct(id: string) {
  return products.find((product) => product.id.toString() === id);
}

export function filterProducts(route: string) {
  switch (route) {
    case "new-releases":
      return products.filter((product) => product.isNew);
    case "men":
      return products.filter((product) => product.audience === "Men" || product.audience === "Unisex");
    case "women":
      return products.filter((product) => product.audience === "Women" || product.audience === "Unisex");
    case "kids":
      return products.filter((product) => product.audience === "Kids");
    case "sale":
      return products.filter((product) => product.isOnSale);
    default:
      return products;
  }
}

export const collections = Array.from(new Set(products.map((product) => product.collection)));
