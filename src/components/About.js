import React from 'react'
import skills from '../utils/skills'
import SkillItems from './SkillItems'
import Experience from './Experience'
import experience from '../utils/experience'
import education from '../utils/education'
import Education from './Education'

const About = () => {
    return (
        <div className="container mx-auto my-7">
            <p className='text-center text-lg font-semibold mt-3 mb-5'>Hi! I am Anshu Patel. I am a Full Stack developer with 2+ years of experience. Following are all the details about me.</p>
            <p className="text-center text-3xl text-blue-600/75 font-bold">Experience</p>
            <div className="grid grid-cols-1 m-10">
                {experience && experience.map((job) => (
                    <Experience job={job} key={job.id} />
                ))}
            </div>
            <p className="text-center text-3xl text-blue-600/75 font-bold mt-4">Education</p>
            <div className="grid grid-cols-1 m-9 border-2 border-gray-400 rounded-md border-solid divide-y-2 hover:border-gray-900">
                {education && education.map((institute) => (
                    <Education institute={institute} key={institute.id} />
                ))}
            </div>
            <p className="text-center text-3xl text-blue-600/75 font-bold">Skills</p>
            <div className="grid grid-cols-2 m-10 gap-12">
                {skills && skills.map((skill) => (
                    <SkillItems skill={skill} key={skill.id} />
                ))}
            </div>
           
        </div>
    )
}

export default About
