export interface Trader {
  id: number;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  verified: boolean;
  description: string;
  yearsOfExperience: number;
  completedJobs: number;
}

export const traders: Trader[] = [
  {
    id: 1,
    name: 'John Smith',
    profession: 'Plumber',
    rating: 4.9,
    reviews: 127,
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400',
    verified: true,
    description: 'Expert plumber with over 15 years of experience in residential and commercial plumbing. Specializing in emergency repairs, installations, and maintenance.',
    yearsOfExperience: 15,
    completedJobs: 1500,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    profession: 'Painter',
    rating: 4.8,
    reviews: 89,
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400',
    verified: true,
    description: 'Professional painter offering premium interior and exterior painting services. Known for attention to detail and customer satisfaction.',
    yearsOfExperience: 8,
    completedJobs: 750,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    profession: 'Mechanic',
    rating: 4.7,
    reviews: 156,
    location: 'Queens, NY',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400',
    verified: true,
    description: 'Certified mechanic specializing in all types of vehicle repairs and maintenance. Providing honest, reliable service at competitive rates.',
    yearsOfExperience: 12,
    completedJobs: 2000,
  },
];