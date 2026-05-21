import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-200" id="navbar">
      <div className="flex justify-between items-center h-16 px-gutter max-w-[1200px] mx-auto">
        <div className="text-[24px] font-[600] font-headline-md text-primary dark:text-inverse-primary hover:scale-95 duration-150 transition-transform cursor-pointer">
          Duy.dev
        </div>
        <ul className="hidden md:flex gap-6 items-center">
          <li><a className="text-primary dark:text-inverse-primary font-bold border-b-2 border-primary dark:border-inverse-primary pb-1 block" href="#home">Home</a></li>
          <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors block" href="#about">About</a></li>
          <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors block" href="#skills">Skills</a></li>
          <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors block" href="#projects">Projects</a></li>
          <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors block" href="#experience">Experience</a></li>
          <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors block" href="#contact">Contact</a></li>
        </ul>
        <div className="hidden md:flex items-center">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-[14px] flex items-center gap-2 hover:bg-primary/90 transition-all duration-200 hover:scale-95">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download CV
          </button>
        </div>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
