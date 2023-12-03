import React, { useContext,useEffect } from 'react'
import ExperienceList from './ExperienceList'

function Experience({ experienceList }) {
    return (
        <div>
            {experienceList.length > 0 && <h3 className='text-2xl my-2'>Experience</h3>}
            {experienceList.map((experience) =><ExperienceList experience={experience} key={experience.titleName}/>)}
        </div>
    )
}

export default Experience
