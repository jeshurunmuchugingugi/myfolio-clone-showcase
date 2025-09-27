import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      category: ["Design", "Branding"],
      title: "Masterbase Webdesign",
      industry: "FineTech",
      location: "Los Angeles, USA"
    },
    {
      image: project2,
      category: ["Development", "Branding"],
      title: "Fianceo 3d Assets",
      industry: "FineTech", 
      location: "Los Angeles, USA"
    },
    {
      image: project3,
      category: ["Design", "Development"],
      title: "Space Webflow Template",
      industry: "FineTech",
      location: "Los Angeles, USA"
    },
    {
      image: project4,
      category: ["Branding", "Development"],
      title: "Booster Branding",
      industry: "FineTech",
      location: "Los Angeles, USA"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I have selected and mentioned here some of my latest projects to share with you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover-scale cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map((cat, catIndex) => (
                    <span 
                      key={catIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Industry</span>
                    <span>{project.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span>{project.location}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    View Project →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;