import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

// 문의 안내 컴포넌트
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("문의가 접수되었습니다. 감사합니다.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-red focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-red focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          제목
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-red focus:border-transparent outline-none transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          메시지
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-red focus:border-transparent outline-none transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center w-full py-3 px-6 bg-temple-red text-white rounded-lg hover:bg-temple-red/90 transition-colors"
      >
        <Send className="mr-2" size={18} />
        문의 전송하기
      </button>
    </form>
  );
};

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // 애니메이션 처리 (스크롤 시)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // 'reveal' 클래스를 가진 모든 요소들을 옵저버에 추가
      const elements = sectionRef.current.querySelectorAll('.reveal:not(.active)');
      elements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-16 md:py-24 bg-temple-beige/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-temple-red/10 px-4 py-1 rounded-full mb-4">
            <span className="text-temple-red text-sm font-medium">문의</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-temple-dark">문의 및 연락</h2>
        </div>

        {/* 문의 안내 부분 */}
        <div className="reveal reveal-delay-2 space-y-6 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full sm:w-[80%] md:w-[60%]">
            {/* <h3 className="text-xl font-semibold mb-6 text-center">문의 안내</h3> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-temple-red/10 flex items-center justify-center mr-3">
                  <Phone className="text-temple-red" size={18} />
                </div>
                <div>
                  <h4 className="font-medium">전화 문의</h4>
                  <p className="text-gray-600">063-123-4567</p>
                  <p className="text-sm text-gray-500">평일 09:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-temple-red/10 flex items-center justify-center mr-3">
                  <Mail className="text-temple-red" size={18} />
                </div>
                <div>
                  <h4 className="font-medium">이메일 문의</h4>
                  <p className="text-gray-600">info@example.com</p>
                  <p className="text-sm text-gray-500">언제든지 이메일로 문의해 주세요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 자주 묻는 질문 부분은 주석 처리 */}
        {/* <div className="reveal reveal-delay-3 space-y-8">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;