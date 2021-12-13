import React from 'react'
import './comments.css'

const Comments = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='title-comments'>Lo que dice la comunidad <span>MonkeyFit</span></h2>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='card-comment'>
                        <p className='description-comment'>Con MonkeyFit puedo experimentar distintas disciplinas sin tener que esperar mucho tiempo. ¡Ahora, puedo entrenar desde donde esté!</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='image-user' src={'https://www.monkeyfitpass.com/_nuxt/img/mauricio.bf76b04.jpg'} alt="Mauricio Vásquez" />
                            <h4 className='name-user'>Mauricio Vásquez</h4>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='card-comment'>
                        <p className='description-comment'>Con MonkeyFit tengo un seguimiento, ellos buscan que no deje de estar activo. La motivación parte de romper la rutina , ahora no solo entreno, sino tengo ayuda para comer saludable y para estar mucho más calmado</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='image-user' src={'https://www.monkeyfitpass.com/_nuxt/img/david.b9e3e4b.jpg'} alt="David Laurent" />
                            <h4 className='name-user'>David Laurent</h4>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='card-comment'>
                        <p className='description-comment'>Tener todo en un solo espacio ayuda muchísimo, sobretodo motivacionalmente.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='image-user' src={'https://www.monkeyfitpass.com/_nuxt/img/pamela.01d0440.jpg'} alt="Pamela Soto" />
                            <h4 className='name-user'>Pamela Soto</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
