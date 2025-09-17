'use client';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export function CommentForm({ postId }: { postId: string }) {

  // TODO: Implement form submission logic
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const comment = formData.get('comment');
    console.log(`Submitting comment for post ${postId}:`, comment);
    // Here you would typically call an API to save the comment
    event.currentTarget.reset();
  };

  return (
    <form className="flex items-start space-x-4" onSubmit={handleSubmit}>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/40?u=current-user" />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <Textarea
          name="comment"
          placeholder="Write a comment..."
          className="w-full mb-2"
          rows={3}
        />
        <div className="flex justify-end">
          <Button type="submit">Post Comment</Button>
        </div>
      </div>
    </form>
  );
}
