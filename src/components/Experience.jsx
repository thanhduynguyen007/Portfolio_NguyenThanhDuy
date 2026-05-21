import React from 'react';

const Experience = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-3 text-primary mb-8">
        <span className="material-symbols-outlined text-3xl">work_history</span>
        <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">Experience</h2>
      </div>
      <div className="relative pl-6 border-l-2 border-outline-variant/30 space-y-10">
        <div className="relative">
          <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
          <span className="font-label-md text-[14px] text-on-surface-variant block mb-1">2024 - Present</span>
          <h3 className="font-headline-md text-primary text-[18px] font-[600]">Backend Developer (Personal Projects)</h3>
          <p className="font-body-md text-on-surface font-medium mt-1">Self-employed</p>
          <p className="text-on-surface-variant text-sm mt-2 max-w-md">Building backend APIs and services for various personal projects to improve my skills and solve real-world problems.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
