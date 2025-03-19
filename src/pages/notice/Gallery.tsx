
import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Filter, Image, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample image data
const galleryItems = [
  {
    id: 1,
    title: "미륵사 대웅전",
    category: "건물",
    date: "2023-04-15",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "미륵사의 대웅전 전경입니다. 전통 건축 양식과 현대적 요소가 조화롭게 어우러진 모습입니다."
  },
  {
    id: 2,
    title: "봄 연등회",
    category: "행사",
    date: "2023-05-20",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "부처님 오신 날을 맞아 진행된 연등회 행사 모습입니다. 많은 불자들이 참여하여 아름다운 연등을 밝혔습니다."
  },
  {
    id: 3,
    title: "템플스테이 명상",
    category: "프로그램",
    date: "2023-06-10",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "템플스테이 참가자들의 명상 수행 모습입니다. 고요히 자신을 돌아보는 시간을 가졌습니다."
  },
  {
    id: 4,
    title: "미륵사 전경",
    category: "건물",
    date: "2023-03-25",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "산과 어우러진 미륵사의 아름다운 전경입니다. 사계절 내내 자연의 아름다움을 느낄 수 있습니다."
  },
  {
    id: 5,
    title: "108배 정진",
    category: "수행",
    date: "2023-07-05",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "108배 정진 수행에 참여한 불자들의 모습입니다. 간절한 마음으로 기도하며 정진하고 있습니다."
  },
  {
    id: 6,
    title: "법회 모습",
    category: "행사",
    date: "2023-08-12",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "미륵사 대웅전에서 진행된 법회 모습입니다. 스님의 법문에 귀 기울이는 불자들의 모습이 경건합니다."
  },
  {
    id: 7,
    title: "미륵사 석등",
    category: "건물",
    date: "2023-02-18",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "미륵사 경내에 있는 전통 석등입니다. 밤이 되면 불을 밝혀 사찰을 환하게 비춥니다."
  },
  {
    id: 8,
    title: "불교 문화 체험",
    category: "프로그램",
    date: "2023-09-02",
    thumbnail: "/placeholder.svg",
    fullImage: "/placeholder.svg",
    description: "불교 문화 체험 프로그램에 참여한 어린이들의 모습입니다. 다양한 체험을 통해 불교 문화를 배우고 있습니다."
  },
];

// Available filters
const categories = ["전체", "건물", "행사", "프로그램", "수행"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null);
  
  // Filter gallery items based on selected category
  const filteredGallery = selectedCategory === "전체" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <PageLayout 
      title="미륵사 갤러리" 
      subtitle="미륵사의 다양한 모습을 사진으로 만나보세요."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="mb-8 reveal">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center text-temple-brown font-medium">
                  <Filter size={18} className="mr-2 text-temple-red" />
                  카테고리:
                </div>
                
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-3 py-1 rounded-full text-sm transition-colors
                      ${selectedCategory === category
                        ? "bg-temple-red text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all reveal"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 cursor-pointer"
                  />
                  <span className="absolute top-2 right-2 text-xs px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-temple-brown">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image Lightbox */}
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none shadow-none">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="relative">
                  <img 
                    src={selectedImage?.fullImage} 
                    alt={selectedImage?.title} 
                    className="w-full object-contain max-h-[70vh]"
                  />
                  <button 
                    className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-temple-brown">{selectedImage?.title}</h3>
                    <span className="text-sm px-2 py-1 bg-temple-red/10 rounded-full text-temple-red">
                      {selectedImage?.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{selectedImage?.date}</p>
                  <p className="text-gray-600">{selectedImage?.description}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {filteredGallery.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-100 reveal">
              <Image className="mx-auto text-gray-300 mb-3" size={48} />
              <h3 className="text-xl font-medium text-gray-600 mb-2">이미지가 없습니다</h3>
              <p className="text-gray-500">선택하신 카테고리에 해당하는 이미지가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Gallery;
