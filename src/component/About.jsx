
import React from 'react';

const aboutItems = [
  {
    label: 'Projects done',
    number: 2
  },
  {
    label: 'Years of experience',
    number: 0
  }
];

const About = () => {
  return (
    <section id="about" className='section'>
        <div className='container'>
      <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ">
        <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
          Welcome! I&apos;m Tanishk Chaudhary, I'm a MERN Stack Developer with a strong foundation in JavaScript, React, Node.js, Express, MongoDB, and SQL. With hands-on experience in AWS (AWS Certified Practitioner), I specialize in building scalable and efficient web applications. I've completed two internships as a MERN Stack Developer, where I worked on real-world projects, enhancing my expertise in backend development, API integrations, and cloud deployments. Passionate about solving problems and optimizing performance, I continuously explore new technologies to refine my skill set.
        </p>

        <div className="flex flex-wrap items-center gap-4 md:gap-7">
          {
            aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                </div>
                <p className='text-sm text-zinc-400 '>{label}</p>
              </div>
            ))
          }
          
          <img src='/images/logo.svg' alt="Logo" width={30} height={30} 
          className="ml-auto md:w-[40px] md:h-[40px]" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
