import React from 'react';
import '../Static/Css/header.css';
import '@fortawesome/fontawesome-free/css/all.css';
import $ from 'jquery';
import Headroom from 'headroom.js';
import logo from '../Static/Images/logof.png';
import { Link }from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


export default function HeaderComponent() {

    useEffect(() => {
        // Inicializar ScrollReveal
        ScrollReveal().reveal('.menu', {
            duration:800,
            origin: 'bottom',
            distance: '-100px'
        })}
        );

    $(function () {
        var header = document.getElementById('header');
        var headroom = new Headroom(header);
        headroom.init();
        //Menú Responsive
        // Calculamos el ancho e la página

        var ancho = $(window).width(),
            links = $('#enlaces'),
            btnMenu = $('#btn-menu'),
            icono = $('#btn-menu .icono-menu');

        if (ancho < 1179) {
            links.hide(); // el hide sirve para esconder los elementos
            icono.addClass('fa-bars');
        }

        btnMenu.on('click', function (e) {
            links.slideToggle(); //jQuery dispone de una función que nos permite mostrar u ocultar contenido con efecto slide con la lógica de que si el contenedor no está visible se muestra con slideDown y si está visible se oculta con slideUp. Se trata de la función slideToggle().
            icono.toggleClass('fa-bars'); //permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.
            icono.toggleClass('fa-times');

        });

        $(window).on('resize', function () {
            if ($(this).width() > 650 && $(this).height() > 1 ) {
                links.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            } else {
                links.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }

        });
    });
    
    return (
        <>
{/*         <Routes>
            <Route exact path={configPath.HOME} element={<PrincipalComponent />}>
                <Route exact index element={<PrincipalComponent />} />
                <Route exact path={configPath.SERVICES} element={<ServiciosComponent />} />
                
                <Route exact path ="*" element={<Navigate to={configPath.HOME} />} />
            </Route>
        </Routes> */}
            <header id="header">
                <nav class="menu">
                    <div class="logo">
                        <Link to="/NoLimitSolutionsTI">
                            <img src={logo} alt="" class="logoimg" />
                        </Link> <p>NL Solutions TI</p>
                        <button href="" class="btn-menu" id="btn-menu" >
                            <i class="icono-menu fa fa-bars"></i>
                        </button>
                    </div>
                    <div class="enlaces" id="enlaces">
                        <Link id="link" to="/NoLimitSolutionsTI">Inicio</Link>
                        <Link id="link" to="/servicios">Servicios</Link>
                        <Link id="link" to="/nosotros">Nosotros</Link>
                        <Link id="link" to="/contacto">Contáctanos</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}
