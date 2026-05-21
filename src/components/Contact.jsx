import React from 'react';

const Contact = () => {
  return (
    <section className="mt-[120px] max-w-[1200px] mx-auto px-gutter mb-[120px]" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 bg-surface p-8 md:p-12 rounded-2xl border border-outline-variant/30 shadow-sm">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl">send</span>
            <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">Contact me</h2>
          </div>
          <p className="text-on-surface-variant font-body-md text-[16px] max-w-sm">I'm open to internship and job opportunities. Feel free to contact me!</p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <a className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group" href="mailto:duydev@gmail.com">
            <div className="bg-surface-container-highest p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="font-label-md text-[14px] text-on-surface">duydev@gmail.com</p>
              <p className="text-on-surface-variant text-xs">Email</p>
            </div>
          </a>
          <a className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group" href="tel:0123456789">
            <div className="bg-surface-container-highest p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">phone</span>
            </div>
            <div>
              <p className="font-label-md text-[14px] text-on-surface">0123 456 789</p>
              <p className="text-on-surface-variant text-xs">Phone</p>
            </div>
          </a>
          <div className="flex items-start gap-4 p-4 rounded-xl">
            <div className="bg-surface-container-highest p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="font-label-md text-[14px] text-on-surface">Ho Chi Minh City</p>
              <p className="text-on-surface-variant text-xs">Location</p>
            </div>
          </div>
          <a className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group" href="#">
            <div className="bg-surface-container-highest p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <p className="font-label-md text-[14px] text-on-surface">github.com/duy-dev</p>
              <p className="text-on-surface-variant text-xs">GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
