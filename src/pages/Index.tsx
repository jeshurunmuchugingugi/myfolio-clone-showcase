import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
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
      <Footer />
    </div>
  );
};

export default Index;
