import React from 'react'

function ExperienceList({ experience }) {

  return (
    <>
    <div className='flex flex-row justify-between'>
        <div>
            <h3 className='font-bold mt-2'>{experience.titleName}</h3>
            <h4 className='italic'>{experience.jobPosition}</h4>
        </div>
        <div>
            <p className='inline text-xs text-gray-800'>{experience.startingDate}, {experience.endingDate}</p>
            <p className='text-xs text-right'>{experience.address}</p>
        </div>
    </div>
        <ul className='mt-2 mx-2 list-disc'>
            {experience.descriptionList.length > 0 && experience.descriptionList.map((description)=><li className='mx-2'>{description}</li>)}
        </ul>
    </>
  )
}

export default ExperienceList
