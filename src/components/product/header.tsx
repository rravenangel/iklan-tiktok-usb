'use client';

import {
  ArrowLeft,
  Search,
  ShoppingCart,
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProductHeader() {
  return (
    <header className="fixed top-0 z-10 flex h-14 w-full max-w-sm items-center justify-between gap-2 border-b bg-background/80 px-3 backdrop-blur-sm">
      <Button variant="ghost" size="icon">
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="flashdisk musik mobil"
          className="h-9 rounded-full bg-input pl-8 text-sm"
        />
      </div>
      <Button variant="ghost" size="icon">
        <div className="relative h-4 w-4">
          <Image
            src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/kb.png"
            alt="Share"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Button>
      <Button variant="ghost" size="icon">
        <ShoppingCart className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <circle cx="3" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="21" cy="12" r="1.5" />
        </svg>
      </Button>
    </header>
  );
}
