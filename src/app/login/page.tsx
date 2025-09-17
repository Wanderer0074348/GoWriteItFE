import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleIcon } from "@/components/icons/google";
import Image from "next/image";

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
            <Image
                src="https://picsum.photos/seed/login/600/400"
                alt="Abstract art"
                width={600}
                height={400}
                data-ai-hint="abstract art"
                className="mt-8 rounded-lg shadow-2xl"
            />
        </div>
      </div>
    </div>
  );
}
