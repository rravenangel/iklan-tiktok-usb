'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { X } from 'lucide-react';
import type { ProductVariant } from '@/lib/variants';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

interface VariantSheetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  variants: ProductVariant[];
}

export default function VariantSheet({
  isOpen,
  onOpenChange,
  variants,
}: VariantSheetProps) {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState(variants[1]); // Default to PAKET B
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewVariant, setPreviewVariant] = useState<ProductVariant | null>(
    null
  );

  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    const selectedIndex = previewVariant
      ? variants.findIndex((v) => v.id === previewVariant.id)
      : 0;
    setCurrentSlide(selectedIndex);
    api.scrollTo(selectedIndex, true);

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api, previewVariant, variants]);

  const openImagePreview = (variant: ProductVariant) => {
    setPreviewVariant(variant);
    setIsPreviewOpen(true);
  };

  const handleBuyNow = () => {
    router.push(`/bio/${selectedVariant.id}`);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent
          side="bottom"
          className="mx-auto flex h-[85%] max-w-sm flex-col overflow-visible rounded-t-2xl p-0"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Product Options</SheetTitle>
          </SheetHeader>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute -top-10 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#353231] text-white ring-offset-background transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>

          <div className="flex items-start gap-4 p-4">
            <Image
              src={selectedVariant.imageUrl}
              alt={selectedVariant.name}
              width={100}
              height={100}
              className="aspect-square cursor-pointer rounded-md border object-cover"
              onClick={() => openImagePreview(selectedVariant)}
            />
            <div className="pt-2">
              <p className="text-2xl font-bold text-destructive">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(selectedVariant.price)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {selectedVariant.name}
              </p>
            </div>
          </div>

          <Separator />

          <ScrollArea className="flex-1">
            <div className="p-4">
              <h4 className="text-sm font-semibold text-muted-foreground">
                Paket USB ({variants.length})
              </h4>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'flex flex-col items-center rounded-md border p-1 text-center focus:outline-none',
                      selectedVariant.id === variant.id
                        ? 'border-destructive ring-1 ring-destructive'
                        : 'border-border'
                    )}
                  >
                    <Image
                      src={variant.imageUrl}
                      alt={variant.name}
                      width={120}
                      height={120}
                      className="aspect-square rounded-sm object-cover"
                    />
                    <span className="mb-1 mt-2 text-sm">{variant.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollArea>

          <SheetFooter className="sticky bottom-0 flex-row gap-2 border-t bg-background p-3 sm:justify-start">
            <Button
              variant="outline"
              className="h-12 w-1/2 border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              Add to cart
            </Button>
            <Button
              onClick={handleBuyNow}
              className="flex h-12 w-1/2 flex-col items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span>Buy now</span>
              <span className="text-xs font-normal">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(selectedVariant.price)}
              </span>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="mx-auto flex h-screen w-screen max-w-sm items-center justify-center border-none bg-black/90 p-0 sm:max-h-screen">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          <div className="relative flex h-full w-full items-center justify-center">
            <DialogClose className="absolute left-4 top-4 z-20 text-white opacity-70 hover:opacity-100">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogClose>

            <Carousel
              setApi={setApi}
              opts={{
                startIndex: previewVariant
                  ? variants.findIndex((v) => v.id === previewVariant.id)
                  : 0,
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {variants.map((variant) => (
                  <CarouselItem key={variant.id}>
                    <div className="flex h-full w-full flex-col items-center justify-center text-center">
                      <Image
                        src={variant.imageUrl}
                        alt={variant.name}
                        width={600}
                        height={600}
                        className="aspect-square h-auto w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {api && (
              <>
                <div className="absolute right-4 top-4 z-20 text-sm text-white">
                  {currentSlide + 1} / {variants.length}
                </div>
                <div className="absolute bottom-16 left-0 right-0 z-20 w-full px-4 text-center text-white">
                  <h2 className="text-lg font-semibold">
                    {variants[currentSlide]?.name}
                  </h2>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
