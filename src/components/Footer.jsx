import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stark-black py-12 border-t border-gray-muted/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-heading text-2xl font-bold text-signal-red tracking-widest select-none clickable cursor-pointer mt-1"
        >
          &lt;Kaushal/&gt;
        </a>

        {/* Text */}
        <p className="text-xs font-label text-gray-muted tracking-widest uppercase">
          &copy; {currentYear} Kaushal Khadka. Built with Love &amp; MERN Stack.
        </p>

        {/* Navigation Shortcuts */}
        <div className="flex gap-8 text-xs font-label tracking-widest uppercase text-gray-muted">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-signal-red transition-colors duration-200 clickable font-bold"
          >
            Top
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-signal-red transition-colors duration-200 clickable font-bold"
          >
            PROJECTS
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
