import React from 'react';

const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-gutter bg-surface-container-lowest border-y border-outline-variant/20 mt-4 md:mt-6 py-12" id="about">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl">person</span>
            <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">About me</h2>
          </div>
          <div className="space-y-4 text-on-surface-variant font-body-md text-[16px]">
            <p>I'm a third-year Information Technology student with a strong passion for backend development. I specialize in building scalable RESTful APIs, working with relational and NoSQL databases, and implementing authentication &amp; authorization.</p>
            <p>I follow best practices to deliver secure, maintainable, and production-ready systems.</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface p-6 rounded-xl border border-outline-variant/30 hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex items-start gap-4">
            <div className="bg-primary-container/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">work</span>
            </div>
            <div>
              <h3 className="font-headline-md font-[600] text-on-surface text-[18px]">Backend Developer</h3>
              <p className="text-on-surface-variant font-body-md text-sm mt-1">Focused on Backend</p>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-outline-variant/30 hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex items-start gap-4">
            <div className="bg-primary-container/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <h3 className="font-headline-md font-[600] text-on-surface text-[18px]">Experience</h3>
              <p className="text-on-surface-variant font-body-md text-sm mt-1">1 Year (Academic Projects)</p>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-outline-variant/30 hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex items-start gap-4">
            <div className="bg-primary-container/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">folder</span>
            </div>
            <div>
              <h3 className="font-headline-md font-[600] text-on-surface text-[18px]">Projects</h3>
              <p className="text-on-surface-variant font-body-md text-sm mt-1">10+ Completed</p>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-xl border border-outline-variant/30 hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex items-start gap-4">
            <div className="bg-primary-container/20 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <div>
              <h3 className="font-headline-md font-[600] text-on-surface text-[18px]">Focus</h3>
              <p className="text-on-surface-variant font-body-md text-sm mt-1">Backend Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
