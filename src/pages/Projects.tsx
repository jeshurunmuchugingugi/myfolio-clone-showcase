import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import projectCarify from "@/assets/project-carify.jpg";
import projectAginer from "@/assets/project-aginer.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import projectCreative from "@/assets/project-creative.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";

const Projects = () => {
  const projects = [
    {
      image: projectCarify,
      category: ["Design", "Development"],
      title: "Carify Dashboard",
      industry: "FineTech",
      location: "Los Angeles, USA",
      type: "all"
    },
    {
      image: projectAginer,
      category: ["Design", "Branding"],
      title: "Aginer Character Webdesign",
      industry: "FineTech",
      location: "Los Angeles, USA",
      type: "design"
    },
    {
      image: project4,
      category: ["Branding", "Development"],
      title: "Booster Branding",
      industry: "FineTech",
      location: "Los Angeles, USA",
      type: "branding"
    },
    {
      image: project3,
      category: ["Design", "Development"],
      title: "Space Webflow Template",
      industry: "FineTech",
      location: "Los Angeles, USA",
      type: "development"
    },
    {
      image: projectCreative,
      category: ["Design", "Branding"],
      title: "Creative Agency Portfolio",
      industry: "Creative",
      location: "New York, USA",
      type: "design"
    },
    {
      image: projectEcommerce,
      category: ["Development", "Design"],
      title: "Modern Ecommerce Template",
      industry: "Ecommerce",
      location: "San Francisco, USA",
      type: "development"
    }
  ];

  const filterProjects = (type: string) => {
    if (type === "all") return projects;
    return projects.filter(project => 
      project.type === type || 
      project.category.some(cat => cat.toLowerCase() === type)
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text">Project I have done</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-card border border-border">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="development" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Development
              </TabsTrigger>
              <TabsTrigger value="design" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Design
              </TabsTrigger>
              <TabsTrigger value="branding" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Branding
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-12">
              <ProjectGrid projects={filterProjects("all")} />
            </TabsContent>
            
            <TabsContent value="development" className="mt-12">
              <ProjectGrid projects={filterProjects("development")} />
            </TabsContent>
            
            <TabsContent value="design" className="mt-12">
              <ProjectGrid projects={filterProjects("design")} />
            </TabsContent>
            
            <TabsContent value="branding" className="mt-12">
              <ProjectGrid projects={filterProjects("branding")} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProjectGrid = ({ projects }: { projects: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {project.category.map((cat: string, catIndex: number) => (
                <span 
                  key={catIndex}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4">
              {project.title}
            </h3>
            
            <div className="space-y-2 text-muted-foreground text-sm">
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
              <Button variant="ghost" className="text-primary hover:text-primary/80 story-link">
                View Project →
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;