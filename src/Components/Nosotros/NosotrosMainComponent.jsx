import React from 'react';
import '../../Static/Css/nosotros.css';
import avatar from '../../Static/Images/Nosotros/avatar.png';
import bannernostros from '../../Static/Images/Nosotros/banner-nosotros.png';
import imgmv from '../../Static/Images/Nosotros/nosotros-mv.png';
import valores1 from '../../Static/Images/Nosotros/valores1.png';
import valores2 from '../../Static/Images/Nosotros/valores2.png';
import valores3 from '../../Static/Images/Nosotros/valores3.png';
import valores4 from '../../Static/Images/Nosotros/valores4.png';
import anthony from '../../Static/Images/Principal/Anthony.png';
import enzo from '../../Static/Images/Principal/Enzo.png';

export default function NosotrosMainComponent() {
    return (
        <>

        <main>
            <section className='contenido'>
                <section className='bannern'>
                        <div className='banner-nostros-texto'>
                            <h1>¿Tiene interés en conocernos?</h1>
                            <p>Nos complace compartir nuestros objetivos y la pasión que impulsó nuestra trayectoria en la industria de la consultoría de software</p>
                        </div>
                        <div className='banner-nosotros-img'>
                            <img src={bannernostros} alt="nostros" />
                        </div>
                </section>
                
                <section className='nosotros-anuncio-container'>
                    <div className='nosotros-anuncio'>
                        <div className='text-anuncio'>
                            <p>
                                <span className='text-green'>No Limit Solutions TI</span> es una consultoría que busca brindar soluciones <span className='text-green'>innovadoras </span>a nuestros clientes.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='nosotros-pregunta'>
                        <h2>¿Por qué elegir NoLimitSolutionsTI?</h2>
                        <br />
                        <p>Creemos que cada desafío presenta una oportunidad de crecimiento y aprendizaje. Nos apasiona encontrar soluciones a problemas complejos y estamos comprometidos con mantenernos actualizados en las últimas tendencias tecnológicas. Nuestro enfoque personalizado nos permite adaptarnos a las necesidades específicas de cada cliente y garantizar resultados sobresalientes.</p>
                    </div>
                </section>

                <section>
                    <div className='mision-vision-container'>
                        <div className='mision-vision-img'>
                        <img src={imgmv} alt="prueba" />
                            </div>
                        <div className='mision-vision-div'>
                            <div className='mision'>
                                <h3>Misión</h3>
                                <div>
                                    <p>Ser una consultoría líder en dar soluciones innovadoras orientadas a la era digital. Resolver los desafíos actuales de manera eficiente y efectiva, mientras capacitamos y empoderamos a futuros programadores a través de una formación espeScializada. Trabajamos en colaboración con nuestros clientes para construir un camino hacia el éxito tecnológico, impulsando el crecimiento y la evolución constante de empresas y profesionales en el ámbito tecnológico.</p>
                                </div>
                            </div>
                             <div className='vision'>
                                <h3>Visión</h3>
                                <div>
                                    <p> Aspiramos a transformar la industria a través de la innovación. Buscamos ser reconocidos por nuestro enfoque hacia el futuro y nuestra capacidad para resolver los desafíos emergentes. Así forjar un futuro en el que, las empresas y negocios, encuentren soluciones eficientes y sostenibles para sus necesidades tecnológicas, mientras inspiramos y capacitamos a una nueva generación de programadores que lideren el cambio en el mundo tecnológico. A través de nuestra dedicación y compromiso, nos esforzamos por crear un impacto positivo en la sociedad y contribuir al desarrollo tecnológico global.</p>
                                </div>
                            </div>   
                            </div>
                            
                        </div>
                </section>

                <section className='valores'>
                    <h2>Nuestros Valores</h2>
                    <div className='valores-container'>
                        <div className='valores-div'>
                            <div className='valores-container-img'>
                                <img src={valores1} alt="valores" />
                            </div>
                            <h3>Innovación</h3>
                        </div>
                        <div className='valores-div'>
                            <div className='valores-container-img'>
                                <img src={valores2} alt="valores" />
                            </div>
                            <h3>Compromiso</h3>
                        </div>
                        <div className='valores-div'>
                            <div className='valores-container-img'>
                                <img src={valores3} alt="valores" />
                            </div>
                            <h3>Competitividad</h3>
                        </div >
                        <div className='valores-div'>
                            <div className='valores-container-img'>
                                <img src={valores4} alt="valores" />
                            </div>
                            <h3>Excelencia</h3>
                        </div>
                    </div>
                </section>

                <section className='nosotros-equipo'>
                    <div className='equipo-container'>
                        <div className='equipo-container-text'>
                            <h2>Nuestro Equipo</h2>
                        </div>
                        <div className='equipo-fotos-container'>
                            <div className='equipo-fotos'>
                                <img src={anthony} alt="Anthony Lecarnaque" />
                                <div className='equipo-fotos-datos'>
                                    <div>
                                        <h4>Anthony Lecarnaque</h4>
                                        <p>Development</p>
                                    </div>
                                    <a href="https://www.linkedin.com/in/anthonylecarnaque/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className='equipo-fotos'>
                                <img src={enzo} alt="Enzo Martinez" />
                                <div className='equipo-fotos-datos'>
                                    <div>
                                        <h4>Enzo Martinez</h4>
                                        <p>Development</p>
                                    </div>
                                    <a href="https://www.linkedin.com/in/enzomartinez24/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className='equipo-fotos'>
                                <img src={avatar} alt="avatar" />
                                <div className='equipo-fotos-datos'>
                                    <div>
                                        <h4>Isabel Ortiz</h4>
                                        <p>Scrum Master</p>
                                    </div>
                                    <a href="" target='_blank'><i class="fa-brands fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
        </>
    )
}
