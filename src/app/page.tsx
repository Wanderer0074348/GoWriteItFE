import { blogPosts } from '@/lib/mock-data';
import { BlogPostCard } from '@/components/blog-post-card';

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          Welcome!
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          My thoughts, stories, and ideas.
        </p>
      </header>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
