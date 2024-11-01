import React from 'react';
import { Link } from 'react-router-dom';

import { Arrows, Dots, Icon } from '@/components';
import { cn } from '@/libs';
import { PropertyData } from '@/types';
import { ROUTES } from '@/utils';

export function PropertyCard({ ...property }: PropertyData) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage < property.images.length - 1 ? prevImage + 1 : 0)); // Loop to first image
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : property.images.length - 1)); // Loop to last image
  };

  return (
    <div
      className={cn(
        'w-full border rounded-2xl p-2',
        property.ispremium ? 'border-[var(--gold)]' : 'border-[var(--border-color)]',
      )}>
      <div className="h-[238px] relative rounded-xl group">
        <img
          key={property.images[currentImage]}
          src={property.images[currentImage]}
          alt={`Property image ${currentImage + 1}`}
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute top-0 left-0 w-full h-full py-3 px-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-[11px] font-medium">
              <div className="py-2 px-2 bg-white rounded-sm">{property.propertyType}</div>
              <div className="py-2 px-2 bg-white rounded-sm">{property.posted}</div>
            </div>
            <Icon name="Bookmark" className="w-6 h-6" />
          </div>

          <div className="group-hover:block hidden">
            <Arrows
              currentImage={currentImage}
              prevSlide={handlePrev}
              nextSlide={handleNext}
              totalImages={property.images.length}
            />
          </div>

          <div className="flex justify-between items-center">
            {property.ispremium && (
              <div className="py-2 px-2 bg-[var(--gold)] rounded-sm text-[11px] text-white items-center">
                Premium
              </div>
            )}

            <Dots activeIndex={currentImage} sliderImage={property.images} />

            {property.negotiable && (
              <div className="py-2 px-2 bg-white rounded-sm text-[11px]">Negotiable</div>
            )}
          </div>
        </div>
      </div>
      <div className="py-3 px-4 flex flex-col gap-2 text-[var(--black-100)]">
        <div className="flex justify-between text-sm">
          <p>{property.propertyType}</p>
          <Link to={ROUTES.ABOUT} className="text-[#233876]">
            Contact Agent
          </Link>
        </div>
        <p className="font-semibold">{property.location}</p>
        <div className="flex justify-between">
          <div className="pr-3 border-r-[var(--border-color)] border-r">Pool</div>
          <div className="px-3 border-r-[var(--border-color)] border-r">Glass window</div>
          <div className="px-3">Tiled floors</div>
        </div>
        <div className="pb-2 border-b border-b-[var(--border-color)] flex gap-3 items-center">
          <div className="flex gap-[10px] items-center">
            <Icon name="Bed" />
            <p className="font-medium">2</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Icon name="Shower" />
            <p className="font-medium">2</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Icon name="Parking" />
            <p className="font-medium">2</p>
          </div>
        </div>
        <p className="font-medium text-xl">GH₵ {property.price}</p>
      </div>
    </div>
  );
}
