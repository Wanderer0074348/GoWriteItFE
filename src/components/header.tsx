'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PenSquare } from 'lucide-react';
import { useUser } from '@/hooks/use-user';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

export function Header() {
  const user = useUser();

  return (
    <header className="w-full flex justify-center p-4">
      <div className="w-full md:w-3/5 lg:w-3/5 bg-background/80 backdrop-blur-sm border rounded-lg shadow-sm flex h-14 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <PenSquare className="h-6 w-6" />
          <span className="font-bold sm:inline-block">GoWriteIt</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {/* Add other nav links here if needed */}
        </nav>
        <div className="flex items-center justify-end space-x-4">
          {user.isLoggedIn ? (
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
