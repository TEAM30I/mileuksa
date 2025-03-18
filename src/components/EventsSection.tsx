
import React, { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { format, addMonths, subMonths, getDay, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface EventType {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  category: string;
  description: string;
}

// Sample event data
const events: EventType[] = [
  {
    id: 1,
    title: "초하루 법회",
    date: new Date(2023, 5, 15),
    time: "오전 10:00 - 12:00",
    location: "대웅전",
    category: "법회",
    description: "매월 음력 초하루에 진행되는 기도와 법회입니다."
  },
  {
    id: 2,
    title: "여름 템플스테이",
    date: new Date(2023, 6, 20),
    time: "금요일 14:00 - 일요일 12:00",
    location: "템플스테이관",
    category: "템플스테이",
    description: "사찰의 일상을 경험하고 명상과 불교 문화를 체험하는 2박 3일 프로그램입니다."
  },
  {
    id: 3,
    title: "백중기도 입재식",
    date: new Date(2023, 6, 5),
    time: "오전 11:00 - 12:30",
    location: "광명전",
    category: "기도",
    description: "백중(우란분절) 49일 기도의 입재식입니다."
  },
  {
    id: 4,
    title: "불교 문화 특강",
    date: new Date(2023, 5, 25),
    time: "오후 2:00 - 4:00",
    location: "문화관",
    category: "특강",
    description: "불교 미술과 문화에 대한 전문가 특강이 진행됩니다."
  },
  {
    id: 5,
    title: "백중기도 회향식",
    date: new Date(2023, 7, 25),
    time: "오전 11:00 - 오후 1:00",
    location: "광명전",
    category: "기도",
    description: "49일간의 백중기도를 마무리하는 회향식입니다."
  }
];

// Event Categories
const eventCategories = ["전체", "법회", "템플스테이", "기도", "특강"];

const EventsSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>(events);
  const sectionRef = useRef<HTMLElement>(null);

  // Filter events based on selected category
  useEffect(() => {
    let filtered = events;
    
    if (selectedCategory !== "전체") {
      filtered = events.filter(event => event.category === selectedCategory);
    }
    
    if (selectedDate) {
      filtered = filtered.filter(event => isSameDay(event.date, selectedDate));
    }
    
    setFilteredEvents(filtered);
  }, [selectedCategory, selectedDate]);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

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

  // Generate days for the current month view
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get day of week of first day (0 = Sunday, 6 = Saturday)
  const startDay = getDay(monthStart);
  
  // Create blank spaces for days before the first of the month
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  // Check if a date has events
  const hasEvents = (date: Date) => {
    return events.some(event => isSameDay(event.date, date));
  };

  // Get events for selected date
  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
  };

  return (
    <section id="events" ref={sectionRef} className="py-16 md:py-24 bg-temple-beige/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-temple-red/10 px-4 py-1 rounded-full mb-4">
            <span className="text-temple-red text-sm font-medium">일정 안내</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-temple-dark">법회/행사 일정</h2>
        </div>

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
                    {eventCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "px-3 py-1 rounded-full text-sm transition-colors",
                          selectedCategory === category
                            ? "bg-temple-red text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <label className="text-sm text-gray-500 mb-2 block">이번 달 주요 행사</label>
                  <div className="space-y-3">
                    {events
                      .filter(event => isSameMonth(event.date, new Date()))
                      .slice(0, 3)
                      .map(event => (
                        <div 
                          key={event.id}
                          className="p-3 bg-temple-beige/20 rounded-lg hover:bg-temple-beige/30 transition-colors cursor-pointer"
                          onClick={() => setSelectedDate(event.date)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{event.title}</h4>
                              <p className="text-sm text-gray-500">
                                {format(event.date, 'MM월 dd일')} · {event.location}
                              </p>
                            </div>
                            <span className="text-xs px-2 py-1 bg-white rounded-full text-temple-red">
                              {event.category}
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
                  {format(currentMonth, 'yyyy년 MM월', { locale: ko })}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Next month"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Day headers */}
                {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                  <div key={day} className="text-center py-2 font-medium">
                    <span className={cn(
                      index === 0 ? "text-red-500" : index === 6 ? "text-blue-500" : "text-gray-600"
                    )}>
                      {day}
                    </span>
                  </div>
                ))}
                
                {/* Blank spaces */}
                {blanks.map(blank => (
                  <div key={`blank-${blank}`} className="aspect-square p-2" />
                ))}
                
                {/* Days */}
                {monthDays.map(day => (
                  <button
                    key={format(day, 'yyyy-MM-dd')}
                    onClick={() => setSelectedDate(day)}
                    className={cn(
                      "relative aspect-square p-2 rounded-lg transition-colors",
                      isSameDay(day, selectedDate || new Date(0)) ? "bg-temple-red text-white" : "hover:bg-gray-100",
                      isToday(day) && !isSameDay(day, selectedDate || new Date(0)) && "border border-temple-red/70"
                    )}
                  >
                    <span>{format(day, 'd')}</span>
                    {hasEvents(day) && (
                      <span className={cn(
                        "absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full",
                        isSameDay(day, selectedDate || new Date(0)) ? "bg-white" : "bg-temple-red"
                      )} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Events list */}
            <div className="reveal">
              <h3 className="text-lg font-semibold mb-4">
                {selectedDate
                  ? `${format(selectedDate, 'MM월 dd일')} 행사 일정`
                  : selectedCategory !== "전체"
                    ? `${selectedCategory} 일정`
                    : "모든 행사 일정"}
              </h3>
              
              {filteredEvents.length > 0 ? (
                <div className="space-y-4">
                  {filteredEvents.map(event => (
                    <div 
                      key={event.id}
                      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between">
                        <span className="text-sm px-2 py-1 bg-temple-red/10 rounded-full text-temple-red">
                          {event.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {format(event.date, 'yyyy년 MM월 dd일')}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-semibold mt-2 mb-3">{event.title}</h4>
                      
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start">
                          <span className="font-medium min-w-[70px]">시간:</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-medium min-w-[70px]">장소:</span>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-medium min-w-[70px]">내용:</span>
                          <span>{event.description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
                  <CalendarIcon className="mx-auto text-gray-300 mb-3" size={40} />
                  <p className="text-gray-500">일정이 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
