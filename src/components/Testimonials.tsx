import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Pritom was a breeze... I was impressed.",
      description: "Honestly I felt like Relume saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with.",
      name: "Pritom Rani",
      position: "Product Designer at Blazzings.co",
      image: client1,
      rating: 5
    },
    {
      quote: "Exceptional work and great communication throughout.",
      description: "The attention to detail and creative approach exceeded our expectations. The project was delivered on time and the final result was exactly what we envisioned.",
      name: "Sarah Johnson", 
      position: "Marketing Director at TechCorp",
      image: client2,
      rating: 5
    },
    {
      quote: "Outstanding results that exceeded expectations.",
      description: "The design quality and user experience improvements were remarkable. Our conversion rates increased significantly after the redesign.",
      name: "Mike Chen",
      position: "CEO at StartupFlow",
      image: client1,
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Clients <span className="gradient-text">testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't take my word for it. Here's what my clients say about my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, description, name, position, image, rating }: {
  quote: string;
  description: string;
  name: string;
  position: string;
  image: string;
  rating: number;
}) => {
  return (
    <Card className="p-6 bg-card border-border hover-scale">
      <CardContent className="p-0 space-y-6">
        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-foreground">
          {quote}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-sm">
          "{description}"
        </p>
        
        <div className="flex items-center space-x-3">
          <img 
            src={image} 
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-foreground text-sm">{name}</p>
            <p className="text-muted-foreground text-xs">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;