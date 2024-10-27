import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import 'swiper/css';


const ImageSlider = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Slider Header */}
        <div className="flex items-center justify-between mb-6">
          {/* Title and Divider */}
          <div className="flex items-center gap-6 flex-1">
            <h2 className="text-2xl font-semibold whitespace-nowrap">Famous Events in India</h2>
            <div className="h-px bg-slate-400 flex-1"></div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 ml-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 mr-4">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(cards.length).padStart(2, '0')}</span>
            </div>
            <button className="swiper-button-prev-custom group p-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all">
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            </button>
            <button className="swiper-button-next-custom group p-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            </button>
          </div>
        </div>

        {/* Main Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 1.8,
            },
          }}
          className="h-[450px]"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div 
                  className={`
                    h-full rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-500
                    ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}
                  `}
                >
                  <div className="grid h-full md:grid-cols-12">
                    <div className="md:col-span-7 lg:col-span-8 relative h-full min-h-[280px]">
                      <img
                        src={card.imgSrc}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Category Tag */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                          {card.category || 'Featured'}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-5 lg:col-span-4 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                          {card.title}
                        </h3>
                        
                        <p className="text-gray-600 line-clamp-3">
                          {card.description}
                        </p>
                      </div>

                      <div className="mt-6 space-y-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {(card.tags || ['Festival','Events']).map((tag, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors">
                          Know More
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;