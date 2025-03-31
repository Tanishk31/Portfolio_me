//COMPONENTS
import ProjectCard from './ProjectCard';
import visitor from '../images/visitor.jpg'
import realEstate from '../images/realEstate.jpg'

import React from 'react'
const works = [
    {
      imgSrc: visitor,
      title: 'Visitor Management System',
      tags: ['API', 'React', 'Node.js', 'mongoDB'],
      projectLink: 'https://github.com/Tanishk31/visiting_management'
    },
    // {
    //   imgSrc: '/images/project-2.jpg',
    //   title: 'Free stock photo app',
    //   tags: ['API', 'SPA'],
    //   projectLink: 'https://pixstock-official.vercel.app/'
    // },
    // {
    //   imgSrc: '/images/project-3.jpg',
    //   title: 'Recipe app',
    //   tags: ['Development', 'API'],
    //   projectLink: ''
    // },
    {
      imgSrc: realEstate,
      title: 'Real state website',
      tags: ['Node.js', 'React', 'TailWind CSS', 'Development'],
      projectLink: 'https://github.com/Tanishk31/Real-Estate'
    },
    // {
    //   imgSrc: '/images/project-5.jpg',
    //   title: 'eCommerce website',
    //   tags: ['eCommerce', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    // },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];
const Work = () => {
  return (
   <section id="work"
   className='section'>
    <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
        </h2>
       <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
        {works.map(({imgSrc,title,tags,projectLink},key)=>(
        <ProjectCard
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}
            classes="reveal-up"
            />))}
       </div>
    </div>
   </section>
  )
}

export default Work