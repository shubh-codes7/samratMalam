import product1 from '../assets/Products/Product 1.jpeg';
import product2 from '../assets/Products/Product 2.jpeg';
import product3 from '../assets/Products/Product 3.jpeg';
import product4 from '../assets/Products/14.png';

export const products = [
  {
    id: 1,
    name: "Samrat Malam",
    description: "Samrat Malam is a powerful Ayurvedic formulation enriched with the healing essence of Narayan oil and carefully selected natural herbs. Designed to provide fast and long-lasting relief from joint pain, muscle aches, back pain, sprains, and inflammation, it is your go-to remedy for everyday discomfort.",
    shortDescription: "Samrat Malam helps in all types of muscle pain and joint pain.",
    composition: [
      "Oil of Narayan",
      "Oil of Winter Green",
      "Oil of Nelgiri",
      "Rurpentine Oil"
    ],
    image: product1,
    sizes: [
      // { size: "20 gm", price: 80 },
      { size: "50 gm", price: 150 },
    ],
    benefits: [
      "Knee Pain",
      "Neck Pain",
      "Back Pain",
      "Swelling"
    ],
    category: "Muscle Pain"
  }
  
]; 