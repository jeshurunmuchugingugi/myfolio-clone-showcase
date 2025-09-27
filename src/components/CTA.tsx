import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Have projects in mind? <br />
            Let's work <span className="gradient-text">together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gradient" size="lg" className="rounded-full group">
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;