import React from 'react';
import '../../Static/Css/servicios.css';
import banner from '../../Static/Images/Servicios/banner.png';
import maquetacionweb from '../../Static/Images/Servicios/maquetacionweb.png';
import diagnostico from '../../Static/Images/Servicios/diagnostico.png';
import desarrolloweb from '../../Static/Images/Servicios/desarrollo web.png';
import basededatos from '../../Static/Images/Servicios/basededatos.jpg';
import proyecto1 from '../../Static/Images/Servicios/Proyecto1.png';
import proyecto2 from '../../Static/Images/Servicios/Proyecto2.png';

export default function MainServiceComponent() {
    const whatsappclick = () => {
        window.location.replace('https://wa.link/cg7xrm');
    }
    return (
        <>
            <section className='banner'>
                <div className='banner-service'>
                    <div className='banner-service-text'>
                        <h1>¿Buscas un servicio de calidad?</h1>
                        <p>No dudes en mirar nuestras promociones</p>
                    </div>
                    <div className='banner-service-img'>
                        <img src={banner} alt="banner" />
                    </div>
                </div>
            </section>
            <br />
            <section className='services-cards'>
                <div className='cards'>
                    <div className='cat'>
                        <i class="fa-solid fa-pen-nib"></i>
                    </div>
                    <div className='img-service'>
                    <img src={maquetacionweb} alt="maquetacion web" />
                    </div>
                    <div className='description'>
                        <h2>Maquetación Web</h2>
                        <p>Proceso de planificación, conceptualización y organización de contenido de una página web</p>
                        <a href="https://wa.link/cg7xrm" target='_blank'><button>Contactanos</button></a>
                    </div>
                </div>
                <div className='cards'>
                    <div className='cat'>
                        <i class="fa-solid fa-screwdriver"></i>
                    </div>  
                    <div className='img-service'>
                    <img src={diagnostico} alt="diagnostico pc" />
                    </div>
                    <div className='description'>
                        <h2>Diagnostico de PC</h2>
                        <p>Comprobar el funcionamiento correcto de la mayoría de los componentes críticos del sistema</p>
                        <a href="https://wa.link/cg7xrm" target='_blank'><button>Contactanos</button></a>
                    </div>
                </div>
                <div className='cards'>
                    <div className='cat'>
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className='img-service'>
                    <img src={desarrolloweb} alt="desarrollo web" />
                    </div>
                    <div className='description'>
                        <h2>Desarrollo Web</h2>
                        <p>Proceso de crear y mantener un sitio web que sea funcional en internet, a través de diferentes lenguajes de programación</p>
                        <a href="https://wa.link/cg7xrm" target='_blank'><button>Contactanos</button></a>
                    </div>
                </div>
                <div className='cards'>
                    <div className='cat'>
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <div className='img-service'>
                    <img src={basededatos} alt="base de datos" />
                    </div>
                    <div className='description'>
                        <h2>Sistema de Base de Datos</h2>
                        <p>Almacenar todo tipo de datos en un solo lugar de forma ordenada.</p>
                        <a href="https://wa.link/cg7xrm" target='_blank'><button>Contactanos</button></a>
                    </div>
                </div>
            </section>
            <br />
            <section className='service-container proyecto-container'>
            <h2>Algunos de nuestros Proyectos</h2>
            <div className='services-cards proyectos-services'>
                <div className='cards cards-p'>
                    <div className='img-proyect'>
                        <img src={proyecto1} alt="NL Solutions TI" /> 
                    </div>
                        <div className='description-s'>
                            <h3>No Limit Solutions TI</h3>
                        </div>
                </div>                
                <div className='cards cards-p'>
                <div className='img-proyect'>
                        <img src={proyecto2} alt="Catalogo-Anluvet" /> 
                </div>
                        <div className='description-s'>
                            <h3>Anluvet Catalogo</h3>
                        </div>
                </div>
                <div className='cards cards-p'>
                <div className='img-proyect'>
                        <img src={proyecto1} alt="" /> 
                </div>
                        <div className='description-s'>
                            <h3>Anluvet</h3>
                        </div>
                </div>
            </div>
            </section>
        </>
    )
}
