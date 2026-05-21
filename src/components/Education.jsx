import React from 'react';

const Education = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-3 text-primary mb-8">
        <span className="material-symbols-outlined text-3xl">school</span>
        <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">Education</h2>
      </div>
      <div className="relative pl-6 border-l-2 border-outline-variant/30 space-y-10">
        <div className="relative">
          <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
          <span className="font-label-md text-[14px] text-on-surface-variant block mb-1">2022 - Present</span>
          <h3 className="font-headline-md text-primary text-[18px] font-[600]">Bachelor of Information Technology</h3>
          <p className="font-body-md text-on-surface font-medium mt-1">University of Technology</p>
          <p className="text-on-surface-variant text-sm mt-2 max-w-md">Currently in my 3rd year. Focused on programming, databases, algorithms, and software engineering.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
