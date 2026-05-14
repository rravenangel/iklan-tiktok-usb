import Image from 'next/image';
import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
}

export const TikTokShopIcon = ({ className }: IconProps) => (
  <div className={cn('relative h-6 w-6', className)}>
    <Image
      src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/tiktokshop.png"
      alt="TikTok Shop"
      fill
      className="object-contain"
    />
  </div>
);

export const ShopeeIcon = ({ className }: IconProps) => (
  <div className={cn('relative h-6 w-6', className)}>
    <Image
      src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/shopee.png"
      alt="Shopee"
      fill
      className="object-contain"
    />
  </div>
);

export const TokopediaIcon = ({ className }: IconProps) => (
  <div className={cn('relative h-6 w-6', className)}>
    <Image
      src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/tokped.png"
      alt="Tokopedia"
      fill
      className="object-contain"
    />
  </div>
);

export const LazadaIcon = ({ className }: IconProps) => (
  <div className={cn('relative h-6 w-6', className)}>
    <Image
      src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/lazada.png"
      alt="Lazada"
      fill
      className="object-contain"
    />
  </div>
);

export const BlibliIcon = ({ className }: IconProps) => (
  <div className={cn('relative h-6 w-6', className)}>
    <Image
      src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/blibli.png"
      alt="Blibli"
      fill
      className="object-contain"
    />
  </div>
);

export const AkulakuIcon = ({ className }: IconProps) => (
  <div className={cn('relative h-6 w-6', className)}>
    <Image
      src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/akulaku.png"
      alt="Akulaku"
      fill
      className="object-contain"
    />
  </div>
);
