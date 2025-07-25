import React from 'react'
import SkillCard from './SkillCard';
import cppIcon from '../images/cppIcon.png'
import javaIcon from '../images/javaIcon.png'
import pythonIcon from '../images/pythonIcon.png'
import numpyIcon from '../images/numpyIcon.png'
import pandasIcon from '../images/pandasIcon.png'
import AWSIcon from '../images/AWSIcon.png'
import DockerIcon from '../images/dockerIcon.png'
import jsIcon from '../images/javascript.svg'
import nodeIcon from '../images/nodejs.svg'
import expressIcon from '../images/expressjs.svg'
import mongoIcon from '../images/mongodb.svg'
import reactIcon from '../images/react.svg'
import tailwindIcon from '../images/tailwindcss.svg'
import sqlIcon from '../images/sql.svg'
const skillItem = [
    // {
    //   imgSrc: '/images/postman.svg',
    //   label: 'Figma',
    //   desc: 'Design tool'
    // },
    {
      imgSrc: cppIcon,
      label: 'C++',
      desc: 'Programming Language'
    },
    {
      imgSrc: javaIcon,
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: pythonIcon,
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: jsIcon,
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: nodeIcon,
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: numpyIcon,
      label: 'Numpy',
      desc: 'Python Library'
    },
    {
      imgSrc: pandasIcon,
      label: 'Pandas',
      desc: 'Python Library'
    },
    {
      imgSrc: reactIcon,
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: mongoIcon,
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: sqlIcon,
      label: 'SQL',
      desc: 'Database'
    },{
      imgSrc: AWSIcon,
      label: 'AWS',
      desc: 'Cloud Computing'
    },{
      imgSrc: DockerIcon,
      label: 'Docker',
      desc: 'Devops'
    }
  ];
const Skill = () => {
  return (
   <section className="section">
    <div className="container">
        <h2 className="headline-2 reveal-up">
            Essential Languages I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.

        </p>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
            {
                skillItem.map(({imgSrc,label,desc},key)=>
                (
                   <SkillCard
                   key={key}
                   imgSrc={imgSrc}
                   label={label}
                   desc={desc}
                    classes="reveal-up"
                   />
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default Skill