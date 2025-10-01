import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { motion } from "motion/react";

export function Internships() {
  const internships = [
    {
      company: "TAP Academy",
      position: "Full Stack Development Intern",
      location: "Bangalore, India",
      period: "Dec 2024 - May 2025",
      description: "Completed a comprehensive training and internship program focused on full-stack web development using Java, React.js, Hibernate, Spring Boot, and MySQL. Gained practical experience through hands-on projects and assignments, enhancing coding skills and understanding of industry practices.",
      technologies: ["Java", "React.js", "Hibernate", "Spring Boot", "MySQL"],
      achievements: [
        "Gained hands-on experience in Java, Spring Boot, HTML, CSS, and MySQL for full-stack web development",
        "Worked on full stack web development projects and assignments, enhancing practical coding skills",
        "Learned industry practices including OOP, MVC architecture, and REST APIs for building scalable applications"
      ]
    },
    {
      company: "SmartBridge",
      position: "Generative AI Intern",
      location: "Virtual",
      period: "May 2025 - July 2025",
      type: "Part-time",
      description: "Gained hands-on experience with Google Cloud's Generative AI tools, including Vertex AI and Gemini. Worked on projects involving the integration of AI models into applications, focusing on practical use cases and cloud deployment.",
      technologies: ["Google Cloud Platform", "Generative AI", "Vertex AI", "Gemini"],
      achievements: [
        "Hands-on experience with Google Cloud Generative AI, leveraging Vertex AI and Gemini APIs for building AI-driven applications.",
        "Explored cloud-native development on GCP, including deployment, authentication, and integration of AI models with real-world use cases.",
        "Completed Google Cloud Generative AI Virtual Internship (SmartBridge), applying cloud-based AI tools to enhance problem-solving and application development."
      ]
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="internships" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-center mb-16">Internship Experience</h2>
          </motion.div>
          
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <CardTitle className="text-xl">{internship.position}</CardTitle>
                      <Badge variant="outline">{internship.type}</Badge>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {internship.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {internship.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {internship.period}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {internship.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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