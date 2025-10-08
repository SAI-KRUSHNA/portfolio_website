import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useNavigation } from "./NavigationContext";

export function Projects() {
  const { direction } = useNavigation();
  
  const projects = [
     {
      title: "Wishlist Application",
      description: "Wishlist Application helps users create and manage wishlists for various occasions. Users can add items, delete items, manage their wishlists.",
      image: "/wishlistapp.png",
      technologies: ["React", "JavaScript", "Vercel"],
      liveUrl: "https://wishlist-application.vercel.app/",
      githubUrl: "https://github.com/SAI-KRUSHNA/Wishlist-Application"
    },
    {
      title: "OwnCart E-Commerce Application",
      description: "OwnCart is a full-featured e-commerce web application that allows users to browse products, add them to the cart, and make purchases. It includes user authentication, product search, and order management features.",
      image: "/OwnCart.png",
      technologies: ["Java", "React", "Spring Boot", "MySQL", "Rest API", "Postman"],
      liveUrl: "#",
      githubUrl: "https://github.com/SAI-KRUSHNA/OwnCart_E-commerce"
    },
    {
      title: "PG-Hostel Management System",
      description: "A comprehensive management system for PG hostels, enabling efficient room allocation, tenant management, and payment tracking.",
      image: "PgHostel.png",
      technologies: ["Spring Boot", "MySQL", "Java", "Rest API", "Postman"],
      liveUrl: "#",
      githubUrl: "https://github.com/SAI-KRUSHNA/PG_Management_System"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance and accessibility.",
      image: "/Portfolio.png",
      technologies: ["React.js", "TypeScript", "VS Code", "AI"],
      liveUrl: "#Hero",
      githubUrl: "https://github.com/SAI-KRUSHNA/portfolio_website"
    }
  ];

  const fadeInVariants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'backward' ? -40 : 40,
      x: direction === 'backward' ? -20 : 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: ["easeOut"] // <-- Fix: use allowed array, not string
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl text-center mb-16"
            initial={{ 
              opacity: 0, 
              y: direction === 'backward' ? -40 : 40,
              scale: 0.9 
            }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              scale: 1 
            }}
            transition={{ 
              duration: 0.7,
              ease: ["easeOut"] 
            }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group h-full hover:shadow-lg transition-all duration-300 hover:shadow-[0_10px_25px_rgba(198,216,112,0.15)]">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {(!project.liveUrl || project.liveUrl === "#") ? (
                        <Button
                          size="sm"
                          onClick={() =>
                            alert("I'm working on deployment, so please refer to the source code.")
                          }
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
