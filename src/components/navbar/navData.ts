
export const navStructure = [
  { 
    id: 'intro', 
    label: '사찰소개',
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
    subMenu: [
      { label: '행사일정', path: '/events/calendar' },
      { label: '법문', path: '/events/dharma-talks' },
    ]
  },
  { 
    id: 'donation', 
    label: '시주',
    path: '/donation'
  },
  { 
    id: 'location', 
    label: '찾아오시는길',
    path: '/location'
  },
  { 
    id: 'notice', 
    label: '공지사항',
    subMenu: [
      { label: '공지사항', path: '/notice/announcements' },
      { label: 'FAQ', path: '/notice/faq' },
      { label: '미륵사 갤러리', path: '/notice/gallery' },
      { label: '자료실', path: '/notice/resources' },
    ]
  }
];
