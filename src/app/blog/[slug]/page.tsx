import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/mock-data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          {post.title}
        </h1>
        <div className="text-sm text-muted-foreground">
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span className="mx-2">&bull;</span>
          <span>By {post.author}</span>
        </div>
      </header>
      
      <div className="prose dark:prose-invert max-w-none mx-auto text-foreground/90">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

    </article>
  );
}
