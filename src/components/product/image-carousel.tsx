'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const productImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith('product_')
);

const toastMessages = [
  <span key={1}>
    <span className="font-bold text-orange-400">1700</span> views in 30 days
  </span>,
  <span key={2} className="font-semibold text-orange-400">
    Cash on delivery available
  </span>,
  <span key={3}>Free returns</span>,
];

export default function ProductImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [toastIndex, setToastIndex] = useState(0);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    let timeoutId: NodeJS.Timeout;
    
    // Make the first toast appear
    const initialTimeout = setTimeout(() => {
      setIsToastVisible(true);
    }, 100);

    const intervalId = setInterval(() => {
      setIsToastVisible(false); // Start exit animation

      timeoutId = setTimeout(() => {
        setToastIndex(prev => (prev + 1) % toastMessages.length);
        setIsToastVisible(true); // Start enter animation for the next toast
      }, 500); // This duration should match the 'out' animation time
    }, 3000); // The time each toast is displayed on screen

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {productImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  data-ai-hint={image.imageHint}
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {isClient && (
        <div
          className={`absolute left-4 top-4 z-10 rounded-full border-[1.5px] border-white bg-[#3a3a3a] px-3 py-1 text-xs text-white ${
            isToastVisible ? 'animate-toast-in' : 'animate-toast-out'
          }`}
        >
          {toastMessages[toastIndex]}
        </div>
      )}

      <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
        {isClient && count > 0 && `${current}/${count}`}
      </div>
    </div>
  );
}
