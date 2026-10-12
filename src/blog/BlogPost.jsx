import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-24 text-center text-white">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <Link to="/blog" className="text-red-600 underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="py-12 px-6 max-w-3xl mx-auto animate-fadeIn text-neutral-300">
      <Link to="/blog" className="text-sm text-red-500 hover:underline mb-6 inline-block">
        &larr; Back to all articles
      </Link>

      <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-600/10 px-3 py-1 rounded-full block w-max mb-3">
        {post.category}
      </span>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{post.title}</h1>
      <p className="text-xs text-neutral-500 mb-8 pb-4 border-b border-neutral-800">Published on {post.date}</p>

      <div className="space-y-4 leading-relaxed whitespace-pre-line text-neutral-300">
        {post.content}
      </div>
    </article>
  );
}