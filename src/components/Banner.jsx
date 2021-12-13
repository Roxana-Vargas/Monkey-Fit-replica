import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <div className='info-banner'>
            <h1 className='title-banner'>Incluso en <span className='fw-bold'>casa</span> experimenta el fitness y el bienestar </h1>
            <p className='text-banner'>Con clases en vivo, más de 350 clases virtuales a demanda, audios de meditación y mindfulness todos los días, talleres de nutrición, recetas sencillas y saludables.</p>
            <button className='btn btn-start'>Empieza ahora</button>
        </div>
    )
}

export default Banner
