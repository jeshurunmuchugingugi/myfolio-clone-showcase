import heroPortrait from "@/assets/hero-portrait.jpg";

const About = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                KIERAN <br />
                PARKER
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello there! I'm Kieran Parker, a passionate and dedicated designer 
                with a flair for creating visually stunning and user-friendly digital 
                experiences. With a keen eye for detail and a deep understanding of 
                user psychology, I strive to craft designs that not only look 
                amazing but also drive results.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">97</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">20M</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={heroPortrait} 
                  alt="Kieran Parker"
                  className="w-full rounded-2xl"
                />
                <img 
                  src={heroPortrait} 
                  alt="Design work"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={heroPortrait} 
                  alt="Creative process"
                  className="w-full rounded-2xl"
                />
                <img 
                  src={heroPortrait} 
                  alt="Team collaboration"
                  className="w-full rounded-2xl"
                />
                <img 
                  src={heroPortrait} 
                  alt="Studio workspace"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;