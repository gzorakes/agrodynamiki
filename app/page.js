import ContactButton from "./_components/ContactButton";
import HeroSection from "./_components/HeroSection";
import IntroSection from "./_components/IntroSection";
import ServicesSection from "./_components/ServicesSection";
import StihlSection from "./_components/StihlSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <StihlSection />
      <ServicesSection />
      <ContactButton />
    </main>
  );
}
