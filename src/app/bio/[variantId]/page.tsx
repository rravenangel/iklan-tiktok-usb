'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { productVariants, type ProductVariant } from '@/lib/variants';
import { marketplaceLinks } from '@/lib/links';
import {
  AkulakuIcon,
  BlibliIcon,
  LazadaIcon,
  ShopeeIcon,
  TikTokShopIcon,
  TokopediaIcon,
} from '@/components/marketplace-icons';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BioPage() {
  const router = useRouter();
  const params = useParams();
  const variantId = params.variantId as string;
  const [variant, setVariant] = useState<ProductVariant | null>(null);
  const [links, setLinks] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    if (variantId) {
      const foundVariant =
        productVariants.find((v) => v.id === variantId) || null;
      setVariant(foundVariant);
      if (foundVariant) {
        setLinks(marketplaceLinks[foundVariant.id] || {});
      }
    }
  }, [variantId]);

  if (!variant) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
        Loading...
      </div>
    );
  }

  const trackClick = (platform: string) => {
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('ClickButton', {
        content_name: variant.name,
        content_category: 'Marketplace Redirect',
        platform: platform,
      });
    }
  };

  const marketplaceButtons = [
    {
      name: 'TikTok Shop',
      icon: <TikTokShopIcon />,
      link: links?.tiktok,
    },
    { name: 'Shopee', icon: <ShopeeIcon />, link: links?.shopee },
    { name: 'Tokopedia', icon: <TokopediaIcon />, link: links?.tokopedia },
    { name: 'Lazada', icon: <LazadaIcon />, link: links?.lazada },
    { name: 'Blibli', icon: <BlibliIcon />, link: links?.blibli },
    { name: 'Akulaku', icon: <AkulakuIcon />, link: links?.akulaku },
  ];

  const isVariantA = variant.id === 'pkt-a';
  const isVariantE = variant.id === 'pkt-e';
  const isVariantJ = variant.id === 'pkt-j';
  const isVariantO = variant.id === 'pkt-o';
  const isVariantP = variant.id === 'pkt-p';
  const isVariantT = variant.id === 'pkt-t';
  const isVariantU = variant.id === 'pkt-u';
  const isVariantS = variant.id === 'pkt-s';
  const isVariantR = variant.id === 'pkt-r';
  const isVariantQ = variant.id === 'pkt-q';
  const isVariantH = variant.id === 'pkt-h';
  const isVariantI = variant.id === 'pkt-i';

  const isLeftAligned = isVariantJ || isVariantA;
  const isJustified = isVariantT || isVariantU || isVariantS || isVariantR || isVariantQ || isVariantH;

  return (
    <div className="relative mx-auto min-h-screen max-w-sm bg-background font-body text-foreground shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-80">
        <Image
          src={variant.imageUrl}
          alt={variant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-4 z-10 text-white hover:bg-white/20 hover:text-white"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <div className="relative z-0 pt-64">
        <div className="rounded-t-2xl bg-background p-6 text-center">
          <h1 className="text-2xl font-bold uppercase">{variant.name}</h1>
          <div className={cn(
            "mt-2 space-y-2 px-2",
            isLeftAligned ? "text-left" : (isJustified ? "text-justify" : "text-center")
          )}>
            <p className={cn(
                "text-foreground",
                isVariantE ? "font-bold text-base" : (isVariantT || isVariantU || isVariantS || isVariantR || isVariantQ || isVariantO) ? "text-xs font-bold" : "text-base font-bold"
            )}>
              {variant.subtitle}
            </p>
            <div className={cn(
                "text-muted-foreground whitespace-pre-line",
                (isVariantJ || isVariantO) ? "text-[9px] leading-[1.1]" :
                (isVariantT || isVariantU) ? "text-[8px] leading-[1.1]" :
                (isVariantR || isVariantQ) ? "text-[9px] leading-[1.1]" :
                (isVariantS || isVariantP) ? "text-[10px] leading-[1.1]" :
                (isVariantH || isVariantI) ? "text-[12px] leading-[1.1]" :
                "text-sm leading-relaxed"
            )}>
              {variant.description}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center space-y-4">
            {marketplaceButtons.map(
              (item) =>
                item.link && (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={() => trackClick(item.name)}
                  >
                    <Button
                      variant="outline"
                      className="h-14 w-full justify-start rounded-full border-2 border-foreground/50 px-5 text-base hover:border-black hover:bg-black hover:text-white active:border-black active:bg-black active:text-white"
                    >
                      {item.icon}
                      <span className="flex-1 text-center">{item.name}</span>
                    </Button>
                  </a>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
