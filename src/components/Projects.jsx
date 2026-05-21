import React from 'react';

const projectsData = [
  {
    title: "TaskFlow API Server",
    description: "Task management system with user auth, task CRUD, role-based access, and activity logs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARI5CxSF0wi7kcfZLzItdpfsy-PgmhpR65qWzNo-k8dVgY-vSOHQGrayoLrCdQ_gWZFsdxxvp176Rg7Xm0--mwbgI6L08Yoju_EGFD5qvNRnfnipjqY73hCBEAwbpE9NXCckWRLWklzHLBz6-HUVli6HHki2buP5Jx5I7k-yA8N7Hr8soYcsaNK4RHOxuydYBx1guOKhQZ1DiKqS9CohkFYptoFTX_KadX_at0NJS2v3v6RJIzZkZIKdA2qrisFQkwJ25jMcOFbU4",
    techStack: ["Node.js", "Express", "MySQL", "JWT", "Docker"],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    title: "Auth Service",
    description: "Authentication service with JWT, refresh tokens, email verification, and password reset.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgZlmfg2IUAYGj_eluQI4M5d5Fz45_J0936WUqftLXqIxzWdT64phJ-GSlEscz7qWO4qkEc9kOsvgEd7hjVGCjwSp8xJydrt6MkBuI1lb1LhBji3p-t40t4jA0B3Neg3d_aIUzWTH-5YBWfNOogAAwJ_sNlshYypHlulomB1flu2MpX3_1M9gUmN6SwhTs6jV2c6nSwJFDORG_l_AkZiyPShxDfKZx1l-H-Ihb5lG86Vc3XDsF-5Mr0Fu_i7CaXtcPg0ORjmEiyQ8",
    techStack: ["Node.js", "Express", "Sequelize", "MySQL", "JWT"],
    githubUrl: "#",
    liveDemoUrl: "#"
  },
  {
    title: "TravelMate Backend",
    description: "Backend API for a travel app with destination, booking, reviews, and image upload.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVDXoeNs-aiLL5iMnW51LBSaoFSRweeemQeXjvuapEelRs8JkpZCiBH5L7fRtZGwCOCH0cn3GqYISyGWFbdZ7xDdOAGH8VoGPtWgGrYVhYbxqH3mCsWOBrERj5b2sJViQ1hdhJiC9UMVBewnM5iZlgL60IL_xuq84RzF9FRh4zvLWgKn6fzuxyIKi0Zge0cvIDV4w2HRbgCt37yZGTgKkOYkJzThMb2zUGgioZZePNzVwqvpepQOVilh6RbOnS_DVQ6Xaj_mV4ves",
    techStack: ["Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "#",
    liveDemoUrl: "#"
  }
];

const Projects = () => {
  return (
    <section className="mt-[120px] max-w-[1200px] mx-auto px-gutter" id="projects">
      <div className="flex justify-between items-end mb-10">
        <div className="flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined text-3xl">folder_special</span>
          <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">Projects</h2>
        </div>
        <a className="text-primary font-label-md text-[14px] flex items-center gap-1 hover:underline" href="#">
          View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden hover:shadow-[0px_10px_15px_-3px_rgba(15,23,42,0.05)] transition-shadow duration-300 flex flex-col">
            <div className="h-48 bg-surface-variant w-full overflow-hidden">
              <img alt={project.title} className="w-full h-full object-cover opacity-80 mix-blend-multiply" src={project.image} />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-headline-md text-primary mb-2 text-[20px] font-[600]">{project.title}</h3>
              <p className="text-on-surface-variant font-body-md text-sm mb-6 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-surface-container-low text-on-surface-variant px-2 py-1 rounded font-label-md text-[12px]">{tech}</span>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                <a className="text-primary font-label-md text-[14px] flex items-center gap-1 hover:underline" href={project.githubUrl}>
                  GitHub <span className="material-symbols-outlined text-[16px]">code</span>
                </a>
                <a className="text-primary font-label-md text-[14px] flex items-center gap-1 hover:underline" href={project.liveDemoUrl}>
                  Live Demo <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
