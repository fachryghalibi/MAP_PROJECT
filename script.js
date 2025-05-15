const literacyPlaces = [
    {
        id: 1,
        name: "Könyv / AI & Sons",
        description: "Toko buku dengan konsep kafe yang nyaman untuk membaca dan berdiskusi",
        positionX: 13,
        positionY: 21
    },
    {
        id: 2,
        name: "Nimna Bookcafe",
        description: "Kafe buku dengan koleksi bacaan beragam dan kopi yang nikmat",
        positionX: 33,
        positionY: 19
    },
    {
        id: 3,
        name: "Kineruku",
        description: "Tempat alternatif untuk membaca, nonton film, dan berkesenian",
        positionX: 44,
        positionY: 25
    },
    {
        id: 4,
        name: "Temu Roti",
        description: "Bakery & kafe dengan sudut baca yang cozy",
        positionX: 52,
        positionY: 32
    },
    {
        id: 5,
        name: "Rumah Baca Cibeunyingy",
        description: "Perpustakaan komunitas yang terletak di kawasan Bandung Utara",
        positionX: 60,
        positionY: 22
    },
    {
        id: 6,
        name: "The Room 19",
        description: "Ruang diskusi dan membaca yang didesain khusus untuk pelajar",
        positionX: 42,
        positionY: 41
    },
    {
        id: 7,
        name: "Salman Reading Corner",
        description: "Pojok baca di Masjid Salman ITB dengan suasana akademik",
        positionX: 37,
        positionY: 37
    },
    {
        id: 8,
        name: "RUBAMA",
        description: "Rumah Baca Masyarakat yang menyediakan berbagai koleksi buku",
        positionX: 50,
        positionY: 42
    },
    {
        id: 9,
        name: "Pustakalana",
        description: "Perpustakaan anak yang menyediakan buku-buku berkualitas untuk anak",
        positionX: 59,
        positionY: 46
    },
    {
        id: 10,
        name: "Rumah Baca Taman Sekar",
        description: "Perpustakaan komunitas dengan taman yang asri",
        positionX: 68,
        positionY: 46
    },
    {
        id: 11,
        name: "Embun Taman Bacaan",
        description: "Taman bacaan dengan koleksi buku fiksi dan non-fiksi",
        positionX: 53,
        positionY: 49
    },
    {
        id: 12,
        name: "Taman Bacaan Hendra",
        description: "Taman bacaan komunitas dengan kegiatan literasi rutin",
        positionX: 57,
        positionY: 51
    },
    {
        id: 13,
        name: "Pitimoss Fun Library",
        description: "Perpustakaan anak dengan konsep bermain sambil belajar",
        positionX: 45,
        positionY: 52
    },
    {
        id: 14,
        name: "Toko Buku Pelagia",
        description: "Toko buku independen dengan koleksi buku langka",
        positionX: 41,
        positionY: 54
    },
    {
        id: 15,
        name: "Kedai Jante - Toko Buku Bandung",
        description: "Kedai kopi yang menjual berbagai koleksi buku",
        positionX: 60,
        positionY: 54
    },
    {
        id: 16,
        name: "Indeks",
        description: "Ruang diskusi dan perpustakaan untuk karya-karya akademik",
        positionX: 49,
        positionY: 56
    },
    {
        id: 17,
        name: "TBM Minda Smart",
        description: "Taman Bacaan Masyarakat dengan program literasi digital",
        positionX: 55,
        positionY: 56
    },
    {
        id: 18,
        name: "Dr. Long Book",
        description: "Perpustakaan dengan koleksi buku-buku kedokteran dan kesehatan",
        positionX: 51,
        positionY: 64
    },
    {
        id: 19,
        name: "Perpustakaan Bunga di Tembok",
        description: "Perpustakaan seni dengan desain interior yang artistik",
        positionX: 60,
        positionY: 72
    },
    {
        id: 20,
        name: "Taman Baca Masyarakat",
        description: "Taman bacaan yang dikelola oleh dan untuk masyarakat",
        positionX: 25,
        positionY: 80
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map');
    
    map.style.backgroundImage = "url('https://source.unsplash.com/random/1200x600/?bandung,map')";
    
    literacyPlaces.forEach(place => {
        const marker = document.createElement('div');
        marker.className = 'map-marker';
        marker.textContent = place.id;
        marker.style.left = `${place.positionX}%`;
        marker.style.top = `${place.positionY}%`;
        
        marker.setAttribute('title', place.name);
        
        marker.addEventListener('click', () => {
            const placeElement = document.getElementById(`place-${place.id}`);
            if (placeElement) {
                placeElement.scrollIntoView({ behavior: 'smooth' });
                placeElement.classList.add('highlight');
                setTimeout(() => {
                    placeElement.classList.remove('highlight');
                }, 2000);
            }
        });
        
        map.appendChild(marker);
    });
    
    const placeGrid = document.querySelector('.place-grid');
    
    literacyPlaces.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.className = 'place-card';
        placeCard.id = `place-${place.id}`;
        
        const imageIndex = Math.floor(Math.random() * 10) + 1;
        
        placeCard.innerHTML = `
            <div class="place-image" style="background-image: url('https://source.unsplash.com/random/300x200/?library,book,${imageIndex}')"></div>
            <div class="place-info">
                <h3><span class="place-number">${place.id}</span>${place.name}</h3>
                <p>${place.description}</p>
            </div>
        `;
        
        placeGrid.appendChild(placeCard);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 5%';
        } else {
            header.style.padding = '1rem 5%';
        }
    });
    
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.place-card, .about-content, .map-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

function highlightPlace(id) {
    const placeElement = document.getElementById(`place-${id}`);
    if (placeElement) {
        placeElement.scrollIntoView({ behavior: 'smooth' });
        placeElement.classList.add('highlight');
        setTimeout(() => {
            placeElement.classList.remove('highlight');
        }, 2000);
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}