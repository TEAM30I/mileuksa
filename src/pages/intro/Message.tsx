
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Quote, Heart, Sparkles } from 'lucide-react';

const AbbotMessage = () => {
  return (
    <PageLayout 
      title="주지스님 인사말" 
      subtitle="미륵사 주지스님의 인사말씀을 전합니다."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 reveal">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="주지스님" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-temple-brown mb-2">
                  법현 스님
                </h3>
                <p className="text-gray-500 mb-4">미륵사 주지</p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-500">이메일</span>
                    <span className="font-medium">abbot@mireuksa.org</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">법문 요일</span>
                    <span className="font-medium">매주 일요일</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">주요 저서</span>
                    <span className="font-medium">『마음의 평화』 외 다수</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 reveal reveal-delay-1">
              <div className="prose prose-lg max-w-none">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-temple-red mr-2 flex-shrink-0 mt-1" />
                  <p className="text-xl font-medium text-temple-brown italic">
                    부처님의 자비와 지혜가 온 세상에 가득하기를 기원합니다.
                  </p>
                </div>
                
                <p>
                  미륵사 홈페이지를 찾아주신 모든 분들께 진심으로 감사드립니다. 
                  미륵사는 미래불인 미륵불을 모신 사찰로, 자비와 평화의 메시지를 
                  전하고자 노력하고 있습니다.
                </p>
                
                <p>
                  우리가 살아가는 현대 사회는 빠르게 변화하고 있으며, 이러한 변화 속에서 
                  많은 이들이 마음의 안정을 잃고 방황하고 있습니다. 불교는 2,600년 전 
                  석가모니 부처님께서 깨달으신 진리를 바탕으로, 고통에서 벗어나 참된 
                  행복을 찾는 길을 제시합니다.
                </p>
                
                <p>
                  미륵사는 전통적인 불교의 가르침을 현대적으로 해석하고, 일상에서 실천할 수 있는 
                  방법을 함께 고민하고 나누는 공간이 되고자 합니다. 법회와 명상, 불교 강좌와 
                  문화 프로그램 등 다양한 활동을 통해 부처님의 가르침을 전하고 있습니다.
                </p>
                
                <p>
                  특히 미륵사는 미래불인 미륵불의 자비와 평화의 메시지를 실천하며, 
                  모든 중생이 행복하고 평화로운 세상을 만들어가는 데 기여하고자 합니다. 
                  함께 수행하고 배우며 성장하는 공동체가 되길 희망합니다.
                </p>
                
                <p>
                  미륵사의 문은 언제나 열려 있습니다. 불교에 관심이 있으신 분들, 
                  마음의 평화를 찾고자 하시는 분들, 불교 문화를 체험하고 싶으신 분들 
                  모두 언제든지 방문해 주시기 바랍니다. 따뜻한 차 한 잔과 함께 
                  여러분을 맞이하겠습니다.
                </p>
                
                <p className="text-right">
                  미륵사 주지 법현 합장
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">주지스님 약력</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">1970년</span>
                  <span>출생</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">1990년</span>
                  <span>동국대학교 불교학과 입학</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">1995년</span>
                  <span>사미계 수지</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">1998년</span>
                  <span>비구계 수지</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">2000년</span>
                  <span>조계종 중앙승가대학 졸업</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">2005년</span>
                  <span>동국대학교 불교학과 박사학위 취득</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">2010년</span>
                  <span>미륵사 부주지 임명</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">2015년</span>
                  <span>미륵사 주지 취임</span>
                </li>
                <li className="flex">
                  <span className="text-temple-brown font-medium min-w-[100px]">현재</span>
                  <span>대한불교조계종 중앙종회의원</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">주지스님 법문 중에서</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="p-4 bg-temple-beige/10 rounded-lg">
                  <p className="italic">
                    "인생의 고통은 변화를 거부하는 마음에서 비롯됩니다. 
                    모든 것은 변하고 사라집니다. 이 진리를 받아들일 때 
                    우리는 자유로워질 수 있습니다."
                  </p>
                </div>
                <div className="p-4 bg-temple-beige/10 rounded-lg">
                  <p className="italic">
                    "자비는 타인을 위한 것만이 아닙니다. 자신에게 베푸는 
                    자비가 타인을 향한 자비의 시작입니다."
                  </p>
                </div>
                <div className="p-4 bg-temple-beige/10 rounded-lg">
                  <p className="italic">
                    "지금 이 순간에 깨어 있는 것, 그것이 명상의 시작이자 끝입니다. 
                    복잡한 기법보다 단순한 깨어있음이 더 중요합니다."
                  </p>
                </div>
                <div className="p-4 bg-temple-beige/10 rounded-lg">
                  <p className="italic">
                    "부처님은 우리 마음 속에 있습니다. 외부에서 찾지 말고 
                    자신의 내면을 들여다보세요."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              주지스님께 문의하기
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                법문이나 불교에 관한 질문이 있으시다면 언제든지 문의해 주세요. 
                주지스님께서 성심성의껏 답변해 드립니다.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">이메일:</strong> abbot@mireuksa.org
                </li>
                <li>
                  <strong className="text-temple-brown">상담 시간:</strong> 매주 수요일 오후 2시 - 5시 (예약 필수)
                </li>
                <li>
                  <strong className="text-temple-brown">법문 일정:</strong> 매주 일요일 오전 10시 (대웅전)
                </li>
                <li>
                  <strong className="text-temple-brown">출판물:</strong> 미륵사 안내실에서 구매 가능
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AbbotMessage;
