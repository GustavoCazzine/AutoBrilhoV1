document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // ================ GERENCIADOR DE LINKS DE CTA (WHATSAPP) ===========
    // ===================================================================
    const WHATSAPP_NUMBER = "5519999999999"; // <-- TROQUE PELO SEU NÚMERO
    const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;
    const ctaLinks = document.querySelectorAll('.cta-whatsapp');

    ctaLinks.forEach(link => {
        const message = link.dataset.message || "Olá! Gostaria de fazer um orçamento.";
        const finalLink = BASE_URL + encodeURIComponent(message);
        link.setAttribute('href', finalLink);
        link.setAttribute('target', '_blank');
    });

    // ===================================================================
    // ================ LÓGICA DO MENU HAMBÚRGUER ========================
    // ===================================================================
    const header = document.querySelector('.header');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-overlay .nav-link');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', toggleMenu);
        if(closeMenuBtn) {
            closeMenuBtn.addEventListener('click', toggleMenu);
        }
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
    
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ===================================================================
    // ================= LÓGICA DA SEÇÃO DE SERVIÇOS (ABAS) ==============
    // ===================================================================
    const servicosTabs = document.querySelectorAll('.service-tab-item');
    const servicosPanels = document.querySelectorAll('.service-content-panel');

    servicosTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            servicosTabs.forEach(item => item.classList.remove('active'));
            servicosPanels.forEach(panel => panel.classList.remove('active'));
            tab.classList.add('active');
            const targetPanelId = tab.dataset.target;
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });


    // ===================================================================
    // =================== LÓGICA DO FILTRO DA GALERIA ===================
    // ===================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.dataset.filter;
            galleryItems.forEach(item => {
                const itemCategory = item.dataset.category;
                if (filterValue === 'todos' || itemCategory === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

});


document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // =================== BANCO DE DADOS DOS SERVIÇOS ===================
    // ===================================================================
    const servicosData = [
    {
        id: 'vitrificacao',
        menuTitle: 'Vitrificação',
        panelTitle: 'Proteção Cerâmica de Longa Duração',
        videoUrl: 'https://videos.pexels.com/video-files/6871784/6871784-sd_640_360_30fps.mp4', // Exemplo de vídeo
        description: 'Criamos um escudo de vidro sobre a pintura que oferece brilho intenso, proteção contra micro-riscos e um incrível efeito hidrorrepelente.',
        specs: [
            { icon: 'shield-check', text: 'Dureza 9H na escala Mohs' },
            { icon: 'sun', text: 'Proteção UV e contra oxidação' },
            { icon: 'clock', text: 'Durabilidade de até 3 anos' }
        ],
        products: [
            { name: 'CarPro CQuartz', img: 'url_para_imagem_produto1.png' },
            { name: 'Gyeon Mohs', img: 'url_para_imagem_produto2.png' }
        ],
        ctaMessage: 'Olá! Quero um orçamento para Vitrificação.'
    },
    {
        id: 'polimento',
        menuTitle: 'Polimento',
        panelTitle: 'Restauração e Brilho Espelhado',
        videoUrl: 'https://videos.pexels.com/video-files/9514029/9514029-sd_640_360_30fps.mp4', // Exemplo de vídeo
        description: 'Removemos com técnica as imperfeições como "teias de aranha" e riscos superficiais, revelando a cor e o brilho originais do seu carro.',
        specs: [
            { icon: 'search', text: 'Correção de até 95% dos defeitos' },
            { icon: 'layers', text: 'Processo multi-etapas (corte, refino, lustro)' },
            { icon: 'award', text: 'Acabamento superior a um carro 0km' }
        ],
        products: [
            { name: 'Menzerna HCC400', img: 'url_para_imagem_produto3.png' },
            { name: 'Rupes Bigfoot', img: 'url_para_imagem_produto4.png' }
        ],
        ctaMessage: 'Olá! Quero um orçamento para Polimento.'
    },
    {
        id: 'higienizacao',
        menuTitle: 'Higienização',
        panelTitle: 'Saúde e Conforto: Um Interior Renovado',
        videoUrl: 'https://videos.pexels.com/video-files/7594967/7594967-sd_640_360_25fps.mp4', // Exemplo de vídeo
        description: 'Limpeza profunda que elimina 99,9% de ácaros, fungos e bactérias do interior do veículo, removendo manchas e odores.',
        specs: [
            { icon: 'shield-off', text: 'Eliminação de alérgenos e bactérias' },
            { icon: 'wind', text: 'Neutralização completa de odores' },
            { icon: 'droplet', text: 'Hidratação e proteção de couro e plásticos' }
        ],
        products: [
            { name: 'Koch-Chemie', img: 'url_para_imagem_produto5.png' },
            { name: 'Tornador Z-020', img: 'url_para_imagem_produto6.png' }
        ],
        ctaMessage: 'Olá! Quero um orçamento para Higienização.'
    }
    ];

    // ===================================================================
    // ================ GERENCIADOR DE LINKS DE CTA (WHATSAPP) ===========
    // ===================================================================
    const WHATSAPP_NUMBER = "5519999999999"; // <-- TROQUE PELO SEU NÚMERO
    const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;
    
    function setupCtaLinks() {
        const ctaLinks = document.querySelectorAll('.cta-whatsapp');
        ctaLinks.forEach(link => {
            const message = link.dataset.message || "Olá! Gostaria de fazer um orçamento.";
            const finalLink = BASE_URL + encodeURIComponent(message);
            link.setAttribute('href', finalLink);
            link.setAttribute('target', '_blank');
        });
    }

    // ===================================================================
    // ================ LÓGICA DO MENU HAMBÚRGUER ========================
    // ===================================================================
    const header = document.querySelector('.header');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-overlay .nav-link');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', toggleMenu);
        if(closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) toggleMenu();
            });
        });
    }
    
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ===================================================================
    // ============ LÓGICA DA SEÇÃO DE SERVIÇOS (DATA-DRIVEN) ============
    // ===================================================================
    const servicosMenu = document.querySelector('.servicos-menu');
    const servicosDisplay = document.querySelector('.servicos-display');

    if (servicosMenu && servicosDisplay && servicosData.length > 0) {
        // Função que renderiza o conteúdo de um serviço no painel de exibição
        function renderServiceContent(service) {
            // Ícones SVG para as especificações. Adicione mais conforme necessário.
            const icons = {
                'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
                'sun': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
                'clock': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
                'search': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
                'layers': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
                'award': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>',
                'shield-off': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-8 3v7c0 6 8 10 8 10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>',
                'wind': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
                'droplet': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>'
            };

            servicosDisplay.innerHTML = `
                <div id="${service.id}-content" class="service-content-panel active">
                    <div class="video-container">
                        <video src="${service.videoUrl}" autoplay loop muted playsinline></video>
                    </div>
                    
                    <h3>${service.panelTitle}</h3>
                    <p>${service.description}</p>
                    
                    <h4 class="specs-title">Especificações Técnicas</h4>
                    <ul class="service-specs-list">
                        ${service.specs.map(spec => `<li>${icons[spec.icon] || ''}<span>${spec.text}</span></li>`).join('')}
                    </ul>

                    <h4 class="specs-title">Produtos Utilizados</h4>
                    <div class="product-showcase">
                        ${service.products.map(product => `<div class="product-item" title="${product.name}"><img src="${product.img}" alt="${product.name}"></div>`).join('')}
                    </div>
                    
                    <a href="#" class="cta-servico cta-whatsapp" data-message="${service.ctaMessage}">Solicitar Orçamento de ${service.menuTitle}</a>
                </div>
            `;
            setupCtaLinks();
        }

        // Popula o menu de abas e adiciona os eventos de clique
        servicosData.forEach((service, index) => {
            const tabButton = document.createElement('button');
            tabButton.className = 'service-tab-item';
            tabButton.dataset.index = index;
            tabButton.innerHTML = `<span>0${index + 1}</span> ${service.menuTitle}`;
            
            if (index === 0) {
                tabButton.classList.add('active');
            }
            
            tabButton.addEventListener('click', () => {
                // Remove a classe 'active' de todos os botões
                servicosMenu.querySelectorAll('.service-tab-item').forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe 'active' ao botão clicado
                tabButton.classList.add('active');
                // Renderiza o conteúdo do serviço correspondente
                renderServiceContent(service);
            });
            
            servicosMenu.appendChild(tabButton);
        });

        // Renderiza o primeiro serviço por padrão ao carregar a página
        renderServiceContent(servicosData[0]);
    }

    // Configura todos os links de CTA da página na carga inicial
    setupCtaLinks();

});

