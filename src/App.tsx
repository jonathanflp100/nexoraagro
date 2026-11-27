import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FerrocementSection } from './components/FerrocementSection';
import { MentorshipSection } from './components/MentorshipSection';
import { ComparisonSection } from './components/ComparisonSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-neutral-900">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <FerrocementSection />
        <MentorshipSection />
        <ComparisonSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
