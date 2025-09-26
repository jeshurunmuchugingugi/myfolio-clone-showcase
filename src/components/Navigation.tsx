import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">Myfolio</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">
              <Button variant="nav" className={isActive('/') ? 'text-primary' : ''}>Home</Button>
            </Link>
            <Button variant="nav">Services</Button>
            <Link to="/projects">
              <Button variant="nav" className={isActive('/projects') ? 'text-primary' : ''}>Projects</Button>
            </Link>
            <Button variant="nav">About Me</Button>
            <Button variant="nav">Blog</Button>
          </div>
          
          {/* Contact Button */}
          <Link to="/contact-us">
            <Button variant="gradient" size="lg" className="rounded-full">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;