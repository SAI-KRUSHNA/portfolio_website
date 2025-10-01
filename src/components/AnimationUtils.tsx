import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

// Split text animation component
export function SplitText({ 
  children, 
  className = "",
  delay = 0.05,
  duration = 0.5
}: { 
  children: string; 
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const letters = children.split("");
  
  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: index * delay,
            ease: [0.68, -0.55, 0.265, 1.55]
          }}
          viewport={{ once: true }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}

// Reveal animation with advanced easing
export function RevealAnimation({ 
  children, 
  direction = "up",
  delay = 0,
  duration = 0.8
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const directionMap = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { y: 0, x: 100 },
    right: { y: 0, x: -100 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionMap[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// Scroll-triggered parallax effect
export function ParallaxElement({ 
  children,
  speed = 0.5,
  className = ""
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Sticky scroll section
export function StickySection({ 
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`sticky top-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Scroll progress indicator
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX }}
    />
  );
}

// Magnetic hover effect
export function MagneticElement({ 
  children,
  strength = 0.2,
  className = ""
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) * strength;
      const y = (e.clientY - centerY) * strength;
      
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Lerp smoothing hook
export function useLerpScroll(target: number, factor = 0.1) {
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    const animate = () => {
      setCurrent(prev => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.01) return target;
        return prev + diff * factor;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, [target, factor]);

  return current;
}