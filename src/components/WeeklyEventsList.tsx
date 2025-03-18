
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, addDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Link } from 'react-router-dom';

interface WeeklyEventsListProps {
  className?: string;
}

// Generate fake events data for the next 7 days
const generateWeeklyEvents = () => {
  const today = new Date();
  const weeklyEvents = [];
  
  const eventTypes = [
    "초하루 법회",
    "저녁 예불",
    "108배 정진",
    "참선 수행",
    "불교 강좌",
    "다라니 기도",
    "자비관 명상"
  ];
  
  const locations = ["대웅전", "법당", "명상관", "문화관"];
  
  for (let i = 0; i < 7; i++) {
    // Skip some days to make it more realistic
    if (Math.random() > 0.7) continue;
    
    const eventDate = addDays(today, i);
    const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    
    weeklyEvents.push({
      id: i + 1,
      title: eventType,
      date: eventDate,
      location: location
    });
  }
  
  return weeklyEvents;
};

const weeklyEvents = generateWeeklyEvents();

export function WeeklyEventsList({ className }: WeeklyEventsListProps) {
  if (weeklyEvents.length === 0) return null;
  
  return (
    <div className={cn(
      "bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-temple-beige/30 w-72",
      className
    )}>
      <div className="p-4 border-b border-temple-beige/30">
        <h3 className="font-serif text-lg font-medium flex items-center text-temple-brown">
          <Calendar className="mr-2 h-5 w-5 text-temple-red" />
          이번 주 행사
        </h3>
      </div>
      
      <div className="p-2">
        {weeklyEvents.map((event) => (
          <div key={event.id} className="p-2 hover:bg-temple-beige/10 rounded-md transition-colors">
            <h4 className="font-medium text-temple-dark">{event.title}</h4>
            <p className="text-xs text-gray-500">
              {format(event.date, 'MM월 dd일 (EEE)', { locale: ko })} · {event.location}
            </p>
          </div>
        ))}
      </div>
      
      <div className="p-3 border-t border-temple-beige/30">
        <Link to="/events/calendar" className="text-sm text-temple-red hover:text-temple-brown flex items-center justify-center transition-colors">
          전체 일정 보기
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
