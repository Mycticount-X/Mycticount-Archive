// Certificate Data
const certificateData = {
    cert1: {
        title: "Nvidia Deep Learning",
        issuer: "Issued by Nvidia",
        date: "February 2025",
        description: "Comprehensive course covering neural networks, convolutional networks, recurrent networks, and deep learning applications.",
        image: "./assets/nvidia.jpg",
        link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert2: {
        title: "Microsoft Azure AI Fundamental",
        issuer: "Issued by Microsoft",
        date: "April 2025",
        description: "Fundamentals of Artificial Intelligence including machine learning concepts, AI ethics, and practical applications.",
        image: "./assets/microsoft.jpg",
        link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert3: {
        title: "Crack The Shield Tournament",
        issuer: "Issued by CSC Binus",
        date: "June 2025",
        description: "Competed in the prestigious Capture The Flag cybersecurity tournament, demonstrating skills in penetration testing and digital forensics.",
        image: "./assets/ctf.jpg",
        link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert4: {
        title: "PIC of Logistics",
        issuer: "Issued by DSC Binus",
        date: "October 2025",
        description: "Person in Charge certification for logistics management, covering supply chain optimization, inventory management, and distribution strategies during DSC Welcoming Party 2025.",
        image: "./assets/pic-log.jpg",
        link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert5: {
        title: "DONGKER Certificate",
        issuer: "Issued by DSC Binus",
        date: "February 2025",
        description: "Volunteering on Delegasi Outline Program Kerja (DONGKER) DSC 2025",
        image: "./assets/dongker.jpeg",
        link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert6: {
        title: "Outstanding Performance on DSC Welcoming Party",
        issuer: "Issued by DSC Binus",
        date: "October 2025",
        description: "Certificate of having Outstanding Performance on DSC Welcoming Party 2025",
        image: "./assets/outstanding.png",
        link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    }
};

// Mobile Menu Toggle
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(event.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Certificate Modal
const modal = document.getElementById('certificateModal');
const viewButtons = document.querySelectorAll('.view-certificate-btn');

viewButtons.forEach(button => {
    button.addEventListener('click', function() {
        const certId = this.getAttribute('data-cert');
        openCertificateModal(certId);
    });
});

function openCertificateModal(certId) {
    const cert = certificateData[certId];
    
    if (cert) {
        document.getElementById('modalImage').src = cert.image;
        document.getElementById('modalTitle').textContent = cert.title;
        document.getElementById('modalIssuer').textContent = cert.issuer;
        document.getElementById('modalDate').textContent = cert.date;
        document.getElementById('modalDescription').textContent = cert.description;
        document.getElementById('modalLink').href = cert.link;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Typing Effect
const typingTexts = [
    'Computer Science Student',
    'Full Stack Developer',
    'Hackathon Enthusiast',
    'Event Organizer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

function type() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect
setTimeout(type, 1000);

// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileMenu();
        }
    });
});

// Active Navigation
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active', 'text-blue-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active', 'text-blue-600');
        }
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

// Scroll to Top
document.getElementById('scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Progress Bars Animation
const progressBars = document.querySelectorAll('.progress-bar');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Card Animations
const cards = document.querySelectorAll('.card-hover');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    cardObserver.observe(card);
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:mxlovers77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    this.reset();
    
    // Show success message
    alert('Opening your email client...');
});

// Set current year in footer
document.getElementById('footerYear').textContent = new Date().getFullYear();

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    }
});

// Initialize animations on load
window.addEventListener('load', function() {
    document.querySelectorAll('.fade-in-up').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});