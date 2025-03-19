
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { DesktopDropdownMenu } from './DesktopDropdownMenu';
import { navStructure } from './navData';

interface DesktopNavMenuProps {
  activeSection: string;
  showAllMenus: boolean;
  setShowAllMenus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DesktopNavMenu = ({ 
  activeSection, 
  showAllMenus, 
  setShowAllMenus 
}: DesktopNavMenuProps) => {
  return (
    <>
      <nav className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-2">
          {navStructure.map((item) => (
            <li 
              key={item.id} 
              className="group relative"
              onMouseEnter={() => setShowAllMenus(true)}
              onMouseLeave={() => setShowAllMenus(false)}
            >
              {item.path ? (
                <Link 
                  to={item.path}
                  className={cn(
                    "px-3 py-2 flex items-center transition-colors duration-300",
                    activeSection === item.id ? "text-temple-red" : "text-temple-dark hover:text-temple-red"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <div 
                  className={cn(
                    "px-3 py-2 flex items-center cursor-pointer transition-colors duration-300",
                    activeSection === item.id ? "text-temple-red" : "text-temple-dark hover:text-temple-red"
                  )}
                >
                  {item.label}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <DesktopDropdownMenu showAllMenus={showAllMenus} setShowAllMenus={setShowAllMenus} />
    </>
  );
};
