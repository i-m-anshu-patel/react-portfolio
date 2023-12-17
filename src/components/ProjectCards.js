import React from 'react'

const ProjectCards = ({ project }) => {
    return (
        <>
            <a href={project.repoLink} target='_blank'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-96 hover:border-2 hover:border-black">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{project.title}</div>
                        <p className="text-gray-700 text-base">
                            {project.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.duration}</span>
                    </div>
                </div>
            </a>
        </>

    )
}

export default ProjectCards
