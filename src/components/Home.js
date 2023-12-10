import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mx-8">
                <div className='mx-auto my-auto'>
                    <p className="text-4xl font-bold">Hi! I am Anshu Patel. I am a &nbsp; </p>
                    <p className="text-4xl  text-blue-500 font-extrabold">
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>

                </div>
                <div className='mt-7 ml-20'>
                    <img className="rounded-3xl w-80" src='/image.jpg' />
                </div>
            </div>
            <div className="mx-auto my-14 w-1/2">
                <Link to='/about'>
                    <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Complete Details
                    </button>
                </Link>
            </div>
        </>

    )
}

export default Home
