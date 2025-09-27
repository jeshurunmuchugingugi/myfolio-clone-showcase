import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Discover your problem",
      description: "I start by understanding your business goals and identifying the core challenges that need to be addressed."
    },
    {
      number: "2", 
      title: "Define the solution",
      description: "Based on research and discovery, I create a strategic approach that aligns with your objectives."
    },
    {
      number: "3",
      title: "Design & Develop",
      description: "I craft beautiful, user-centered designs and develop them into functional, high-performing products."
    },
    {
      number: "4",
      title: "Deploy & Optimize", 
      description: "After launch, I monitor performance and make data-driven optimizations to maximize results."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                My process that <br />
                help my clients to <br />
                <span className="gradient-text">2x their revenue</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
              </p>
            </div>
            
            <Button variant="gradient" size="lg" className="rounded-full group">
              Book a FREE Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Content - Process Steps */}
          <div className="space-y-8 animate-slide-in-right">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-6 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;