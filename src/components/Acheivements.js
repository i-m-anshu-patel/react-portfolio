import React from 'react'
import acheivements from '../utils/acheivements'

const Acheivements = () => {
    return (
        <div className='container mx-auto p-5'>
            <p className='text-2xl text-center font-bold text-blue-500'>Acheivements</p>
            {acheivements && acheivements.map((acheivement) => (
                <h1>
                    {acheivement.name}
                </h1>

            ))}
           <iframe src="https://www.hackerrank.com/certificates/iframe/de2674c57f1e"  title="Iframe Example"></iframe>
        </div>
    )
}

export default Acheivements
