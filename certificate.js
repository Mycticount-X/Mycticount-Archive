// Certificate data
const certificateData = {
    cert1: {
        title: "Deep Learning",
        issuer: "Issued by NVidia",
        date: "June 2023",
        description: "Comprehensive course covering neural networks, convolutional networks, recurrent networks, and deep learning applications.",
        image: "https://via.placeholder.com/800x600/3498db/ffffff?text=Deep+Learning+Certificate",
        download: "#"
    },
    cert2: {
        title: "Fundamental AI",
        issuer: "Issued by Microsoft",
        date: "March 2023",
        description: "Fundamentals of Artificial Intelligence including machine learning concepts, AI ethics, and practical applications.",
        image: "https://via.placeholder.com/800x600/2ecc71/ffffff?text=Fundamental+AI+Certificate",
        download: "#"
    },
    cert3: {
        title: "Crack The Shield Tournament",
        issuer: "Prestigious CTF tournament from CSC",
        date: "January 2024",
        description: "Competed in the prestigious Capture The Flag cybersecurity tournament, demonstrating skills in penetration testing and digital forensics.",
        image: "https://via.placeholder.com/800x600/e74c3c/ffffff?text=Crack+The+Shield+Certificate",
        download: "#"
    },
    cert4: {
        title: "PIC of Logistics",
        issuer: "Certificate of Logistic Management",
        date: "August 2023",
        description: "Person in Charge certification for logistics management, covering supply chain optimization, inventory management, and distribution strategies.",
        image: "https://via.placeholder.com/800x600/9b59b6/ffffff?text=PIC+Logistics+Certificate",
        download: "#"
    }
};

// DOM Elements
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalIssuer = document.getElementById('modalIssuer');
const modalDate = document.getElementById('modalDate');
const modalDescription = document.getElementById('modalDescription');
const downloadLink = document.getElementById('downloadLink');
const closeBtn = document.querySelector('.close-btn');

// View buttons
const viewButtons = document.querySelectorAll('.view-btn');

// Open modal when view button is clicked
viewButtons.forEach(button => {
    button.addEventListener('click', function() {
        const certId = this.getAttribute('data-certificate');
        openModal(certId);
    });
});

// Open modal function
function openModal(certId) {
    const cert = certificateData[certId];
    
    if (cert) {
        modalImage.src = cert.image;
        modalImage.alt = `${cert.title} Certificate`;
        modalTitle.textContent = cert.title;
        modalIssuer.textContent = cert.issuer;
        modalDate.textContent = cert.date;
        modalDescription.textContent = cert.description;
        downloadLink.href = cert.download;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Close modal when close button is clicked
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content
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

// Close modal function
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}