
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
          I'm a full-stack developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js), combined with a solid foundation in C++, Java, and Python. My skill set spans across frontend and backend development, cloud computing with AWS (Certified Practitioner), and working with databases like SQL and MongoDB.

Over the course of two internships as a MERN Stack Developer, I've worked on real-world projects focused on API integration, database design, and cloud-based deployments. I’ve also used Docker for containerization and deployment, and leveraged AWS services to build scalable web solutions.

In addition to my web development background, I have hands-on experience with Data Science tools such as NumPy and Pandas, and a strong command over JavaScript, Java, C++, and Python for both application logic and algorithmic problem solving.

I'm passionate about building efficient systems, optimizing performance, and learning new technologies. Whether it's cloud infrastructure, backend systems, or frontend interfaces — I bring a strong work ethic and problem-solving mindset to every project I take on.


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
