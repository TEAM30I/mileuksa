
import React from 'react';
import { Calendar as CalendarIcon, Filter } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const EventsCalendar = () => {
  return (
    <PageLayout 
      title="법회 및 행사 일정" 
      subtitle="미륵사의 다양한 법회와 행사 일정을 확인하세요."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* We'll reuse most of the EventsSection component logic here */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1 reveal">
              <div className="sticky top-24 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Filter size={18} className="mr-2 text-temple-red" />
                    일정 필터
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">행사 유형</label>
                    <div className="flex flex-wrap gap-2">
                      {["전체", "법회", "템플스테이", "기도", "특강"].map(category => (
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
                  
                  <div className="pt-4 border-t border-gray-100">
                    <label className="text-sm text-gray-500 mb-2 block">이번 달 주요 행사</label>
                    <div className="space-y-3">
                      {/* Sample events */}
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i}
                          className="p-3 bg-temple-beige/20 rounded-lg hover:bg-temple-beige/30 transition-colors cursor-pointer"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">초하루 법회</h4>
                              <p className="text-sm text-gray-500">
                                06월 15일 · 대웅전
                              </p>
                            </div>
                            <span className="text-xs px-2 py-1 bg-white rounded-full text-temple-red">
                              법회
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar and Events */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calendar */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 reveal">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <CalendarIcon size={20} className="mr-2 text-temple-red" />
                    2023년 06월
                  </h3>
                </div>

                {/* Calendar grid placeholder */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Day headers */}
                  {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                    <div key={day} className="text-center py-2 font-medium">
                      <span className={
                        index === 0 ? "text-red-500" : index === 6 ? "text-blue-500" : "text-gray-600"
                      }>
                        {day}
                      </span>
                    </div>
                  ))}
                  
                  {/* Calendar cells placeholder */}
                  {Array.from({ length: 35 }, (_, i) => (
                    <button
                      key={i}
                      className={`
                        relative aspect-square p-2 rounded-lg 
                        ${i === 15 ? "bg-temple-red text-white" : "hover:bg-gray-100"}
                        ${i === 0 ? "border border-temple-red/70" : ""}
                      `}
                    >
                      <span>{(i % 31) + 1 > 31 ? "" : (i % 31) + 1}</span>
                      {i === 15 && (
                        <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Events list */}
              <div className="reveal">
                <h3 className="text-lg font-semibold mb-4">6월 15일 행사 일정</h3>
                
                <div className="space-y-4">
                  {/* Sample event */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                      <span className="text-sm px-2 py-1 bg-temple-red/10 rounded-full text-temple-red">
                        법회
                      </span>
                      <span className="text-sm text-gray-500">
                        2023년 06월 15일
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-semibold mt-2 mb-3">초하루 법회</h4>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start">
                        <span className="font-medium min-w-[70px]">시간:</span>
                        <span>오전 10:00 - 12:00</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[70px]">장소:</span>
                        <span>대웅전</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium min-w-[70px]">내용:</span>
                        <span>매월 음력 초하루에 진행되는 기도와 법회입니다.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EventsCalendar;
