import FeaturedProducts from "@/components/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-background p-10">
      <Hero />      
      <NewArrivals/>
      <FeaturedProducts/>
    </main>
  );
}
