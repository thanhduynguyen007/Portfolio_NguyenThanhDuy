import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-surface-container-low dark:bg-surface-dim border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-[1200px] mx-auto gap-4 transition-all duration-300 ease-in-out">
        <p className="font-body-md text-[16px] text-on-surface-variant dark:text-surface-variant">© 2025 Nguyễn Thanh Duy. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-md text-[14px] flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[20px]">link</span> LinkedIn
          </a>
          <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-md text-[14px] flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[20px]">mail</span> Email
          </a>
          <a className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors ml-4" href="#home">
            <span className="material-symbols-outlined">arrow_upward</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
