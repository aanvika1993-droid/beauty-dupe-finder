import { motion } from "framer-motion";
import { TrendingUp, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTrendingDupes } from "@/hooks/api/useDupes";
import { Skeleton } from "@/components/ui/skeleton";

const TrendingSection = () => {
  const { data: trendingDupes, isLoading, error } = useTrendingDupes(5);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Trending List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-2 text-gold">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Trending Now</span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl mb-8">
              Community Favorites
            </h2>

            <div className="space-y-4">
              {isLoading ? (
                // Loading skeletons
                [...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-3 w-1/3" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                    <Skeleton className="h-6 w-16" />
                  </div>
                ))
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Unable to load trending dupes.</p>
                </div>
              ) : (
                trendingDupes?.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={`/dupe/${item.id}`}
                      className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-gold/30 hover:shadow-soft"
                    >
                      {/* Rank */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted font-display text-lg font-semibold text-foreground">
                        {item.rank}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          {item.original.brand} → {item.dupe.brand}
                        </p>
                        <p className="truncate font-medium text-foreground">
                          {item.original.name}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="hidden sm:flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-gold">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{item.votes.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Savings */}
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-bold text-sage">Save {item.savings}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>

          {/* Right Column - Stats & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl bg-gradient-hero border border-border/50 p-8 md:p-12">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-foreground md:text-5xl">2.5k+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Verified Dupes</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-foreground md:text-5xl">$84</p>
                  <p className="mt-1 text-sm text-muted-foreground">Avg. Savings</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-foreground md:text-5xl">50k+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Happy Users</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-foreground md:text-5xl">4.8</p>
                  <p className="mt-1 text-sm text-muted-foreground">Community Rating</p>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Join the Community
                </h3>
                <p className="text-muted-foreground">
                  Share your dupe discoveries, rate submissions, and save on luxury beauty products.
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get Started Free
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
