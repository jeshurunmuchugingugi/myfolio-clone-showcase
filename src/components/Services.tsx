import { Palette, Search, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Website Design",
      description: "I created digital products with unique ideas use Figma & Framer"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Marketing", 
      description: "I build website front-end with coding or using Webflow, Framer"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "I do research & create user personas to design the best user experience"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Look at my <span className="gradient-text">services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card hover:bg-card/80 border border-border rounded-2xl p-8 transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="gradient-bg rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;