import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you! Your submission has been received!",
      description: "I'll get back to you in the next 48 hours.",
    });
    setFormData({ name: "", email: "", message: "", budget: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Have projects in</span>
                  <br />
                  <span className="gradient-text">mind? Let's work</span>
                  <br />
                  <span className="text-foreground">together</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Mail className="w-5 h-5" />
                  <span className="text-lg story-link cursor-pointer">theportfolio_pro@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-primary">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg story-link cursor-pointer">+888-567-889</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="p-8 bg-card/50 border-border">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <p className="text-muted-foreground">fill the form Below*</p>
                    </div>
                    
                    <div className="space-y-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background border-border"
                        required
                      />
                      
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background border-border"
                        required
                      />
                      
                      <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Your budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1k-5k">$1K-$5k</SelectItem>
                          <SelectItem value="5k-10k">$5K-$10k</SelectItem>
                          <SelectItem value="10k+">$10k+</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Textarea
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-background border-border min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="gradient" size="lg" className="w-full rounded-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Clients testimonials
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Working with Pritom was a breeze... I was impressed."
              description="Honestly I felt like Relume saw my vision and helped it come to life exactly how I pictured it. The support was amazing. They were happy to help with everything and SO EASY to work with."
              name="Pritom Rani"
              position="Product Designer at Blazzings.co"
              image={client1}
              rating={5}
            />
            
            <TestimonialCard
              quote="Exceptional work and great communication throughout."
              description="The attention to detail and creative approach exceeded our expectations. The project was delivered on time and the final result was exactly what we envisioned."
              name="Sarah Johnson"
              position="Marketing Director at TechCorp"
              image={client2}
              rating={5}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
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
    <Card className="p-8 bg-card border-border hover-scale">
      <CardContent className="p-0 space-y-6">
        <div className="text-sm text-muted-foreground">
          <p>Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
        </div>
        
        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-foreground">
          {quote}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          "{description}"
        </p>
        
        <div className="flex items-center space-x-4">
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-muted-foreground text-sm">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;