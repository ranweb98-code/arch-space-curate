export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  thumbnail: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "casa-serena",
    title: "Casa Serena",
    category: "Residential",
    location: "Lisbon, Portugal",
    year: "2024",
    description:
      "A minimalist family residence that merges indoor and outdoor living. Floor-to-ceiling glazing frames panoramic views of the Tagus River, while natural stone and warm timber create a sense of grounded elegance.",
    thumbnail:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
  },
  {
    id: "the-loft-collective",
    title: "The Loft Collective",
    category: "Commercial",
    location: "Berlin, Germany",
    year: "2023",
    description:
      "A converted industrial warehouse transformed into a collaborative workspace. Exposed concrete, steel framework, and curated lighting define a space that honors its heritage while enabling modern work culture.",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    ],
  },
  {
    id: "villa-horizon",
    title: "Villa Horizon",
    category: "Residential",
    location: "Santorini, Greece",
    year: "2023",
    description:
      "Perched on volcanic cliffs, this villa embraces the Cycladic tradition with a contemporary lens. White volumes cascade down the terrain, creating intimate courtyards and terraces that capture the Aegean light.",
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
  },
  {
    id: "atelier-noir",
    title: "Atelier Noir",
    category: "Interior",
    location: "Paris, France",
    year: "2024",
    description:
      "A haute couture atelier reimagined as a space of precision and artistry. Dark palettes, bespoke joinery, and carefully choreographed lighting create a sanctuary for creative work.",
    thumbnail:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
  },
  {
    id: "pavilion-east",
    title: "Pavilion East",
    category: "Cultural",
    location: "Tokyo, Japan",
    year: "2022",
    description:
      "A cultural pavilion that bridges traditional Japanese spatial concepts with contemporary form. Timber lattice screens filter light and frame views, creating a meditative sequence of spaces.",
    thumbnail:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
  },
  {
    id: "stone-garden-residence",
    title: "Stone Garden Residence",
    category: "Residential",
    location: "Copenhagen, Denmark",
    year: "2024",
    description:
      "A courtyard house organized around a central stone garden. The interplay of solid and void, light and shadow, creates rooms that change character throughout the day and seasons.",
    thumbnail:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    ],
  },
];
