
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
import { WeeklyEventsList } from './WeeklyEventsList';
import { Link } from 'react-router-dom';

interface UpcomingEventsPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpcomingEventsPopup({ open, onOpenChange }: UpcomingEventsPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-temple-red">
            <Calendar className="mr-2 h-5 w-5 text-temple-red" />
            3월 법회 안내
          </DialogTitle>
          <DialogDescription>
            미륵사의 주요 법회와 행사 일정을 확인하세요
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <WeeklyEventsList className="border-none shadow-none" />
        </div>
        <DialogFooter>
          <Button asChild className="w-full gap-2 bg-temple-red hover:bg-temple-red/90">
            <Link to="/events/calendar">
              <Calendar size={16} />
              <span>전체 행사 일정 보기</span>
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
