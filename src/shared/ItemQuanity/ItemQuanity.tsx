import React from 'react';

import { Icon } from '@/components';
import { cn } from '@/libs';

type Props = {
  decreaseQuantity: (...args: any) => void;
  increaseQuantity: (...args: any) => void;
  quantity: number;
};
export function ItemQuantity({ decreaseQuantity, increaseQuantity, quantity }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={decreaseQuantity}
        className={cn('rounded-full p-2 border hover:bg-gray-100', {
          'disabled cursor-not-allowed opacity-30': quantity === 0,
        })}>
        <Icon name="CloseIcon" />
      </button>
      <div className="w-8 h-8 flex justify-center items-center">{quantity}</div>
      <button
        onClick={increaseQuantity}
        className={cn('rounded-full p-2 border hover:bg-gray-100')}>
        <Icon name="AddIcon" />
      </button>
    </div>
  );
}
