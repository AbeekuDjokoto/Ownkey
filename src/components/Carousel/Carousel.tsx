import React from 'react';

import { CAROUSEL_IMAGE } from '@/mocks';

import { Icon } from '../Icon';
import { SliderContent } from '../SliderContent';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const len = CAROUSEL_IMAGE.length - 1;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative m-auto">
      <div>
        <SliderContent activeIndex={activeIndex} sliderImage={CAROUSEL_IMAGE} />
        <div className="absolute inset-0 flex items-center justify-between">
          <Icon
            name="ButtonLeft"
            onClick={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
            className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2"
          />
          <Icon
            name="ButtonRight"
            onClick={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export function Arrows({
  currentImage = 0,
  prevSlide,
  nextSlide,
  totalImages = 0,
}: {
  currentImage?: number;
  prevSlide: () => void;
  nextSlide: () => void;
  totalImages?: number;
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-between">
      {currentImage > 0 && (
        <Icon
          name="ButtonLeft"
          onClick={prevSlide}
          className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2"
        />
      )}

      {currentImage < totalImages - 1 && (
        <Icon
          name="ButtonRight"
          onClick={nextSlide}
          className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
        />
      )}
    </div>
  );
}

export function Dots({ activeIndex, sliderImage }: { activeIndex: number; sliderImage: string[] }) {
  return (
    <div className="flex gap-2">
      {sliderImage.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-[var(--gold)]' : 'bg-white'}`}
        />
      ))}
    </div>
  );
}
