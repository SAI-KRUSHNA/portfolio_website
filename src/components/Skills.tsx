import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { 
  Code2, Server, Wrench, Users, 
  Globe, Database, Terminal, GitBranch,
  Palette, TestTube, MessageSquare, Zap,
  Cloud
} from "lucide-react";
import { RevealAnimation, SplitText, MagneticElement } from "./AnimationUtils";
import { useRef } from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "React", icon: <Code2 className="h-4 w-4" /> },
        { name: "TypeScript", icon: <Code2 className="h-4 w-4" /> },
        { name: "JavaScript", icon: <Code2 className="h-4 w-4" /> },
        { name: "HTML5", icon: <Globe className="h-4 w-4" /> },
        { name: "CSS3", icon: <Palette className="h-4 w-4" /> },
        { name: "Tailwind CSS", icon: <Palette className="h-4 w-4" /> },
        { name: "Responsive Design", icon: <Globe className="h-4 w-4" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Java", icon: <Code2 className="h-4 w-4" /> },
        { name: "J2EE / Servlets", icon: <Terminal className="h-4 w-4" /> },
        { name: "Hibernate", icon: <Database className="h-4 w-4" /> },
        { name: "Spring Boot", icon: <Server className="h-4 w-4" /> },
        { name: "REST APIs", icon: <MessageSquare className="h-4 w-4" /> },
        { name: "SQL", icon: <Database className="h-4 w-4" /> },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git", icon: <GitBranch className="h-4 w-4" /> },
        { name: "GitHub", icon: <GitBranch className="h-4 w-4" /> },
        { name: "VS Code", icon: <Code2 className="h-4 w-4" /> },
        { name: "Eclipse", icon: <Code2 className="h-4 w-4" /> },
        { name: "Figma", icon: <Palette className="h-4 w-4" /> },
   
        { name: "Google Cloud", icon: <Cloud className="h-4 w-4" /> },
        { name: "Vercel", icon: <Globe className="h-4 w-4" /> },
        { name: "Netlify", icon: <Globe className="h-4 w-4" /> },
        { name: "Postman", icon: <TestTube className="h-4 w-4" /> }
      ]
    },
    {
      title: "Core Competencies",
      icon: <Users className="h-5 w-5" />,
      skills: [
        { name: "Problem Solving", icon: <Zap className="h-4 w-4" /> },
        { name: "Team Collaboration", icon: <Users className="h-4 w-4" /> },
        { name: "Agile/Scrum", icon: <Users className="h-4 w-4" /> },
        { name: "UI/UX Design", icon: <Palette className="h-4 w-4" /> },
        { name: "Testing", icon: <TestTube className="h-4 w-4" /> },
        { name: "Code Review", icon: <Code2 className="h-4 w-4" /> }
      ]
    },
    {
      title: "AI & Tools",
      icon: <Zap className="h-5 w-5" />,
      skills: [
        { name: "Generative AI", icon: <Zap className="h-4 w-4" /> },
        { name: "ChatGPT", icon: <Zap className="h-4 w-4" /> },
        { name: "Gemini", icon: <Zap className="h-4 w-4" /> },
        { name: "Copilot", icon: <Zap className="h-4 w-4" /> },
      ]
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SplitText className="text-3xl md:text-4xl block" delay={0.08} duration={0.6}>
              Skills & Technologies
            </SplitText>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <RevealAnimation
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.2}
                duration={0.8}
              >
                <MagneticElement strength={0.1}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <motion.div
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.2
                          }}
                          transition={{ duration: 0.5 }}
                          className="text-primary"
                        >
                          {category.icon}
                        </motion.div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ 
                              opacity: 1, 
                              scale: 1,
                              transition: {
                                delay: skillIndex * 0.1,
                                duration: 0.4,
                                ease: [0.68, -0.55, 0.265, 1.55]
                              }
                            }}
                            whileHover={{ 
                              scale: 1.1,
                              y: -5,
                              transition: { duration: 0.2 }
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge 
                              variant="secondary"
                              className="text-sm flex items-center gap-2 px-3 py-1.5 cursor-pointer select-none"
                            >
                              {skill.icon}
                              {skill.name}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </MagneticElement>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}