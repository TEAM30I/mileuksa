export const navStructure = [
  { 
    id: 'intro', 
    label: '사찰소개',
    subscription: "고요한 미륵사의 세계, 전통과 현대가 어우러진 깊은 이야기를 전하다",
    subMenu: [
      { label: '미륵사 소개', path: '/intro/about' },
      { label: '소개 및 유래', path: '/intro/origin' },
      { label: '역사 및 전설', path: '/intro/history' },
      { label: '사찰안내', path: '/intro/facilities' },
      { label: '주지스님 인사말', path: '/intro/message' },
      { label: '미륵사 스님', path: '/intro/monks' },
    ]
  },
  { 
    id: 'events', 
    label: '법회/행사',
    subscription: "마음의 쉼과 영적 깨달음을 선사하는 생생한 행사 소식",
    subMenu: [
      { label: '행사일정', path: '/events/calendar' },
      { label: '법문', path: '/events/dharma-talks' },
    ]
  },
  { 
    id: 'donation', 
    label: '시주',
    subscription: "불사의 길에 함께하는 소중한 나눔, 당신의 정성이 모입니다.",
    path: '/donation'
  },
  { 
    id: 'location', 
    label: '찾아오시는길',
    subscription: "쉽고 편안하게 미륵사의 품으로 오실 수 있도록 안내합니다.",
    path: '/location'
  },
  { 
    id: 'notice', 
    label: '공지사항',
    subscription: "최근 소식과 갤러리, 자료실을 통해 전해지는 미륵사의 이야기",
    subMenu: [
      { label: '공지사항', path: '/notice/announcements' },
      { label: 'FAQ', path: '/notice/faq' },
      { label: '미륵사 갤러리', path: '/notice/gallery' },
      { label: '자료실', path: '/notice/resources' },
    ]
  }
];
