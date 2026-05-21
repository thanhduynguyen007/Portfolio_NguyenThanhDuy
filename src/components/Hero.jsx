import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-12 min-h-[70vh] pt-12 pb-6 md:pt-20 md:pb-10" id="home">
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <p className="font-headline-md text-[24px] font-[600] text-on-surface-variant">Hi, I'm</p>
          <h1 className="font-display-lg text-[48px] font-[800] text-primary">Nguyễn Thanh Duy</h1>
          <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">Backend Developer</h2>
        </div>
        <p className="text-[18px] font-body-lg text-on-surface-variant max-w-lg">
          I build robust and scalable backend systems, design RESTful APIs, and work with databases to deliver secure and efficient solutions.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-[14px] flex items-center gap-2 hover:bg-primary/90 transition-all duration-200 hover:scale-95 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">folder_open</span>
            View Projects
          </button>
          <button className="bg-surface text-primary border border-outline-variant px-6 py-3 rounded-lg font-label-md text-[14px] flex items-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:scale-95 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download CV
          </button>
        </div>
        <div className="flex gap-6 pt-6 text-on-surface-variant">
          <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">code</span>
            <span className="font-label-md text-[14px]">GitHub</span>
          </a>
          <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">link</span>
            <span className="font-label-md text-[14px]">LinkedIn</span>
          </a>
          <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-label-md text-[14px]">Email</span>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end relative">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-surface shadow-xl ring-2 ring-outline-variant/20 z-10">
          <img alt="Profile photo" className="object-cover w-full h-full" src="/avatar.jpg" />
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-primary-fixed rounded-full blur-2xl opacity-50 z-0"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary-fixed rounded-full blur-3xl opacity-40 z-0"></div>
      </div>
    </section>
  );
};

export default Hero;
