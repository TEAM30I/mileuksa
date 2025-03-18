
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

// FAQ Data
const faqData = [
  {
    question: "템플스테이 프로그램은 어떻게 신청하나요?",
    answer: "템플스테이 프로그램은 사찰 홈페이지 또는 전화로 신청 가능합니다. 주말 프로그램은 최소 일주일 전에 예약하시는 것이 좋습니다. 자세한 내용은 템플스테이 안내 페이지를 참고하시거나 사찰 전화번호로 문의해주세요."
  },
  {
    question: "법회에 참석하려면 미리 신청해야 하나요?",
    answer: "정기 법회는 별도의 신청 없이 자유롭게 참석 가능합니다. 다만, 특별법회나 행사의 경우 사전 신청이 필요할 수 있으니 홈페이지 공지사항을 확인해주세요."
  },
  {
    question: "사찰 방문 시 복장이나 준비물이 있나요?",
    answer: "사찰 방문 시에는 단정한 복장을 권장합니다. 지나치게 짧거나 노출이 심한 옷은 피해주세요. 법회 참석이나 기도를 위해 방문하시는 경우, 편안한 옷과 양말을 준비하시면 좋습니다. 템플스테이 참가자는 별도의 안내문을 참고해주세요."
  },
  {
    question: "기도 접수는 어떻게 하나요?",
    answer: "기도 접수는 사찰 내 기도접수처에서 가능합니다. 평일 오전 9시부터 오후 5시까지, 주말과 공휴일은 오전 9시부터 오후 6시까지 운영됩니다. 특별 기도의 경우 사전에 전화로 문의하시면 자세히 안내해 드립니다."
  },
  {
    question: "사찰 내에서 사진 촬영이 가능한가요?",
    answer: "사찰 외부와 경내 일부 구역에서는 사진 촬영이 가능합니다. 다만, 대웅전 내부와 법회 진행 중에는 촬영을 삼가주시고, 수행자와 방문객의 초상권을 존중해주세요. 또한, 상업적 용도의 촬영은 사전 허가가 필요합니다."
  },
  {
    question: "불교 입문자도 참여할 수 있는 프로그램이 있나요?",
    answer: "네, 있습니다. 매월 첫째 주 토요일에 불교 입문자를 위한 '부처님 가르침 산책' 프로그램을 운영하고 있습니다. 이외에도 초심자를 위한 명상 프로그램, 불교 문화 체험 등 다양한 프로그램이 마련되어 있으니 홈페이지를 참고해주세요."
  }
];

// FAQ Item Component
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium pr-8">{question}</h3>
        <ChevronDown
          className={cn(
            "transition-transform duration-200",
            isOpen ? "transform rotate-180" : ""
          )}
          size={20}
        />
      </button>
      <div
        ref={answerRef}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{
          maxHeight: isOpen ? (answerRef.current?.scrollHeight || 0) + "px" : "0px",
        }}
      >
        <p className="pb-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

// Contact Form Component
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

  // Animation on scroll
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
      
      // Get all elements with reveal class
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
          <h2 className="text-3xl md:text-4xl font-bold text-temple-dark">자주 묻는 질문 & 문의</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div className="reveal reveal-delay-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-6">자주 묻는 질문</h3>
              <div className="space-y-1">
                {faqData.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information and Form */}
          <div className="reveal reveal-delay-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-6">문의 안내</h3>
              
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
                    <p className="text-gray-600">info@mireuksa.org</p>
                    <p className="text-sm text-gray-500">24시간 접수 가능</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-6">문의하기</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
