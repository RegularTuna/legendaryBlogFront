import { Feather, Github, Linkedin } from 'lucide-react'

import React from 'react'

import typescriptlogo from "../assets/typescriptlogo.png"
import javalogo from "../assets/javalogo.png"
import reactlogo from "../assets/reactlogo.png"
import springbootlogo from "../assets/springbootlogo.png"
import tiago from "../assets/tiago.png"


const About = () => {

    const h3stl = "text-title font-bold text-center text-lg my-4";

    return (

        <>
            <section className='border-1  border-surface-border rounded-md p-3'>
                <div className="flex items-center gap-2 justify-center group ">
                    <div className="bg-brand-primary  p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md">
                        <Feather className="text-brand-contrast w-5 h-5" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-text-title">
                        Legendary<span className="text-brand-primary text-2xl">Blog</span>
                    </span>
                </div>
                <div className='my-9'>
                    <h3 className={h3stl}>What is this blog?</h3>
                    <p className='text-center font-medium'>As an unemployed dude with a lot of free time in it's hands I needed a small project where I could showcase what I can do, so I made a blog about not-so real events.                </p>

                </div>
                <div className='flex flex-col'>

                    <h3 className={h3stl}>What languages and frameworks were used?</h3>

                    <div className='flex  flex-col md:flex-row justify-evenly gap-4  md:mx-8'>

                        <div className='flex flex-1 flex-col border-1  border-surface-border rounded-md p-3 justify-center'>
                            <h4 className='text-title  font-bold text-center text-lg mb-4'>Frontend</h4>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className=' overflow-hidden flex flex-col align-center justify-center'>
                                    <img className='w-full h-full object-fit' src={typescriptlogo} alt="" />
                                    <p className='text-center text-md font-medium'>Typescript</p>
                                </div>
                                <div className=' overflow-hidden flex flex-col align-center justify-center'>
                                    <img className='w-full h-full object-fit' src={reactlogo} alt="" />
                                    <p className='text-center text-md font-medium'>React</p>
                                </div>

                            </div>
                        </div>


                        <div className=' flex flex-1 flex-col border-1  border-surface-border rounded-md p-3 justify-center'>
                            <h4 className='text-title  font-bold text-center text-lg mb-4'>Backend</h4>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className=' overflow-hidden flex flex-col align-center justify-center'>
                                    <img className='w-full h-full object-fit' src={javalogo} alt="" />
                                    <p className='text-center text-md font-medium'>Java</p>
                                </div>
                                <div className=' overflow-hidden flex flex-col align-center justify-center'>
                                    <img className='w-full h-full object-fit' src={springbootlogo} alt="" />
                                    <p className='text-center text-md font-medium'>Spring</p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <section className=' bg-surface-ink text-text-title rounded-xl p-6 border border-surface-border outline outline-1 outline-surface-border/30 my-4 flex flex-col items-center shadow-2xl md:flex-row md:justify-center md:gap-4 mx-auto md:w-1/2'>

                
                <div className='relative w-32 h-32 mb-4'>
                    <img
                        src={tiago}
                        alt="Tiago Fortuna"
                        className='rounded-full w-full h-full object-cover border-2 border-brand-primary shadow-[0_0_20px_rgba(var(--color-brand-primary),0.3)]'
                    />
                </div>

                
                <div className='text-center'>
                    <p className='text-2xl font-bold tracking-tight text-text-title'>Tiago Fortuna</p>

                    
                    <div className='w-full h-[1px] bg-brand-primary/50  mx-auto my-2' />

                    <p className='text-text-muted font-medium'>Computer Engineer Graduate</p>

                    <div className='mt-4 md:mt-2 flex justify-center gap-4'>
                        <a target='_blank' href="https://www.linkedin.com/in/tiago-fortuna-561b48163/" className='bg-surface-ink border border-surface-border hover:border-brand-primary transition-all rounded-full p-2 group'>
                            <Github size={24} className="text-brand-primary group-hover:scale-110 transition-transform" />
                        </a>
                        <a target='_blank' href="https://github.com/RegularTuna" className='bg-surface-ink border border-surface-border hover:border-brand-primary transition-all rounded-full p-2 group'>
                            <Linkedin size={24} className="text-brand-primary group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                
                
            </section>
        </>

    )
}

export default About