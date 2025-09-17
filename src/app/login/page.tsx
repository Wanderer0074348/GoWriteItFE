import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleIcon } from "@/components/icons/google";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Log In</CardTitle>
          <CardDescription>
            Log in to your GoWriteIt account
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
  );
}
