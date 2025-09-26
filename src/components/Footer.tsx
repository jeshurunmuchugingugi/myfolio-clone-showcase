import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">Myfolio</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              A creative digital designer crafting products that people love. 
              Working with startups to push creative boundaries and create unique user experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Home
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Services
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                Projects
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-muted-foreground hover:text-primary justify-start">
                About Me
              </Button>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">hello@myfolio.dev</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <Button variant="gradient" size="sm" className="rounded-full">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Myfolio. All rights reserved. Designed with ❤️ by David Louis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;