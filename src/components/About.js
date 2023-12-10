import React from 'react'
import skills from '../utils/skills'
import SkillItems from './SkillItems'

const About = () => {
    return (
        <div className="container mx-auto my-7">
            <div className="grid grid-cols-2 gap-12">
                {skills && skills.map((skill) => (
                    <SkillItems skill={skill} key={skill.id}/>
                ))}
            </div>
        </div>
    )
}

export default About
