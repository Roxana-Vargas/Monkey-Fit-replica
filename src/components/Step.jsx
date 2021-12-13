import React from 'react'
import './step.css'

const Step = () => {
    return (
        <div  className='container'>
           <div className='row'>
                <div className="col-sm-12">
                    <h2 className='title-step'>Comenzar con MonkeyFit es <span>rápido</span> y <span>fácil</span></h2>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className='info-step'>
                        <div className='card-step'>
                            <h4 className='number-step'>1</h4>
                            <div className='container-text-step' >
                                <p className='text-step'>Descarga la app en Google Play o App Store </p>
                            </div>
                        </div>
                        <div className='card-step'>
                            <h4 className='number-step'>2</h4>
                            <div className='container-text-step'>
                                <p className='text-step'>Cree una cuenta gratuita con su correo electrónico laboral o identificación de empleado </p>
                            </div>
                        </div>
                        <div className='card-step'>
                            <h4 className='number-step'>3</h4>
                            <div className='container-text-step'>
                                <p className='text-step'>Empieza a comer saludable, meditar y hacer ejercicio desde la plataforma  </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=com.monkeyfitpass.monkyappv&amp;hl=es&amp;gl=US" target="_blank" className="d-flex justify-content-center" rel="noreferrer"><img src={"https://www.monkeyfitpass.com/_nuxt/img/google.ac3d4b7.png"} className="logo-download" alt='Google Play' /></a>
                        </div>
                        <div>
                            <a href="https://apps.apple.com/us/app/monkeyfit/id1537263182" target="_blank" className="d-flex justify-content-center" rel="noreferrer"><img src={"https://www.monkeyfitpass.com/_nuxt/img/apple.f79e4fa.png"} alt='App Store' className="logo-download" /></a>
                        </div>
                    </div>                   
                </div>  
                <div className="col-xs-12 col-md-6">
                    <div className='d-flex justify-content-center mt-5'>
                        <img src={'https://www.monkeyfitpass.com/_nuxt/img/start-monkeyfit.c32c750.svg'} alt="Empezar en Monkey" className='girl-step' />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Step
