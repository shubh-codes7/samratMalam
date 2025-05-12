import product1 from '../assets/Products/Product 1.jpeg';
import product2 from '../assets/Products/Product 2.jpeg';
import product3 from '../assets/Products/Product 3.jpeg';
import product4 from '../assets/Products/14.png';

export const products = [
  {
    id: 1,
    name: "Samrat Malam",
    description: "Samrat Malam helps in all types of muscle pain and joint pain. It is made of of narayana oil which is a ayurvedic oil.",
    shortDescription: "Samrat Malam helps in all types of muscle pain and joint pain.",
    composition: [
      "Oil of Narayan",
      "Oil of Winter Green",
      "Oil of Nelgiri",
      "Rurpentine Oil"
    ],
    image: product1,
    sizes: [
      { size: "20 gm", price: 80 },
      { size: "50 gm", price: 150 },
    ],
    benefits: [
      "Knee Pain",
      "Neck Pain",
      "Back Pain",
      "Swelling"
    ],
    category: "Muscle Pain"
  },
  {
    id: 2,
    name: "Samrat Balm",
    description: "Advanced formula to support healthy blood sugar levels and metabolic function",
    shortDescription: "Blood sugar support formula",
    image: product2,
    sizes: [
      { size: "20 gm", price: 50 },
      { size: "60 gm", price: 74 }
    ],
    benefits: [
      "Supports healthy glucose metabolism",
      "Contains natural ingredients",
      "Helps maintain energy levels"
    ],
    category: "Joint Pain"
  },
  {
    id: 3,
    name: "Samrat Strong Balm",
    description: "Joint pain relief formula with glucosamine and chondroitin for improved mobility",
    shortDescription: "Joint pain relief formula",
    image: product3,
    sizes: [
      { size: "30 gm", price: 44 },
      { size: "60 gm", price: 84 }
    ],
    benefits: [
      "Reduces joint inflammation",
      "Improves mobility",
      "Strengthens cartilage"
    ],
    category: "Cold"
  },
]; 