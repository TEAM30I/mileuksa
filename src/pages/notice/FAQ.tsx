
import React from 'react';
import PageLayout from '../../components/PageLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneCall, Mail, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      question: "템플스테이는 어떻게 신청하나요?",
      answer: "템플스테이는 미륵사 홈페이지의 '템플스테이' 메뉴에서 온라인으로 신청하실 수 있습니다. 일정과 프로그램을 확인하신 후, 신청서를 작성하시면 담당자가 확인 후 연락드립니다. 문의사항은 02-123-4567로 연락주시기 바랍니다."
    },
    {
      question: "불교 입문자도 법회에 참석할 수 있나요?",
      answer: "네, 불교에 처음 입문하시는 분들도 자유롭게 법회에 참석하실 수 있습니다. 매주 일요일 오전 10시에 초심자를 위한 불교 입문 강좌도 진행하고 있으니 관심 있으신 분들의 많은 참여 바랍니다."
    },
    {
      question: "미륵사에서는 어떤 법회가 열리나요?",
      answer: "미륵사에서는 매월 음력 초하루와 보름에 정기법회가 열리며, 매주 일요일 오전에는 일요법회가 있습니다. 또한 특별 기도와 철야정진, 참선 수행 등 다양한 프로그램이 연중 진행됩니다. 자세한 일정은 '법회/행사' 메뉴에서 확인하실 수 있습니다."
    },
    {
      question: "단체 방문은 어떻게 신청하나요?",
      answer: "단체 방문은 최소 1주일 전에 미륵사 사무실(02-123-4567)로 연락하여 예약하시기 바랍니다. 단체 규모와 방문 목적에 따라 맞춤형 안내와 프로그램을 제공해 드립니다."
    },
    {
      question: "불교 입문서나 공부 자료는 어디서 구할 수 있나요?",
      answer: "미륵사 불교서점에서 다양한 불교 입문서와 경전, 수행 안내서 등을 구매하실 수 있습니다. 또한 미륵사 자료실에서는 온라인으로도 다양한 불교 자료를 제공하고 있으니 참고하시기 바랍니다."
    },
    {
      question: "기도 접수는 어떻게 하나요?",
      answer: "기도 접수는 미륵사 기도접수처에서 가능합니다. 운영시간은 오전 8시부터 오후 5시까지이며, 전화(02-123-4567)로도 문의하실 수 있습니다. 49재, 생일기도, 학업기도 등 다양한 기도를 접수받고 있습니다."
    },
    {
      question: "미륵사에 기부나 시주는 어떻게 할 수 있나요?",
      answer: "미륵사의 불사나 자비실천 활동에 동참하고 싶으신 분들은 '시주' 메뉴를 참고하시거나, 사무실로 문의해 주시기 바랍니다. 온라인 계좌이체, 방문 시주 등 다양한 방법으로 동참하실 수 있습니다."
    },
    {
      question: "불교 상담은 가능한가요?",
      answer: "네, 미륵사에서는 불교 상담을 제공하고 있습니다. 개인적인 고민이나 신앙적인 질문에 대해 상담을 원하시면 사무실에 예약을 하시거나, 매주 수요일 오후 2시부터 5시까지 진행되는 열린상담실을 이용하실 수 있습니다."
    }
  ];

  return (
    <PageLayout 
      title="자주 묻는 질문 (FAQ)" 
      subtitle="미륵사 방문 및 활동에 관한 자주 묻는 질문들을 모았습니다."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <div className="mb-16 reveal">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-temple-red">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 mr-2 text-temple-red flex-shrink-0 mt-0.5" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="py-4 px-7 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <PhoneCall className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">전화 문의</h3>
              </div>
              <p className="text-gray-600 mb-4">
                추가 문의사항이 있으시면 미륵사 사무실로 연락해 주세요.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">전화번호</span>
                    <span className="font-medium">02-123-4567</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">운영시간</span>
                    <span className="font-medium">09:00 - 17:00 (평일)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">이메일 문의</h3>
              </div>
              <p className="text-gray-600 mb-4">
                자세한 문의사항은 이메일로도 보내주실 수 있습니다.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">일반 문의</span>
                    <span className="font-medium">info@mireuksa.org</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">템플스테이 문의</span>
                    <span className="font-medium">temple@mireuksa.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              문의 전 확인해주세요
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사에 문의하시기 전에 다음 사항을 확인해주시면 더욱 빠르고 정확한 답변을 받으실 수 있습니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  홈페이지의 공지사항과 FAQ를 먼저 확인해주세요.
                </li>
                <li>
                  문의 내용에 대한 구체적인 정보를 준비해주세요. (날짜, 시간, 인원수 등)
                </li>
                <li>
                  템플스테이 문의는 최소 1주일 전에 해주시는 것이 좋습니다.
                </li>
                <li>
                  단체 방문은 최소 2주 전에 예약해주시기 바랍니다.
                </li>
                <li>
                  긴급한 문의는 전화로 연락해주시는 것이 가장 빠릅니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
