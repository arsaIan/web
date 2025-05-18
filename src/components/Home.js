import React from 'react';

const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-background dark:bg-dark-background bg-notebook dark:bg-dark-notebook bg-notebook-horizontal dark:bg-dark-notebook-horizontal">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-wider lowercase text-foreground dark:text-dark-foreground">
          Hey, 
        </h1>
        <p className="text-base md:text-lg mb-4 tracking-wide lowercase text-foreground dark:text-dark-foreground">
           <i>arsalan here</i> <br /> working as a SDE1 at Lets Transport with expertise in NestJS, Golang, and various web technologies. Passionate about backend development and building scalable services.
        </p>
        <div className="fixed bottom-0 left-0 right-0 p-4 text-center">
          <p className="text-sm tracking-wide lowercase text-foreground dark:text-dark-foreground mb-2">
            Connect with me:
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a href="mailto:contact@arsln.dev" className="text-sm text-muted dark:text-dark-muted hover:text-foreground dark:hover:text-dark-foreground transition-colors tracking-wide lowercase">
              Email
            </a>
            <span className="text-muted dark:text-dark-muted">•</span>
            <a href="https://linkedin.arsln.dev" className="text-sm text-muted dark:text-dark-muted hover:text-foreground dark:hover:text-dark-foreground transition-colors tracking-wide lowercase">
              LinkedIn
            </a>
            <span className="text-muted dark:text-dark-muted">•</span>
            <a href="https://github.arsln.dev" className="text-sm text-muted dark:text-dark-muted hover:text-foreground dark:hover:text-dark-foreground transition-colors tracking-wide lowercase">
              GitHub
            </a>
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default Home; 