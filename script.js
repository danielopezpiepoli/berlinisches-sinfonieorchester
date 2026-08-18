// =========================================
// 1. DICCIONARIO DE IDIOMAS (I18N)
// =========================================
const content = {
    de: {
        home: "Startseite",
        about: "Über uns",
        project: "Das Projekt",
        musicians: "Musiker",
        director: "Musikdirektor",
        board: "Künstlerischer Beirat",
        calendar: "Kalender",
        upcoming: "Kommende Konzerte",
        past: "Vergangene Konzerte",
        gallery: "Galerie",
        audios: "Audio",
        videos: "Videos",
        photos: "Fotos",
        support: "Unterstützen",
        partners: "Partnerschaften",
        membership: "Vision Fördern",
        contact: "Kontakt",
        hero: "Der neue Klang Berlins."
    },
    en: {
        home: "Home",
        about: "About us",
        project: "The project",
        musicians: "Musicians",
        director: "Music Director",
        board: "Artistic Board",
        calendar: "Calendar",
        upcoming: "Upcoming events",
        past: "Past concerts",
        gallery: "Gallery",
        audios: "Audios",
        videos: "Videos",
        photos: "Photos",
        support: "Support us",
        partners: "Partnerships",
        membership: "Support the Vision",
        contact: "Contact",
        hero: "The New Sound of Berlin."
    }
};

// =========================================
// 2. ÍNDICE DE CONTENIDOS PARA BÚSQUEDA
// =========================================
const siteSearchIndex = [
    // --- PROGRAMACIÓN Y CONCIERTOS ---
    { 
        title: "Beethoven: Symphony No. 3 'Eroica'", 
        category: "Concert", 
        url: "program.html?event=1", 
        keywords: "eroica beethoven season 2026 konzerthaus tickets sinfonie konzert" 
    },
    { 
        title: "Mendelssohn: 'Scottish' Symphony No. 3", 
        category: "Concert", 
        url: "program.html?event=2", 
        keywords: "mendelssohn scottish schottische philharmonie romantic tickets" 
    },
    { 
        title: "The Sound of Cinema: Hollywood in Berlin", 
        category: "Special Gala", 
        url: "program.html?event=3", 
        keywords: "hollywood cinema movie film filmmusik gala admiralspalast tickets soundtrack" 
    },
    { 
        title: "Season 2026 Full Program & Repertoire", 
        category: "Calendar", 
        url: "program.html", 
        keywords: "season 2026 calendar repertoire events saison konzerte termine kalender tickets" 
    },
    { 
        title: "Past Concerts & Archives", 
        category: "Calendar", 
        url: "past-concerts.html", 
        keywords: "past concerts archive highlights lustgarten flashmob bode-museum vergangen rückblick" 
    },

    // --- PROYECTO, MISIÓN Y DIRECCIÓN ---
    { 
        title: "The Project & Mission", 
        category: "About us", 
        url: "project.html", 
        keywords: "project mission sistema el sistema history pillars integration education leitbild geschichte über uns" 
    },
    { 
        title: "Music Director: Daniel López Piepoli", 
        category: "Artistic Leadership", 
        url: "director.html", 
        keywords: "daniel lopez piepoli director music director conductor dirigent biography biografie künstlerische leitung founder" 
    },
    { 
        title: "Artistic Board & Team", 
        category: "Governance", 
        url: "board.html", 
        keywords: "board team stella karalis gabriela gonzalez ebru algul isabel barciela vorstand beirat leitung" 
    },
    { 
        title: "Orchestral Musicians & Roster", 
        category: "About us", 
        url: "musicians.html", 
        keywords: "musicians roster orchestra strings brass woodwinds percussion musiker orchester besetzung" 
    },

    // --- PARTICIPACIÓN Y CONTACTO ---
    { 
        title: "Auditions & Join the Orchestra", 
        category: "Recruitment", 
        url: "contact.html?topic=join", 
        keywords: "auditions join orchestra musician application probespiele mitspielen bewerbung instrument jobs" 
    },
    { 
        title: "Contact & General Inquiries", 
        category: "Contact", 
        url: "contact.html", 
        keywords: "contact email phone location management kontakt anfrage nachricht impressum" 
    },

    // --- MECENAZGO, TRANSPARENCIA Y DONACIONES ---
    { 
        title: "Support the Vision (Patronage & Donations)", 
        category: "Support", 
        url: "support-vision.html", 
        keywords: "support donate patron friends circle paypal iban bank tax-deductible spenden förderung förderverein mezenatentum" 
    },
    { 
        title: "Association Statutes (Satzung e.V.)", 
        category: "Governance", 
        url: "support-vision.html#statutes", 
        keywords: "statutes satzung pdf download gemeinnützigkeit non-profit legal e.v. verein transparency" 
    },
    { 
        title: "Institutional Partnerships & Sponsors", 
        category: "Support", 
        url: "partners.html", 
        keywords: "partners sponsors corporate foundations funding partnerschaften förderer stiftungen" 
    },

    // --- MULTIMEDIA ---
    { 
        title: "Media Gallery (Photos, Audios & Videos)", 
        category: "Gallery", 
        url: "photos.html", 
        keywords: "gallery photos videos audios media fotogalerie aufnahmen bilder mediathek" 
    },

    // --- LEGAL ---
    { 
        title: "Legal Notice (Impressum)", 
        category: "Legal", 
        url: "impressum.html", 
        keywords: "impressum legal notice registry vr 42493 b charlottenburg steuernummer vertretung rechtliches" 
    },
    { 
        title: "Privacy Policy (Datenschutz)", 
        category: "Legal", 
        url: "privacy.html", 
        keywords: "privacy policy datenschutz dsgvo gdpr datenschutzerklärung cookies rights" 
    }
];

