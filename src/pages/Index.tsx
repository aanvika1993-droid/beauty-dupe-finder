import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CategoryNav from "@/components/home/CategoryNav";
import FeaturedDupes from "@/components/home/FeaturedDupes";
import TrendingSection from "@/components/home/TrendingSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryNav />
        <FeaturedDupes />
        <TrendingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
