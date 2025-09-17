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
    <div className="w-full lg:grid lg:min-h-[calc(100vh-10rem)] lg:grid-cols-2 xl:min-h-[calc(100vh-10rem)]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Join the Conversation</h1>
            <p className="text-balance text-muted-foreground">
              Sign in to leave comments and connect with me.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Connect with Google</CardTitle>
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
      <div className="hidden bg-muted lg:flex lg:items-center lg:justify-center">
        <div className="text-center px-12">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Let's connect.</h2>
            <p className="text-lg text-muted-foreground">Share your thoughts, leave comments, and engage with the community.</p>
            <ConversationIcon className="mx-auto mt-8 h-48 w-48" />
        </div>
      </div>
    </div>
  );
}
