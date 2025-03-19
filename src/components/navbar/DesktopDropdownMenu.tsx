
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navStructure } from './navData';

interface DesktopDropdownMenuProps {
  showAllMenus: boolean;
  setShowAllMenus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DesktopDropdownMenu = ({ 
  showAllMenus, 
  setShowAllMenus 
}: DesktopDropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  const handleMouseEnter = () => {
    setShowAllMenus(true);
  };

  const handleMouseLeave = () => {
    setShowAllMenus(false);
  };

  // Add click-outside handler to close dropdown when clicked elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowAllMenus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowAllMenus]);

  return (
    <>
      <div 
        ref={menuRef}
        className={cn(
          "absolute top-full left-0 w-full bg-white shadow-lg border-t border-temple-beige z-30",
          showAllMenus ? "animate-dropdown-down opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none animate-dropdown-up"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-5 gap-4">
            {navStructure.map((category) => (
              <div key={category.id} className="p-2">
                {category.subMenu ? (
                  <>
                    <h3 className="font-serif font-medium text-lg mb-2 text-temple-brown border-b pb-1">{category.label}</h3>
                    <ul className="space-y-1">
                      {category.subMenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link 
                            to={subItem.path}
                            className="block py-1 text-temple-dark hover:bg-temple-beige/20 hover:text-temple-red transition-colors rounded px-2"
                            onClick={() => setShowAllMenus(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : category.path ? (
                  <div className="h-full flex items-center">
                    <Link 
                      to={category.path}
                      className="block py-1 text-temple-brown font-medium hover:text-temple-red transition-colors text-lg"
                      onClick={() => setShowAllMenus(false)}
                    >
                      {category.label}
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Darken background when dropdown is active - fixed to prevent text overlap */}
      {showAllMenus && (
        <div 
          className="fixed inset-0 bg-black/40 z-10"
          style={{ top: '130px' }}
          onClick={() => setShowAllMenus(false)}
        />
      )}
    </>
  );
};
