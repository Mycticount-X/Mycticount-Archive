// Certificate data
const certificateData = {
    cert1: {
        title: "Nvidia Deep Learning",
        issuer: "Issued by Nvidia",
        date: "February 2025",
        description: "Comprehensive course covering neural networks, convolutional networks, recurrent networks, and deep learning applications.",
        image: "./assets/nvidia.jpg",
        download: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert2: {
        title: "Microsoft Azure AI Fundamental",
        issuer: "Issued by Microsoft",
        date: "April 2025",
        description: "Fundamentals of Artificial Intelligence including machine learning concepts, AI ethics, and practical applications.",
        image: "./assets/microsoft.jpg",
        download: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert3: {
        title: "Crack The Shield Tournament",
        issuer: "Issued by CSC Binus",
        date: "June 2025",
        description: "Competed in the prestigious Capture The Flag cybersecurity tournament, demonstrating skills in penetration testing and digital forensics.",
        image: "./assets/ctf.jpg",
        download: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert4: {
        title: "PIC of Logistics",
        issuer: "Issued by DSC Binus",
        date: "October 2025",
        description: "Person in Charge certification for logistics management, covering supply chain optimization, inventory management, and distribution strategies during DSC Welcoming Party 2025.",
        image: "./assets/pic-log.jpg",
        download: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert5: {
        title: "DONGKER Certificate",
        issuer: "Issued by DSC Binus",
        date: "February 2025",
        description: "Volunteering on Delegasi Outline Program Kerja (DONGKER) DSC 2025",
        image: "./assets/dongker.jpeg",
        download: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    cert6: {
        title: "Outstanding Performance on DSC Welcoming Party",
        issuer: "Issued by DSC Binus",
        date: "October 2025",
        description: "Certificate of having Outstanding Performance on DSC Welcoming Party 2025",
        image: "./assets/dongker.jpeg",
        download: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
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