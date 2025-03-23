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
import { Heart, Calendar } from "lucide-react";

interface DonationPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onViewEvents: () => void;
}

export function DonationPopup({ open, onOpenChange, onViewEvents }: DonationPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-temple-red">
            <Heart className="mr-2 h-5 w-5 text-temple-red" />
            시주 안내
          </DialogTitle>
          <DialogDescription>
            미륵사 불사와 자비행에 동참해 주세요
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="bg-temple-beige/20 p-4 rounded-lg">
            <h4 className="font-medium text-temple-brown mb-2">산신각 칠성각 대탱화불사묘연</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>산신각 칠성각 설판시주</span>
                <span className="font-medium text-temple-red">100만원</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>산신각 칠성각 개인시주</span>
                <span className="font-medium text-temple-red">10만원</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>산신각 칠성각 가족시주</span>
                <span className="font-medium text-temple-red">30만원 (가족4명까지)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-temple-brown mb-2">시주 계좌 안내</h4>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">은행명</span>
                <span className="font-medium">우체국</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">계좌번호</span>
                <span className="font-medium">502724 02 030671</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">예금주</span>
                <span className="font-medium">미륵사</span>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onViewEvents} className="gap-2">
            <Calendar size={16} />
            <span>법회일정 보기</span>
          </Button>
          <Button onClick={() => window.location.href = "/donation"} className="gap-2 bg-temple-red hover:bg-temple-red/90">
            <Heart size={16} />
            <span>시주 안내</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
