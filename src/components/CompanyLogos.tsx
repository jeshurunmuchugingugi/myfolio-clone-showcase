const CompanyLogos = () => {
  // Simulated company logos
  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "StartupHub", logo: "SH" },
    { name: "DesignCo", logo: "DC" },
    { name: "WebStudio", logo: "WS" },
  ];

  return (
    <section className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 animate-fade-in"
             style={{ animationDelay: "0.3s" }}>
          {companies.map((company, index) => (
            <div key={index} className="opacity-60 hover:opacity-100 transition-opacity hover-scale">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground">{company.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;