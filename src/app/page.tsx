'use client';

import { useState } from 'react';
import ProductFooter from '@/components/product/footer';
import ProductHeader from '@/components/product/header';
import ProductImageCarousel from '@/components/product/image-carousel';
import ProductDetails from '@/components/product/product-details';
import VariantSheet from '@/components/product/variant-sheet';
import { productVariants } from '@/lib/variants';

export default function ProductViewerPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="bg-neutral-200 dark:bg-neutral-800">
      <div className="relative mx-auto flex min-h-screen max-w-sm flex-col overflow-hidden bg-background font-body text-foreground shadow-2xl">
        <ProductHeader />
        <main className="flex-1 overflow-y-auto pb-20 pt-14">
          <ProductImageCarousel />
          <ProductDetails onVariantClick={() => setIsSheetOpen(true)} />
        </main>
        <ProductFooter onBuyNowClick={() => setIsSheetOpen(true)} />
        <VariantSheet
          isOpen={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          variants={productVariants}
        />
      </div>
    </div>
  );
}
