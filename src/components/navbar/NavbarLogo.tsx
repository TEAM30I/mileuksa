
import React from 'react';
import { cn } from '@/lib/utils';

export const NavbarLogo = () => {
  return (
    <div 
      className={cn("font-serif text-2xl md:text-3xl font-bold transition-all duration-500 cursor-pointer", "text-temple-red")}
      onClick={() => window.location.href = '/'}
    >
      미륵사
    </div>
  );
};
