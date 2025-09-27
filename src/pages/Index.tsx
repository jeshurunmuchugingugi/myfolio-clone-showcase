import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CompanyLogos />
      <Services />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
