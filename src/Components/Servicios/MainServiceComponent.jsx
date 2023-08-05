import React from 'react';
import '../../Static/Css/servicios.css';
import banner from '../../Static/Images/Servicios/banner.png';
import maquetacionweb from '../../Static/Images/Servicios/maquetacionweb.png';
import diagnostico from '../../Static/Images/Servicios/diagnostico.png';

export default function MainServiceComponent() {
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
                <img src={maquetacionweb} alt="maquetacionweb" />
                <div className='description'>
                    <h2>Maquetación Web</h2>
                    <p>Proceso de planificación, conceptualización y organización de contenido de una página web</p>
                    <button>Contactanos</button>
                </div>
            </div>
            <div className='cards'>
                <div className='cat'>
                    <i class="fa-solid fa-screwdriver"></i>
                </div>
                <img src={diagnostico} alt="maquetacionweb" />
                <div className='description'>
                    <h2>Diagnostico de PC</h2>
                    <p>Comprobar el funcionamiento correcto de la mayoría de los componentes críticos del sistema</p>
                    <button>Contactanos</button>
                </div>
            </div>
            <div className='cards'>
                <div className='cat'>
                    <i className="fa-solid fa-code"></i>
                </div>
                <img src={diagnostico} alt="maquetacionweb" />
                <div className='description'>
                    <h2>Desarrollo Web</h2>
                    <p>Proceso de crear y mantener un sitio web que sea funcional en internet, a través de diferentes lenguajes de programación</p>
                    <button>Contactanos</button>
                </div>
            </div>
            <div className='cards'>
                <div className='cat'>
                    <i class="fa-solid fa-database"></i>
                </div>
                <img src={diagnostico} alt="maquetacionweb" />
                <div className='description'>
                    <h2>Sistema de Base de Datos</h2>
                    <p>Almacenar todo tipo de datos en un solo lugar de forma ordenada.</p>
                    <button>Contactanos</button>
                </div>
            </div>
        </section>
        <br />
        <section className='proyectos-services'>
            <div></div>
        </section>
    </>
  )
}
