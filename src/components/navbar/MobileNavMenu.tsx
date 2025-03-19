
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navStructure } from './navData';

interface MobileNavMenuProps {
  activeSection: string;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNavMenu = ({ 
  activeSection, 
  setMobileMenuOpen 
}: MobileNavMenuProps) => {
  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-temple-beige animate-dropdown-down overflow-y-auto max-h-[80vh]">
      <nav className="container mx-auto px-4 py-4 flex flex-col">
        {navStructure.map((item) => (
          <div key={item.id} className="py-2 border-b border-gray-100">
            {item.path ? (
              <Link 
                to={item.path}
                className={cn(
                  "block py-2 font-medium",
                  activeSection === item.id ? "text-temple-red" : "text-temple-dark"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <div className={cn(
                "py-2 font-medium",
                activeSection === item.id ? "text-temple-red" : "text-temple-dark"
              )}>
                {item.label}
              </div>
            )}
            
            {item.subMenu && (
              <div className="pl-4 pt-1 pb-2 space-y-1">
                {item.subMenu.map((subItem) => (
                  <Link 
                    key={subItem.path}
                    to={subItem.path}
                    className="block py-1.5 text-sm text-gray-600 hover:text-temple-red"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
