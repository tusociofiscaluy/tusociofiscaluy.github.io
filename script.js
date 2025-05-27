document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Considerar la altura del header fijo
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación sutil en los items de servicio al hacer scroll
    const servicioItems = document.querySelectorAll('.servicio-item');
    const animateOnScroll = () => {
        servicioItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            // Animar cuando el item está a un 80% de la altura de la ventana
            if (itemTop < windowHeight * 0.8) {
                item.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Ejecutar una vez al cargar por si algunos elementos ya son visibles
    animateOnScroll();

    // Cambiar el fondo del header al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#0A2540'; // Azul oscuro
        } else {
            header.style.backgroundColor = '#8DA07D'; // Verde oliva
        }
    });
});
