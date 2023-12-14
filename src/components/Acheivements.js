import React from 'react'
import acheivements from '../utils/acheivements'

const Acheivements = () => {
    return (
        <>
            <p className='text-2xl text-center font-bold text-blue-500'>Acheivements</p>
            <div className='container mx-auto p-5'>
                {acheivements && acheivements.map((acheivement) => (
                   <a href={acheivement.link} target="_blank">
                     <div className="grid grid-cols-1 m-2 border-2 border-gray-300 rounded-md border-solid  p-3 hover:bg-black hover:text-white hover:border-yellow-700 hover:border-3">
                        <p className='text-xl font-bold'>{acheivement.title}</p>
                        <p className='text-blue-500 text-lg font-semibold'>{acheivement.name}</p>
                    </div>
                   </a>
                ))}
            </div>
        </>

    )
}

export default Acheivements
