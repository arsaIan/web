import React from 'react';

const Blogs = () => {
  const blogPosts = [
    // {
    //   title: 'aaa',
    //   date: '2024-03-20',
    //   excerpt: ''
    // },
    
  ];

  return (
    <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 tracking-wider lowercase text-foreground dark:text-dark-foreground">
          blog
        </h1>
        <div className="space-y-6">
          {blogPosts.length === 0 && (
            <p className="text-muted dark:text-dark-muted tracking-wide lowercase">coming soon...</p>
          )}
          {blogPosts.map((post, index) => (
            <article key={index} className="hover:opacity-80 transition-opacity">
              <h2 className="text-xl font-bold mb-2 tracking-wider lowercase text-foreground dark:text-dark-foreground">{post.title}</h2>
              <time className="text-sm text-muted dark:text-dark-muted block mb-3 tracking-wide lowercase">{post.date}</time>
              <p className="text-muted dark:text-dark-muted mb-4 tracking-wide lowercase">{post.excerpt}</p>
              <a 
                href={post.link || '/blogs'}
                className="inline-block text-foreground dark:text-dark-foreground font-bold hover:text-muted dark:hover:text-dark-muted transition-colors tracking-wide lowercase"
              >
                read more →
              </a>
            </article>
          ))}
        </div>
    </div>
  );
};

export default Blogs; 