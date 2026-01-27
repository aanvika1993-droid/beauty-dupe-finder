import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to browse with search query
      window.location.href = `/browse?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-rose/5 blur-3xl" />
      </div>

      <div className="container relative px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-gold-dark">Discover affordable alternatives</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Perfect{" "}
            <span className="text-gradient-gold">Dupe</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Discover affordable alternatives to luxury skincare and makeup products. 
            Same quality, smarter price.
          </p>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSearch}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by product or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 pr-4 text-base shadow-soft border-border/50 bg-background/80 backdrop-blur"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 bg-primary hover:bg-primary/90 shadow-soft font-medium"
            >
              Find Dupes
            </Button>
          </motion.form>

          {/* Quick Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Charlotte Tilbury", "Drunk Elephant", "La Mer", "Tom Ford"].map((brand) => (
              <button
                key={brand}
                onClick={() => setSearchQuery(brand)}
                className="text-sm text-foreground/80 hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
              >
                {brand}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
