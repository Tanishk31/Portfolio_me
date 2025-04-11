import React from 'react'

const experiences = [
  {
    company: "BlueStock Fintech",
    position: "Software Developer Intern",
    duration: "Dec 2024 - Jan 2023",
    description: "Developed responsive web applications and implemented key features using modern web technologies. Collaborated with team members to deliver high-quality software solutions.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    company: "Ezlearn",
    position: "Software Developer Intern",
    duration: "Feb 2024 - Mar 2023",
    description: "Worked on developing educational platform features and optimizing user interfaces. Implemented student progress tracking system and interactive learning modules.",
    skills: ["React", "Node.js", "MongoDB"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Professional Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 reveal-up">
              <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
              <div className="flex flex-col gap-2">
                <p className="text-sky-400 font-medium">{exp.position}</p>
                <p className="text-zinc-400 text-sm">{exp.duration}</p>
                <p className="text-zinc-300 mt-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience