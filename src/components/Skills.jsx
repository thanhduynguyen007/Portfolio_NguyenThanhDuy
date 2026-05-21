import React from 'react';

const skillsData = [
  {
    category: "Languages / Core",
    icon: "data_object",
    items: [
      { name: "JavaScript (ES6+)", label: "JS", bg: "#F7DF1E", color: "black", labelStyle: "text-xs" },
      { name: "Node.js", label: "N", bg: "#339933", color: "white", labelStyle: "text-xs" },
      { name: "Express.js", label: "ex", bg: "#e5e7eb", color: "black", labelStyle: "text-[10px]" },
      { name: "Java", icon: "local_cafe", iconColor: "#007396" }
    ]
  },
  {
    category: "Backend Frameworks",
    icon: "view_in_ar",
    items: [
      { name: "RESTful API", icon: "api", iconColor: "text-primary" },
      { name: "Sequelize", icon: "database", iconColor: "#52B0E7" },
      { name: "JWT", icon: "vpn_key", iconColor: "#000000" },
      { name: "Authentication", icon: "lock", iconColor: "#000000" },
      { name: "Authorization", icon: "verified_user", iconColor: "#000000" }
    ]
  },
  {
    category: "Databases / ORM",
    icon: "storage",
    items: [
      { name: "MySQL", icon: "dataset", iconColor: "#4479A1" },
      { name: "PostgreSQL", icon: "dataset_linked", iconColor: "#336791" },
      { name: "MongoDB", icon: "eco", iconColor: "#47A248" },
      { name: "Sequelize ORM", icon: "account_tree", iconColor: "#52B0E7" }
    ]
  },
  {
    category: "Tools & Concepts",
    icon: "build",
    items: [
      { name: "Git / GitHub", icon: "code_blocks", iconColor: "black" },
      { name: "Postman", icon: "send", iconColor: "#FF6C37" },
      { name: "Docker", icon: "directions_boat", iconColor: "#2496ED" },
      { name: "Error Handling", icon: "warning", iconColor: "text-error" }
    ]
  }
];

const Skills = () => {
  return (
    <section className="mt-[120px] max-w-[1200px] mx-auto px-gutter" id="skills">
      <div className="flex items-center gap-3 text-primary mb-10">
        <span className="material-symbols-outlined text-3xl">terminal</span>
        <h2 className="font-headline-lg text-[32px] font-[700] text-on-surface">Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/20">
              <span className="material-symbols-outlined text-primary">{category.icon}</span>
              <h3 className="font-headline-md text-[18px] font-[600]">{category.category}</h3>
            </div>
            <ul className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center gap-3 text-on-surface-variant font-label-md text-[14px]">
                  {skill.label ? (
                    <span className={`w-6 h-6 rounded flex items-center justify-center font-bold ${skill.labelStyle}`} style={{ backgroundColor: skill.bg, color: skill.color }}>
                      {skill.label}
                    </span>
                  ) : (
                    <span 
                      style={{ color: skill.iconColor !== "text-primary" && skill.iconColor !== "text-error" && skill.iconColor !== "black" ? skill.iconColor : undefined }} 
                      className={`material-symbols-outlined ${skill.iconColor === 'text-primary' ? 'text-primary' : skill.iconColor === 'text-error' ? 'text-error' : skill.iconColor === 'black' ? 'text-black' : ''}`}>
                      {skill.icon}
                    </span>
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
