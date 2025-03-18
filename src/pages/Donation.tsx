
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, CreditCard, Wallet, HandCoins } from 'lucide-react';

const Donation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        <section className="py-12 md:py-20 bg-temple-beige/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 reveal">
                <span className="inline-block bg-temple-red/10 px-4 py-1 rounded-full mb-4">
                  <span className="text-temple-red text-sm font-medium">미륵사 불사동참</span>
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-temple-dark mb-4">시주 안내</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  미륵사의 발전과 불교 문화의 계승을 위한 불사에 동참하여 공덕을 쌓으시고, 
                  부처님의 자비와 지혜가 함께하는 삶을 누리시길 바랍니다.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
                  <div className="flex items-center mb-4">
                    <div className="bg-temple-red/10 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-temple-red" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">미륵사 발전기금</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    미륵사의 법당 증축과 복지관 확장, 법회와 불교문화 발전을 위한 불사에 동참해주세요.
                    여러분의 정성은 미륵사의 발전과 불교 문화의 계승에 소중히 쓰여집니다.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-temple-brown mb-2">시주 계좌 안내</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">은행명</span>
                        <span className="font-medium">농협</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">계좌번호</span>
                        <span className="font-medium">123-456-7890</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">예금주</span>
                        <span className="font-medium">미륵사</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-temple-red/10 p-3 rounded-full">
                      <HandCoins className="h-6 w-6 text-temple-red" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">자비실천 기금</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    미륵사에서는 불우이웃돕기, 장학사업, 사회복지시설 지원 등 다양한 자비실천 활동을 
                    진행하고 있습니다. 자비와 사랑을 실천하는 불사에 동참해주세요.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-temple-brown mb-2">시주 계좌 안내</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">은행명</span>
                        <span className="font-medium">신한은행</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">계좌번호</span>
                        <span className="font-medium">987-654-3210</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">예금주</span>
                        <span className="font-medium">미륵사 자비실천회</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-temple-beige/20 rounded-xl p-6 md:p-8 mb-12 reveal">
                <h3 className="text-xl font-semibold text-temple-brown mb-4">불사 동참 안내</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    미륵사 불사에 동참하시면 다음과 같은 공덕을 쌓으실 수 있습니다:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>불사 동참자는 미륵사에서 봉행하는 모든 정기법회에 동참하실 수 있습니다.</li>
                    <li>동참자 명단은 미륵사 원불에 모셔지며, 매월 정기적으로 공덕회향 기도를 올립니다.</li>
                    <li>미륵사에서 발간하는 간행물을 받아보실 수 있습니다.</li>
                    <li>연말 기부금 영수증을 발급받으실 수 있습니다.</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center reveal">
                  <div className="bg-temple-red/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <CreditCard className="h-8 w-8 text-temple-red" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">카드 시주</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    신용카드, 체크카드를 통해 온라인으로 시주하실 수 있습니다.
                  </p>
                  <button className="text-temple-red hover:text-temple-brown text-sm">자세히 보기</button>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center reveal reveal-delay-1">
                  <div className="bg-temple-red/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Wallet className="h-8 w-8 text-temple-red" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">정기 시주</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    매월 일정 금액을 자동이체로 정기적으로 시주하실 수 있습니다.
                  </p>
                  <button className="text-temple-red hover:text-temple-brown text-sm">자세히 보기</button>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center reveal reveal-delay-2">
                  <div className="bg-temple-red/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-temple-red" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">물품 시주</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    쌀, 과일, 공양물 등의 물품을 직접 방문하여 시주하실 수 있습니다.
                  </p>
                  <button className="text-temple-red hover:text-temple-brown text-sm">자세히 보기</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donation;
