import React, { useState } from 'react'
import skills from '../utils/skills'
import projects from '../utils/projects'
import ProjectCards from './ProjectCards'

const Projects = () => {
    const [projectList, setProjectList] = useState(projects);
    const [initialProjectList, setInitialProjectList] = useState(projects);
    const [fliteredSkillId, setFilteredSkillId] = useState(0);
    const handleSkillFilter = (skillId) => {
        let newProjectList = initialProjectList.filter(
            (list) => list.skillIds.includes(skillId)
        );
        setProjectList(newProjectList);
        setFilteredSkillId(skillId);
    }
    return (
        <div className='container mx-auto p-5'>
            <p className='text-2xl text-center font-bold text-blue-500'>Projects</p>
            <div className='flex flex-wrap mt-4 pt-2'>
                {skills && skills.map((skill) => (
                    <button className={`bg-${fliteredSkillId == skill.id ? 'black text-white' : 'transparent text-gray-700' } hover:bg-black  font-medium hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded-full ml-2 mt-2`} onClick={() => handleSkillFilter(skill.id)} key={skill.id}>
                        {skill.name}
                    </button>
                ))}
            </div>
            <div className='container mx-auto p-5'>
                <div className="grid grid-cols-4 gap-4">
                    {projectList && projectList.map((project, index) => (
                        <ProjectCards key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
