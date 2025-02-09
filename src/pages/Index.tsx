import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductSlider } from "@/components/ProductSlider";
import { CompanyIntro } from "@/components/CompanyIntro";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
        <ProductSlider />
        <CompanyIntro />
        <AboutSection />
        <Testimonials />
        <ContactForm />
        <Footer />
    </div>
  );
};

export default Index;
