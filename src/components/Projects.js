import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Facedrop',
      description: 'Event based photo sharing app with actual users :p',
      link: 'https://facedrop.arsln.dev'
    },
    {
      title: 'Scruipts',
      description: 'Simple self hosted python script manager',
      link: 'https://github.com/arsaIan/scruipts'
    },
    {
      title: 'Shurl',
      description: 'URL Shortener',
      link: 'https://shurl.arsln.dev'
    },
    {
      title: 'Golru',
      description: 'LRU Cache Implementation in Go with React Dashboard',
      link: 'https://github.com/arsaIan/golru'
    },
    {
      title: 'Ruscii',
      description: 'Rust-based simple text art generator',
      link: 'https://github.com/arsaIan/ruscii'
    },
    {
      title: 'Boolean',
      description: 'C++ Boolean Expression Evaluator',
      link: 'https://github.com/arsaIan/boolean'
    },
    {
      title: 'OSKA',
      description: 'Notification Alerter',
      link: 'https://github.com/arsaIan/oska'
    },
    {
      title: 'Img-Dash',
      description: 'Full stack image dashboard',
      link: 'https://github.com/arsaIan/img-dash'
    },
    {
      title: 'Keymoji',
      description: 'Chrome Extension',
      link: 'https://github.com/arsaIan/keymoji'
    },
    {
      title: 'SPALM',
      description: 'Self Propulsive Auto Landing Machine',
      link: 'https://github.com/arsaIan/SPALM'
    }
  ];

  return (
    <div className="w-screen min-h-screen bg-background dark:bg-dark-background bg-notebook dark:bg-dark-notebook bg-notebook-horizontal dark:bg-dark-notebook-horizontal">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-wider lowercase text-foreground dark:text-dark-foreground">
          Projects
        </h1>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="group">
              <a 
                href={project.link}
                className="block hover:opacity-80 transition-opacity"
              >
                <h2 className="text-xl font-bold mb-1 tracking-wider lowercase text-foreground dark:text-dark-foreground group-hover:text-muted dark:group-hover:text-dark-muted">
                  {project.title}
                </h2>
                <p className="text-muted dark:text-dark-muted tracking-wide lowercase">
                  {project.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects; 