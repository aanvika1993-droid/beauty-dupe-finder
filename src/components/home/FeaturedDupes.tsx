import { motion } from "framer-motion";
import DupeCard from "@/components/cards/DupeCard";

// Mock data for featured dupes
const featuredDupes = [
  {
    id: "1",
    original: {
      name: "Pillow Talk Lipstick",
      brand: "Charlotte Tilbury",
      price: 34,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
    },
    dupe: {
      name: "Lip Lingerie XXL",
      brand: "NYX",
      price: 10,
      image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=300&h=300&fit=crop",
    },
    similarityScore: 92,
    category: "Lipstick",
    savingsPercent: 71,
  },
  {
    id: "2",
    original: {
      name: "C.E. Ferulic Serum",
      brand: "SkinCeuticals",
      price: 182,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
    },
    dupe: {
      name: "Vitamin C Serum",
      brand: "Timeless",
      price: 28,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop",
    },
    similarityScore: 87,
    category: "Serum",
    savingsPercent: 85,
  },
  {
    id: "3",
    original: {
      name: "Crème de la Mer",
      brand: "La Mer",
      price: 380,
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=300&fit=crop",
    },
    dupe: {
      name: "Marine Hyaluronics",
      brand: "The Ordinary",
      price: 12,
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=300&h=300&fit=crop",
    },
    similarityScore: 78,
    category: "Moisturizer",
    savingsPercent: 97,
  },
  {
    id: "4",
    original: {
      name: "Hollywood Flawless Filter",
      brand: "Charlotte Tilbury",
      price: 49,
      image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=300&h=300&fit=crop",
    },
    dupe: {
      name: "Luminous Silk Glow",
      brand: "e.l.f.",
      price: 14,
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
    },
    similarityScore: 89,
    category: "Primer",
    savingsPercent: 71,
  },
];

const FeaturedDupes = () => {
  return (
    <section className="bg-cream/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-gold">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-wider">Editor's Picks</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured Dupes
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Our most popular dupe discoveries this week, verified by ingredient analysis and community reviews
            </p>
          </div>
          <a
            href="/browse"
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors flex items-center gap-2"
          >
            View all dupes
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Dupe Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDupes.map((dupe, index) => (
            <motion.div
              key={dupe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <DupeCard {...dupe} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDupes;
