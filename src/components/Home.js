import React, { useEffect } from 'react';

const Home = ({ onPlace }) => {
  useEffect(() => {
    return () => onPlace(null);
  }, [onPlace]);

  return (
    <div className="relative z-10 p-4 md:p-8 max-w-xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 tracking-wider lowercase text-foreground dark:text-dark-foreground">
        arsalan
      </h1>

      <p className="text-base md:text-lg tracking-wide lowercase text-foreground dark:text-dark-foreground leading-relaxed">
        vibecoder from{' '}
        <span
            className="text-red-600 dark:text-red-500 font-bold cursor-pointer hover:underline underline-offset-4"
          onMouseEnter={() => onPlace('/images/kashmir.jpg')}
          onMouseLeave={() => onPlace(null)}
        >
          kashmir
        </span>
        , currently in{' '}
        <span
            className="cursor-pointer hover:underline underline-offset-4"
          onMouseEnter={() => onPlace('/images/bangalore.jpg')}
          onMouseLeave={() => onPlace(null)}
        >
          bangalore
        </span>
      </p>
    </div>
  );
};

export default Home;
