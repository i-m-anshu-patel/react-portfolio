import React from 'react'

const Experience = ({ job }) => {
    return (
        <div className="flex flex-col border border-gray-400 p-5 mt-3 hover:border-2 hover:border-yellow-600">
            <h3 className="text-xl font-bold">{job.jobTitle}</h3>
            <h5 className="text-lg font-semibold">{job.companyName}</h5>
            <time className="text-xs tracki uppercase dark:text-gray-400">{job.duration}</time>
            <h6 className="text-md font-semibold">Acheivements:</h6>
            {job.acheivements && job.acheivements.map((acheivement, index) => (
                <p className='pl-2' key={index}>{index + 1}. {acheivement}</p>
            ))}
            <h6 className="text-md font-semibold mt-2 mb-2">Skills:</h6>
            <div className='flex  justify-start'>
            {job.skillsUsed && job.skillsUsed.map((skill, index) => (
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded-full ml-2" key={index}>
                {skill}
                </button>
            ))}
            </div>
        </div>
    )
}

export default Experience
