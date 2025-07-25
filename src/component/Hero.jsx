import React from 'react'
import { ButtonPrimary,ButtonOutline } from './Button'
import MyPhoto from '../images/Myphoto.png'
const Hero = () => {
  return (

   <section id="home"
   className="pt-28 lg:pt-36">
    <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
            <div className="flex items-center gap-3">
                
                <div className="flex items-center gap-1.5 
                text--zinc-400 text-sm tracking-wide">
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                    </span>
                    Available for Work
                </div>
            </div>

            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Love to build new and creative things together

            </h2>
            <div className="flex items-center gap-3">
                <div className='bg-[#38bdf8] rounded-xl p-2 text-black'>
                    <ButtonPrimary href="https://drive.google.com/file/d/1iKCqItKuvn8MKgbN-9T8-DryGrrSnWRY/view?usp=sharing" label="Download CV" icon="download" />
                </div>

            {/* <ButtonOutline
            href="about"
            label='Scroll down'
            icon="arrow_downward"/> */}
            </div>
        </div>
       <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                <img src={MyPhoto}
                width={656}
                height={800}
                 alt="Tanishk Chaudhary"
                 className='w-full' />
            </figure>
        </div> 
    </div>

   </section>
  )
}

export default Hero