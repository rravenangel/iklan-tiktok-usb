'use client';

import { useEffect, useState } from 'react';
import { Bookmark, ChevronRight, Star, Play } from 'lucide-react';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { productVariants } from '@/lib/variants';
import { cn } from '@/lib/utils';

export default function ProductDetails({
  onVariantClick,
}: {
  onVariantClick: () => void;
}) {
  const [shippingDate, setShippingDate] = useState('');
  const variantPreviews = productVariants.slice(0, 4);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 1);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 2);

    const monthFormatter = new Intl.DateTimeFormat('id-ID', {
      month: 'short',
    });

    const startMonth = monthFormatter.format(startDate);
    const endMonth = monthFormatter.format(endDate);

    let dateString;
    if (startMonth === endMonth) {
      dateString = `${startDate.getDate()}-${endDate.getDate()} ${endMonth}`;
    } else {
      dateString = `${startDate.getDate()} ${startMonth} - ${endDate.getDate()} ${endMonth}`;
    }

    setShippingDate(dateString);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-background p-4">
        {/* Product Info */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-red-100 px-2 py-1 text-sm font-bold text-destructive">
                50%
              </span>
              <h2 className="text-2xl font-bold text-foreground">Rp15.000</h2>
            </div>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-6 w-6" />
            </Button>
          </div>
          <h1 className="pr-8 text-base font-medium leading-snug">
            USB Musik Digital: Ribuan Lagu Pilihan Siap Putar, Tanpa Harus Download
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-foreground">5.0</span>
              <span className="ml-1">(1.2K)</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span>3250 sold</span>
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-4 space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 text-teal-700"
            >
              <g clipPath="url(#Icon-Truck_Moving_LTR_svg__a)">
                <path d="M1 19h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1ZM3 24a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z"></path>
                <path d="M9.73 7c-.78 0-1.48 0-2.06.05-.63.05-1.29.16-1.94.5a5 5 0 0 0-2.19 2.18 4.5 4.5 0 0 0-.4 1.27H27.2c.87 0 1.4 0 1.8.03a2.58 2.58 0 0 1 .45.08 1 1 0 0 1 .45.45l.02.06.05.37c.03.4.03.94.03 1.81V26a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8h4.03c1.23 0 1.36.03 1.44.05a1 1 0 0 1 .38.24c.06.06.14.16.69 1.26l.8 1.6a33.9 33.9 0 0 1 1.88 4.08 15 15 0 0 1 .64 2.7c.14 1 .14 2.04.14 4.5V36h-3.5a6.8 6.8 0 0 0-13 0h-8a6.8 6.8 0 0 0-12.48-1.24C7 34.4 7 33.91 7 33.2V32a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1.27c0 .78 0 1.48.05 2.06.05.63.16 1.29.5 1.94a5 5 0 0 0 2.87 2.46A6.8 6.8 0 0 0 19.5 40h8a6.8 6.8 0 0 0 13 0h3.95c.23 0 .52 0 .77-.02.29-.02.7-.08 1.14-.3a3 3 0 0 0 1.62-2.46c.02-.25.02-.54.02-.77v-4.19c0-2.24 0-3.57-.18-4.88a19 19 0 0 0-.81-3.43c-.42-1.25-1.02-2.44-2.02-4.45l-.87-1.74-.1-.19a7.7 7.7 0 0 0-1.38-2.14 5 5 0 0 0-1.86-1.16 7.7 7.7 0 0 0-2.54-.27H34v-.27c0-.78 0-1.48-.05-2.06a5.08 5.08 0 0 0-.5-1.94 5 5 0 0 0-2.18-2.19 5.07 5.07 0 0 0-1.94-.5C28.75 7 28.05 7 28.05 7H9.73Zm.1 31.37v-.74a3.2 3.2 0 1 1 0 .74ZM34 34.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z"></path>
              </g>
              <defs>
                <clipPath id="Icon-Truck_Moving_LTR_svg__a">
                  <path d="M0 0h48v48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <span className="rounded-md bg-[#e0f6f6] px-2 py-1 font-semibold text-teal-700">
              Free shipping
            </span>
            {shippingDate && (
              <span className="text-muted-foreground">
                Get by {shippingDate}
              </span>
            )}
          </div>
          <div className="pl-7 text-muted-foreground">Shipping fee: Rp1.000</div>
        </div>

        {/* Variants */}
        <button
          onClick={onVariantClick}
          className="mt-4 flex w-full items-center gap-3 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 flex-shrink-0"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
          <div className="flex items-center gap-2">
            {variantPreviews.map((variant) => (
              <Image
                key={variant.id}
                src={variant.imageUrl}
                alt={variant.name}
                width={40}
                height={40}
                className="rounded-sm border"
                data-ai-hint="product variant"
              />
            ))}
          </div>
          <span className="ml-auto text-muted-foreground">
            {productVariants.length} options available
          </span>
          <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
        </button>
      </div>

      <Separator className="my-2 h-2 bg-muted" />

      {/* Customer Reviews */}
      <div className="bg-background p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <h3 className="font-semibold">5.0 Customer reviews (720)</h3>
          </div>
          <Button
            variant="ghost"
            className="h-auto gap-1 p-0 text-sm text-muted-foreground hover:text-foreground"
          >
            See more <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-3 space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://picsum.photos/seed/user2/32/32" />
              <AvatarFallback>k**a</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-foreground">k**a</span>
              </div>
              <p className="mt-1 text-sm">
                Gila, flashdisk ini isinya lagu yang lagi hits semua. Suara je ...
              </p>
            </div>
            <Image
              src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/review.jpg"
              alt="Review image"
              width={56}
              height={56}
              className="rounded-md object-cover"
              data-ai-hint="product user photo"
            />
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/avatar.jpg" />
              <AvatarFallback>a**l</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-foreground">a**l</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Mantap, berfungsi dengan baik, lagunya komplit tinggal pilih sesuai keinginan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-2 h-2 bg-muted" />

      {/* Seller Info */}
      <div className="bg-background p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/primesound.jpeg"
                alt="primesound_USB"
                data-ai-hint="store logo"
              />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">primesound_USB</p>
              <p className="text-sm text-muted-foreground">28.9k sold</p>
            </div>
          </div>
          <Button variant="outline">Visit</Button>
        </div>
      </div>

      <Separator className="my-2 h-2 bg-muted" />

      {/* About this product */}
      <div className="relative bg-background p-4">
        <h3 className="text-lg font-semibold">About this product</h3>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold">Video</h4>
            <div className="relative mt-2 aspect-video w-full group cursor-pointer">
              <Image
                src="https://raw.githubusercontent.com/rravenangel/primesound/refs/heads/varian/vidplay.png"
                alt="Product video"
                fill
                className="rounded-lg object-cover"
                data-ai-hint="product video"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 transition-colors group-hover:bg-black/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-10 w-10 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
                <span>01:30</span>
              </div>
            </div>
          </div>
          <div className="relative pt-2">
            <h4 className="font-semibold">Description</h4>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-0 h-9 w-9 rounded-full border-2 bg-background/80 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 -rotate-90 text-muted-foreground"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
            </Button>
            <div className="mt-4 space-y-4 text-sm">
                <p className="font-semibold text-orange-600">
                📂 MEGA LIBRARY 13.600+ LAGU - Koleksi Terlengkap 50 Genre!
                </p>
                <p>
                Bosan gonta-ganti flashdisk karena isinya cuma itu-itu saja? Primesound_USB menghadirkan solusi gila: Satu Flashdisk untuk Semua! Tidak perlu kuota, tidak perlu pusing cari sinyal, tinggal colok dan nikmati koleksi raksasa di mana saja.
                </p>
                
                <div>
                    <h5 className="font-semibold">💎 Mengapa harus pilih koleksi kami?</h5>
                    <ul className="mt-2 list-none space-y-1 pl-4 text-muted-foreground">
                        <li>• <span className="font-semibold text-foreground">Kuantitas Masif:</span> 13.600+ Lagu dalam satu genggaman!</li>
                        <li>• <span className="font-semibold text-foreground">Organisir Super Rapi:</span> Terbagi dalam 50 Folder Spesifik berdasarkan genre. Cari lagu jadi gampang banget, nggak berantakan.</li>
                        <li>• <span className="font-semibold text-foreground">Format Stabil (128kbps):</span> Kualitas audio MP3 yang jernih namun ringan. Didesain agar ribuan lagu bisa terbaca cepat oleh semua perangkat tanpa lag atau macet.</li>
                        <li>• <span className="font-semibold text-foreground">Koleksi Paling Update:</span> Termasuk DJ Horeg 2026 dan Campursari 2026—lo yang paling awal punya!</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold">🎶 50 Folder Genre (Perpustakaan Musik Terlengkap):</h5>
                    <div className="mt-2 space-y-1 pl-4 text-muted-foreground">
                        <p>🌐 <span className="font-semibold text-foreground">Lokal & Daerah (Etnik Terlengkap):</span> 1900 Lagu Batak (Koleksi Spesial!) | Lagu Minang | Lagu Sunda | Lagu Bugis | Lagu Ambon | Lagu Bali | Lagu Indo Timur | Pop Jawa.</p>
                        <p>🔥 <span className="font-semibold text-foreground">Viral, Remix & Horeg:</span> DJ Horeg 2026 | Jedag Jedug DJ TikTok | DJ Remix Indo | DJ Dangdut Remix | Lagu TikTok FYP.</p>
                        <p>🎸 <span className="font-semibold text-foreground">Pop, Rock & Indie:</span> Pop Indo Terbaru | Pop Barat | Pop Tahun 2000 | Pop Nostalgia 90an | Slow Rock | Lagu Indie | Lagu Punk Indo | Reggae Ska.</p>
                        <p>📺 <span className="font-semibold text-foreground">International & Hobi:</span> K-Pop (Korea) | Lagu Anime | Rock & Pop Jepang | Lagu Mandarin | Pop Barat Terbaru | Lagu Barat Nostalgia.</p>
                        <p>📜 <span className="font-semibold text-foreground">Nostalgia & Klasik:</span> Nostalgia Lawas 80an | Tembang Kenangan | Kenangan Cover | Akustik Cover | Keroncong Modern | Campursari Klasik & 2026.</p>
                        <p>🙏 <span className="font-semibold text-foreground">Religi & Sholawat:</span> Sholawat | Lagu Religi | Lagu Rohani.</p>
                        <p>🎧 <span className="font-semibold text-foreground">Chill & Mood:</span> Lagu Cafe | Love Song | Lagu Piano | Hip Hop & Rap | Rap Indonesia.</p>
                    </div>
                </div>

                <div>
                    <h5 className="font-semibold">🚗 Kompatibilitas Perangkat:</h5>
                    <ul className="mt-2 list-none space-y-1 pl-4 text-muted-foreground">
                        <li>• Head Unit Mobil (Avanza, Xpander, Innova, Truck, bus, dll).</li>
                        <li>• Speaker Aktif & Bluetooth (Simbadda, Advance, Polytron, dll).</li>
                        <li>• Smart TV & LED TV.</li>
                        <li>• Laptop, PC, & DVD Player.</li>
                    </ul>
                </div>
                
                <p className="font-semibold">
                    STOK SELALU READY! Langsung Check Out dan jadilah pemilik koleksi musik paling lengkap di tongkrongan lo! 🚀
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
