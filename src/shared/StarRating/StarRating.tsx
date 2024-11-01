import React from 'react';

import { Icon } from '@/components';
import { cn } from '@/libs/cn';

interface RatingReviewProps {
  rating: number;
  setRating: (rating: number) => void;
}

function RatingReview({ rating, setRating }: RatingReviewProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className={cn('start', rating >= star ? 'text-[var(--gold)]' : 'text-[#D2D5DC]')}
            onClick={() => {
              setRating(star);
            }}>
            <Icon name="Star" />
          </span>
        );
      })}
    </div>
  );
}

export default RatingReview;
