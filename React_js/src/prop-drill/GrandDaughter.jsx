import React from 'react'
import {FamilyContext} from './FamilyContext'
import {useContext} from 'react'

function GrandDaughter() {
  const message = useContext(FamilyContext) 
  return (
    <div className='granddaughter'>
        GrandDaughter {message.familyName}</div>
  )
}

export default GrandDaughter