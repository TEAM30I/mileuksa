
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Search, Download, FileText, Book, BookOpen, Video, Music, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Resources = () => {
  // Sample resources data
  const resources = [
    {
      id: 1,
      title: "불교 입문 가이드",
      description: "불교의 기본 개념과 수행법을 소개하는 입문 자료입니다.",
      type: "PDF",
      category: "교육",
      size: "2.4 MB",
      date: "2023-04-15"
    },
    {
      id: 2,
      title: "부처님 오신 날 법회 자료",
      description: "부처님 오신 날 법회에서 사용된 경전과 의식문입니다.",
      type: "PDF",
      category: "법회",
      size: "1.8 MB",
      date: "2023-05-10"
    },
    {
      id: 3,
      title: "미륵사 템플스테이 안내서",
      description: "미륵사 템플스테이 참가자를 위한 상세 안내 자료입니다.",
      type: "PDF",
      category: "템플스테이",
      size: "3.2 MB",
      date: "2023-03-20"
    },
    {
      id: 4,
      title: "법현 스님 법문 모음",
      description: "2023년 상반기 주지스님 법문을 텍스트로 정리한 자료입니다.",
      type: "DOC",
      category: "법문",
      size: "4.1 MB",
      date: "2023-06-05"
    },
    {
      id: 5,
      title: "불교 명상 가이드 영상",
      description: "초보자를 위한 불교 명상 가이드 영상입니다.",
      type: "VIDEO",
      category: "명상",
      size: "78.5 MB",
      date: "2023-01-12"
    },
    {
      id: 6,
      title: "천수경 독송",
      description: "천수경 독송 오디오 파일입니다. 수행과 명상 시 활용하세요.",
      type: "AUDIO",
      category: "독송",
      size: "18.2 MB",
      date: "2023-02-15"
    },
    {
      id: 7,
      title: "어린이 불교 학습지",
      description: "어린이 불교 교실에서 사용되는 학습 자료입니다.",
      type: "PDF",
      category: "교육",
      size: "1.5 MB",
      date: "2023-05-25"
    },
    {
      id: 8,
      title: "미륵사 역사 자료집",
      description: "미륵사의 역사와 전통을 소개하는 자료집입니다.",
      type: "PDF",
      category: "역사",
      size: "5.6 MB",
      date: "2022-12-10"
    }
  ];

  // Available resource types for filtering
  const resourceTypes = ["전체", "PDF", "DOC", "VIDEO", "AUDIO"];
  
  // Available categories for filtering
  const categories = ["전체", "교육", "법회", "템플스테이", "법문", "명상", "독송", "역사"];

  // Get icon based on resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-10 w-10 text-red-500" />;
      case "DOC":
        return <Book className="h-10 w-10 text-blue-500" />;
      case "VIDEO":
        return <Video className="h-10 w-10 text-green-500" />;
      case "AUDIO":
        return <Music className="h-10 w-10 text-purple-500" />;
      default:
        return <BookOpen className="h-10 w-10 text-gray-500" />;
    }
  };

  return (
    <PageLayout 
      title="자료실" 
      subtitle="미륵사의 다양한 불교 자료를 다운로드하고 활용하세요."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8 reveal">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-5">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="자료 검색" 
                    className="pl-10"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <div className="flex items-center text-temple-brown font-medium mb-2">
                      <Filter size={16} className="mr-2 text-temple-red" />
                      파일 형식
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {resourceTypes.map(type => (
                        <button
                          key={type}
                          className={
                            type === "전체"
                              ? "bg-temple-red text-white px-3 py-1 rounded-full text-sm transition-colors"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                          }
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-temple-brown font-medium mb-2">
                      <Filter size={16} className="mr-2 text-temple-red" />
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
          </div>
          
          {/* Resources */}
          <div className="mb-16 reveal">
            <h2 className="text-xl font-semibold text-temple-brown mb-6">자료 목록</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div 
                  key={resource.id} 
                  className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start reveal ${
                    index > 0 ? `reveal-delay-${index % 2}` : ''
                  }`}
                >
                  <div className="mr-4">
                    {getResourceIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-temple-brown">{resource.title}</h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500 flex space-x-2">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                        <span>•</span>
                        <span>{resource.date}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-temple-red border-temple-red hover:bg-temple-red/10 hover:text-temple-red gap-1"
                      >
                        <Download size={14} />
                        <span>다운로드</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Load More Button */}
          <div className="text-center mb-16 reveal">
            <Button variant="outline" className="gap-2">
              더 많은 자료 보기
            </Button>
          </div>
          
          {/* Resources Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <h3 className="text-lg font-semibold text-temple-brown mb-4">
                자료 이용 안내
              </h3>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  미륵사 자료실의 모든 자료는 비영리 목적으로 자유롭게 활용하실 수 있습니다.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>자료 이용 시 출처(미륵사)를 명시해 주세요.</li>
                  <li>자료를 수정하거나 재배포할 경우 미륵사 사무실에 문의해 주세요.</li>
                  <li>자료 공유는 가능하나 상업적 목적으로 사용할 수 없습니다.</li>
                  <li>자료에 대한 문의는 자료실 담당자(resource@mireuksa.org)에게 연락해 주세요.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <h3 className="text-lg font-semibold text-temple-brown mb-4">
                자료 제공 신청
              </h3>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  미륵사와 관련된 자료나 불교 연구 자료를 공유하고 싶으신 분들은 
                  자료 제공 신청을 해주세요.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>제공하실 자료의 제목과 간략한 설명을 포함해 주세요.</li>
                  <li>자료는 PDF, DOC, PPT, MP3, MP4 형식으로 제출 가능합니다.</li>
                  <li>저작권에 문제가 없는 자료만 공유 가능합니다.</li>
                  <li>제출된 자료는 검토 후 자료실에 등록됩니다.</li>
                </ul>
                <div className="pt-2">
                  <Button className="w-full gap-2 bg-temple-red hover:bg-temple-red/90">
                    자료 제공 신청하기
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              추천 불교 도서
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                불교에 관심이 있으신 분들을 위한 추천 도서 목록입니다. 
                미륵사 불교서점에서 구매하실 수 있습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-temple-brown mb-1">초보자를 위한 불교 입문</h4>
                  <p className="text-sm">불교의 기본 개념과 역사를 쉽게 설명한 입문서</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-temple-brown mb-1">마음의 평화를 찾아서</h4>
                  <p className="text-sm">명상과 불교 심리학을 통한 마음 다스리기</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-temple-brown mb-1">불교 경전의 이해</h4>
                  <p className="text-sm">주요 불교 경전을 현대적으로 해석한 안내서</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-temple-brown mb-1">일상에서의 불교 수행</h4>
                  <p className="text-sm">바쁜 현대인을 위한 실용적인 불교 수행법</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;
