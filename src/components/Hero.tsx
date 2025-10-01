import { Button } from "./ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigation } from "./NavigationContext";
import { SplitText, MagneticElement } from "./AnimationUtils";
import { useRef } from "react";

export function Hero() {
  const { setCurrentSection, setDirection, direction } = useNavigation();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    
    // Update navigation context
    const sectionName = href.replace('#', '');
    setCurrentSection(sectionName);
    setDirection('forward');
  };

  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: direction === 'backward' ? 1.1 : 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'backward' ? -30 : 30,
      x: direction === 'backward' ? -20 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const
      }
    }
  };

  const profileVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: direction === 'backward' ? 15 : -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">

      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Profile Photo */}
          <motion.div
            className="lg:w-1/3 flex justify-center lg:justify-start"
            variants={profileVariants}
          >
            <div className="relative">
              <motion.div
                className="relative w-48 h-60 md:w-56 md:h-70 lg:w-64 lg:h-80"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  aspectRatio: '16/20'
                }}
              >
                <ImageWithFallback
                  src="images/ProfileImage.jpg"
                  alt="Sai Krushna - Full Stack Developer"
                  className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="lg:w-2/3 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              variants={itemVariants}
            >
              Hi, I'm <span className="relative">
                Sai Krushna
              </span>
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              variants={itemVariants}
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-12 max-w-2xl lg:max-w-none"
              variants={itemVariants}
            >
              Recent Information Technology graduate passionate about creating beautiful, 
              functional web applications. I love turning ideas into reality through 
              clean code and intuitive design.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 10px 25px rgba(198, 216, 112, 0.3)`
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("#projects")}
                  className="w-full sm:w-auto relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #C6D870, #A3C255)`,
                    border: 'none'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 text-black font-medium">View My Work</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/saikrushna_resume.pdf"
                  download="saikrushna_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                  style={{ display: "inline-block" }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto border-2 hover:bg-accent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              <a 
                href="https://github.com/SAI-KRUSHNA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/saikrushna1432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:saikrushna1432@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}