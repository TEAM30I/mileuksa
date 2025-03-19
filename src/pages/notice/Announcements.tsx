
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Search, Filter, Calendar, ArrowRight, Pin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Announcements = () => {
  // Sample announcements data
  const announcements = [
    {
      id: 1,
      title: "6월 템플스테이 일정 안내",
      date: "2023-05-25",
      category: "템플스테이",
      content: "6월 템플스테이 일정이 확정되었습니다. 주말 프로그램과 특별 명상 프로그램이 준비되어 있으니 많은 참여 바랍니다.",
      isPinned: true
    },
    {
      id: 2,
      title: "하안거 결제 법회 안내",
      date: "2023-05-20",
      category: "법회",
      content: "여름 동안 진행되는 하안거 결제 법회가 6월 15일에 진행됩니다. 스님들의 여름 수행을 응원하는 자리에 불자 여러분을 초대합니다."
    },
    {
      id: 3,
      title: "미륵사 주차장 공사 안내",
      date: "2023-05-18",
      category: "시설",
      content: "6월 1일부터 15일까지 미륵사 주차장 확장 공사가 진행됩니다. 방문 시 임시 주차장을 이용해 주시기 바랍니다."
    },
    {
      id: 4,
      title: "어린이 불교 교실 여름 특강 모집",
      date: "2023-05-15",
      category: "교육",
      content: "초등학생을 대상으로 하는 여름 방학 특별 불교 교실 참가자를 모집합니다. 재미있는 활동과 함께 불교의 기본 가르침을 배울 수 있는 기회입니다."
    },
    {
      id: 5,
      title: "불교 합창단 단원 모집",
      date: "2023-05-10",
      category: "문화",
      content: "미륵사 불교 합창단에서 새로운 단원을 모집합니다. 불교 음악에 관심 있는 분들의 많은 지원 바랍니다."
    },
    {
      id: 6,
      title: "미륵사 홈페이지 개편 안내",
      date: "2023-05-05",
      category: "기타",
      content: "보다 편리한 정보 제공을 위해 미륵사 홈페이지가 새롭게 개편되었습니다. 개선된 기능과 새로운 콘텐츠를 확인해 보세요."
    },
    {
      id: 7,
      title: "부처님 오신 날 행사 결과 보고",
      date: "2023-05-03",
      category: "행사",
      content: "성황리에 마무리된 부처님 오신 날 행사의 결과를 공유합니다. 많은 불자님들의 참여에 감사드립니다."
    },
    {
      id: 8,
      title: "여름 불교 명상 캠프 참가자 모집",
      date: "2023-05-01",
      category: "수행",
      content: "7월에 진행되는 여름 불교 명상 캠프 참가자를 모집합니다. 자연 속에서 진행되는 특별한 명상 체험에 여러분을 초대합니다."
    }
  ];

  // Available categories for filtering
  const categories = ["전체", "법회", "템플스테이", "행사", "교육", "수행", "시설", "문화", "기타"];

  return (
    <PageLayout 
      title="공지사항" 
      subtitle="미륵사의 최신 소식과 중요 안내사항을 확인하세요."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8 reveal">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="공지사항 검색" 
                    className="pl-10"
                  />
                </div>
                
                <div>
                  <div className="flex items-center text-temple-brown font-medium mb-2">
                    <Filter size={18} className="mr-2 text-temple-red" />
                    카테고리
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={
                          category === "전체"
                            ? "bg-temple-red text-white px-3 py-1 rounded-full text-sm transition-colors"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                        }
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pinned Announcements */}
          <div className="mb-8 reveal">
            <h2 className="text-lg font-semibold text-temple-brown mb-4 flex items-center">
              <Pin className="h-5 w-5 mr-2 text-temple-red" />
              주요 공지사항
            </h2>
            
            {announcements.filter(item => item.isPinned).map(announcement => (
              <div 
                key={announcement.id}
                className="bg-temple-beige/10 border-l-4 border-temple-red rounded-r-lg p-5 mb-4 hover:bg-temple-beige/20 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-temple-brown mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {announcement.content}
                    </p>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={14} className="mr-1" /> {announcement.date}
                      </span>
                      <span className="px-2 py-0.5 bg-temple-red/10 rounded-full text-temple-red">
                        {announcement.category}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-temple-red hover:text-temple-red/80 p-2"
                  >
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Regular Announcements */}
          <div className="mb-16 reveal">
            <h2 className="text-lg font-semibold text-temple-brown mb-4">
              전체 공지사항
            </h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="divide-y divide-gray-100">
                {announcements.filter(item => !item.isPinned).map(announcement => (
                  <div 
                    key={announcement.id}
                    className="p-5 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-temple-brown mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {announcement.content}
                        </p>
                        <div className="flex items-center space-x-3 text-sm">
                          <span className="text-gray-500 flex items-center">
                            <Calendar size={14} className="mr-1" /> {announcement.date}
                          </span>
                          <span className="px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                            {announcement.category}
                          </span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-500 hover:text-temple-red p-2"
                      >
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mb-16 reveal">
            <nav className="flex space-x-1">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                &lt;
              </Button>
              <Button size="sm" className="h-8 w-8 p-0 bg-temple-red hover:bg-temple-red/90">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                4
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                5
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                &gt;
              </Button>
            </nav>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              알림 신청
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사의 중요 공지사항과 행사 소식을 이메일로 받아보세요.
              </p>
              <div className="flex gap-2">
                <Input placeholder="이메일 주소를 입력하세요" className="bg-white" />
                <Button className="bg-temple-red hover:bg-temple-red/90">
                  구독하기
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                * 구독 신청 시 개인정보 수집에 동의하는 것으로 간주됩니다. 
                언제든지 이메일 하단의 구독 취소 링크를 통해 해지할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Announcements;
