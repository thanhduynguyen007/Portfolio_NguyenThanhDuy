import React from "react";

const Contact = () => {
  return (
    <section
      className="mt-[120px] max-w-[1200px] mx-auto px-gutter mb-[120px]"
      id="contact"
    >
      <div className="flex flex-col items-start justify-between gap-12 p-8 border shadow-sm md:flex-row bg-surface md:p-12 rounded-2xl border-outline-variant/30">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <span className="text-3xl material-symbols-outlined">send</span>
            <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">
              Contact me
            </h2>
          </div>
          <p className="text-on-surface-variant font-body-md text-[16px] max-w-sm">
            I'm open to internship and job opportunities. Feel free to contact
            me!
          </p>
        </div>
        <div className="grid flex-1 w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            className="flex items-start gap-4 p-4 transition-colors rounded-xl hover:bg-surface-container-low group"
            href="mailto:ngthanhduy.work@gmail.com"
          >
            <div className="p-2 transition-colors rounded-lg bg-surface-container-highest text-primary group-hover:bg-primary group-hover:text-on-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="font-label-xl text-[14px] text-on-surface">
                ngthanhduy.work@gmail.com
              </p>
              <p className="text-xs text-on-surface-variant">Email</p>
            </div>
          </a>
          <a
            className="flex items-start gap-4 p-4 transition-colors rounded-xl hover:bg-surface-container-low group"
            href="tel:0123456789"
          >
            <div className="p-2 transition-colors rounded-lg bg-surface-container-highest text-primary group-hover:bg-primary group-hover:text-on-primary">
              <span className="material-symbols-outlined">phone</span>
            </div>
            <div>
              <p className="font-label-md text-[14px] text-on-surface">
                0123 456 789
              </p>
              <p className="text-xs text-on-surface-variant">Phone</p>
            </div>
          </a>
          <div className="flex items-start gap-4 p-4 rounded-xl">
            <div className="p-2 rounded-lg bg-surface-container-highest text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="font-label-md text-[14px] text-on-surface">
                Ho Chi Minh City
              </p>
              <p className="text-xs text-on-surface-variant">Location</p>
            </div>
          </div>
          <a
            className="flex items-start gap-4 p-4 transition-colors rounded-xl hover:bg-surface-container-low group"
            href="https://github.com/thanhduynguyen007"
          >
            <div className="p-2 transition-colors rounded-lg bg-surface-container-highest text-primary group-hover:bg-primary group-hover:text-on-primary">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <p className="font-label-md text-[14px] text-on-surface">
                thanhduynguyen007
              </p>
              <p className="text-xs text-on-surface-variant">GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
