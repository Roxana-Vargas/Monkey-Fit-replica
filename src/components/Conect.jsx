import React from 'react'
import Carousel from 'react-elastic-carousel'
import './conect.css'

const Conect = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='title-conect'>Conecta con nuestros <span>pilares</span> de bienestar</h2>
                </div>
                <div className='col-sm-12'>
                    <Carousel showArrows={false} breakPoints={[
                        { width: 1, itemsToShow: 1 },
                        { width: 550, itemsToShow: 2, itemsToScroll: 2},
                        { width: 800, itemsToShow: 3 },
                        { width: 1200, itemsToShow: 4, itemsToScroll: 2 },
                    ]} >
                        <div className='item-carousel'>
                            <img className='image-carousel' src={'https://www.monkeyfitpass.com/_nuxt/img/train.56fe10e.jpg'} alt="" />
                            <h4 className='subtitle-conect'>Entrena en casa o donde estés</h4>
                            <p className='info-conect'>Clases virtuales que se ajustan a tus objetivos y perfil</p>
                        </div>
                        <div>
                            <img className='image-carousel' src={'https://www.monkeyfitpass.com/_nuxt/img/eat.3a20c98.jpg'} alt="" />
                            <h4 className='subtitle-conect'>Recetas sencillas y saludables</h4>
                            <p className='info-conect'>Que se ajustan a tus objetivos principales</p>
                        </div>
                        <div>
                            <img className='image-carousel' src={'https://www.monkeyfitpass.com/_nuxt/img/zen.4bcd32a.jpg'} alt="" />
                            <h4 className='subtitle-conect'>Recursos de meditación y relajación</h4>
                            <p className='info-conect'>Para calmar la ansiedad, para dormir bien y más</p>
                        </div>
                        <div>
                            <img className='image-carousel' src={'https://www.monkeyfitpass.com/_nuxt/img/learn.31e33a3.jpg'} alt="" />
                            <h4 className='subtitle-conect'>Recursos de aprendizaje</h4>
                            <p className='info-conect'>Lecturas y vídeos de aprendizaje y formación wellness</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Conect
