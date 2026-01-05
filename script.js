// Portfolio JavaScript

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const skillBars = document.querySelectorAll('.skill-level');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Animate skill bars when scrolling into view
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.9;
        
        if (isInView) {
            bar.style.transition = 'width 1.5s ease';
            bar.style.width = bar.style.width;
        }
    });
};

// Initial animation for skill bars
window.addEventListener('load', animateSkillBars);
window.addEventListener('scroll', animateSkillBars);


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Floating elements animation
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 1.5}s`;
});

// Initialize skill bars width to 0 for animation
window.addEventListener('DOMContentLoaded', () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        // Set timeout to trigger animation after a short delay
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Add active class to nav links based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const highlightNavOnScroll = () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNavOnScroll);

// Typing effect for hero section (optional enhancement)
const typingEffect = () => {
    const professions = ['Data Analyst', 'Python Developer', 'Power BI Developer', 'SQL Expert'];
    const professionElement = document.querySelector('.profession-text');
    const container = document.querySelector('.profession-wrapper');
    
    // Fixed width set karein based on longest profession
    const longestProfession = professions.reduce((a, b) => a.length > b.length ? a : b);
    const tempSpan = document.createElement('span');
    tempSpan.style.fontSize = '2.5rem';
    tempSpan.style.fontWeight = '600';
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.textContent = longestProfession;
    document.body.appendChild(tempSpan);
    const maxWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);
    
    // Set fixed width
    container.style.width = maxWidth + 'px';
    container.style.minWidth = maxWidth + 'px';
    
    let currentProfession = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    const type = () => {
        const currentText = professions[currentProfession];
        
        if (isDeleting) {
            professionElement.textContent = currentText.substring(0, currentChar - 1);
            currentChar--;
        } else {
            professionElement.textContent = currentText.substring(0, currentChar + 1);
            currentChar++;
        }
        
        if (!isDeleting && currentChar === currentText.length) {
            // Pause before deleting
            isDeleting = true;
            setTimeout(type, 2000); // 2 seconds pause
        } else if (isDeleting && currentChar === 0) {
            // Move to next profession
            isDeleting = false;
            currentProfession = (currentProfession + 1) % professions.length;
            setTimeout(type, 500); // Short pause before typing next
        } else {
            // Adjust typing speed
            const speed = isDeleting ? 50 : 100;
            setTimeout(type, speed);
        }
    };
    
    // Start typing animation
    setTimeout(type, 1500); // Delay after name typing
};

// Initialize typing effect
typingEffect();



