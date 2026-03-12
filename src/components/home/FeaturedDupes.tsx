import { motion } from "framer-motion";
import DupeCard from "@/components/cards/DupeCard";
import { useFeaturedDupes } from "@/hooks/api/useDupes";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

const FeaturedDupes = () => {
  const { data: featuredDupes, isLoading, error } = useFeaturedDupes(4);

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
          <Link
            to="/browse"
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors flex items-center gap-2"
          >
            View all dupes
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Dupe Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            // Loading skeletons
            [...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          ) : error ? (
            // Error state
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">Unable to load featured dupes. Please try again later.</p>
            </div>
          ) : (
            // Actual data
            featuredDupes?.map((dupe, index) => (
              <motion.div
                key={dupe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <DupeCard
                  id={dupe.id}
                  original={dupe.original}
                  dupe={dupe.dupe}
                  similarityScore={dupe.similarityScore}
                  category={dupe.category}
                  savingsPercent={dupe.savingsPercent}
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDupes;
