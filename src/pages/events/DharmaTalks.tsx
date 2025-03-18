
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Bookmark, Search, Filter, Calendar } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DharmaTalks = () => {
  // Sample dharma talks data
  const dharmaTalks = [
    {
      id: 1,
      title: "마음의 평화를 찾는 법",
      speaker: "법현 스님",
      date: "2023-05-10",
      category: "명상",
      content: "현대인의 바쁜 일상 속에서 마음의 평화를 찾는 방법에 대한 법문입니다. 명상과 호흡법을 통해 일상에서 실천할 수 있는 마음 다스리기 방법을 알려드립니다.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "불교의 자비 실천",
      speaker: "정우 스님",
      date: "2023-05-17",
      category: "자비",
      content: "불교에서 말하는 자비(慈悲)의 의미와 현대 사회에서 자비를 실천하는 방법에 대한 법문입니다. 작은 실천으로 시작하는 자비의 확장에 대해 이야기합니다.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "금강경 해설",
      speaker: "도현 스님",
      date: "2023-05-24",
      category: "경전해설",
      content: "불교의 중요 경전 중 하나인 금강경의 핵심 내용과 현대적 해석에 대한 법문입니다. 어려운 경전을 쉽게 이해할 수 있도록 설명해 드립니다.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "불교와 과학의 만남",
      speaker: "혜정 스님",
      date: "2023-05-31",
      category: "불교철학",
      content: "현대 과학과 불교 사상의 접점을 탐구하는 법문입니다. 양자역학과 불교의 공(空) 사상, 뇌과학과 명상의 관계 등 흥미로운 주제를 다룹니다.",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "초심자를 위한 불교 입문",
      speaker: "지성 스님",
      date: "2023-06-07",
      category: "입문",
      content: "불교를 처음 접하는 분들을 위한 기초 법문입니다. 불교의 핵심 가르침과 기본 개념, 수행법 등을 알기 쉽게 설명해 드립니다.",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "사찰음식과 몸 공양",
      speaker: "원광 스님",
      date: "2023-06-14",
      category: "생활불교",
      content: "사찰음식의 철학과 의미, 그리고 음식을 통한 수행법에 대한 법문입니다. 일상에서 실천할 수 있는 음식 수행법도 소개합니다.",
      image: "/placeholder.svg"
    }
  ];

  // Available categories for filtering
  const categories = ["전체", "명상", "자비", "경전해설", "불교철학", "입문", "생활불교"];

  return (
    <PageLayout 
      title="법문 모음" 
      subtitle="미륵사 스님들의 다양한 법문을 만나보세요."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8 reveal">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="법문 제목 또는 스님 이름 검색" 
                    className="pl-10"
                  />
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <Filter size={18} className="text-temple-red mr-1" />
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
          
          {/* Featured Talk */}
          <div className="mb-12 reveal">
            <h2 className="text-2xl font-semibold text-temple-brown mb-6">이번 주 법문</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-auto md:aspect-square relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="이번 주 법문" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-temple-red/80 text-white px-3 py-1 rounded">
                    특별 법문
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" /> 2023년 06월 18일
                      </span>
                      <span className="text-sm px-2 py-1 bg-temple-red/10 rounded-full text-temple-red">
                        명상
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-temple-brown mb-4">
                      현대인을 위한 마음 다스리기
                    </h3>
                    <p className="text-gray-600 mb-4">
                      디지털 시대의 정보 과잉과 끊임없는 연결 속에서 마음의 평화를 찾는 방법에 대한
                      특별 법문입니다. 법현 스님께서 일상 속 작은 명상법과 마음 챙김 방법을 알려드립니다.
                    </p>
                    <div className="flex items-center text-gray-500 mb-6">
                      <img 
                        src="/placeholder.svg" 
                        alt="법현 스님" 
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span>법현 스님</span>
                    </div>
                  </div>
                  <Button className="w-full bg-temple-red hover:bg-temple-red/90 gap-2">
                    <Bookmark size={16} />
                    <span>자세히 보기</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dharma Talks List */}
          <div className="mb-16 reveal">
            <h2 className="text-2xl font-semibold text-temple-brown mb-6">법문 목록</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dharmaTalks.map((talk, index) => (
                <div 
                  key={talk.id} 
                  className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow reveal ${
                    index > 0 ? `reveal-delay-${index % 3}` : ''
                  }`}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={talk.image} 
                      alt={talk.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full">
                      {talk.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-gray-500 text-sm">
                        <img 
                          src="/placeholder.svg" 
                          alt={talk.speaker} 
                          className="w-6 h-6 rounded-full mr-2 object-cover"
                        />
                        <span>{talk.speaker}</span>
                      </div>
                      <span className="text-xs text-gray-500">{talk.date}</span>
                    </div>
                    <h3 className="font-semibold text-temple-brown mb-2">{talk.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {talk.content}
                    </p>
                    <button className="text-temple-red hover:text-temple-red/80 text-sm font-medium flex items-center transition-colors">
                      <Bookmark size={16} className="mr-1" />
                      자세히 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Load More Button */}
          <div className="text-center mb-16 reveal">
            <Button variant="outline" className="gap-2">
              더 많은 법문 보기
            </Button>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              법문 참여 안내
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사에서는 매주 일요일 오전 10시에 주지스님의 법문이 있습니다. 
                누구나 참석 가능하며, 법문 후에는 차담회 시간도 마련되어 있습니다.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">정기 법문:</strong> 매주 일요일 오전 10시 (대웅전)
                </li>
                <li>
                  <strong className="text-temple-brown">특별 법문:</strong> 매월 보름과 그믐 (미륵전)
                </li>
                <li>
                  <strong className="text-temple-brown">초심자 법문:</strong> 매주 화요일 저녁 7시 (문화관)
                </li>
                <li>
                  <strong className="text-temple-brown">온라인 법문:</strong> 미륵사 유튜브 채널에서 시청 가능
                </li>
                <li>
                  <strong className="text-temple-brown">법문 자료집:</strong> 불교서점에서 구매 가능 (문의: 02-123-4567)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DharmaTalks;
