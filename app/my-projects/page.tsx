
"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/bg-3.jpg)"}}
    className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project) => (
          <Link key={project.id} href={project.link}>
            <ProjectCard
              title={project.title}
              text={project.text}
              image={project.src}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
