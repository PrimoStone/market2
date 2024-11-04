export interface Store {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  verified: boolean;
  description: string;
  story: string;
  yearsActive: number;
  totalSales: number;
  featured: string[];
  products: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }[];
}

export const stores: Store[] = [
  {
    id: 1,
    name: "Artisan's Corner",
    category: "Handmade Crafts",
    rating: 4.9,
    reviews: 127,
    location: "Camden, London",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=800",
    verified: true,
    description: "Handcrafted pottery and ceramics made with traditional techniques and modern designs.",
    story: "Started in our small home studio, we've been crafting unique pottery pieces for over a decade...",
    yearsActive: 10,
    totalSales: 2500,
    featured: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=200",
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=200",
      "https://images.unsplash.com/photo-1610701596464-89b0bd1ff888?auto=format&fit=crop&w=200"
    ],
    products: [
      {
        id: 1,
        name: "Handmade Ceramic Mug",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400",
        description: "Hand-thrown ceramic mug with unique glazing pattern."
      },
      // Add more products...
    ]
  },
  {
    id: 2,
    name: "The Cheese Vault",
    category: "Artisan Food",
    rating: 4.8,
    reviews: 89,
    location: "Borough Market, London",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800",
    verified: true,
    description: "Curated selection of artisanal cheeses from local producers.",
    story: "Our passion for cheese led us to create a marketplace for local dairy artisans...",
    yearsActive: 5,
    totalSales: 1800,
    featured: [
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=200",
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=200",
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=200"
    ],
    products: [
      {
        id: 1,
        name: "Aged Cheddar",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400",
        description: "24-month aged artisanal cheddar."
      },
      // Add more products...
    ]
  }
];