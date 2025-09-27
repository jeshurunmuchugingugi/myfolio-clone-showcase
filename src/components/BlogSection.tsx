import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      image: project1,
      category: "Inspiration",
      title: "A complete guide to making animation & motion",
      excerpt: "Learn the fundamentals of creating engaging animations and smooth motion effects for modern web applications.",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      image: project2,
      category: "Tutorial",
      title: "How I increased landing page conversion by 240%",
      excerpt: "Discover the proven strategies and techniques I used to dramatically improve conversion rates for client projects.",
      date: "March 12, 2024", 
      readTime: "8 min read"
    },
    {
      image: project3,
      category: "Design",
      title: "The future of web design: Trends to watch in 2024",
      excerpt: "Explore the emerging design trends and technologies that will shape the digital landscape this year.",
      date: "March 10, 2024",
      readTime: "6 min read"
    },
    {
      image: project4,
      category: "Business",
      title: "Building a successful design system from scratch", 
      excerpt: "A comprehensive guide to creating scalable design systems that enhance team productivity and consistency.",
      date: "March 8, 2024",
      readTime: "12 min read"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover my <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I write about design, development, and everything in between. Here are some of my latest thoughts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-card border-border hover-scale cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full group">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;