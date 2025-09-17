import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-card border-transparent rounded-lg p-6">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold group-hover:text-primary">{post.title}</CardTitle>
          <CardDescription>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by {post.author}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-muted-foreground mt-4">{post.excerpt}</p>
          <div className="flex items-center mt-4 font-semibold text-primary">
            Read more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
