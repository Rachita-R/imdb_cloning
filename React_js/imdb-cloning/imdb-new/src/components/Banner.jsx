import React from 'react'
import avengers from '../avengers.webp'
function Banner() {
    return (
        <div 
        className="h-[20vh] md:h-[90vh] bg-cover bg-center flex items-end" 
        style={{ backgroundImage: `url(${avengers})` }}>
        <div className="text-white text-1xl w-full text-center p-2 bg-gray-700 p-1">Avengers: Doomsday</div>
        </div>
    )
}

export default Banner