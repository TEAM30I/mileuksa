
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Bookmark, GraduationCap, Flower } from 'lucide-react';

const TempleMonks = () => {
  // Sample monks data
  const monksData = [
    {
      id: 1,
      name: "법현 스님",
      position: "주지",
      specialty: "선불교 경전 해석",
      bio: "동국대학교 불교학과를 졸업하고 조계종 승가대학에서 수학했습니다. 선불교를 중심으로 현대인들에게 불교의 가르침을 쉽게 전달하는 데 힘쓰고 있습니다. 현재 미륵사 주지로서 사찰의 모든 활동을 총괄하고 있습니다.",
      image: "/placeholder.svg",
      teachings: "매주 일요일 오전 10시 법문",
      education: "동국대학교 불교학 박사"
    },
    {
      id: 2,
      name: "정우 스님",
      position: "교무부장",
      specialty: "불교 교육 프로그램",
      bio: "명지대학교 불교학과를 졸업하고 동국대학교에서 불교교육학 석사 학위를 받았습니다. 불교 교육 프로그램 개발과 운영에 특별한 관심을 가지고 있으며, 미륵사의 다양한 교육 활동을 담당하고 있습니다.",
      image: "/placeholder.svg",
      teachings: "매주 화요일 저녁 7시 초심자 불교 강좌",
      education: "동국대학교 불교교육학 석사"
    },
    {
      id: 3,
      name: "혜정 스님",
      position: "포교부장",
      specialty: "불교 명상",
      bio: "서울대학교 심리학과를 졸업하고 미국 나란다대학에서 불교심리학을 공부했습니다. 명상을 통한 심리 치유에 전문성을 가지고 있으며, 미륵사의 명상 프로그램과 템플스테이를 담당하고 있습니다.",
      image: "/placeholder.svg",
      teachings: "매주 목요일 저녁 7시 명상 워크숍",
      education: "나란다대학 불교심리학 석사"
    },
    {
      id: 4,
      name: "원광 스님",
      position: "재무부장",
      specialty: "불교 의례",
      bio: "고려대학교 경영학과를 졸업하고 조계종 승가대학에서 수학했습니다. 전통 불교 의례와 현대적 경영 방식을 접목시켜 사찰 운영의 효율성을 높이는 데 기여하고 있습니다.",
      image: "/placeholder.svg",
      teachings: "매월 보름 저녁 7시 특별 기도",
      education: "조계종 승가대학 졸업"
    },
    {
      id: 5,
      name: "지성 스님",
      position: "문화부장",
      specialty: "불교 예술",
      bio: "홍익대학교 미술학과를 졸업하고 일본 교토대학에서 불교미술을 공부했습니다. 불교 예술과 문화 프로그램을 개발하고 운영하며, 미륵사의 문화 행사를 담당하고 있습니다.",
      image: "/placeholder.svg",
      teachings: "매월 첫째 주 토요일 불교 예술 워크숍",
      education: "교토대학 불교미술 석사"
    },
    {
      id: 6,
      name: "도현 스님",
      position: "총무부장",
      specialty: "불교 철학",
      bio: "연세대학교 철학과를 졸업하고 영국 옥스퍼드대학에서 불교철학을 공부했습니다. 동양과 서양 철학의 비교 연구에 관심이 많으며, 미륵사의 학술 활동을 담당하고 있습니다.",
      image: "/placeholder.svg",
      teachings: "매월 셋째 주 토요일 불교 철학 강좌",
      education: "옥스퍼드대학 불교철학 박사"
    }
  ];

  return (
    <PageLayout 
      title="미륵사 스님들" 
      subtitle="미륵사에서 수행하고 계시는 스님들을 소개합니다."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-temple-brown">
                미륵사의 스님들은 각자의 전문 분야에서 불교의 가르침을 전파하고 실천하고 있습니다.
              </p>
              
              <p>
                전통적인 수행과 현대적인 지식을 겸비한 스님들은 미륵사의 다양한 활동을 
                이끌며, 불자들의 신앙생활과 수행을 지도하고 있습니다. 각 스님들의 
                전문 분야와 활동을 소개합니다.
              </p>
            </div>
          </div>
          
          {/* Monks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {monksData.map((monk, index) => (
              <div 
                key={monk.id} 
                className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden reveal ${
                  index > 0 ? `reveal-delay-${index % 3}` : ''
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={monk.image} 
                    alt={monk.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-temple-red/80 text-white px-3 py-1">
                    {monk.position}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-temple-brown mb-2">{monk.name}</h3>
                  <p className="text-gray-500 mb-4">전문 분야: {monk.specialty}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {monk.bio}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start text-sm">
                      <Bookmark className="h-4 w-4 text-temple-red mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{monk.teachings}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <GraduationCap className="h-4 w-4 text-temple-red mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{monk.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Daily Life */}
          <div className="mb-16 reveal">
            <h2 className="text-2xl font-semibold text-temple-brown mb-6 flex items-center">
              <Flower className="h-6 w-6 text-temple-red mr-2" />
              스님들의 일과
            </h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-temple-beige/30">
                      <th className="py-3 px-4 text-left font-medium text-temple-brown">시간</th>
                      <th className="py-3 px-4 text-left font-medium text-temple-brown">활동</th>
                      <th className="py-3 px-4 text-left font-medium text-temple-brown">장소</th>
                      <th className="py-3 px-4 text-left font-medium text-temple-brown">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 text-gray-600">04:00</td>
                      <td className="py-3 px-4 text-gray-600">기상 및 새벽예불</td>
                      <td className="py-3 px-4 text-gray-600">대웅전</td>
                      <td className="py-3 px-4 text-gray-600">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">05:00</td>
                      <td className="py-3 px-4 text-gray-600">참선</td>
                      <td className="py-3 px-4 text-gray-600">선방</td>
                      <td className="py-3 px-4 text-gray-600">1시간</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-600">06:00</td>
                      <td className="py-3 px-4 text-gray-600">아침 공양</td>
                      <td className="py-3 px-4 text-gray-600">공양간</td>
                      <td className="py-3 px-4 text-gray-600">발우 공양</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">07:00 - 11:00</td>
                      <td className="py-3 px-4 text-gray-600">작무 및 개인 수행</td>
                      <td className="py-3 px-4 text-gray-600">사찰 전체</td>
                      <td className="py-3 px-4 text-gray-600">각자 담당 업무</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-600">11:00</td>
                      <td className="py-3 px-4 text-gray-600">점심 공양</td>
                      <td className="py-3 px-4 text-gray-600">공양간</td>
                      <td className="py-3 px-4 text-gray-600">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">13:00 - 17:00</td>
                      <td className="py-3 px-4 text-gray-600">포교 활동</td>
                      <td className="py-3 px-4 text-gray-600">각 부서</td>
                      <td className="py-3 px-4 text-gray-600">신도 상담, 법회 준비 등</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-600">17:00</td>
                      <td className="py-3 px-4 text-gray-600">저녁 공양</td>
                      <td className="py-3 px-4 text-gray-600">공양간</td>
                      <td className="py-3 px-4 text-gray-600">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">18:00</td>
                      <td className="py-3 px-4 text-gray-600">저녁예불</td>
                      <td className="py-3 px-4 text-gray-600">대웅전</td>
                      <td className="py-3 px-4 text-gray-600">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-600">19:00 - 21:00</td>
                      <td className="py-3 px-4 text-gray-600">참선 또는 경전 공부</td>
                      <td className="py-3 px-4 text-gray-600">선방 또는 서재</td>
                      <td className="py-3 px-4 text-gray-600">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">21:30</td>
                      <td className="py-3 px-4 text-gray-600">취침</td>
                      <td className="py-3 px-4 text-gray-600">요사채</td>
                      <td className="py-3 px-4 text-gray-600">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              * 이 일과는 기본적인 틀이며, 특별 법회나 행사가 있는 날에는 일정이 조정될 수 있습니다.
            </p>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              스님과의 만남
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사의 스님들과 직접 대화하고 가르침을 받을 수 있는 다양한 기회가 있습니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">일요 법문:</strong> 매주 일요일 오전 10시, 대웅전에서 주지스님의 법문이 있습니다.
                </li>
                <li>
                  <strong className="text-temple-brown">불교 상담:</strong> 매주 수요일 오후 2시부터 5시까지 스님들과의 1:1 상담이 가능합니다. (예약 필수)
                </li>
                <li>
                  <strong className="text-temple-brown">템플스테이:</strong> 1박 2일 또는 주말 템플스테이에 참여하면 스님들과 함께 생활하며 가르침을 받을 수 있습니다.
                </li>
                <li>
                  <strong className="text-temple-brown">소통의 시간:</strong> 매월 마지막 토요일 오후 3시에 차담회가 열립니다. 스님들과 자유롭게 대화할 수 있는 시간입니다.
                </li>
                <li>
                  <strong className="text-temple-brown">특별 강좌:</strong> 각 스님들의 전문 분야에 따른 특별 강좌가 정기적으로 개설됩니다. 일정은 공지사항을 참고해 주세요.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TempleMonks;
