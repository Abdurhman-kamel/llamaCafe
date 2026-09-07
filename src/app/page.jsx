import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import { AboutUs } from "@/components/sections/About";
import { Branches } from "@/components/sections/Branches";
import FavoritesSection from "@/components/sections/Favorites";
import Hero from "@/components/sections/Hero";
import MenuExperience from "@/components/sections/MenuExperience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuExperience />
      <AboutUs />
      <FavoritesSection />
      <Branches/>
      <Footer />
    </main>
  );
}
