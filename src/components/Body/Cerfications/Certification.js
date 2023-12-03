import React, { useState } from 'react'
import CertificationList from './CertificationList'

function Certification() {

const [certificateList, setCertificationList] = useState(['Angular Basic (Hacker Rank)', 'JavaScript Basic Hacker Rank'])
  return (
    <div>
       {certificateList.length > 0 && <h3 className='text-2xl my-2'>Certification</h3>}
       <CertificationList certificateList={certificateList} />
    </div>
  )
}

export default Certification
