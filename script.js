// Particles.js Config
particlesJS("particles-js", {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ["#ff003c", "#00ff66", "#ffffff"] },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

// Sticky Navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Parallax Hero
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const heroBg = document.querySelector('.hero-bg');
    if(heroBg) {
        // Move background up slower than scroll
        heroBg.style.transform = `translateY(${scrollPos * 0.4}px) scale(1.1)`;
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinksItems = document.querySelectorAll('.nav-menu a');

// We insert basic FontAwesome swap for mobile menu icon
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle icon between bars and times
    const icon = mobileMenuBtn.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Active Link highlighting during scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// Animated Counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            // Remove commans if any
            let currentStr = counter.innerText.replace(/,/g, '');
            const count = +currentStr || 0;

            const inc = target / speed;

            if (count < target) {
                // Add commas to number formatting
                counter.innerText = Math.ceil(count + inc).toLocaleString();
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        // Initialize when in view
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                updateCount();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}


// Scroll Reveal Animation (Slide Up, Left, Right)
function reveal() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
// Trigger once on load
reveal();
setTimeout(animateCounters, 500); // Small delay to ensure render


// Back to top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Cookie Consent
const cookieConsent = document.getElementById('cookieConsent');
const acceptCookies = document.getElementById('acceptCookies');

// Check local storage
if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 2000);
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.classList.remove('show');
});


// Language Toggle (Visual mock)
const langToggle = document.getElementById('lang-toggle');
let isEnglish = true;
langToggle.addEventListener('click', () => {
    isEnglish = !isEnglish;
    if(isEnglish) {
        langToggle.innerText = 'EN / SI';
        // Mock translate
        document.querySelector('.hero .subtitle').innerHTML = `Sri Lanka's #1 Hip-Hop Voice | <span class="counter" data-target="513000">513,000</span>+ YouTube Subs | <span class="counter" data-target="171000">171,000</span>+ Spotify Monthly Listeners | Fastest SL Hip-Hop Video to 1M Views (KUDDAH)`;
    } else {
        langToggle.innerText = 'SI / EN';
        // Mock Sinhala text update (placeholder)
        document.querySelector('.hero .subtitle').innerHTML = `ශ්‍රී ලංකාවේ අංක 1 හිප් හොප් හඬ | <span class="counter" data-target="513000">513,000</span>+ YouTube Subs | <span class="counter" data-target="171000">171,000</span>+ Spotify Monthly Listeners`;
    }
});