// ===================================================================
// ================ LÓGICA DA GALERIA (VERSÃO FINAL) =================
// ===================================================================

// --- BANCO DE DADOS DA GALERIA ---
const galleryData = [
    { category: 'vitrificacao', imageBefore: 'https://images.pexels.com/photos/17589574/pexels-photo-17589574/free-photo-of-porsche-911-carrera-s-preto-e-branco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageAfter: 'https://images.pexels.com/photos/6871787/pexels-photo-6871787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Porsche 911 com pintura vitrificada', title: 'Vitrificação Cerâmica', subtitle: 'Porsche 911' },
    { category: 'polimento', imageBefore: 'https://images.pexels.com/photos/3354641/pexels-photo-3354641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageAfter: 'https://images.pexels.com/photos/9514022/pexels-photo-9514022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Reflexo em Lamborghini após polimento', title: 'Polimento Técnico', subtitle: 'Lamborghini' },
    { category: 'interiores', imageBefore: 'https://images.pexels.com/photos/2673349/pexels-photo-2673349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageAfter: 'https://images.pexels.com/photos/1547738/pexels-photo-1547738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Interior de couro limpo e hidratado', title: 'Higienização Interna', subtitle: 'Carro Clássico' },
    { category: 'vitrificacao', imageBefore: 'https://images.pexels.com/photos/11099233/pexels-photo-11099233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageAfter: 'https://images.pexels.com/photos/9708027/pexels-photo-9708027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Detalhe de gota d\'água em pintura vitrificada', title: 'Efeito Hidrofóbico', subtitle: 'Audi RS6' },
    { category: 'interiores', imageBefore: 'https://images.pexels.com/photos/16188905/pexels-photo-16188905/free-photo-of-assentos-bancos-assentos-de-couro-bancos-de-couro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageAfter: 'https://images.pexels.com/photos/7091427/pexels-photo-7091427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Limpeza de interior de couro', title: 'Higienização de Couro', subtitle: 'Mercedes-Benz' },
    { category: 'polimento', imageBefore: 'https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageAfter: 'https://images.pexels.com/photos/9514032/pexels-photo-9514032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', altText: 'Polimento de alta performance em carro esportivo', title: 'Correção de Pintura', subtitle: 'Ferrari F8' },
    // Adicione mais 6-10 projetos aqui para testar o botão "Ver Mais"
];

const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCloseBtn = document.querySelector('.lightbox-close');

const ITEMS_PER_LOAD = 6;
let currentFilter = 'todos';
let itemsShown = 0;

// --- FUNÇÕES ---

function createGalleryItemHTML(itemData) {
    // A imagem do "depois" fica guardada no data attribute
    return `
        <div class="gallery-item" data-category="${itemData.category}" data-image-after="${itemData.imageAfter}" style="display: none;">
            <img src="${itemData.imageBefore}" alt="${itemData.altText.replace('com', 'antes do tratamento com')}">
            <div class="gallery-item-info">
                <h3>${itemData.title}</h3>
                <p>${itemData.subtitle}</p>
                <span class="view-result-prompt">Clique para ver o resultado</span>
            </div>
        </div>
    `;
}

function renderInitialGallery() {
    galleryGrid.innerHTML = ''; // Limpa o grid
    galleryData.forEach(itemData => {
        galleryGrid.insertAdjacentHTML('beforeend', createGalleryItemHTML(itemData));
    });
    // Depois de renderizar todos (escondidos), mostra o primeiro lote
    showItems();
    setupLightboxListeners();
}

function showItems() {
    const allItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
    const itemsToShow = allItems.filter(item => {
        return currentFilter === 'todos' || item.dataset.category === currentFilter;
    });

    const newItemsToShow = itemsToShow.slice(0, itemsShown + ITEMS_PER_LOAD);
    
    // Mostra os itens
    newItemsToShow.forEach(item => item.style.display = 'block');
    
    itemsShown = newItemsToShow.length;

    // Esconde o botão se todos os itens filtrados já foram mostrados
    if (itemsShown >= itemsToShow.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function handleFilterClick(e) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    const clickedBtn = e.currentTarget;
    clickedBtn.classList.add('active');
    
    currentFilter = clickedBtn.dataset.filter;
    itemsShown = 0; // Reseta a contagem ao trocar de filtro

    // Esconde todos os itens primeiro
    galleryGrid.querySelectorAll('.gallery-item').forEach(item => item.style.display = 'none');
    
    // Mostra o primeiro lote do novo filtro
    showItems();
}

function openLightbox(item) {
    const imageUrl = item.dataset.imageAfter;
    lightboxImg.src = imageUrl;
    lightbox.classList.add('active');
}

function setupLightboxListeners() {
    // Usa delegação de eventos para funcionar com itens carregados dinamicamente
    galleryGrid.addEventListener('click', (e) => {
        const clickedItem = e.target.closest('.gallery-item');
        if (clickedItem) {
            openLightbox(clickedItem);
        }
    });
}

// --- INICIALIZAÇÃO E EVENTOS ---

// Renderiza a galeria inicial
renderInitialGallery();

// Adiciona eventos aos botões de filtro
filterButtons.forEach(button => button.addEventListener('click', handleFilterClick));

// Adiciona evento ao botão "Ver Mais"
loadMoreBtn.addEventListener('click', showItems);

// Adiciona eventos de fechar para o lightbox
lightboxCloseBtn.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.classList.remove('active'); });


    // ===================================================================
    // =================== LÓGICA DO CARROSSEL DE LOGOS ==================
    // ===================================================================

document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE DADOS DOS LOGOS ---
    const partnerLogosData = [
        { name: '3M', imgSrc: './assets/img/3m-logo-1-1.png' },
        { name: 'Vonixx', imgSrc: './assets/img/vonixx-logo.png' },
        { name: 'Menzerna', imgSrc: './assets/img/menzerna-logo.png' },
        { name: 'CarPro', imgSrc: './assets/img/carpro-logo.png' },
        { name: 'Rupes', imgSrc: './assets/img/rupes-logo.png' },
        { name: 'Koch-Chemie', imgSrc: './assets/img/koch-chemie-logo.png' },
        { name: 'Gyeon', imgSrc: './assets/img/gyeon-logo.png' }
    ];

    function initLogoCarousel() {
        const logosContainer = document.querySelector('.product-logos');
        if (!logosContainer) return;

        // Limpa qualquer conteúdo anterior para segurança
        logosContainer.innerHTML = '';

        // Cria o primeiro trilho de logos
        const scroller1 = document.createElement('div');
        scroller1.className = 'logos-scroller';
        partnerLogosData.forEach(logo => {
            scroller1.innerHTML += `<div class="logo-item"><img src="${logo.imgSrc}" alt="Logo ${logo.name}"></div>`;
        });

        // Cria o segundo trilho (clone do primeiro) para o efeito contínuo
        const scroller2 = scroller1.cloneNode(true);
        
        // Adiciona os dois trilhos ao contêiner principal
        logosContainer.appendChild(scroller1);
        logosContainer.appendChild(scroller2);
    }

    // Chama a nova função de inicialização
    initLogoCarousel();


});


document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // =================== CONFIGURAÇÕES GLOBAIS E DADOS =================
    // ===================================================================

    const WHATSAPP_NUMBER = "5519999999999"; // <-- TROQUE PELO SEU NÚMERO
    const BASE_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

    const servicosData = [
        { id: 'vitrificacao', menuTitle: 'Vitrificação', panelTitle: 'Blindagem e Brilho Espelhado para sua Pintura', videoUrl: 'https://videos.pexels.com/video-files/6871784/6871784-sd_640_360_30fps.mp4', description: 'Criamos um escudo de vidro sobre a pintura que oferece brilho intenso, proteção contra micro-riscos e um incrível efeito hidrorrepelente.', ctaMessage: 'Olá! Quero um orçamento para Vitrificação.' },
        { id: 'polimento', menuTitle: 'Polimento', panelTitle: 'A Arte de Restaurar a Pintura Original', videoUrl: 'https://videos.pexels.com/video-files/9514029/9514029-sd_640_360_30fps.mp4', description: 'Removemos com técnica as imperfeições como "teias de aranha" e riscos superficiais, revelando a cor e o brilho originais do seu carro.', ctaMessage: 'Olá! Quero um orçamento para Polimento.' },
        { id: 'higienizacao', menuTitle: 'Higienização', panelTitle: 'Saúde e Conforto: Um Interior Renovado', videoUrl: 'https://videos.pexels.com/video-files/7594967/7594967-sd_640_360_25fps.mp4', description: 'Limpeza profunda que elimina 99,9% de ácaros, fungos e bactérias do interior do veículo, removendo manchas e odores.', ctaMessage: 'Olá! Quero um orçamento para Higienização.' }
    ];

    // ===================================================================
    // ======================== FUNÇÕES UTILITÁRIAS ======================
    // ===================================================================

    /**
     * CORREÇÃO: Função centralizada para configurar todos os links de WhatsApp na página.
     * Agora ela pode ser chamada a qualquer momento para atualizar links novos ou existentes.
     */
    function setupCtaLinks() {
        const ctaLinks = document.querySelectorAll('.cta-whatsapp');
        ctaLinks.forEach(link => {
            // Evita adicionar o mesmo evento múltiplas vezes se a função for chamada de novo
            if (link.href.includes('wa.me')) return; 
            
            const message = link.dataset.message || "Olá! Gostaria de fazer um orçamento.";
            const finalLink = BASE_WHATSAPP_URL + encodeURIComponent(message);
            link.setAttribute('href', finalLink);
            link.setAttribute('target', '_blank');
        });
    }


    // ===================================================================
    // ===================== INICIALIZAÇÃO DOS MÓDULOS ===================
    // ===================================================================

    function initHamburgerMenu() {
        const header = document.querySelector('.header');
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-overlay .nav-link');
        const closeMenuBtn = document.getElementById('close-menu-btn');

        if (!hamburgerBtn || !mobileMenu) return;

        const toggleMenu = () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        };

        hamburgerBtn.addEventListener('click', toggleMenu);
        if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
        
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) toggleMenu();
            });
        });

        window.addEventListener('scroll', () => {
            if (header) header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    function initServicesSection() {
        const servicosMenu = document.querySelector('.servicos-menu');
        const servicosDisplay = document.querySelector('.servicos-display');

        if (!servicosMenu || !servicosDisplay || servicosData.length === 0) return;

        // ===================================================================
        // ===================== CORREÇÃO APLICADA AQUI ====================
        // ===================================================================
        servicosMenu.innerHTML = ''; // Limpa o menu antes de criar os botões
        // ===================================================================

        function renderServiceContent(service) {
            servicosDisplay.innerHTML = `
                <div id="${service.id}-content" class="service-content-panel active">
                    <div class="video-container">
                        <video src="${service.videoUrl}" autoplay loop muted playsinline></video>
                    </div>
                    <h3>${service.panelTitle}</h3>
                    <p>${service.description}</p>
                    <a href="#" class="cta-servico cta-whatsapp" data-message="${service.ctaMessage}">Solicitar Orçamento de ${service.menuTitle}</a>
                </div>
            `;
            // Re-configura os links de CTA recém-criados no painel
            setupCtaLinks();
        }

        servicosData.forEach((service, index) => {
            const tabButton = document.createElement('button');
            tabButton.className = 'service-tab-item';
            tabButton.dataset.index = index;
            tabButton.innerHTML = `<span>0${index + 1}</span> ${service.menuTitle}`;
            if (index === 0) tabButton.classList.add('active');
            
            tabButton.addEventListener('click', () => {
                servicosMenu.querySelectorAll('.service-tab-item').forEach(btn => btn.classList.remove('active'));
                tabButton.classList.add('active');
                renderServiceContent(service);
            });
            
            servicosMenu.appendChild(tabButton);
        });

        // Renderiza o primeiro serviço por padrão
        if (servicosData.length > 0) {
            renderServiceContent(servicosData[0]);
        }
    }


    function initQuoteGenerator() {
        const quoteGenerator = document.querySelector('.quote-generator-container');
        if (!quoteGenerator) return;

        const modeloInput = document.getElementById('veiculo-modelo');
        const anoInput = document.getElementById('veiculo-ano');
        const servicosCheckboxes = document.querySelectorAll('input[name="servico-interesse"]');
        const observacoesInput = document.getElementById('observacoes');
        const messagePreview = document.getElementById('whatsapp-message-preview');
        const generateBtn = document.getElementById('generate-whatsapp-btn');
        
        // Verifica se todos os elementos existem para evitar erros
        if(!modeloInput || !anoInput || !observacoesInput || !messagePreview || !generateBtn) return;

        function updatePreviewMessage() {
            const modelo = modeloInput.value.trim();
            const ano = anoInput.value.trim();
            const observacoes = observacoesInput.value.trim();
            
            const servicosSelecionados = Array.from(servicosCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            let message = `Olá, Auto Brilho! Gostaria de um orçamento.\n\n`;
            if (modelo) message += `*Veículo:* ${modelo}\n`;
            if (ano) message += `*Ano:* ${ano}\n`;
            if (servicosSelecionados.length > 0) {
                message += `*Serviços de Interesse:* ${servicosSelecionados.join(', ')}\n`;
            }
            if (observacoes) {
                message += `\n*Observações:* ${observacoes}`;
            }

            messagePreview.textContent = message;

            // Animação de Feedback Visual
            messagePreview.classList.add('updated');
            setTimeout(() => {
                messagePreview.classList.remove('updated');
            }, 500); // Duração da animação em milissegundos
        }
        
        const allInputs = [modeloInput, anoInput, observacoesInput, ...servicosCheckboxes];
        allInputs.forEach(input => input.addEventListener('input', updatePreviewMessage));

        generateBtn.addEventListener('click', () => {
            const message = messagePreview.textContent;
            if (message.trim() === 'Olá, Auto Brilho! Gostaria de um orçamento.') {
                alert('Por favor, preencha ao menos um campo para gerar a mensagem.');
                return;
            }
            const finalLink = BASE_WHATSAPP_URL + encodeURIComponent(message);
            window.open(finalLink, '_blank');
        });

        updatePreviewMessage();
    }

    // --- EXECUTA TODAS AS INICIALIZAÇÕES ---
    setupCtaLinks();
    initHamburgerMenu();
    initServicesSection();
    initQuoteGenerator();
    // (Aqui entrarão as inicializações da Galeria, etc. no futuro)

});


// ===================================================================
    // ============ LÓGICA DO CARROSSEL DE DEPOIMENTOS (FINAL) ===========
    // ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- BANCO DE DADOS DOS DEPOIMENTOS ---
    const testimonialsData = [
        { rating: 5, source: 'via Google', quote: 'Serviço impecável! Meu carro, que já tem 5 anos de uso, saiu parecendo que acabou de vir da concessionária. O brilho da vitrificação é inacreditável.', authorName: 'Carlos Monteiro', authorDetail: 'Proprietário de um Audi A4', authorImg: 'assets/img/cliente1.jpg' },
        { rating: 5, source: 'via Google', quote: 'Atendimento nota 10 e o resultado do polimento superou todas as minhas expectativas. Recomendo de olhos fechados!', authorName: 'Juliana Alves', authorDetail: 'Proprietária de uma BMW X1', authorImg: 'assets/img/cliente2.jpg' },
        { rating: 5, source: 'via Google', quote: 'Profissionalismo raro de se encontrar. Cuidaram do meu carro como se fosse deles. A higienização interna deixou o carro com cheiro de novo.', authorName: 'Roberto Dias', authorDetail: 'Proprietária de uma Toyota Hilux', authorImg: 'assets/img/cliente3.jpg' },
        { rating: 5, source: 'via Google', quote: 'Levei meu carro para um polimento e o resultado foi simplesmente fantástico. Removeram todos os pequenos riscos e o brilho voltou com tudo.', authorName: 'Fernanda Lima', authorDetail: 'Proprietária de um VW Nivus', authorImg: 'assets/img/cliente4.jpg' }
    ];

    function initTestimonialCarousel() {
        const carouselContainer = document.querySelector('.testimonial-carousel');
        if (!carouselContainer) return;

        carouselContainer.innerHTML = ''; // Limpa o contêiner

        // Cria o primeiro trilho e o popula
        const scroller1 = document.createElement('div');
        scroller1.className = 'testimonial-scroller';
        testimonialsData.forEach(testimonial => {
            scroller1.innerHTML += `
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}<span style="opacity:0.3">${'★'.repeat(5 - testimonial.rating)}</span></div>
                        <span class="testimonial-source">${testimonial.source}</span>
                    </div>
                    <p class="testimonial-text">${testimonial.quote}</p>
                    <div class="testimonial-author">
                        <img src="${testimonial.authorImg}" alt="Foto de ${testimonial.authorName}" loading="lazy">
                        <div>
                            <h4>${testimonial.authorName}</h4>
                            <span>${testimonial.authorDetail}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Cria o segundo trilho como um clone do primeiro para o loop perfeito
        const scroller2 = scroller1.cloneNode(true);
        
        carouselContainer.appendChild(scroller1);
        carouselContainer.appendChild(scroller2);
        
        // Pausa a animação no toque em dispositivos móveis
        carouselContainer.addEventListener('touchstart', () => { scroller1.style.animationPlayState = 'paused'; scroller2.style.animationPlayState = 'paused'; }, { passive: true });
        carouselContainer.addEventListener('touchend', () => { scroller1.style.animationPlayState = 'running'; scroller2.style.animationPlayState = 'running'; });
    }

    // Chama a nova função de inicialização
    initTestimonialCarousel();

    // ===================================================================
    // ================== LÓGICA DO BOTÃO FLUTUANTE DE WHATSAPP ===========
    // ===================================================================
    const floatingCtaContainer = document.getElementById('floating-cta-container');

    if (floatingCtaContainer) {
        const chatBubble = floatingCtaContainer.querySelector('.chat-bubble');
        let bubbleHasBeenShown = false;

        window.addEventListener('scroll', () => {
            // Mostra o componente após o usuário rolar 300px
            if (window.scrollY > 300) {
                floatingCtaContainer.classList.add('visible');

                // Se o balão ainda não foi mostrado, inicia o timer
                if (!bubbleHasBeenShown && chatBubble) {
                    bubbleHasBeenShown = true;
                    // MUDANÇA AQUI: Esconde o balão de conversa após 5 segundos
                    setTimeout(() => {
                        chatBubble.classList.add('hidden');
                    }, 5000); // 5000ms = 5 segundos
                }

            } else {
                // Esconde o componente se o usuário voltar ao topo
                floatingCtaContainer.classList.remove('visible');
            }
        });
    }

});
