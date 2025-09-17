'use client';
import { comments } from '@/lib/mock-data';
import { CommentForm } from './comment-form';
import { CommentItem } from './comment-item';
import { useUser } from '@/hooks/use-user';
import { Button } from './ui/button';
import Link from 'next/link';

// This is a server component, but we'll fetch data on the client side
// for a more interactive feel. In a real app, you might fetch initial
// comments on the server.
async function getComments(postId: string) {
  // TODO: Replace with actual API call
  return comments.filter(c => c.postId === postId);
}

export function Comments({ postId }: { postId: string }) {
  const user = useUser();
  // Since getComments is async, we can't use hooks directly.
  // We'll use a placeholder for now. In a real app, you'd fetch this data.
  const postComments = comments.filter(c => c.postId === postId);

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-6">Comments ({postComments.length})</h2>
      
      <div className="mb-8">
        {user.isLoggedIn ? (
          <CommentForm postId={postId} />
        ) : (
          <div className="flex items-center justify-between rounded-lg border p-4">
            <p className="text-muted-foreground">You must be logged in to leave a comment.</p>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {postComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
