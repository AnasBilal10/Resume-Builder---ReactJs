import Education from './Education/Education';
import Experience from './Experience/Experience';
import './Main.scss';
import React, { useContext } from 'react'
import Skills from './Skills/Skills';
import Certification from './Cerfications/Certification';
import { ResumeModelStateContext } from '../../contextAPIs/StateContext';

function Main() {

    const resumeModel = useContext(ResumeModelStateContext);

  return (
    <div>
        <Experience experienceList={resumeModel?.bodyModel.experienceList}/>
        <Education educationList={resumeModel?.bodyModel.educationList} />
        <Skills skillsList={resumeModel?.bodyModel.skillsList} />
        <Certification certificationList={resumeModel?.bodyModel.certificationList} />
    </div>
  )
}

export default Main
