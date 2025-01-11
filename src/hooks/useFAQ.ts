import { useState } from 'react';

export function useFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(prev => !prev);
  
  return { isOpen, toggle };
}