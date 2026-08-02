import React from 'react'
import {FamilyContext} from './FamilyContext'
import {useContext} from 'react'

function GrandSon() {
  const message = useContext(FamilyContext)
  return (
    <div className='grandson'>
        GrandSon {message.familyName}
        </div>
  )
}

export default GrandSon