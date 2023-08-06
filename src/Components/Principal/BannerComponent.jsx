import React, { useState } from 'react';
import banner from '../../Static/Images/Principal/banner.png';
import '../../Static/Css/banner.css';
import coding from '../../Static/Images/Principal/coding.png';
import anthony from '../../Static/Images/Principal/Anthony.png';
import enzo from '../../Static/Images/Principal/Enzo.png';

export default function BannerComponent() {

    const [show, setShow] = useState(false);

    const whatsappclick = () => {
        window.location.replace('https://wa.link/cg7xrm');
    }
    const emailclick = () => {
        window.location.replace('mailto:nolimitsolutionsti@gmail.com');
    }

  return (
    <>
        <section>
            <div className='bannerPrincipal'>
                <div className='banner-img'>
                <img src={banner} alt="bannerNLSTI" />
                </div>
                <div className='banner-text'>
                    <h1>Abraza la transformación digital</h1>
                    <p>Convierte tu sueño en una realidad con nuestra experiencia en consultoria de software.</p>
                </div>
            </div>
        </section>
        <section className='bannerSecundario'>
            <div className='banner2'>
                <img src={coding} alt="coding" />
                <div className='banner2-div'>
                    <h2>TECNOLOGIA AL ALCANCE DE TU MANO</h2>
                    <p>Lleva a tu empresa o negocio al futuro tecnológico</p>
                </div>
            </div>
        </section>
        <section>
            <div className='somos'>
                <div className='somos-div'>
                    <div className='somos-border'>
                        <img src={anthony} alt="Anthony Lecarnaque" />
                        <div className='somos-nosotros'>
                            <h4>Anthony Lecarnaque</h4>
                            <p>CEO & Co-Founder</p>
                        </div>
                    </div>
                    <div className='somos-border'>
                        <img src={enzo} alt="Enzo Martinez" />
                        <div className='somos-nosotros'>
                            <h4>Enzo Martinez</h4>
                            <p>CEO & Co-Founder</p>
                        </div>
                    </div>
                    <div className='somos-quienes'>
                        <h4>¿Quienes somos?</h4>
                        <br />
                        <p>Somos una consultoría que brinda soluciones innovadoras a nuestros clientes. Nuestra misión no es solo resolver los desafíos actuales, sino también capacitar y empoderar a futuros programadores mediante formación especializada. Juntos, creamos un camino hacia el éxito tecnológico para empresas y profesionales en constante evolución.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='main-escribenos'>
                <h3>¿Buscas asesoría para impulsar tu negocio o empresa?</h3>
                <br />
                <button className='boton-escribe' onClick={() =>{setShow(!show);}}>Escribenos</button>
                <br />
                <div className='boton-doble' id={show ? "show-element" : null}>
                    {show && 
                    <button onClick={whatsappclick}>Whatsapp</button>}
                    {show && <button onClick={emailclick}>Email</button>}
                </div>
            </div>
        </section>
    </>
  )
}
