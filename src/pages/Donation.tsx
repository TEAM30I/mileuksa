
import React, { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { Heart, CreditCard, Wallet, HandCoins } from 'lucide-react';

const Donation = () => {
  return (
    <PageLayout 
      title="보시 안내" 
      subtitle="미륵사의 발전과 불교 문화의 계승을 위한 불사에 동참하여 공덕을 쌓으시길 바랍니다."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 reveal">
            <div className="flex items-center mb-4">
              <div className="bg-temple-red/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-temple-red" />
              </div>
              <h3 className="text-xl font-semibold ml-4">산신각 칠성각 대탱화불사묘연</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-temple-beige/10 rounded-lg">
                <span className="font-medium">산신각 칠성각 설판보시</span>
                <span className="text-temple-red font-medium">100만원</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-temple-beige/10 rounded-lg">
                <span className="font-medium">산신각 칠성각 개인보시</span>
                <span className="text-temple-red font-medium">10만원</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-temple-beige/10 rounded-lg">
                <span className="font-medium">산신각 칠성각 가족보시</span>
                <span className="text-temple-red font-medium">30만원 (가족4명까지)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 reveal">
            <div className="flex items-center mb-4">
              <div className="bg-temple-red/10 p-3 rounded-full">
                <Wallet className="h-6 w-6 text-temple-red" />
              </div>
              <h3 className="text-xl font-semibold ml-4">계좌 안내</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-temple-brown mb-2">보시 계좌 안내</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">금융기관</span>
                  <span className="font-medium">우체국</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">계좌번호</span>
                  <span className="font-medium">502724 02 030671</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">예금주</span>
                  <span className="font-medium">미륵사</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center reveal">
              <div className="bg-temple-red/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-temple-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">동참 안내</h3>
              <p className="text-sm text-gray-600 mb-4">
                불사에 동참하시면 법당 내에 이름을 올려 천도를 올려드립니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center reveal reveal-delay-1">
              <div className="bg-temple-red/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-temple-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">현장 접수</h3>
              <p className="text-sm text-gray-600 mb-4">
                미륵사를 방문하시어 현장에서 직접 접수하실 수 있습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center reveal reveal-delay-2">
              <div className="bg-temple-red/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <HandCoins className="h-8 w-8 text-temple-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">문의 안내</h3>
              <p className="text-sm text-gray-600 mb-4">
                추가 문의사항은 미륵사로 연락 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Donation;
