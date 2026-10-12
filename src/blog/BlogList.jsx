import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

export default function BlogList() {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white">
          Detailing <span className="text-red-600">Blog & News</span>
        </h2>
        <p className="text-neutral-400 mt-2">Expert tips, guides, and updates from Legendary Detailing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-transform hover:-translate-y-1">
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-600/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{post.title}</h3>
              <p className="text-neutral-400 text-sm line-clamp-3">{post.snippet}</p>
            </div>
            <div className="px-6 pb-6 flex items-center justify-between border-t border-neutral-800/60 pt-4">
              <span className="text-xs text-neutral-500">{post.date}</span>
              <Link 
                to={`/blog/${post.id}`}
                className="text-sm font-bold text-red-500 hover:text-red-400 transition-colors"
              >
                Read Article &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}