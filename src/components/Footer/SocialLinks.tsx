import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}