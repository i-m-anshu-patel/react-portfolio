import React from 'react'
import skills from '../utils/skills'
import SkillItems from './SkillItems'
import Experience from './Experience'
import experience from '../utils/experience'

const About = () => {
    return (
        <div className="container mx-auto my-7">
            <p className="text-center text-3xl text-blue-600/75 font-bold">Experience</p>
            <div class="grid grid-cols-1 divide-y">
            {experience && experience.map((job) => (
                    <Experience job={job} key={job.id} />
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
