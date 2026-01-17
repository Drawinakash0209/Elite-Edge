import Hero from "@/components/Hero";
import About from "@/components/About";
import QatarHero from "@/components/QatarHero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";
import FloatingLogoButton from "@/components/FloatingLogoButton";
import MarqueeBanner from "@/components/MarqueeBanner";
import ParallaxBanner from "@/components/ParallaxBanner";

import ImpactMetrics from "@/components/ImpactMetrics";
import PreContactBanner from "@/components/PreContactBanner";

export default function Home() {
  return (
    <main className="flex flex-col w-full transition-colors duration-300">
      <FloatingNav />
      <FloatingLogoButton />
      <Hero />
      <ImpactMetrics />
      <MarqueeBanner />
      <About />
      <QatarHero />
      <Services />
      <ParallaxBanner />
      <WhyChooseUs />
      <PreContactBanner />
      <Contact />
    </main>
  );
}
