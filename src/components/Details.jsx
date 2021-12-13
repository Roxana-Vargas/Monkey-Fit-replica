import React from 'react'
import './details.css'

const Details = () => {
    return (
        <div className='container details'>
            <h2 className='title-details'>Una plataforma que te ayuda a <span>mantenerte activo</span> y <span>saludable</span> estés donde estés</h2>
            <div  className='container-details'>
                <div className='container-image-details'>
                    <img src={'https://www.monkeyfitpass.com/_nuxt/img/hero-two.9c54df0.svg'} alt="Entrena en casa" />
                    <button className='btn btn-start-now'>Empieza ahora</button>
                </div>
                <div className='container-cards'>
                    <div className='card-detail d-flex justify-content-evenly align-items-center'>
                        <div className='image-detail'>
                            <img src={'https://www.monkeyfitpass.com/_nuxt/img/video.3866e95.svg'} alt="" />
                        </div>
                        <div className='container-text-detail'>
                            <p className='text-detail'>Clases grabadas y en vivo de tus entrenadores favoritos</p>    
                        </div>
                    </div>
                    <div className='card-detail d-flex justify-content-evenly align-items-center'>
                        <div className='image-detail'>
                            <img src={'https://www.monkeyfitpass.com/_nuxt/img/pass.efd1dcc.svg'} alt="" />
                        </div>
                        <div className='container-text-detail'>
                            <p className='text-detail'>Membresía mensual asumidad por tu empresa</p> 
                        </div>
                    </div>
                    <div className='card-detail d-flex justify-content-evenly align-items-center'>
                        <div className='image-detail'>
                            <img src={'https://www.monkeyfitpass.com/_nuxt/img/person.6dc9a84.svg'} alt="" />
                        </div>
                        <div className='container-text-detail'>
                            <p className='text-detail'>Gratis para ti y 70% de descuento para tus familiares</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
