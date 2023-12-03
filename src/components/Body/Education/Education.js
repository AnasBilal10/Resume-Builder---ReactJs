import React from 'react'
import EducationList from './EducationList'

function Education({educationList}) {
  return (
    <div>
        {educationList.length > 0 && <h3 className='text-2xl my-2'>Education</h3>}
        {educationList.map((education)=><EducationList education={education}/>)}
    </div>
  )
}

export default Education
