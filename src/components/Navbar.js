import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'blog', path: '/blogs' }
  ];

  return (
    <nav className="w-full bg-background dark:bg-dark-background bg-notebook dark:bg-dark-notebook bg-notebook-horizontal dark:bg-dark-notebook-horizontal">
      <div className="p-4">
        <div className="flex justify-between items-center">
          {/* Menu Button - Only visible on mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground dark:text-dark-foreground hover:text-muted dark:hover:text-dark-muted transition-colors tracking-wide lowercase"
          >
            {isMenuOpen ? 'close' : 'menu'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-foreground dark:text-dark-foreground hover:text-muted dark:hover:text-dark-muted transition-colors tracking-wide lowercase"
          >
            {isDarkMode ? 'light' : 'dark'}
          </button>

          {/* Menu Items */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-background dark:bg-dark-background md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path}
                    className="text-foreground dark:text-dark-foreground hover:text-muted dark:hover:text-dark-muted transition-colors tracking-wide lowercase block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 