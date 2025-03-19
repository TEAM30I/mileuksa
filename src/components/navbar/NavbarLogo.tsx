import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const NavbarLogo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div 
        className={cn("font-serif text-2xl md:text-3xl font-bold transition-all duration-500 cursor-pointer", "text-temple-red")}
        onClick={() => navigate('/')}
      >
        미륵사
      </div>
      <p className="text-center text-temple-dark/80 text-xs">
        대한불교조계종 제 14교구 본사 범어사의 말사
      </p>
    </div>
  );
};
