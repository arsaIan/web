import React from 'react';

const About = () => {
  return (
    <div className="w-screen min-h-screen bg-background dark:bg-dark-background bg-notebook dark:bg-dark-notebook bg-notebook-horizontal dark:bg-dark-notebook-horizontal">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-wider lowercase text-foreground dark:text-dark-foreground">
          About Me
        </h1>
        <p className="text-muted dark:text-dark-muted leading-relaxed mb-4 tracking-wide lowercase">
          A passionate software developer focused on backend systems and efficient code. I enjoy building scalable solutions and exploring new technologies.
        </p>
        <p className="text-muted dark:text-dark-muted leading-relaxed mb-4 tracking-wide lowercase">
          Currently working at Lets Transport, contributing to robust systems in NestJS and other technologies.
        </p>
        <p className="text-muted dark:text-dark-muted leading-relaxed mb-8 tracking-wide lowercase">
          I have done my Bachelors in Electrical Engineering from <a href="https://nitsri.ac.in" className="text-foreground dark:text-dark-foreground hover:text-muted dark:hover:text-dark-muted transition-colors">NIT Srinagar</a>, graudated in 2023 with 8.2 CGPA
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-wider lowercase text-foreground dark:text-dark-foreground">
          Competitive Programming
        </h2>
        <ul className="space-y-2 mb-8">
          <li>
            <a href="https://codeforces.com/profile/arsln" className="text-muted dark:text-dark-muted hover:text-foreground dark:hover:text-dark-muted transition-colors tracking-wide lowercase">
              Codeforces Profile
            </a>
          </li>
          <li>
            <a href="https://www.codechef.com/users/northpole" className="text-muted dark:text-dark-muted hover:text-foreground dark:hover:text-dark-muted transition-colors tracking-wide lowercase">
              Codechef Profile
            </a>
          </li>
        </ul>

        <a 
          href="https://resume.arsln.dev/resume" 
          className="text-foreground dark:text-dark-foreground hover:text-muted dark:hover:text-dark-muted transition-colors tracking-wide lowercase"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default About; 