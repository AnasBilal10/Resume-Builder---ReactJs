import React from 'react'

function EducationList({education}) {
  return (
    <>
    <div className='flex flex-row justify-between'>
        <div>
            <h3 className='font-bold'>{education.degree}</h3>
            <h4 className='italic'>{education.name}</h4>
            <h4>{education.score}</h4>
        </div>
        <div>
            <p className='inline text-xs text-gray-800'>{education.startingDate}, {education.endingDate}</p>
            <p className='text-xs text-right'>{education.address}</p>
        </div>
    </div>
       
    </>
  )
}

export default EducationList
