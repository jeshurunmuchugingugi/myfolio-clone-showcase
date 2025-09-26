import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 hero-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Digital designer</span>
                <br />
                <span className="text-hero-text">crafting products</span>
                <br />
                <span className="text-hero-text">that people love</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I'm David Louis— a designer who works with startups looking to push creative boundaries and create unique user experiences.
              </p>
            </div>
            
            <Button variant="gradient" size="lg" className="rounded-full group">
              Book a FREE Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-3xl scale-110"></div>
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-border/20">
                <img 
                  src={heroPortrait} 
                  alt="David Louis - Digital Designer" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;