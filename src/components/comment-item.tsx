'use client';

import type { Comment } from '@/lib/types';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { CommentForm } from './comment-form';

interface CommentItemProps {
  comment: Comment;
}

export function CommentItem({ comment }: CommentItemProps) {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <div className="flex items-start space-x-4">
      <Avatar>
        <AvatarImage src={comment.avatar} alt={comment.author} />
        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-bold">{comment.author}</span>
          <span className="text-xs text-muted-foreground">
            {new Date(comment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </div>
        <p className="mt-1 text-foreground/90">{comment.content}</p>
        <div className="mt-2">
          <Button variant="ghost" size="sm" onClick={() => setIsReplying(!isReplying)}>
            Reply
          </Button>
        </div>

        {isReplying && (
          <div className="mt-4">
            <CommentForm postId={comment.postId} />
          </div>
        )}

        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-6 space-y-6 pl-6 border-l-2 border-border/50">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
