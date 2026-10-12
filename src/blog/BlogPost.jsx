import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    // If Disqus is already loaded on the page, reset it for the new article ID
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = window.location.href;
          this.page.identifier = id;
        },
      });
    } else {
      // Otherwise, load the Disqus script for the first time
      window.disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = id;
      };

      const d = document;
      const s = d.createElement('script');
      s.src = 'https://legendarydetailing-autos.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      s.async = true;
      d.head.appendChild(s);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="py-24 text-center text-white bg-neutral-950 min-h-screen">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <Link to="/blog" className="text-red-600 underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="py-12 px-6 max-w-3xl mx-auto text-neutral-300 min-h-screen">
      <Link to="/blog" className="text-sm text-red-500 hover:underline mb-6 inline-block">
        &larr; Back to all articles
      </Link>

      <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-600/10 px-3 py-1 rounded-full block w-max mb-3">
        {post.category}
      </span>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{post.title}</h1>
      <p className="text-xs text-neutral-500 mb-8 pb-4 border-b border-neutral-800">Published on {post.date}</p>

      {/* Article Content */}
      <div className="space-y-4 leading-relaxed whitespace-pre-line text-neutral-300 mb-16">
        {post.content}
      </div>

      {/* Disqus Comments Section */}
      <section className="border-t border-neutral-800 pt-8 mt-12">
        <h3 className="text-xl font-bold text-white mb-6">Customer Discussion & Comments</h3>
        <div id="disqus_thread"></div>
      </section>
    </article>
  );
}