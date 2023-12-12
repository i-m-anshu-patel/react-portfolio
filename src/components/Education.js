import React from 'react'

const Education = ({institute}) => {
  return (
    <div className='p-5 m-3'>
      <p className='font-bold'>{institute.instituteName}</p>
      <p className='font-semibold'>{institute.courseName}</p>
      <p className='font-medium'>({institute.studyTime})</p>
      <p className='font-medium'>{institute.grade}</p>
    </div>
  )
}

export default Education
