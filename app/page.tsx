import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";
import MarqueeBanner from "@/components/MarqueeBanner";
import ParallaxBanner from "@/components/ParallaxBanner";

export default function Home() {
  return (
    <main className="flex flex-col w-full transition-colors duration-300">
      <FloatingNav />
      <Hero />
      <MarqueeBanner />
      <About />
      <Services />
      <ParallaxBanner />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
