import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Swiper 스타일
import 'swiper/css/pagination';  // 페이지네이션 스타일
import 'swiper/css/navigation';  // 네비게이션 스타일

const TempleInfoSection = () => {
  // 유튜브 링크 배열
  const youtubeLinks = [
    'https://www.youtube.com/watch?v=lwy9Bq5KMVQ',
    'https://www.youtube.com/watch?v=_6HnVZZqicA',
    'https://www.youtube.com/watch?v=yIGA8c1TgHo',
    'https://www.youtube.com/watch?v=9bZkp7q19f0',
  ];

  return (
    <section className="temple-info-section py-8">
      <h2 className="text-3xl font-bold text-center mb-6">미륵사 유튜브 영상</h2>
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}  // 슬라이드 간 간격
        slidesPerView={1}  // 모바일에서 기본 1개씩 표시
        navigation  // 네비게이션 버튼
        pagination={{ clickable: true }}  // 페이지네이션
        loop={true}  // 끝에서 처음으로 돌아가도록 설정
        breakpoints={{
          320: {
            slidesPerView: 1,  // 모바일에서는 한 슬라이드
          },
          768: {
            slidesPerView: 2,  // 태블릿에서는 두 슬라이드
          },
          1024: {
            slidesPerView: 3,  // 데스크탑에서는 세 슬라이드
          },
        }}
        className="swiper-container"
      >
        {youtubeLinks.map((link, index) => {
          const youtubeVideoId = link.split('v=')[1];
          const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

          return (
            <SwiperSlide key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={thumbnailUrl}
                  alt={`YouTube Video ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TempleInfoSection;