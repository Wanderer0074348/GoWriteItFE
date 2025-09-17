import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PenSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-6 z-50 w-full flex justify-center">
      <div className="w-full max-w-4xl lg:w-3/5">
        <div className="container flex h-16 items-center rounded-2xl border border-border/40 bg-background/80 px-6 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PenSquare className="h-6 w-6" />
            <span className="font-bold">GoWriteIt</span>
          </Link>
          <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
            {/* Add other nav links here if needed */}
          </nav>
          <div className="flex items-center justify-end space-x-4">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
