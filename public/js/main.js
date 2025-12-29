// ========================================
// Mobile Navigation Toggle
// ========================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');

    // Burger Animation
    burger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

function setActiveNav() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ========================================
// Header Background Change on Scroll
// ========================================
const header = document.querySelector('header');

function handleScroll() {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
}

window.addEventListener('scroll', handleScroll);

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.about, .skills, .works, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !message) {
            alert('すべての項目を入力してください。');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('有効なメールアドレスを入力してください。');
            return;
        }

        // Show success message (temporary)
        alert('お問い合わせありがとうございます。\\n現在フォーム機能は準備中です。\\n直接 toshimichi19990121@gmail.com までご連絡ください。');

        // Reset form
        contactForm.reset();

        // In the future, you can add Firebase Functions or another backend service here
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, message })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('メッセージが送信されました！');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     alert('エラーが発生しました。もう一度お試しください。');
        // });
    });
}

// ========================================
// Typing Effect for Hero Title (Optional Enhancement)
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 100);
//     }
// });

// ========================================
// Parallax Effect for Hero Section (Optional)
// ========================================
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}

// Uncomment to enable parallax effect
// window.addEventListener('scroll', parallaxEffect);

// ========================================
// Skills Progress Animation (Future Enhancement)
// ========================================
// You can add skill progress bars and animate them on scroll
// Example structure:
// <div class="skill-bar">
//     <div class="skill-progress" data-progress="90"></div>
// </div>

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease';
            bar.style.width = progress + '%';
        }, 100);
    });
}

// Uncomment to enable skill bar animation
// const skillsSection = document.querySelector('.skills');
// if (skillsSection) {
//     const skillsObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animateSkillBars();
//                 skillsObserver.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.5 });
//
//     skillsObserver.observe(skillsSection);
// }

// ========================================
// External Links - Open in New Tab
// ========================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.getAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ========================================
// Dark Mode Toggle (Future Enhancement)
// ========================================
// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     const isDarkMode = document.body.classList.contains('dark-mode');
//     localStorage.setItem('darkMode', isDarkMode);
// }

// Load dark mode preference
// window.addEventListener('load', () => {
//     const darkMode = localStorage.getItem('darkMode');
//     if (darkMode === 'true') {
//         document.body.classList.add('dark-mode');
//     }
// });

// ========================================
// Console Log - Easter Egg
// ========================================
console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #007bff; font-weight: bold;');
console.log('%cWelcome to my portfolio site.', 'font-size: 14px; color: #666;');
console.log('%cBuilt with ❤️ using Firebase Hosting', 'font-size: 12px; color: #999;');

// ========================================
// Performance Monitoring (Optional)
// ========================================
if ('PerformanceObserver' in window) {
    // Monitor Long Tasks
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // You can send this data to analytics
            console.log('Long task detected:', entry);
        }
    });

    // Uncomment to enable performance monitoring
    // observer.observe({ entryTypes: ['longtask'] });
}

// ========================================
// Initialize on DOM Content Loaded
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio site loaded successfully!');

    // Add any initialization code here
    setActiveNav();
});
