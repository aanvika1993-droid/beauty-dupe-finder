import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Skincare",
    subcategories: ["Serums", "Moisturizers", "Cleansers", "Sunscreen", "Eye Cream"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=500&fit=crop",
    href: "/browse?category=skincare",
  },
  {
    name: "Makeup",
    subcategories: ["Lipstick", "Foundation", "Mascara", "Blush", "Eyeshadow"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop",
    href: "/browse?category=makeup",
  },
  {
    name: "Fragrance",
    subcategories: ["Perfume", "Body Mist", "Cologne"],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    href: "/browse?category=fragrance",
  },
];

const CategoryNav = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explore dupes across all your favorite beauty categories
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={category.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-card"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
                    {category.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="rounded-full bg-white/20 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                      >
                        {sub}
                      </span>
                    ))}
                    {category.subcategories.length > 3 && (
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
                        +{category.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium">Explore</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
