
import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-temple-dark text-temple-beige/80">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">미륵사</h3>
            <p className="text-sm">
              미륵사는 백제 시대부터 이어온 한국 불교의 역사적 성지로, 많은 방문객과 불자들에게 평화와 위안을 제공하고 있습니다.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-temple-beige/10 flex items-center justify-center hover:bg-temple-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-temple-beige/10 flex items-center justify-center hover:bg-temple-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-temple-beige/10 flex items-center justify-center hover:bg-temple-red transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              {[
                { label: "사찰소개", href: "#intro" },
                { label: "법회/행사", href: "#events" },
                { label: "찾아오시는길", href: "#location" },
                { label: "문의(FAQ)", href: "#faq" },
                { label: "템플스테이", href: "#" },
                { label: "자원봉사", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-temple-beige/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-temple-red" size={18} />
                <span>전라북도 익산시 금마면 미륵사지로 362</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-temple-red" size={18} />
                <span>063-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-temple-red" size={18} />
                <span>info@mireuksa.org</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-medium mb-4">운영 시간</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="mr-2 text-temple-red shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">사찰 및 경내</p>
                  <p className="text-sm">매일 05:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 text-temple-red shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">전시관</p>
                  <p className="text-sm">화 - 일요일 09:00 - 17:00</p>
                  <p className="text-sm">월요일 휴관</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 text-temple-red shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">종무소</p>
                  <p className="text-sm">평일 09:00 - 17:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-temple-beige/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2023 미륵사. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0 text-sm">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
