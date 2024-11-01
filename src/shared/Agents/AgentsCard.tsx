import React from 'react';

import { Agent } from 'node:http';

import { noThumbnail } from '@/assets';
import { Icon } from '@/components';
import { cn } from '@/libs';

import RatingReview from '../StarRating/StarRating';

export function AgentsCard({
  src,
  name,
  isPro,
  rating: dataRating,
  reviews,
}: {
  src: string;
  name: string;
  isPro: string;
  rating: number;
  reviews: number;
}) {
  const [rating, setRating] = React.useState(dataRating);

  const initials = src
    ? src
    : name
        .split(' ')
        .map((n: string) => n[0])
        .join('');

  return (
    <div className="w-full border rounded-2xl border-[var(--border-color)] flex flex-col gap-[100px]">
      <div className="h-[100px] relative">
        {src ? (
          <div className="w-full h-full object-cover bg-[var(--red-100)] rounded-tl-2xl rounded-tr-2xl" />
        ) : (
          <img src={noThumbnail} alt="" className="w-full h-full object-cover" />
        )}
        <div
          className={cn(
            'absolute w-[150px] h-[150px] rounded-full  -bottom-[150%] left-1/2 flex flex-col justify-between transform -translate-x-1/2 -translate-y-1/2',
            !src &&
              'bg-white text-[64px] font-medium flex text-center justify-center border border-black',
          )}>
          {src ? (
            <img src={src} alt="" className="w-full h-full object-cover rounded-full" />
          ) : (
            initials
          )}
        </div>
      </div>
      <div className="py-3 px-4 flex flex-col gap-4 text-[var(--black-100)] text-sm text-center">
        <div className="flex flex-col gap-1">
          <p className="font-medium">Edward Apersil</p>
          <p className="font-medium text-[var(--red-100)]">Pro Agent</p>
          <div className="flex gap-2 items-center mx-auto">
            <RatingReview rating={rating} setRating={setRating} />
            <p className="font-medium">4.0</p>
            <div className="w-1 h-1 bg-[var(--black-100)] rounded-full" />
            <p className="text-[#495057]">120 Reviews</p>
          </div>
        </div>

        <button className="border border-[#1A1816] h-10 text-[var(--black-100)] rounded-full w-full flex gap-[10px] items-center justify-center">
          <Icon name="FilledTelephone" />
          Call
        </button>
      </div>
    </div>
  );
}
