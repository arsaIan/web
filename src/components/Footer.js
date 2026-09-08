import React from 'react';

const links = [
  { label: 'films', href: 'https://films.arsln.dev' },
  { label: 'music', href: 'https://music.arsln.dev' },
  { label: 'github', href: 'https://github.arsln.dev' },
  { label: 'codeforces', href: 'https://codeforces.com/profile/arsln' },
  { label: 'codechef', href: 'https://www.codechef.com/users/northpole' },
  { label: 'email', href: 'mailto:contact@arsln.dev' },
  { label: 'linkedin', href: 'https://linkedin.arsln.dev' },
];

const Footer = () => {
  return (
    <footer className="relative z-10 p-4 md:p-8">
      <nav className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="text-sm tracking-wide lowercase text-muted dark:text-dark-muted hover:text-foreground dark:hover:text-dark-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
