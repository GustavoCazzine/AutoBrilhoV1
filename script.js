document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // =================== CONFIGURAÇÕES GLOBAIS E DADOS =================
    // ===================================================================

    const WHATSAPP_NUMBER = "5519993040543";
    const BASE_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

    const DADOS_SERVICOS = [
        {
            id: 'vitrificacao',
            menuTitle: 'Vitrificação',
            panelTitle: 'Blindagem Cerâmica de Pintura',
            description: 'Através da aplicação de um nano-revestimento de alta tecnologia, criamos uma camada de vidro ultra-rígida sobre o verniz, garantindo proteção superior e um brilho espelhado de longa duração.',
            benefits: [
                { icon: 'shield-check', text: 'Proteção contra micro-riscos, raios UV e contaminantes.' },
                { icon: 'droplet', text: 'Efeito super hidrofóbico que repele água e sujeira.' },
                { icon: 'award', text: 'Intensifica a profundidade da cor e o brilho da pintura.' }
            ],
            ctaMessage: 'Olá! Quero um orçamento para Vitrificação.'
        },
        {
            id: 'polimento',
            menuTitle: 'Polimento Técnico',
            panelTitle: 'Restauração e Nivelamento da Pintura',
            description: 'Um processo técnico de correção que remove com segurança os defeitos do verniz, como marcas de lavagem, hologramas e riscos superficiais, restaurando a pintura ao seu estado original de perfeição.',
            benefits: [
                { icon: 'search', text: 'Remoção de até 95% das imperfeições visíveis.' },
                { icon: 'layers', text: 'Nivelamento preciso do verniz para um reflexo puro.' },
                { icon: 'sun', text: 'Revitalização completa da cor e brilho de carro novo.' }
            ],
            ctaMessage: 'Olá! Quero um orçamento para Polimento Técnico.'
        },
        {
            id: 'higienizacao',
            menuTitle: 'Higienização Detalhada',
            panelTitle: 'Saúde e Renovação para o Interior',
            description: 'Processo completo de limpeza e descontaminação do interior do veículo, utilizando equipamentos de extração profunda e produtos bactericidas que garantem um ambiente seguro para você e sua família.',
            benefits: [
                { icon: 'shield-off', text: 'Eliminação de 99,9% de ácaros, fungos e bactérias.' },
                { icon: 'wind', text: 'Neutralização completa de odores desagradáveis.' },
                { icon: 'award', text: 'Renovação e proteção de todas as superfícies internas.' }
            ],
            ctaMessage: 'Olá! Quero um orçamento para Higienização.'
        }
    ];
    
    const DADOS_GALERIA = [
        {
            categoria: 'vitrificacao',
            imageBefore: 'https://images.pexels.com/photos/17589574/pexels-photo-17589574/free-photo-of-porsche-911-carrera-s-preto-e-branco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/6871787/pexels-photo-6871787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Porsche 911 com pintura vitrificada',
            titulo: 'Vitrificação Cerâmica',
            subtitulo: 'Porsche 911'
        },
        {
            categoria: 'polimento',
            imageBefore: 'https://images.pexels.com/photos/3354641/pexels-photo-3354641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/9514022/pexels-photo-9514022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Reflexo em Lamborghini após polimento',
            titulo: 'Polimento Técnico',
            subtitulo: 'Lamborghini'
        },
        {
            categoria: 'interiores',
            imageBefore: 'https://images.pexels.com/photos/2673349/pexels-photo-2673349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/1547738/pexels-photo-1547738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Interior de couro limpo e hidratado',
            titulo: 'Higienização Interna',
            subtitulo: 'Carro Clássico'
        },
        {
            categoria: 'vitrificacao',
            imageBefore: 'https://images.pexels.com/photos/11099233/pexels-photo-11099233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/9708027/pexels-photo-9708027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Detalhe de gota dágua em pintura vitrificada',
            titulo: 'Efeito Hidrofóbico',
            subtitulo: 'Audi RS6'
        },
        {
            categoria: 'interiores',
            imageBefore: 'https://images.pexels.com/photos/16188905/pexels-photo-16188905/free-photo-of-assentos-bancos-assentos-de-couro-bancos-de-couro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/7091427/pexels-photo-7091427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Limpeza de interior de couro',
            titulo: 'Higienização de Couro',
            subtitulo: 'Mercedes-Benz'
        },
        {
            categoria: 'polimento',
            imageBefore: 'https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/9514032/pexels-photo-9514032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Polimento de alta performance em carro esportivo',
            titulo: 'Correção de Pintura',
            subtitle: 'Ferrari F8'
        }
    ];

    const DADOS_DEPOIMENTOS = [
        { rating: 5, source: 'via Google', quote: 'Serviço impecável! O brilho da vitrificação é inacreditável, meu carro parece um espelho.', authorName: 'Carlos Monteiro', authorDetail: 'Proprietário de um Audi A4', authorImg: 'assets/img/cliente1.jpg' },
        { rating: 5, source: 'via Google', quote: 'Atendimento nota 10 e o resultado do polimento superou todas as minhas expectativas. Recomendo de olhos fechados!', authorName: 'Juliana Alves', authorDetail: 'Proprietária de uma BMW X1', authorImg: 'assets/img/cliente2.jpg' },
        { rating: 5, source: 'via Google', quote: 'Profissionalismo raro de se encontrar. Cuidaram do meu carro como se fosse deles. A higienização interna deixou o carro com cheiro de novo.', authorName: 'Roberta Dias', authorDetail: 'Proprietária de uma Toyota Hilux', authorImg: 'assets/img/cliente3.jpg' }
    ];;

    const DADOS_MARCAS = [
        { name: 'Menzerna', imgSrc: './assets/img/menzerna-logo.png' },
        { name: 'CarPro', imgSrc: './assets/img/carpro-logo.png' },
        { name: 'Rupes', imgSrc: './assets/img/rupes-logo.png' },
        { name: 'Vonixx', imgSrc: './assets/img/vonixx-logo.png' }
    ];

    // ===================================================================
    // ======================== FUNÇÕES UTILITÁRIAS ======================
    // ===================================================================

    function setupCtaLinks() {
        document.querySelectorAll('.cta-whatsapp').forEach(link => {
            if (link.hasAttribute('data-setup')) return;
            const message = link.dataset.message || "Olá! Gostaria de fazer um orçamento.";
            const finalLink = `${BASE_WHATSAPP_URL}${encodeURIComponent(message)}`;
            link.setAttribute('href', finalLink);
            link.setAttribute('target', '_blank');
            link.setAttribute('data-setup', 'true');
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

    function initFloatingWhatsappButton() {
        const floatingCtaContainer = document.getElementById('floating-cta-container');
        if (!floatingCtaContainer) return;

        const chatBubble = floatingCtaContainer.querySelector('.chat-bubble');
        let bubbleHasBeenShown = false;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                floatingCtaContainer.classList.add('visible');
                if (!bubbleHasBeenShown && chatBubble) {
                    bubbleHasBeenShown = true;
                    setTimeout(() => { chatBubble.classList.add('hidden'); }, 5000);
                }
            } else {
                floatingCtaContainer.classList.remove('visible');
            }
        });
    }

    function initServicesSection() {
    const servicosMenu = document.querySelector('.servicos-menu');
    const servicosDisplay = document.querySelector('.servicos-display');

    if (!servicosMenu || !servicosDisplay || DADOS_SERVICOS.length === 0) return;

    servicosMenu.innerHTML = ''; 

    function renderServiceContent(service) {
        // Biblioteca de ícones SVG
        const icons = {
            'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
            'sun': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
            'search': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
            'layers': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
            'award': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>',
            'shield-off': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-8 3v7c0 6 8 10 8 10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>',
            'wind': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
            'droplet': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>'
        };

        servicosDisplay.innerHTML = `
            <div id="${service.id}-content" class="service-content-panel active">
                <h3>${service.panelTitle}</h3>
                <p class="service-description">${service.description}</p>
                
                <h4 class="specs-title">Principais Benefícios</h4>
                <ul class="service-specs-list">
                    ${service.benefits.map(benefit => `<li>${icons[benefit.icon] || ''}<span>${benefit.text}</span></li>`).join('')}
                </ul>
                
                <a href="#" class="cta-servico cta-whatsapp" data-message="${service.ctaMessage}">Solicitar Orçamento de ${service.menuTitle}</a>
            </div>
        `;
        setupCtaLinks();
    }

    DADOS_SERVICOS.forEach((service, index) => {
        const tabButton = document.createElement('button');
        tabButton.className = 'service-tab-item';
        if (index === 0) tabButton.classList.add('active');
        
        tabButton.addEventListener('click', () => {
            servicosMenu.querySelectorAll('.service-tab-item').forEach(btn => btn.classList.remove('active'));
            tabButton.classList.add('active');
            renderServiceContent(service);
        });
        
        tabButton.innerHTML = `<span>0${index + 1}</span> ${service.menuTitle}`;
        servicosMenu.appendChild(tabButton);
    });

    if (DADOS_SERVICOS.length > 0) {
        renderServiceContent(DADOS_SERVICOS[0]);
    }
    }

        function initGallery() {
        const galleryGrid = document.querySelector('.gallery-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const loadMoreBtn = document.getElementById('load-more-btn');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCloseBtn = document.querySelector('.lightbox-close');

        // Validação para garantir que todos os elementos essenciais existem
        if (!galleryGrid || !loadMoreBtn || !lightbox || !filterButtons.length) {
            console.error("Elementos da galeria não encontrados. A funcionalidade será desativada.");
            return;
        }

        const ITEMS_PER_LOAD = 3;
        let currentFilter = 'todos';
        let itemsShown = 0;

        /**
         * Gera o HTML para um único item da galeria
         */
        function createGalleryItemHTML(itemData) {
            return `
                <div class="gallery-item" data-category="${itemData.categoria}" data-image-after="${itemData.imagemAfter}">
                    <img src="${itemData.imageBefore}" alt="${itemData.alt}" loading="lazy">
                    <div class="gallery-item-info">
                        <h3>${itemData.titulo}</h3>
                        <p>${itemData.subtitulo}</p>
                        <span class="view-result-prompt">Clique para ver o resultado</span>
                    </div>
                </div>
            `;
        }

        /**
         * Renderiza a galeria completa no HTML (com itens escondidos)
         */
        function populateGrid() {
            galleryGrid.innerHTML = ''; // Limpa o grid
            DADOS_GALERIA.forEach(itemData => {
                galleryGrid.insertAdjacentHTML('beforeend', createGalleryItemHTML(itemData));
            });
            setupLightboxListeners();
        }

        /**
         * Mostra os itens com base no filtro e na contagem atual
         */
        function showItems() {
            const allItems = galleryGrid.querySelectorAll('.gallery-item');
            const itemsToShow = Array.from(allItems).filter(item => 
                currentFilter === 'todos' || item.dataset.category === currentFilter
            );

            // Esconde todos para começar do zero
            allItems.forEach(item => item.style.display = 'none');
            
            // Mostra apenas a quantidade correta de itens filtrados
            itemsToShow.slice(0, itemsShown).forEach(item => {
                item.style.display = 'block';
            });

            // Lógica para mostrar ou esconder o botão "Ver Mais"
            if (itemsShown >= itemsToShow.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }

        /**
         * Lida com o clique nos botões de filtro
         */
        function handleFilterClick(e) {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            currentFilter = e.currentTarget.dataset.filter;
            itemsShown = ITEMS_PER_LOAD; // Reseta a contagem para o lote inicial
            showItems(); // Re-exibe os itens com o novo filtro
        }

        /**
         * Adiciona mais itens à visualização
         */
        function loadMoreItems() {
            itemsShown += ITEMS_PER_LOAD;
            showItems();
        }

        /**
         * Configura os eventos para o lightbox
         */
        function setupLightboxListeners() {
            galleryGrid.addEventListener('click', (e) => {
                const clickedItem = e.target.closest('.gallery-item');
                if (clickedItem) {
                    lightboxImg.src = clickedItem.dataset.imageAfter;
                    lightbox.classList.add('active');
                }
            });
        }

        // --- INICIALIZAÇÃO E EVENTOS ---

        filterButtons.forEach(button => button.addEventListener('click', handleFilterClick));
        loadMoreBtn.addEventListener('click', loadMoreItems);
        lightboxCloseBtn.addEventListener('click', () => lightbox.classList.remove('active'));
        lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('active'); });

        // Carga inicial da galeria
        populateGrid(); // 1º: Cria todos os itens no HTML (escondidos)
        itemsShown = ITEMS_PER_LOAD;
        showItems(); // 2º: Mostra o primeiro lote de itens
    }
    
    function initTestimonialCarousel() {
        const carouselContainer = document.querySelector('.testimonial-carousel');
        if (!carouselContainer || DADOS_DEPOIMENTOS.length === 0) return;

        carouselContainer.innerHTML = '';
        const scroller = document.createElement('div');
        scroller.className = 'testimonial-scroller';
        
        const populateScroller = (data) => {
            data.forEach(testimonial => {
                scroller.innerHTML += `
                    <div class="testimonial-card">
                        <div class="testimonial-header">
                            <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}<span style="opacity:0.3">${'★'.repeat(5 - testimonial.rating)}</span></div>
                        </div>
                        <p class="testimonial-text">${testimonial.quote}</p>
                        <div class="testimonial-author">
                            <img src="${testimonial.authorImg}" alt="Foto de ${testimonial.authorName}" loading="lazy">
                            <div><h4>${testimonial.authorName}</h4><span>${testimonial.authorDetail}</span></div>
                        </div>
                    </div>`;
            });
        };
        
        populateScroller(DADOS_DEPOIMENTOS);
        populateScroller(DADOS_DEPOIMENTOS);
        carouselContainer.appendChild(scroller);
    }

    function initLogoCarousel() {
            const logosContainer = document.querySelector('.product-logos');
            if (!logosContainer || DADOS_MARCAS.length === 0) return;
            
            logosContainer.innerHTML = '';
            const scroller = document.createElement('div');
            scroller.className = 'logos-scroller';
            
            const populateLogoScroller = (data) => {
                data.forEach(logo => {
                    scroller.innerHTML += `<div class="logo-item"><img src="${logo.imgSrc}" alt="Logo ${logo.name}" loading="lazy"></div>`;
                });
            }

            populateLogoScroller(DADOS_MARCAS);
            populateLogoScroller(DADOS_MARCAS); // Duplica para efeito infinito
            logosContainer.appendChild(scroller);
        }
        
        function initQuoteGenerator() {
        const quoteGenerator = document.querySelector('.quote-generator-container');
        if (!quoteGenerator) return;

        const allInputs = quoteGenerator.querySelectorAll('input, textarea');
        const messagePreview = document.getElementById('whatsapp-message-preview');
        const generateBtn = document.getElementById('generate-whatsapp-btn');
        
        if(!messagePreview || !generateBtn || allInputs.length === 0) return;

        function updatePreviewMessage() {
            const modelo = quoteGenerator.querySelector('#veiculo-modelo').value.trim();
            const ano = quoteGenerator.querySelector('#veiculo-ano').value.trim();
            const observacoes = quoteGenerator.querySelector('#observacoes').value.trim();
            const local = quoteGenerator.querySelector('input[name="local-atendimento"]:checked').value;
            
            let servicosSelecionados = [];

            // Itera sobre os grupos de serviço principais
            quoteGenerator.querySelectorAll('input[name="servico"]:checked').forEach(cb => {
                let serviceText = cb.value;
                const serviceGroup = cb.closest('.service-group');
                const subOptions = serviceGroup.querySelector('.sub-options');
                
                // Se houver sub-opções, procura a selecionada
                if (subOptions) {
                    const selectedRadio = subOptions.querySelector('input[type="radio"]:checked');
                    // Para os adicionais, que são checkboxes
                    const selectedCheckboxes = subOptions.querySelectorAll('input[type="checkbox"]:checked');

                    if (selectedRadio) {
                        serviceText += ` (${selectedRadio.value})`;
                    } else if (selectedCheckboxes.length > 0) {
                        const additionalTexts = Array.from(selectedCheckboxes).map(addCb => addCb.value);
                        serviceText += `: ${additionalTexts.join(', ')}`;
                    }
                }
                servicosSelecionados.push(serviceText);
            });

            let message = `Olá, Auto Brilho! Gostaria de um orçamento.\n\n`;
            if (modelo) message += `*Veículo:* ${modelo} (${ano || 'Ano não informado'})\n`;
            if (local) message += `*Local:* Atendimento ${local}\n`;
            if (servicosSelecionados.length > 0) {
                message += `*Serviços de Interesse:*\n- ${servicosSelecionados.join('\n- ')}\n`;
            }
            if (observacoes) {
                message += `\n*Observações:* ${observacoes}`;
            }

            messagePreview.textContent = message;
        }
        
        allInputs.forEach(input => input.addEventListener('input', updatePreviewMessage));
        generateBtn.addEventListener('click', () => {
            const message = messagePreview.textContent;
            const finalLink = BASE_WHATSAPP_URL + encodeURIComponent(message);
            window.open(finalLink, '_blank');
        });

        updatePreviewMessage();
    }

    // --- CHAMADA DE TODAS AS FUNÇÕES DE INICIALIZAÇÃO ---
    
    initHamburgerMenu();
    initFloatingWhatsappButton();
    initServicesSection();
    initQuoteGenerator();
    initGallery();
    initTestimonialCarousel();
    initLogoCarousel();
    
    setupCtaLinks();

});