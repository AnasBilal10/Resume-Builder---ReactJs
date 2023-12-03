import React from 'react'

function CertificationList({certificateList}) {
  return (
    <div>
      <ul>
        {
            certificateList.map((element)=><li>{element}</li>)
        }
      </ul>
    </div>
  )
}

export default CertificationList
