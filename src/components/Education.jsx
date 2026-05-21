import React from "react";

const Education = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-8 text-primary">
        <span className="text-3xl material-symbols-outlined">school</span>
        <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">
          Education
        </h2>
      </div>
      <div className="relative pl-6 space-y-10 border-l-2 border-outline-variant/30">
        <div className="relative">
          <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
          <span className="font-label-md text-[14px] text-on-surface-variant block mb-1">
            2023 - Present
          </span>
          <h3 className="font-headline-md text-primary text-[18px] font-[600]">
            Bachelor of Information Technology
          </h3>
          <p className="mt-1 font-medium font-body-md text-on-surface">
            MeKong University
          </p>
          <p className="max-w-md mt-2 text-sm text-on-surface-variant">
            Currently in my 3rd year. Focused on programming, databases,
            algorithms, and software engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
