import { PlaceHolderImages } from './placeholder-images';

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  subtitle?: string;
  description?: string;
}

const variantImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith('variant_')
);

const variantContentMap: Record<number, { subtitle: string; description: string; imageId: string }> = {
  0: { 
    subtitle: 'Paket Best Hits 2026 (900 lagu)', 
    description: 'POP INDO HITS 2026 | POP GALAU 2026 | JAWA HITS 2026\nBEST HITS 2026 | LAGU TIKTOK FYP 2026 | LAGU VIRAL TRENDING 2026\nCAMPURSARI 2026 | DJ HOREG 2026', 
    imageId: 'variant_w' 
  },
  1: { 
    subtitle: 'EDM Jedag Jedug (914 Lagu)', 
    description: 'EDM 90s-2000 | EDM 2000-2010 | EDM 2010-2025 | Jedag Jedug DJ TikTok | Rap Indonesia', 
    imageId: 'variant_a' 
  },
  2: { 
    subtitle: 'Sholawat | Lagu Religi', 
    description: 'Sholawat | Lagu Religi', 
    imageId: 'variant_b' 
  },
  3: { 
    subtitle: 'Kenangan Abadi (769 Lagu)', 
    description: 'Tembang Kenangan | Dangdut Klasik\nPop Nostalgia 90an', 
    imageId: 'variant_c' 
  },
  4: { 
    subtitle: 'Paket Rohani & Cinta (823 lagu)', 
    description: 'Lagu Rohani (Kristen) | Love Song\nAkustik Cover', 
    imageId: 'variant_d' 
  },
  5: { 
    subtitle: 'Anak Band & Indie (900 Lagu)', 
    description: 'Rap Indonesia | Reggae Ska | Hip Hop dan Rap\nLagu Indie | Lagu Punk Indo', 
    imageId: 'variant_e' 
  },
  6: { 
    subtitle: 'Ambyar Se-Indonesia', 
    description: 'LAGU AMBYAR | BEST OF DIDI KEMPOT\nAMBYAR JAWA | CAMPURSARI KLASIK\nDANGDUT KOPLO | LAGU TIMUR SEDIH\nLAGU BATAK SEDIH', 
    imageId: 'variant_u' 
  },
  7: { 
    subtitle: 'Simfoni Galau', 
    description: 'LAGU ANAK SENJA | LAGU MELLOW 2000AN\nSAD SONG TIKTOK | SAD SONG 60S 70S 80S 90S\nLAGU GALAU INDO 2026 | LAGU INDIE', 
    imageId: 'variant_h' 
  },
  8: { 
    subtitle: 'Joget Full Album (1620 Lagu)', 
    description: 'Dangdut (Klasik) | Dangdut Remix | Dangdut Koplo\nCampursari 2026 | Campursari Klasik\nDJ Remix Indo | Jedag Jedug', 
    imageId: 'variant_f' 
  },
  9: { 
    subtitle: 'Nostalgia Abadi', 
    description: "ADA Band | Afgan | Agnes Monica | Ahmad Dhani | Andmesh | Andra And The Backbone | Ari Lasso | Armada | Bernadya | Bondan Prakoso & Fade2black | Budi Doremi | Cakra Khan | Chrisye | D’MASIV | David Bayu | Dewa 19 | Diskoria | Drive | Element | Fabio Asher | Fourtwnty | GARASI | Geisha | Ghea Indrawari | GIGI | Glenn Fredly | Hindia | Idgitaf | Isyana Sarasvati | Iwan Fals | Jamrud | J-Rocks | Judika | Juicy Luicy | Kangen Band | Kerispatih | Killing Me Inside | KLa Project | Kotak | L.Y.O.N | Last Child | Letto | Lyla | Lyodra | Mahalini | Mahen | MALIQ & D'Essentials | Marion Jola | Nadin Amizah | Naff | Naif | Netral (NTRL) | Nidji | Noah | Padi | Pamungkas | peterpan | Radja | Raisa | Rizki Febian | Rossa | Sal Priadi | Salma Salsabil | Setia Band | Seventeen | Sheila On 7 | Slank | ST12 | Tiara Andini | Tiket | Tulus | Ungu | Utopia | Vierra | Virgoun | Wali | Yovie & Nuno | LOVE SONG (BARAT) | NOSTALGIA INDO 2000AN | NOSTALGIA LAWAS 80AN | POP BARAT | POP TAHUN 2000 | TEMBANG KENANGAN | LAGU BARAT NOSTALGIA | SAD SONG 60S 70S 80S 90S", 
    imageId: 'variant_o' 
  },
  10: { 
    subtitle: 'Slow & Chill', 
    description: 'Lagu Barat Nostalgia | Pop Barat | Slow Rock\nTembang Kenangan | Love Song | Pop 2000an\nNostalgia 80s & 2000s', 
    imageId: 'variant_g' 
  },
  11: { 
    subtitle: 'Religi & Asia', 
    description: 'Sholawat | Lagu Religi Islami | Lagu India\nMandarin | Malaysia 90an | Melayu', 
    imageId: 'variant_l' 
  },
  12: { 
    subtitle: 'Horas Nusantara', 
    description: 'Koleksi Lengkap Lagu Batak (1900+ lagu)\nPop Batak | Ambon | Indo Timur | Minang\nBugis | Melayu | Malaysia 90an', 
    imageId: 'variant_i' 
  },
  13: { 
    subtitle: 'Milenial Hits', 
    description: 'K-Pop | Anime | J-Rock | Pop Barat | Slow Rock\nHip Hop | Indie | Punk Indo\nLove Song | Cafe Akustik', 
    imageId: 'variant_j' 
  },
  14: { 
    subtitle: 'Metalhead Supreme', 
    description: 'GLAM ROCK 80AN | HARD ROCK & HEAVY METAL\nPUNK ROCK 2000AN | HEAVY METAL JEPANG\nPROGRESSIVE METAL | INDUSTRIAL METAL\nNU METAL | TRASH METAL INDO\nHARDCORE PUNK INDO | EMO INDO\nPUNK ROCK INDO', 
    imageId: 'variant_p' 
  },
  15: { 
    subtitle: 'Urban Lounge & Jazz', 
    description: 'LOFI MUSIC | RNB SOUL INDO | POP RNB INDO\nBOSSA NOVA BRAZIL | VINTAGE BOSSA NOVA\nLAGU RNB BARAT | LAGU BLUES | BEST JAZZ\nLAGU BARAT NOSTALGIA | JAZZ BARAT\nPOP BARAT | LAGU CAFE | JAZZ INDO', 
    imageId: 'variant_q' 
  },
  16: { 
    subtitle: 'Gudang Hits (6826 Lagu)', 
    description: 'LAGU CAFE | LAGU INDIE | LAGU KOREA KPOP | LAGU RELIGI | LOVE SONG | POP JAWA | ROCK JEPANG DAN POP JEPANG | SHOLAWAT | SLOW ROCK | TEMBANG KENANGAN | DANGDUT KLASIK | DJ DANGDUT | DJ HOREG 2026 | DJ REMIX INDO | HIP HOP DAN RAP | LAGU ANIME | LAGU BARAT NOSTALGIA', 
    imageId: 'variant_k' 
  },
  17: { 
    subtitle: 'Sultan Daerah (6.542 Lagu)', 
    description: '1900 LAGU BATAK | CAMPURSARI 2026 | CAMPURSARI KLASIK | DANGDUT KLASIK | DANGDUT KOPLO | DJ DANGDUT REMIX | DJ HOREG 2026 | KERONCONG MODERN | LAGU AMBON | LAGU BALI | LAGU BATAK | LAGU BUGIS | LAGU INDO TIMUR | LAGU MELAYU | LAGU MINANG | LAGU RELIGI | LAGU SUNDA | POP JAWA | POP TAHUN 2000 | REGGAE SKA | SHOLAWAT', 
    imageId: 'variant_s' 
  },
  18: { 
    subtitle: 'Paket Samudra ilmu', 
    description: "Koleksi Islami Terlengkap\n\n🎧 MUROTTAL 30 JUZ: Mishary Rashid, As-Sudais, Saad Al-Ghamidi, Abdul Basit, H. Muammar ZA, M. Thaha, Muzammil Hasballah.\n\n📚 KAJIAN & CERAMAH: KH. Zainuddin MZ, Ustadz Budi Ashari, Ustadz Aa Gym, Dr. Erwandi Tarmizi, Abu Fatiah, Dr. Ali Fauzi, UAS, UAH, Adian Husaini, Zulkifli Ali, Salim A. Fillah, Khalid Basalamah, Ahmad Sarwat, Felix Siauw, Kajian Kristologi & Mualaf.\n\n🌟 EXTRA CONTENT: Lagu Religi, Sholawat, Kisah Nabi & Rasul, Zikir & Doa Harian.", 
    imageId: 'variant_r' 
  },
  19: { 
    subtitle: 'Ultimate Bundle (12.700 Lagu)', 
    description: '1900 LAGU BATAK | AKUSTIK COVER | CAMPURSARI 2026 | CAMPURSARI KLASIK | DANGDUT KLASIK | DANGDUT KOPLO | DJ DANGDUT | DJ HOREG 2026 | DJ REMIX INDO | EDM 90S - 2000 | EDM 2000 - 2010 | EDM 2010 - 2025 | HIP HOP DAN RAP | JEDAG JEDUG DJ TIKTOK | KENANGAN COVER | KERONCONG MODERN | LAGU AMBON | LAGU ANIME | LAGU BARAT NOSTALGIA | LAGU BATAK | LAGU BUGIS | LAGU CAFE | LAGU INDIA | LAGU INDIE | LAGU INDO TIMUR | LAGU KOREA KPOP | LAGU MALAYSIA 90AN | LAGU MANDARIN | LAGU MELAYU | LAGU MINANG | LAGU PIANO | LAGU PUNK INDO | LAGU RELIGI | LAGU ROHANI | LAGU SUNDA | LAGU TIKTOK FYP | LOVE SONG | NOSTALGIA INDO 2000AN | NOSTALGIA LAWAS 80AN | POP BARAT | POP JAWA | POP NOSTALGIA 90AN | POP TAHUN 2000 | RAP INDONESIA | REGGAE SKA | ROCK JEPANG DAN POP JEPANG | SHOLAWAT | SLOW ROCK | TEMBANG KENANGAN', 
    imageId: 'variant_m' 
  },
  20: { 
    subtitle: 'Paket Ultimate Bundle 2 (15482 lagu )', 
    description: 'AMBYAR JAWA | BEST OF DIDI KEMPOT | LAGU AMBYAR | LAGU TIMUR SEDIH | LAGU BATAK SEDIH | LAGU ANAK SENJA | LAGU MELLOW 2000AN | SAD SONG TIKTOK | SAD SONG 60S 70S 80S 90S | LAGU GALAU INDO 2026 | GLAM ROCK 80AN | HARD ROCK & HEAVY METAL | PUNK ROCK 2000AN | HEAVY METAL JEPANG | PROGRESSIVE METAL | INDUSTRIAL METAL | NU METAL | TRASH METAL INDO | HARDCORE PUNK INDO | EMO INDO | PUNK ROCK INDO | BOSSA NOVA BRAZIL | VINTAGE BOSSA NOVA | LOFI MUSIC | RNB SOUL INDO | POP RNB INDO | LAGU RNB BARAT | LAGU BLUES | BEST JAZZ | JAZZ BARAT | JAZZ INDO | AKUSTIK COVER | CAMPURSARI 2026 | CAMPURSARI KLASIK | DANGDUT KLASIK | DANGDUT KOPLO | DJ DANGDUT REMIX | DJ HOREG 2026 | DJ REMIX INDO | EDM 90S - 2000 | EDM 2000 - 2010 | EDM 2010 - 2025 | HIP HOP DAN RAP | JEDAG JEDUG DJ TIKTOK | KENANGAN COVER | KERONCONG MODERN | LAGU BARAT NOSTALGIA | LAGU CAFE | LAGU INDIE | LAGU MALAYSIA 90AN | LAGU PIANO | LAGU TIKTOK FYP | LOVE SONG | NOSTALGIA INDO 2000AN | NOSTALGIA LAWAS 80AN | POP BARAT | POP JAWA | POP NOSTALGIA 90AN | POP TAHUN 2000 | RAP INDONESIA | REGGAE SKA | ROCK JEPANG DAN POP JEPANG | SLOW ROCK | TEMBANG KENANGAN', 
    imageId: 'variant_t' 
  },
  21: { 
    subtitle: 'USB OTG Type-C', 
    description: 'Adapter premium untuk menyambungkan USB langsung ke HP Samsung, Xiaomi, Oppo, Vivo, dll, Plug & Play tanpa aplikasi tambahan.', 
    imageId: 'variant_v' 
  },
};

export const productVariants: ProductVariant[] = Array.from(
  { length: 22 },
  (_, i) => {
    const letter = String.fromCharCode(65 + i); // A to V
    const id = `pkt-${letter.toLowerCase()}`;
    const content = variantContentMap[i] || { subtitle: '', description: '', imageId: '' };
    const image = variantImages.find((img) => img.id === content.imageId);

    const prices: Record<number, number> = {
      8: 109000, // I
      9: 129000, // J
      10: 109000, // K
      11: 109000, // L
      12: 129000, // M
      13: 129000, // N
      14: 129000, // O
      15: 129000, // P
      16: 159000, // Q
      17: 159000, // R
      18: 219000, // S
      19: 219000, // T
      20: 219000, // U
      21: 15000,  // V
    };

    const price = prices[i] || 99000;

    return {
      id,
      name: `PAKET ${letter}`,
      price,
      imageUrl: image?.imageUrl || `https://picsum.photos/seed/pv${letter.toLowerCase()}/200/200`,
      subtitle: content.subtitle,
      description: content.description,
    };
  });
