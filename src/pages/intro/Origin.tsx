
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Clock, Milestone, TreeDeciduous } from 'lucide-react';

const TempleOrigin = () => {
  return (
    <PageLayout 
      title="미륵사 연원" 
      subtitle="미륵사의 창건과 이름의 유래에 대해 알아보세요."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-temple-brown">
                미륵사는 미래불인 미륵불을 모신 사찰로, 한국 불교의 깊은 역사와 전통이 깃든 곳입니다.
              </p>
              
              <p>
                미륵사는 1956년 대한불교조계종 소속 사찰로 정식 등록되었으며, 
                미륵불의 가르침을 현대적으로 계승하고 전파하기 위해 설립되었습니다. 
                미륵사라는 이름은 '미래에 이 세상에 나타나 중생을 구제할 부처님'인 
                미륵불에서 유래하였으며, 미래 지향적인 불교 정신을 상징합니다.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Milestone className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">창건 배경</h3>
              </div>
              <p className="text-gray-600">
                해방 이후 한국 불교의 부흥기에 미륵사는 새로운 불교 정신을 
                구현하고자 하는 뜻 깊은 신념으로 창건되었습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">발전 과정</h3>
              </div>
              <p className="text-gray-600">
                60여 년의 역사 동안 미륵사는 수많은 불자들의 신앙 중심지로 
                성장해 왔으며, 지역 사회와 함께 발전해 왔습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-2">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <TreeDeciduous className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">미륵불 신앙</h3>
              </div>
              <p className="text-gray-600">
                미륵불은 석가모니 부처님 이후 56억 7천만 년 후에 이 세상에 
                출현하여 모든 중생을 구제한다는 미래불입니다.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="reveal">
              <img 
                src="/placeholder.svg" 
                alt="미륵사 연원" 
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="flex flex-col justify-center reveal reveal-delay-1">
              <h3 className="text-xl font-semibold text-temple-brown mb-4">
                이름의 유래
              </h3>
              <p className="text-gray-600 mb-4">
                '미륵'은 산스크리트어 'Maitreya'의 음역으로, '자비로운 이'라는 뜻을 가지고 있습니다. 
                미륵불은 자비로 모든 중생을 구제하는 부처님으로, 미륵사는 이러한 미륵불의 
                자비 정신을 바탕으로 설립되었습니다.
              </p>
              <p className="text-gray-600">
                한국에서는 삼국시대부터 미륵신앙이 널리 퍼져 있었으며, 백제 시대에 
                건립된 미륵사지 석탑은 미륵 신앙의 오랜 역사를 보여줍니다. 
                현대의 미륵사는 이러한 한국 불교의 미륵 신앙을 계승하고 있습니다.
              </p>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              미륵사의 창건 정신
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사는 다음과 같은 창건 정신을 바탕으로 설립되었습니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">미래 지향적 불교:</strong> 과거에 머무르지 않고 현대 사회에 맞게 불교를 재해석합니다.
                </li>
                <li>
                  <strong className="text-temple-brown">보편적 자비:</strong> 모든 중생을 평등하게 대하는 자비의 정신을 실천합니다.
                </li>
                <li>
                  <strong className="text-temple-brown">대중 불교:</strong> 일반 대중들도 쉽게 접근할 수 있는 열린 불교를 지향합니다.
                </li>
                <li>
                  <strong className="text-temple-brown">사회 참여:</strong> 사회 문제에 적극적으로 참여하고 해결책을 모색합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TempleOrigin;