// =========================================
// 3. INICIALIZACIÓN Y CONTROLADORES
// =========================================
document.addEventListener('DOMContentLoaded', function() {

    // --- A. GESTIÓN DEL CAMBIO DE IDIOMA ---
    const langOptions = document.querySelectorAll('.lang-options a');
    langOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            const urlParams = new URLSearchParams(option.getAttribute('href').split('?')[1]);
            const selectedLang = urlParams.get('lang');

            if (content[selectedLang]) {
                // Actualiza todos los elementos con atributo data-key
                document.querySelectorAll('[data-key]').forEach(el => {
                    const key = el.getAttribute('data-key');
                    if (content[selectedLang][key]) {
                        el.textContent = content[selectedLang][key];
                    }
                });

                // Actualiza textos dinámicos del hero
                const heroTitle = document.querySelector('.hero-content h1');
                if (heroTitle) {
                    heroTitle.innerHTML = content[selectedLang].hero.replace('. ', '. <br>');
                }
                
                const heroSub = document.querySelector('.hero-content p');
                if (heroSub) {
                    heroSub.textContent = selectedLang === 'de' ? "Berlins Neuer Sound" : "The New Sound of Berlin";
                }

                // Actualiza texto e icono del selector
                const currentLangText = document.querySelector('.lang-current span');
                if (currentLangText) currentLangText.textContent = selectedLang.toUpperCase();

                const currentLangImg = document.querySelector('.lang-current .lang-flag');
                if (currentLangImg) {
                    currentLangImg.src = selectedLang === 'de' ? "https://flagcdn.com/w20/de.png" : "https://flagcdn.com/w20/us.png";
                    currentLangImg.alt = selectedLang.toUpperCase();
                }

                document.documentElement.lang = selectedLang;
            }
        });
    });

    // --- B. COMPACTACIÓN DEL HEADER AL SCROLL ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- C. MENÚ MOBILE & DROPDOWNS EN TOUCH ---
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const headerNav = document.getElementById('headerNav');
    const overlay = document.getElementById('menuOverlay');
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

    function toggleMenu() {
        mobileBtn.classList.toggle('active');
        headerNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    }

    if (mobileBtn && headerNav && overlay) {
        mobileBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                e.stopPropagation();

                const parentDropdown = this.closest('.dropdown');
                if (!parentDropdown) return;

                const isOpen = parentDropdown.classList.contains('active');

                // Cierra otros dropdowns abiertos
                document.querySelectorAll('.dropdown.active').forEach(d => {
                    if (d !== parentDropdown) d.classList.remove('active');
                });

                // Alterna estado del dropdown actual
                if (isOpen) {
                    parentDropdown.classList.remove('active');
                } else {
                    parentDropdown.classList.add('active');
                }
            }
        });
    });

    // --- D. BUSCADOR EN VIVO (LIVE SEARCH + TECLADO) ---
    const searchBtn = document.getElementById('searchBtn');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');
    let selectedIndex = -1;

    function closeSearch() {
        if (resultsContainer) {
            resultsContainer.classList.remove('active');
            resultsContainer.innerHTML = '';
        }
        selectedIndex = -1;
    }

    function updateSelection(items) {
        items.forEach((item, idx) => {
            if (idx === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    if (searchBtn && searchContainer && searchInput && resultsContainer) {
        searchBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            searchContainer.classList.toggle('active');
            
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            } else {
                closeSearch();
                searchInput.value = '';
            }
        });

        // Filtrado dinámico mientras se escribe
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            selectedIndex = -1;

            if (query.length < 2) {
                closeSearch();
                return;
            }

            const matches = siteSearchIndex.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.keywords.toLowerCase().includes(query) || 
                item.category.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                resultsContainer.innerHTML = matches.map(item => `
                    <a href="${item.url}" class="search-result-item">
                        <div class="search-result-category">${item.category}</div>
                        <div class="search-result-title">${item.title}</div>
                    </a>
                `).join('');
            } else {
                resultsContainer.innerHTML = `<div class="search-no-results">No results found for "${this.value}"</div>`;
            }

            resultsContainer.classList.add('active');
        });

        // Navegación con teclado
        searchInput.addEventListener('keydown', function(e) {
            const items = resultsContainer.querySelectorAll('.search-result-item');
            if (!resultsContainer.classList.contains('active') || items.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                updateSelection(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                } else if (items.length > 0) {
                    items[0].click();
                }
            } else if (e.key === 'Escape') {
                closeSearch();
                searchContainer.classList.remove('active');
            }
        });

        // Cierre al hacer clic fuera del buscador
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target)) {
                searchContainer.classList.remove('active');
                closeSearch();
            }
        });
    }

    // --- E. EVENT SLIDER (NAVEGACIÓN DIRECCIONAL ENTRE CARDS) ---
    const cards = document.querySelectorAll('.event-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let currentIndex = 0;

    function updateSlider(index, direction = 'next') {
        cards.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('swipe-reverse');
        });
        
        dots.forEach(dot => dot.classList.remove('active'));

        if (direction === 'prev') {
            cards[index].classList.add('swipe-reverse');
        }

        cards[index].style.display = 'block';
        dots[index].classList.add('active');

        // Control de visibilidad en extremos
        prevBtn.style.visibility = (index === 0) ? 'hidden' : 'visible';
        nextBtn.style.visibility = (index === cards.length - 1) ? 'hidden' : 'visible';
    }

    if (nextBtn && prevBtn && cards.length > 0) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateSlider(currentIndex, 'next');
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider(currentIndex, 'prev');
            }
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                const direction = (i < currentIndex) ? 'prev' : 'next';
                currentIndex = i;
                updateSlider(currentIndex, direction);
            });
        });
    }
});


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------CONTACT.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- F. GESTIÓN DEL FORMULARIO DE CONTACTO & AUDICIONES DINÁMICAS ---
    const contactTopic = document.getElementById('contactTopic');
    const musicianFields = document.getElementById('musicianFields');
    const instrumentInput = document.getElementById('instrument');

    function toggleAuditionFields(topic) {
        if (!musicianFields) return;
        
        const isAudition = (topic === 'join');
        musicianFields.style.display = isAudition ? 'block' : 'none';
        
        if (instrumentInput) {
            instrumentInput.required = isAudition;
        }
    }

    if (contactTopic) {
        // 1. Al cambiar la opción en el dropdown manualmente
        contactTopic.addEventListener('change', function() {
            toggleAuditionFields(this.value);
        });

        // 2. Preselección automática si viene con parámetro URL (e.g. contact.html?topic=join)
        const urlParams = new URLSearchParams(window.location.search);
        const topicParam = urlParams.get('topic');

        if (topicParam && ['general', 'join', 'press', 'other'].includes(topicParam)) {
            contactTopic.value = topicParam;
            toggleAuditionFields(topicParam);
        }
    }


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------SUPPORT-VISION.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- G. GESTIÓN DE SUPPORT-VISION.HTML (SELECCIÓN DE TIER Y COPIA DE IBAN) ---
    const tierButtons = document.querySelectorAll('.btn-tier');
    const patronLevelSelect = document.getElementById('patronLevel');
    const ibanCopyBtn = document.getElementById('ibanCode');

    // 1. Al hacer clic en un botón de Tier, preselecciona el nivel y hace scroll suave al formulario
    if (tierButtons.length > 0 && patronLevelSelect) {
        tierButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedTier = this.getAttribute('data-tier');
                
                if (selectedTier) {
                    patronLevelSelect.value = selectedTier;
                }

                const formTarget = document.getElementById('patronForm');
                if (formTarget) {
                    formTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // 2. Copiar IBAN al portapapeles con un clic
    if (ibanCopyBtn) {
        ibanCopyBtn.addEventListener('click', function() {
            const rawIban = this.textContent.trim().split(' ')[0] ? "DE00000000000000000000" : "";
            navigator.clipboard.writeText(rawIban).then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = `Copied! <i class="fa-solid fa-check" style="color: var(--gold);"></i>`;
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                }, 2000);
            });
        });
    }


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------PROGRAM.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- H. FILTRO DE CONCIERTOS EN PROGRAM.HTML ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const concertCards = document.querySelectorAll('.concert-card');

    if (filterButtons.length > 0 && concertCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 1. Alternar clase activa en botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // 2. Filtrar tarjetas
                const filterValue = this.getAttribute('data-filter');

                concertCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'grid';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

// --- I. AUTO-SCROLL Y RESALTADO DE CONCIERTO EN PROGRAM.HTML ---
    const urlParams = new URLSearchParams(window.location.search);
    const eventIndex = parseInt(urlParams.get('event'), 10); // Lee 1, 2, 3...

    if (!isNaN(eventIndex) && eventIndex > 0) {
        const concertCards = document.querySelectorAll('.concert-card');
        const targetCard = concertCards[eventIndex - 1]; // Array base 0

        if (targetCard) {
            // Pequeño retardo para asegurar que la página renderizó el layout
            setTimeout(() => {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                targetCard.classList.add('highlight-focus');
                
                // Remueve la clase tras terminar la animación para dejar el DOM limpio
                setTimeout(() => {
                    targetCard.classList.remove('highlight-focus');
                }, 2300);
            }, 300);
        }
    }


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------(GALERIA)
VIDEOS.HTML, AUDIOS.HTML, PHOTOS.HTML 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// --- J. LIGHTBOX INTERACTIVO EN PHOTOS.HTML ---
    const photoItems = document.querySelectorAll('.photo-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightboxModal && photoItems.length > 0) {
        photoItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const captionTitle = this.querySelector('.caption-title');
                const captionVenue = this.querySelector('.caption-venue');

                if (img) {
                    lightboxImg.src = img.src;
                    lightboxCaption.innerHTML = `${captionTitle ? captionTitle.textContent : ''} ${captionVenue ? `— <em>${captionVenue.textContent}</em>` : ''}`;
                    lightboxModal.style.display = 'flex';
                }
            });
        });

        // Cerrar al hacer clic en la X
        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightboxModal.style.display = 'none';
            });
        }

        // Cerrar al hacer clic en el fondo oscuro
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
            }
        });

        // Cerrar con la tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
                lightboxModal.style.display = 'none';
            }
        });
    }