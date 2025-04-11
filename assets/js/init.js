document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Obtener altura de la ventana
    var winH = window.innerHeight;
    
    // Establecer altura del header
    var header = document.querySelector('header');
    if (header) {
        header.style.height = winH + 'px';
        
        // Centrar el contenido del header verticalmente
        var headerDiv = header.querySelector('.container > div');
        if (headerDiv) {
            var divHeight = headerDiv.offsetHeight;
            headerDiv.style.position = 'relative';
            headerDiv.style.top = ((winH / 2) - (divHeight / 2)) + 'px';
        }
    }
    
    // Manejar el click en el botón de búsqueda
    var searchLinks = document.querySelectorAll('.navbar a.search, .navbar ul li a.search');
    searchLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var navbarForm = document.querySelector('.navbar form');
            if (navbarForm) {
                // Alternar la visualización del formulario
                if (navbarForm.style.display === 'none' || !navbarForm.style.display) {
                    navbarForm.style.display = 'block';
                    navbarForm.style.opacity = '1';
                } else {
                    navbarForm.style.display = 'none';
                    navbarForm.style.opacity = '0';
                }
            }
        });
    });
    
    // Manejar el scroll suave para los enlaces del navbar
    var navLinks = document.querySelectorAll('.navbar ul.navbar-nav li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var getAttr = link.getAttribute('href');
            if (getAttr && getAttr.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(getAttr);
                if (target) {
                    // Scroll suave
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});