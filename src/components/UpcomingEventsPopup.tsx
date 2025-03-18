
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface UpcomingEventsPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "초하루 법회",
    date: new Date(2023, 5, 15),
    location: "대웅전"
  },
  {
    id: 2,
    title: "108배 철야 정진",
    date: new Date(2023, 5, 18),
    location: "법당"
  },
  {
    id: 3,
    title: "불교 문화 특강",
    date: new Date(2023, 5, 20),
    location: "문화관"
  }
];

export function UpcomingEventsPopup({ open, onOpenChange }: UpcomingEventsPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-temple-red">
            <Calendar className="mr-2 h-5 w-5 text-temple-red" />
            다가오는 법회 및 행사
          </DialogTitle>
          <DialogDescription>
            미륵사의 주요 법회와 행사 일정을 확인하세요
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center p-3 bg-temple-beige/10 rounded-lg hover:bg-temple-beige/20 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-500">
                    {format(event.date, 'MM월 dd일 (EEE)', { locale: ko })} · {event.location}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => window.location.href = "/events/calendar"} className="w-full gap-2 bg-temple-red hover:bg-temple-red/90">
            <Calendar size={16} />
            <span>전체 행사 일정 보기</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
