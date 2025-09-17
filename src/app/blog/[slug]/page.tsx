import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/mock-data';

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
    <article className="container max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
      
      <div className="prose max-w-none mx-auto text-foreground/90">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-relaxed">
            {paragraph.split('\n').map((line, lineIndex) => (
              <span key={lineIndex}>
                {line}
                <br />
              </span>
            ))}
          </p>
        ))}
      </div>

    </article>
  );
}
