import React from 'react';
import '../../Static/Css/contacto.css';

export default function MainContactoComponent() {
  return (
    <>
        <section className='mainContacto'>
            <div className='contacto-left'>
                <h1>Mantengámonos en Contacto</h1>
                <br />
                <p>Hable con un miembro de nuestro equipo para programar una demostración, elegir el mejor plan para su equipo u obtener más información sobre todo lo que NoLimitSolutions tiene para ofrecer.</p>
            </div>
            <div className='contacto-right'>
                <div className='numero'>
                    <div className='contacto-number'>
                    <div className='rectangulo' />
                    <h2>Número de Contacto</h2>
                    </div>
                    <a href='https://wa.link/ss09j4' target='_blank'>+51 941778278</a>
                </div>
                <br />
                <div className='numero'>
                    <div className='contacto-number'>
                    <div className='rectangulo' />
                    <h2>Correo de Contacto</h2>
                    </div>
                    <a href='mailto:nolimitsolutionsti@gmail.com'>nolimitsolutionsti@gmail.com</a>
                </div>
            </div>
        </section>
    </>
  )
}
