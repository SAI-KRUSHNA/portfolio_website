import { Card, CardContent } from "./ui/card";
import { BedDouble, Code, icons, Palette, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigation } from "./NavigationContext";
import { RevealAnimation, SplitText, ParallaxElement } from "./AnimationUtils";
import { useRef } from "react";
import { title } from "process";

export function About() {
  const { direction } = useNavigation();
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "I write maintainable, scalable code following best practices and industry standards."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design Focus",
      description: "Strong eye for design with experience in creating intuitive user interfaces."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks to solve complex problems."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Interested In",
      description: "Web Development, UI/UX Design. Currently gaining knowledge in UI/UX.",
    }
  ];

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'backward' ? -30 : 30,
      x: direction === 'backward' ? -15 : 15,
      rotateY: direction === 'backward' ? 10 : -10
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotateY: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SplitText className="text-3xl md:text-4xl" delay={0.08} duration={0.6}>
              About Me
            </SplitText>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <RevealAnimation direction="left" delay={0.2}>
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I'm a recent Information Technology graduate with a passion for full-stack 
                  development and user experience design. During my studies, I've worked 
                  on various projects that combine technical skills with creative problem-solving.
                </motion.p>
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I specialize in Java Full Stack Development and modern web technologies. I'm always 
                  eager to learn new frameworks and tools that can help me build better 
                  applications.
                </motion.p>
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Currently seeking opportunities to contribute to innovative projects 
                  and grow as a developer in a collaborative team environment.
                </motion.p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation direction="right" delay={0.4}>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0, 
                      rotateY: 0,
                      transition: {
                        delay: index * 0.2,
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="p-6 backdrop-blur-sm bg-card/80 border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <motion.div 
                            className="text-primary"
                            whileHover={{ 
                              scale: 1.2,
                              rotate: 15
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <h3 className="mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}