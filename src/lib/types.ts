export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  replies: Comment[];
}
