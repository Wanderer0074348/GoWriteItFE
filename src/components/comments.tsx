import { comments } from '@/lib/mock-data';
import { CommentForm } from './comment-form';
import { CommentItem } from './comment-item';

// This is a server component, but we'll fetch data on the client side
// for a more interactive feel. In a real app, you might fetch initial
// comments on the server.
async function getComments(postId: string) {
  // TODO: Replace with actual API call
  return comments.filter(c => c.postId === postId);
}

export async function Comments({ postId }: { postId: string }) {
  const postComments = await getComments(postId);

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-6">Comments ({postComments.length})</h2>
      
      <div className="mb-8">
        <CommentForm postId={postId} />
      </div>

      <div className="space-y-8">
        {postComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
