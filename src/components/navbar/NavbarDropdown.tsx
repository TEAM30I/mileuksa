import React from 'react';
import { Link } from 'react-router-dom';
import { navStructure } from './navData';

interface NavbarDropdownProps {
  activeIndex: number;
  onClose: () => void;
  cancelClose: () => void;
}

export const NavbarDropdown = ({ activeIndex, onClose, cancelClose }: NavbarDropdownProps) => {
  const item = navStructure[activeIndex - 1];
  return (
    <div
      className="absolute w-full bg-white backdrop-blur-sm shadow-lg z-30 animate-dropdown-down"
      onMouseEnter={cancelClose}
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-6 gap-0">
          {/* 왼쪽 2/6: subscription 영역 (구분선만 적용) */}
          <div className="col-span-2 p-4 border-r border-gray-300 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-center mb-2">
              {item.label}
            </h3>
            <p className="text-center">
              {item.subscription || `${item.label}의 최신 소식과 정보`}
            </p>
          </div>
          {/* 오른쪽 2/6: subMenu 항목 매핑 (2열 그리드) */}
          <div className="col-span-2 p-4">
            <div className="grid grid-cols-2 gap-4">
              {item.subMenu ? (
                item.subMenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className="p-3 hover:underline transition-colors"
                    onClick={onClose}
                  >
                    <span className="block">{subItem.label}</span>
                  </Link>
                ))
              ) : (
                <Link
                  to={item.path || '#'}
                  className="p-3 hover:underline transition-colors"
                  onClick={onClose}
                >
                  <span className="block">바로가기</span>
                </Link>
              )}
            </div>
          </div>
          {/* 오른쪽 나머지 2/6: 빈 영역 (여백) */}
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};
