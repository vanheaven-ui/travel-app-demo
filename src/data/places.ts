export type Place = {
  id: number;
  name: string;
  location: string;
  price: number;
  tags: string[];
  image_url: string;
  description: string;
};

export const places = [
  {
    id: 1,
    name: "Golden Sands Resort",
    location: "Hawaii, USA",
    price: 500,
    tags: ["beach", "luxury", "resort"],
    image_url:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=600",
    description:
      "A luxurious resort with pristine beaches and crystal-clear water. Perfect for a relaxing getaway.",
  },
  {
    id: 2,
    name: "Mountain View Cabin",
    location: "Colorado, USA",
    price: 250,
    tags: ["mountain", "cabin", "adventure"],
    image_url:
      "https://images.pexels.com/photos/552957/pexels-photo-552957.jpeg?auto=compress&cs=tinysrgb&h=600",
    description:
      "Cozy cabin in the Rockies. Ideal for hiking, skiing, and escaping into nature.",
  },
  {
    id: 3,
    name: "Historic City Center",
    location: "Prague, Czech Republic",
    price: 150,
    tags: ["city", "historic", "culture"],
    image_url:
      "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&h=600",
    description:
      "Explore cobblestone streets, castles, and rich European culture.",
  },
  {
    id: 4,
    name: "Desert Oasis Villa",
    location: "Dubai, UAE",
    price: 800,
    tags: ["luxury", "desert", "villa"],
    image_url:
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&h=600",
    description:
      "Exclusive villa in the desert. Private, luxurious, and breathtaking.",
  },
  {
    id: 5,
    name: "Northern Lights Lodge",
    location: "Iceland",
    price: 350,
    tags: ["mountain", "adventure", "nature"],
    image_url:
      "https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&h=600",
    description:
      "Witness the Aurora Borealis from a warm lodge in Iceland’s wilderness.",
  },
  {
    id: 6,
    name: "Rainforest Treehouse",
    location: "Costa Rica",
    price: 450,
    tags: ["nature", "adventure", "ecotourism"],
    image_url:
      "https://images.pexels.com/photos/1679773/pexels-photo-1679773.jpeg?auto=compress&cs=tinysrgb&h=600",
    description: "Live among the trees in this eco-luxury retreat.",
  },
  {
    id: 7,
    name: "Kyoto Temple Stay",
    location: "Kyoto, Japan",
    price: 200,
    tags: ["culture", "historic"],
    image_url:
      "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&h=600",
    description: "Immerse in Zen culture in a tranquil temple setting.",
  },
  {
    id: 8,
    name: "Swiss Alps Ski Chalet",
    location: "Zermatt, Switzerland",
    price: 600,
    tags: ["mountain", "luxury", "ski"],
    image_url:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=600",
    description: "Chalet with breathtaking alpine views and ski access.",
  },
  {
    id: 9,
    name: "Venetian Grand Stay",
    location: "Venice, Italy",
    price: 550,
    tags: ["city", "historic", "luxury"],
    image_url:
      "https://images.pexels.com/photos/15543102/pexels-photo-15543102.jpeg?auto=compress&cs=tinysrgb&h=600",
    description: "Romantic canal-side lodging in historic Venice.",
  },
  {
    id: 10,
    name: "Serengeti Safari Camp",
    location: "Tanzania",
    price: 900,
    tags: ["nature", "adventure", "safari"],
    image_url:
      "https://images.pexels.com/photos/5574041/pexels-photo-5574041.jpeg?auto=compress&cs=tinysrgb&h=600",
    description: "Experience African wildlife in a luxury safari tent.",
  },
];

