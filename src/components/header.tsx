import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PenSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
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
    </header>
  );
}
