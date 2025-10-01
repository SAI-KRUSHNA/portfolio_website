import { useEffect, useRef } from 'react';
import { useNavigation, sectionOrder, calculateDirection } from './NavigationContext';

export function useScrollDirection() {
  const { currentSection, setCurrentSection, setDirection } = useNavigation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = sectionOrder.map(section => {
        const element = document.getElementById(section);
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
        
        return {
          name: section,
          element,
          rect,
          isVisible
        };
      }).filter(Boolean);

      // Find the current section based on scroll position
      const visibleSection = sections.find(section => section!.isVisible);
      
      if (visibleSection && visibleSection.name !== currentSection) {
        const scrollDirection = currentScrollY > lastScrollY.current ? 'forward' : 'backward';
        const navDirection = calculateDirection(currentSection, visibleSection.name);
        
        setDirection(navDirection);
        setCurrentSection(visibleSection.name);
      }

      lastScrollY.current = currentScrollY;
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [currentSection, setCurrentSection, setDirection]);
}