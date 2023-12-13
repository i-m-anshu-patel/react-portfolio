import React from 'react'
import skills from '../utils/skills'

const Projects = () => {
    return (
        <div className='container mx-auto p-5'>
            <p className='text-2xl text-center font-bold text-blue-500'>Projects</p>
            <div className='flex flex-wrap mt-4 pt-2'>
                {skills && skills.map((skill) => (
                    <button class="bg-transparent hover:bg-black text-gray-700 font-medium hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded-full ml-2 mt-2">
                        {skill.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Projects
