import React from 'react'

function Animals() {
    let animals = ['Cat', 'Dog', 'Raccoon']
  return (
    <div>
      <ul>
      {animals.map((animal) => (
        <h1>{animal}</h1>
      ))}
      </ul>
      </div>
  )
}

export default Animals