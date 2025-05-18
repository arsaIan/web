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

    <div className="w-screen min-h-screen bg-background dark:bg-dark-background bg-notebook dark:bg-dark-notebook bg-notebook-horizontal dark:bg-dark-notebook-horizontal">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-wider lowercase text-foreground dark:text-dark-foreground">
          Blog Posts
        </h1>
        <div className="space-y-6">
          {blogPosts.length === 0 && (
            <p className="text-muted dark:text-dark-muted text-center">soon...</p>
          )}
          {blogPosts.map((post, index) => (
            <article key={index} className="hover:opacity-80 transition-opacity">
              <h2 className="text-xl font-bold mb-2 tracking-wider lowercase text-foreground dark:text-dark-foreground">{post.title}</h2>
              <time className="text-sm text-muted dark:text-dark-muted block mb-3 tracking-wide lowercase">{post.date}</time>
              <p className="text-muted dark:text-dark-muted mb-4 tracking-wide lowercase">{post.excerpt}</p>
              <a 
                href="#" 
                className="inline-block text-foreground dark:text-dark-foreground font-bold hover:text-muted dark:hover:text-dark-muted transition-colors tracking-wide lowercase"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs; 