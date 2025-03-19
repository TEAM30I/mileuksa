
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Link } from 'react-router-dom';

interface WeeklyEventsListProps {
  className?: string;
}

// Updated weekly events data based on the image
const weeklyEvents = [
  {
    id: 1,
    title: "오백나한전기도",
    date: new Date(2023, 2, 9),  // 3월 9일(일)
    note: "음2.10"
  },
  {
    id: 2,
    title: "미륵전기도",
    date: new Date(2023, 2, 14), // 3월 14일(금)
    note: "음2.15"
  },
  {
    id: 3,
    title: "독성재일법회",
    date: new Date(2023, 2, 19), // 3월 19일(수)
    note: "음2.20"
  },
  {
    id: 4,
    title: "봄방생 및 삼사순례",
    date: new Date(2023, 2, 23), // 3월 23일(일)
    location: "포항오어사, 보경사, 감포(대관음사)",
    fee: "참가비: 5만원(중무소문의)"
  },
  {
    id: 5,
    title: "초하루기도법회",
    date: new Date(2023, 2, 29), // 3월 29일(토)
    note: "음3.1"
  },
  {
    id: 6,
    title: "산신기도입재",
    date: new Date(2023, 2, 29), // 3월 29일(토)
    note: "음3.1"
  },
  {
    id: 7,
    title: "산신기도회향",
    date: new Date(2023, 2, 31), // 3월 31일(월)
    note: "음3.3"
  }
];

export function WeeklyEventsList({ className }: WeeklyEventsListProps) {
  if (weeklyEvents.length === 0) return null;
  
  return (
    <div className={cn(
      "bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-temple-beige/30 w-full",
      className
    )}>
      <div className="p-4 border-b border-temple-beige/30">
        <h3 className="font-serif text-lg font-medium flex items-center text-temple-brown">
          <Calendar className="mr-2 h-5 w-5 text-temple-red" />
          3월 법회 안내
        </h3>
      </div>
      
      <div className="p-2 max-h-96 overflow-y-auto">
        {weeklyEvents.map((event) => (
          <div key={event.id} className="p-2 hover:bg-temple-beige/10 rounded-md transition-colors">
            <div className="flex items-start">
              <div className="flex-shrink-0 min-w-[100px] text-sm text-gray-700">
                {format(event.date, 'd일(EEE)', { locale: ko })}:
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-temple-dark">{event.title} {event.note && <span className="text-sm text-gray-500">({event.note})</span>}</h4>
                {event.location && <p className="text-xs text-gray-600 mt-1">장소: {event.location}</p>}
                {event.fee && <p className="text-xs text-gray-600">{event.fee}</p>}
              </div>
            </div>
          </div>
        ))}
        
        <div className="p-2 mt-2">
          <p className="text-xs text-gray-600 mt-1">* 매주일요일 다라니독송기도</p>
          <p className="text-xs text-gray-600 mt-1">* 초하루 기도법회, 독성 기도법회, 백중영가천도</p>
          <p className="text-xs text-gray-600 mt-1">온천장 지하철역 1번 출구에서 08:30</p>
          <p className="text-xs text-gray-600 mt-1">화명역 2번 출구에서 08:40</p>
          <p className="text-xs text-gray-600 mt-1">산성마을 금성초교 앞 9:00 차량 운행합니다.</p>
          <p className="text-xs text-gray-600 mt-1">* 매일 09:00 산성마을 금성초교 앞 차량 운행합니다</p>
        </div>
      </div>
      
      <div className="p-3 border-t border-temple-beige/30">
        <Link to="/events/calendar" className="text-sm text-temple-red hover:text-temple-brown flex items-center justify-center transition-colors">
          전체 일정 보기
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
