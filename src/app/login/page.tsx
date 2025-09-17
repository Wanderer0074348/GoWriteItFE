import { PenSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleIcon } from "@/components/icons/google";

function ConversationIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        aria-hidden="true"
        {...props}
      >
        <path
          fill="hsl(var(--primary) / 0.1)"
          d="M149.5 132.5a5 5 0 0 1-3.5-8.5l14-14a5 5 0 0 1 7 7l-14 14a5 5 0 0 1-3.5 1.5Z"
        />
        <path
          stroke="hsl(var(--primary) / 0.2)"
          strokeWidth="6"
          d="M123 76c-3.2 0-6.4.7-9.3 2-2.9 1.3-5.5 3.2-7.7 5.4-2.2 2.2-4.1 4.8-5.4 7.7-1.3 2.9-2 6.1-2 9.3s.7 6.4 2 9.3c1.3 2.9 3.2 5.5 5.4 7.7s4.8 4.1 7.7 5.4c2.9 1.3 6.1 2 9.3 2 6.5 0 12.8-2.6 17.3-7.1 4.5-4.5 7.1-10.8 7.1-17.3s-2.6-12.8-7.1-17.3c-4.5-4.5-10.8-7.1-17.3-7.1Z"
        />
        <path
          fill="hsl(var(--primary) / 0.1)"
          d="M49.5 82.5a5 5 0 0 1-3.5-8.5l14-14a5 5 0 0 1 7 7l-14 14a5 5 0 0 1-3.5 1.5Z"
        />
        <path
          stroke="hsl(var(--primary) / 0.2)"
          strokeWidth="6"
          d="M86 46c-3.2 0-6.4.7-9.3 2-2.9 1.3-5.5 3.2-7.7 5.4s-4.1 4.8-5.4 7.7c-1.3 2.9-2 6.1-2 9.3s.7 6.4 2 9.3c1.3 2.9 3.2 5.5 5.4 7.7 2.2 2.2 4.8 4.1 7.7 5.4 2.9 1.3 6.1 2 9.3 2 6.5 0 12.8-2.6 17.3-7.1 4.5-4.5 7.1-10.8 7.1-17.3s-2.6-12.8-7.1-17.3C98.8 48.6 92.5 46 86 46Z"
        />
      </svg>
    );
  }

export default function LoginPage() {
  return (
    <>
      <div className="container relative min-h-[calc(100vh-10rem)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <PenSquare className="mr-2 h-6 w-6" />
            GoWriteIt
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The art of writing is the art of discovering what you believe.&rdquo;
              </p>
              <footer className="text-sm">Gustav Flaubert</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <ConversationIcon className="mx-auto mt-8 h-48 w-48 text-primary/20" />
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Let's connect.
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign in with your Google account to leave comments and connect with me.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Connect with Google</CardTitle>
                <CardDescription>
                  Use your Google account to join the community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Button variant="outline">
                    <GoogleIcon className="mr-2 h-4 w-4" />
                    Login with Google
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
