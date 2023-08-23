import React, { useState } from 'react';
import banner from '../../Static/Images/Principal/banner.png';
import '../../Static/Css/banner.css';
import anthony from '../../Static/Images/Principal/Anthony.png';
import enzo from '../../Static/Images/Principal/Enzo.png';

export default function BannerComponent() {



    const [show, setShow] = useState(false);
    
    const emailclick = () => {
        window.location.replace('mailto:nolimitsolutionsti@gmail.com');
    }

    return (
        <>


    <main>
        <section className='contenido'>
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
                    <h2>Productos Destacados</h2>
                    <div className='banner2-cards'>
                        <div className='banner2-cards-card'>
                            <div className='banner2-cards-title'>
                                <h3>Maquetación Web</h3>
                                <i class="fa-solid fa-pen-nib"></i>
                            </div>
                            <p>
                                Proceso de planificación, conceptualización y organización de contenido de una página web.
                            </p>
                        </div>
                        <div className='banner2-cards-card'>
                            <div className='banner2-cards-title'>
                                <h3>Desarrollo Web</h3>
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <p>
                                Proceso de crear y mantener un sitio web que sea funcional en internet, a través de diferentes lenguajes de programación.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='who'>
                <div className='somos'>
                    <div className='somos-quienes'>
                        <h4>¿Quienes somos?</h4>
                        <p>Somos una consultoría que brinda soluciones innovadoras a nuestros clientes. Nuestra misión no es solo resolver los desafíos actuales, sino también capacitar y empoderar a futuros programadores mediante formación especializada. Juntos, creamos un camino hacia el éxito tecnológico para empresas y profesionales en constante evolución.</p>
                    </div>
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
                    </div>
                </div>
            </section>
            <section className='escribenos-container-section'>
                <div className='main-escribenos'>
                    <h3>¿Buscas asesoría para impulsar tu negocio o empresa?</h3>
                    <br />
                    <button className='boton-escribe' onClick={() => { setShow(!show); }}>Escribenos</button>
                    <br />
                    <div className='boton-doble' id={show ? "show-element" : null}>
                        {show &&
                            <a target='_blank' href='https://wa.link/7listk'><button> <i class="fa-brands fa-whatsapp"></i> Whatsapp</button></a>}
                        {show && <a target='_blank'><button onClick={emailclick} > <i class="fa-solid fa-envelope"></i> Email</button></a>}
                    </div>
                </div>
            </section>
        </section>
    </main>


        </>
    )
}
