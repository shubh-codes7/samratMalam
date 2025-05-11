import product1 from '../assets/Products/Product 1.jpeg';
import product2 from '../assets/Products/Product 2.jpeg';
import product3 from '../assets/Products/Product 3.jpeg';
import product4 from '../assets/Products/14.png';

export const products = [
  {
    id: 1,
    name: "Samral malam",
    description: "Multivitamin supplement with essential minerals for daily immune support",
    shortDescription: "Complete multivitamin supplement",
    image: product1,
    sizes: [
      { size: "30 gm", price: 99 },
      { size: "60 gm", price: 49 },
      { size: "90 gm", price: 99 }
    ],
    benefits: [
      "Boosts immunity",
      "Improves energy levels",
      "Supports overall health"
    ],
    category: "Muscle Pain"
  },
  {
    id: 2,
    name: "Samral Balm",
    description: "Advanced formula to support healthy blood sugar levels and metabolic function",
    shortDescription: "Blood sugar support formula",
    image: product2,
    sizes: [
      { size: "30 gm", price: 39 },
      { size: "60 gm", price: 74 }
    ],
    benefits: [
      "Supports healthy glucose metabolism",
      "Contains natural ingredients",
      "Helps maintain energy levels"
    ],
    category: "Cold"
  },
  {
    id: 3,
    name: "Inhailer",
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
  {
    id: 4,
    name: "CardioGuard",
    description: "Heart health supplement with CoQ10 and Omega-3 fatty acids for cardiovascular support",
    shortDescription: "Heart health supplement",
    image: product4,
    sizes: [
      { size: "30 ", price: 49 },
      { size: "60 ", price: 89 }
    ],
    benefits: [
      "Supports heart function",
      "Helps maintain healthy cholesterol levels",
      "Promotes circulation"
    ],
    category: "Joint Pain"
  },
  {
    id: 5,
    name: "ImmunoBoost",
    description: "Powerful immune system booster with zinc, vitamin C, and elderberry extract",
    shortDescription: "Immune system booster",
    image: product1,
    sizes: [
      { size: "30 tablets", price: 349 },
      { size: "60 tablets", price: 649 },
      { size: "120 tablets", price: 1199 }
    ],
    benefits: [
      "Strengthens immune response",
      "Provides antioxidant support",
      "Helps fight seasonal threats"
    ],
    category: "Immunity"
  }
]; 