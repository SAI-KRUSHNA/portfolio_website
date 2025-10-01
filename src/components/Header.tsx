import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useNavigation, calculateDirection, sectionOrder } from "./NavigationContext";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentSection, setCurrentSection, setDirection } = useNavigation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#internships", label: "Internships" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    
    // Update navigation context with direction
    const sectionName = href.replace('#', '');
    const direction = calculateDirection(currentSection, sectionName);
    setDirection(direction);
    setCurrentSection(sectionName);
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const direction = calculateDirection(currentSection, 'hero');
    setDirection(direction);
    setCurrentSection('hero');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </motion.button>
          
          <motion.div 
            className="text-xl font-semibold cursor-pointer"
            onClick={scrollToHome}
            whileHover={{ 
              scale: 1.05
            }}
            transition={{ duration: 0.2 }}
          >
            Sai Krushna
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-foreground transition-colors relative"
              whileHover={{ 
                scale: 1.1,
                color: '#C6D870'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                hover: { duration: 0.2 }
              }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6D870]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="relative overflow-hidden"
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
              <span className="relative z-10 text-black font-medium">Get in Touch</span>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection("#contact")} className="w-fit">
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}