import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  currentSection: string;
  direction: 'forward' | 'backward' | 'none';
  setCurrentSection: (section: string) => void;
  setDirection: (direction: 'forward' | 'backward' | 'none') => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState('hero');
  const [direction, setDirection] = useState<'forward' | 'backward' | 'none'>('none');

  return (
    <NavigationContext.Provider 
      value={{ 
        currentSection, 
        direction, 
        setCurrentSection, 
        setDirection 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

// Section order for direction calculation
export const sectionOrder = [
  'hero',
  'about', 
  'skills',
  'projects',
  'education',
  'internships',
  'certifications',
  'contact'
];

export function calculateDirection(from: string, to: string): 'forward' | 'backward' | 'none' {
  const fromIndex = sectionOrder.indexOf(from);
  const toIndex = sectionOrder.indexOf(to);
  
  if (fromIndex === -1 || toIndex === -1) return 'none';
  if (fromIndex < toIndex) return 'forward';
  if (fromIndex > toIndex) return 'backward';
  return 'none';
}