import { MessageCircle, Store } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ProductFooter({
  onBuyNowClick,
}: {
  onBuyNowClick: () => void;
}) {
  return (
    <footer className="fixed bottom-0 z-10 flex h-20 w-full max-w-sm items-center border-t bg-background">
      <div className="flex h-full w-1/3 items-center justify-around border-r">
        <Button
          variant="ghost"
          className="flex h-auto flex-col items-center gap-1 p-1 text-muted-foreground"
        >
          <Store className="h-6 w-6" />
          <span className="text-xs">Toko</span>
        </Button>
        <Button
          variant="ghost"
          className="flex h-auto flex-col items-center gap-1 p-1 text-muted-foreground"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-xs">Chat</span>
        </Button>
      </div>
      <div className="flex h-full flex-1 items-center px-3">
        <Button
          onClick={onBuyNowClick}
          className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Beli Sekarang
        </Button>
      </div>
    </footer>
  );
}
