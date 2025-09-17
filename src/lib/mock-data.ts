import type { BlogPost, Comment } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mastering-code-canvas',
    title: 'Mastering CodeCanvas: The Ultimate DevTool',
    excerpt: 'Discover how CodeCanvas can revolutionize your development workflow, from smart code suggestions to seamless debugging.',
    content: `CodeCanvas is a next-generation development environment designed for the modern programmer. In this post, we'll dive deep into its core features that make it a must-have tool.

First, let's talk about its AI-powered code completion. Unlike traditional tools, CodeCanvas analyzes the context of your entire project to provide suggestions that are not only syntactically correct but also semantically aligned with your project's architecture.

Another standout feature is the integrated visual debugger. Forget endless print statements. With CodeCanvas, you can visualize the data flow and state changes in real-time, making it incredibly easy to spot and fix bugs. It's like having an MRI for your code.

Lastly, we will explore its collaborative capabilities. With built-in real-time collaboration, you and your team can work on the same file simultaneously, just like in Google Docs. This feature alone drastically reduces merge conflicts and improves team velocity.
Stay tuned for more tips and tricks on how to get the most out of CodeCanvas!`,
    author: 'Jane Doe',
    date: '2024-07-29',
  },
  {
    id: '2',
    slug: 'the-power-of-syntax-sorcerer',
    title: 'The Power of SyntaxSorcerer for Clean Code',
    excerpt: 'Learn how to leverage SyntaxSorcerer to automatically format, lint, and beautify your codebase with a single command.',
    content: `Are you tired of arguing about code style in pull requests? SyntaxSorcerer is here to put an end to the debate. This powerful tool integrates with your CI/CD pipeline to enforce a consistent code style across your entire organization.

Getting started is simple. Just install the SyntaxSorcerer package and create a configuration file. You can choose from popular style guides like Airbnb, Google, or create your own custom ruleset.

One of the most loved features is its 'autofix' capability. Running \`npx syntax-sorcerer --fix\` will automatically correct most linting errors, saving you hours of tedious manual work. It's like having a magical assistant that tidies up your code for you.

SyntaxSorcerer also provides detailed reports, highlighting complex functions, potential performance bottlenecks, and security vulnerabilities. This helps you not only write cleaner code but also more robust and secure applications. Embrace the magic of clean code with SyntaxSorcerer.`,
    author: 'John Smith',
    date: '2024-07-28',
  },
  {
    id: '3',
    slug: 'deploy-with-deploy-dragon',
    title: 'Effortless Deployments with DeployDragon',
    excerpt: 'DeployDragon simplifies the deployment process, allowing you to ship your applications to any cloud provider with zero downtime.',
    content: `Deploying applications can be a stressful and error-prone process. DeployDragon is a tool designed to make deployments simple, reliable, and even enjoyable.

The core concept of DeployDragon is its "pipeline as code" approach. You define your deployment steps in a simple YAML file, which you can version control alongside your application code. This provides full visibility and history of your deployment process.

DeployDragon supports blue-green deployments, canary releases, and feature flagging out of the box. This allows you to release new features to a subset of users, gather feedback, and roll back instantly if something goes wrong.

Furthermore, its integration with monitoring tools like Prometheus and Grafana gives you a comprehensive dashboard to monitor your application's health post-deployment. Say goodbye to deployment anxiety and let DeployDragon handle the heavy lifting.`,
    author: 'Alex Ray',
    date: '2024-07-27',
  },
];

export const comments: Comment[] = [
  {
    id: 'c1',
    postId: '1',
    author: 'Michael Brown',
    avatar: 'https://i.pravatar.cc/40?u=michael-brown',
    date: '2024-07-30',
    content: 'Great overview of CodeCanvas! The visual debugger sounds like a game-changer. Can\'t wait to try it out.',
    replies: [
      {
        id: 'c3',
        postId: '1',
        author: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/40?u=jane-doe',
        date: '2024-07-30',
        content: 'Thanks, Michael! It really is. Let me know what you think once you\'ve had a chance to play with it.',
        replies: []
      }
    ]
  },
  {
    id: 'c2',
    postId: '1',
    author: 'Sarah Green',
    avatar: 'https://i.pravatar.cc/40?u=sarah-green',
    date: '2024-07-31',
    content: 'The real-time collaboration feature is what sold me. We\'ve been struggling with merge conflicts on my team, and this seems like the perfect solution.',
    replies: []
  },
  {
    id: 'c4',
    postId: '2',
    author: 'David Chen',
    avatar: 'https://i.pravatar.cc/40?u=david-chen',
    date: '2024-07-29',
    content: 'SyntaxSorcerer has saved us so much time. Our PRs are much cleaner now.',
    replies: []
  },
];
