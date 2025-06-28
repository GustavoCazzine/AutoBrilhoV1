document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // =================== CONFIGURAÇÕES GLOBAIS E DADOS =================
    // ===================================================================

    const WHATSAPP_NUMBER = "5519993040543";
    const BASE_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

    const DADOS_SERVICOS = [
    // VITRIFICAÇÃO
    {
        id: 'vitrificacao-pintura',
        menuTitle: 'Vitrificação da Pintura',
        panelTitle: 'Blindagem Rígida com Brilho Espelhado por Anos',
        description: 'Nano-revestimento de alto desempenho que cria uma camada vítrea sobre a pintura, repelindo sujeira e protegendo contra danos causados por raios UV, seiva, fezes de aves e lavagens constantes.',
        benefits: [
        { icon: 'shield-check', text: 'Proteção avançada com durabilidade de até 3 anos.' },
        { icon: 'droplet', text: 'Efeito hidrofóbico: repele água e sujeira com facilidade.' },
        { icon: 'sun', text: 'Barreira contra raios solares, evitando oxidação da pintura.' }
        ],
        processSteps: [
        { icon: 'wash', title: 'Lavagem Técnica Detalhada' },
        { icon: 'clay-bar', title: 'Descontaminação de Pintura' },
        { icon: 'polisher', title: 'Correção de Pintura (se necessário)' },
        { icon: 'layers', title: 'Aplicação do Nano Revestimento' },
        { icon: 'search', title: 'Cura e Inspeção Final' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para o serviço de Vitrificação da Pintura.'
    },
    {
        id: 'vitrificacao-plasticos',
        menuTitle: 'Vitrificação de Plásticos',
        panelTitle: 'Plásticos Renovados e Protegidos por Muito Mais Tempo',
        description: 'Camada protetora aplicada sobre plásticos externos que evita o desbotamento e ressecamento causado por exposição ao sol, chuva e poluição.',
        benefits: [
        { icon: 'sun', text: 'Protege contra ação solar e intempéries.' },
        { icon: 'refresh-cw', text: 'Recupera a cor original dos plásticos externos.' },
        { icon: 'layers', text: 'Cria um escudo resistente contra desgaste prematuro.' }
        ],
        processSteps: [
        { icon: 'brush', title: 'Limpeza e Preparo da Superfície' },
        { icon: 'spray', title: 'Aplicação do Vitrificador' },
        { icon: 'clock', title: 'Cura do Produto' },
        { icon: 'search', title: 'Inspeção Final' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para a Vitrificação dos Plásticos.'
    },

    // POLIMENTO
    {
        id: 'polimento-tecnico',
        menuTitle: 'Polimento Técnico',
        panelTitle: 'Riscos Corrigidos e Brilho de Fábrica Restaurado',
        description: 'Processo de correção que remove com segurança defeitos na pintura, como riscos, marcas de lavagem e hologramas, devolvendo o acabamento original com alto brilho.',
        benefits: [
        { icon: 'search', text: 'Eliminação de até 95% das imperfeições visuais.' },
        { icon: 'layers', text: 'Reflexo puro e pintura nivelada com precisão.' },
        { icon: 'sun', text: 'Revitaliza a pintura com proteção ao verniz original.' }
        ],
        processSteps: [
        { icon: 'wash', title: 'Lavagem Técnica Detalhada' },
        { icon: 'clay-bar', title: 'Descontaminação de Pintura' },
        { icon: 'tape', title: 'Mascaramento de Áreas Sensíveis' },
        { icon: 'polisher', title: 'Execução do Polimento Técnico' },
        { icon: 'shield-check', title: 'Inspeção Final com Proteção' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para o serviço de Polimento Técnico.'
    },
    {
        id: 'polimento-comercial',
        menuTitle: 'Polimento Comercial',
        panelTitle: 'Pintura Renovada e Pronta para Venda ou Troca',
        description: 'Ideal para valorizar o veículo na hora da venda. Remove micro riscos, devolve o brilho e melhora visualmente o estado geral da pintura.',
        benefits: [
        { icon: 'sparkles', text: 'Revitaliza o brilho sem remover camadas de verniz.' },
        { icon: 'eye', text: 'Melhora imediata na aparência para negociações.' },
        { icon: 'dollar-sign', text: 'Aumenta o valor percebido do veículo.' }
        ],
        processSteps: [
        { icon: 'wash', title: 'Lavagem e Análise Inicial' },
        { icon: 'spray', title: 'Descontaminação Leve' },
        { icon: 'polisher', title: 'Polimento de Realce' },
        { icon: 'droplet', title: 'Finalização com Cera' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para o Polimento Comercial.'
    },

    // HIGIENIZAÇÃO
    {
        id: 'higienizacao-couro',
        menuTitle: 'Higienização de Couro',
        panelTitle: 'Couro Renovado com Hidratação Profunda',
        description: 'Remove sujeiras acumuladas e devolve a flexibilidade natural do couro, prevenindo rachaduras, ressecamento e desgaste visual.',
        benefits: [
        { icon: 'shield-off', text: 'Elimina fungos, ácaros e bactérias.' },
        { icon: 'droplet', text: 'Hidrata profundamente para manter a flexibilidade.' },
        { icon: 'award', text: 'Restaura o toque e visual original do couro.' }
        ],
        processSteps: [
        { icon: 'vacuum', title: 'Aspiração Detalhada' },
        { icon: 'spray', title: 'Aplicação do Produto Limpeza' },
        { icon: 'brush', title: 'Esfregação Técnica' },
        { icon: 'droplet', title: 'Hidratação com Produto Profissional' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para a Higienização de Couro.'
    },
    {
        id: 'higienizacao-tecido',
        menuTitle: 'Higienização de Bancos de Tecido',
        panelTitle: 'Tecidos Livres de Manchas, Odores e Impurezas',
        description: 'Limpeza profunda nos bancos de pano, removendo manchas, odores e microorganismos, promovendo conforto e saúde no interior do carro.',
        benefits: [
        { icon: 'wind', text: 'Neutralização completa de odores.' },
        { icon: 'shield-off', text: 'Eliminação de bactérias, fungos e ácaros.' },
        { icon: 'award', text: 'Restaura a aparência original dos bancos.' }
        ],
        processSteps: [
        { icon: 'vacuum', title: 'Aspiração Profunda' },
        { icon: 'spray', title: 'Aplicação de Detergente Técnico' },
        { icon: 'extractor', title: 'Extração de Sujeira e Umidade' },
        { icon: 'fan', title: 'Secagem com Ar Forçado' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para a Higienização dos Bancos de Tecido.'
    },

    // 🧩 PROTEÇÕES ESPECIAIS
    {
        id: 'cristalizacao-parabrisa',
        menuTitle: 'Cristalização de Para-brisa',
        panelTitle: 'Visibilidade Máxima com Repelência Instantânea',
        description: 'Tratamento repelente que facilita a dispersão da água em alta velocidade, melhorando a visibilidade e segurança em dias chuvosos.',
        benefits: [
        { icon: 'umbrella', text: 'Repele água, sujeira e óleo.' },
        { icon: 'eye', text: 'Visão clara mesmo sob chuva intensa.' },
        { icon: 'clock', text: 'Efeito duradouro com proteção contínua.' }
        ],
        processSteps: [
        { icon: 'spray', title: 'Limpeza Técnica do Vidro' },
        { icon: 'layers', title: 'Aplicação do Cristalizador' },
        { icon: 'clock', title: 'Tempo de Cura Controlado' },
        { icon: 'search', title: 'Inspeção Final' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para a Cristalização de Para-brisa.'
    },
    {
        id: 'tratamento-motor',
        menuTitle: 'Tratamento de Motor',
        panelTitle: 'Desempenho Protegido Contra o Desgaste Extremo',
        description: 'Aplicação de uma película protetora que reduz o atrito entre peças móveis, principalmente em partidas a frio e uso intenso.',
        benefits: [
        { icon: 'zap', text: 'Protege o motor em altas temperaturas.' },
        { icon: 'engine', text: 'Reduz o desgaste interno por atrito.' },
        { icon: 'clock', text: 'Prolonga a vida útil dos componentes internos.' }
        ],
        processSteps: [
        { icon: 'search', title: 'Análise Técnica Inicial' },
        { icon: 'spray', title: 'Aplicação do Produto Protetor' },
        { icon: 'clock', title: 'Ativação do Tratamento' },
        { icon: 'check-circle', title: 'Finalização e Verificação' }
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para o Tratamento de Motor.'
    }
    ];


    
    const DADOS_GALERIA = [
        {
            categoria: 'vitrificacao',
            imageBefore: 'https://images.pexels.com/photos/17589574/pexels-photo-17589574/free-photo-of-porsche-911-carrera-s-preto-e-branco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/6871787/pexels-photo-6871787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Porsche 911 com pintura vitrificada',
            titulo: 'Brilho Espelhado e Proteção de Longa Duração',
            veiculo: 'Porsche 911 Carrera S',
            desafio: 'Cliente buscava a máxima proteção para a pintura nova, evitando os danos do dia a dia e mantendo o brilho profundo da cor preta.',
            solucao: 'Realizamos um polimento de preparação e aplicamos um vitrificador cerâmico com durabilidade de 5 anos, garantindo proteção hidrofóbica e contra micro-riscos.'
        },
        {
            categoria: 'polimento',
            imageBefore: 'https://images.pexels.com/photos/3354641/pexels-photo-3354641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/9514022/pexels-photo-9514022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Reflexo em Lamborghini após polimento',
            titulo: 'Restauração Completa da Pintura',
            veiculo: 'Lamborghini Huracán',
            desafio: 'A pintura apresentava marcas de lavagem incorreta (swirls) e alguns riscos superficiais, o que comprometia o reflexo e a aparência do veículo.',
            solucao: 'Executamos um polimento técnico completo em 3 etapas (corte, refino e lustro), removendo 98% dos defeitos e restaurando o brilho de fábrica.'
        },
        {
            categoria: 'interiores',
            imageBefore: 'https://images.pexels.com/photos/16188905/pexels-photo-16188905/free-photo-of-assentos-bancos-assentos-de-couro-bancos-de-couro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageAfter: 'https://images.pexels.com/photos/7091427/pexels-photo-7091427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Limpeza de interior de couro',
            titulo: 'Renovação e Higienização de Couro',
            veiculo: 'Mercedes-Benz Classe C',
            desafio: 'Os bancos de couro claro estavam com brilho de sujeira e aspecto de ressecado, além do acúmulo de bactérias invisíveis.',
            solucao: 'Realizamos uma higienização profunda com produtos de pH neutro específicos para couro, seguida de uma hidratação completa para devolver a maciez e proteção.'
        },
        // Adicione mais projetos aqui seguindo a mesma estrutura
    ];

    const DADOS_DEPOIMENTOS = [
        { 
            rating: 5, 
            highlight: 'Meu carro parece um espelho!',
            quote: 'Serviço impecável! O brilho da vitrificação é inacreditável, meu carro parece um espelho.', 
            authorName: 'Carlos Monteiro', 
            authorDetail: 'Proprietário de um Audi A4', 
            authorImg: 'assets/img/cliente1.jpg',
            source: {
                name: 'Google',
                // IMPORTANTE: Substitua pela URL real da sua página de reviews do Google!
                url: 'https://www.google.com/maps/search/?api=1&query=Auto+Brilho+Piracicaba' 
            }
        },
        { 
            rating: 5, 
            highlight: 'Superou todas as minhas expectativas.',
            quote: 'Atendimento nota 10 e o resultado do polimento superou todas as minhas expectativas. Recomendo de olhos fechados!', 
            authorName: 'Juliana Alves', 
            authorDetail: 'Proprietária de uma BMW X1', 
            authorImg: 'assets/img/cliente2.jpg',
            source: {
                name: 'Google',
                // IMPORTANTE: Substitua pela URL real da sua página de reviews do Google!
                url: 'https://www.google.com/maps/search/?api=1&query=Auto+Brilho+Piracicaba'
            }
        },
        { 
            rating: 5, 
            highlight: 'Profissionalismo raro de se encontrar.',
            quote: 'Profissionalismo raro de se encontrar. Cuidaram do meu carro como se fosse deles. A higienização interna deixou o carro com cheiro de novo.', 
            authorName: 'Roberta Dias', 
            authorDetail: 'Proprietária de uma Toyota Hilux', 
            authorImg: 'assets/img/cliente3.jpg',
            source: {
                name: 'Google',
                // IMPORTANTE: Substitua pela URL real da sua página de reviews do Google!
                url: 'https://www.google.com/maps/search/?api=1&query=Auto+Brilho+Piracicaba'
            }
        }
    ];

    const DADOS_COMBOS = [
        {
            icon: 'sun',
            title: 'Pacote Renovação e Brilho',
            description: 'Ideal para quem quer valorizar o carro para uma venda ou simplesmente devolver aquele brilho de carro bem cuidado.',
            services: [
                'Lavagem técnica detalhada',
                'Descontaminação da pintura',
                'Polimento Comercial (foco em brilho)',
                'Aplicação de Selante (proteção de até 6 meses)'
            ],
            whatsappMessage: 'Olá, Auto Brilho! Tenho interesse no Pacote Renovação e Brilho.'
        },
        {
            icon: 'shield-check',
            title: 'Pacote Proteção Cerâmica',
            description: 'A melhor escolha para proteção de longo prazo contra as agressões do dia a dia, mantendo o carro limpo por mais tempo.',
            services: [
                'Lavagem e descontaminação completa',
                'Polimento Técnico (preparação e correção)',
                'Vitrificação Cerâmica (proteção de 1 a 3 anos)',
                'Cristalização do para-brisa'
            ],
            whatsappMessage: 'Olá, Auto Brilho! Tenho interesse no Pacote Proteção Cerâmica.'
        },
        {
            icon: 'award',
            title: 'Pacote Detalhamento Premium',
            description: 'A experiência definitiva para entusiastas. Cuidado completo, por dentro e por fora, para um resultado superior ao de fábrica.',
            services: [
                'Todos os itens do Pacote Proteção Cerâmica',
                'Higienização Detalhada do Interior',
                'Hidratação e proteção de bancos de couro',
                'Vitrificação de Plásticos e Faróis'
            ],
            whatsappMessage: 'Olá, Auto Brilho! Tenho interesse no Pacote Detalhamento Premium.'
        }
    ];

    const DADOS_MARCAS = [
        { name: 'Menzerna', imgSrc: 'assets/img/logos/menzerna-logo.png' },
        { name: 'CarPro', imgSrc: 'assets/img/logos/carpro-logo.png' },
        { name: 'Rupes', imgSrc: 'assets/img/logos/rupes-logo.png' },
        { name: 'Vonixx', imgSrc: 'assets/img/logos/vonixx-logo.png'} ,
        { name: 'Koch Chemie', imgSrc: 'assets/img/logos/koch-chemie-logo.png' },
        { name: 'Nasiol', imgSrc: 'assets/img/logos/nasiol-logo.png' },
        { name: 'Soft99', imgSrc: 'assets/img/logos/soft99-logo.png' },
        { name: '3M', imgSrc: 'assets/img/logos/3m-logo.png' },
        { name: 'Gyeon', imgSrc: 'assets/img/logos/gyeon-logo.png' },
        
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

        if (!servicosMenu || !servicosDisplay) return;

        servicosMenu.innerHTML = ''; 

            const icons = {
            // Ícones de Benefícios
            'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
            'sun': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
            'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
            'layers': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
            'award': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>',
            'shield-off': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-8 3v7c0 6 8 10 8 10"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>',
            'wind': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
            'droplet': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>',

            // Ícones de Processo
            'wash': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-3.4-4-6.2-4.2-1.5-.1-2.9.3-4.2 1.1-1.3.8-2.3 2-2.8 3.4-1.2 3.2.7 6.5 3.9 7.7.8.3 1.6.4 2.4.4.7 0 1.4-.1 2.1-.4 1.1-.4 2.1-1.1 2.8-2.1z"></path><path d="M7 21a9 9 0 0 0 11-11c0-1-1-2-2-2s-2 1-2 2a5 5 0 0 1-8 5c0 1-1 2-2 2s-2-1-2-2a9 9 0 0 0 5 11z"></path></svg>',
            'clay-bar': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12.38A10 10 0 1 1 12.62 22a10 10 0 0 1-10.62-9.62z"></path><path d="M12.62 2a10 10 0 0 0-10.62 9.62"></path><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path></svg>',
            'tape': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 7.85 16.15 3.41a2 2 0 0 0-2.83 0L3.41 13.32a2 2 0 0 0 0 2.83l4.44 4.44a2 2 0 0 0 2.83 0L20.59 10.68a2 2 0 0 0 0-2.83z"></path><path d="m9.5 12.5 5-5"></path><path d="M14.5 7.5 11 11"></path><path d="M12 2h4v4h-4z"></path><path d="m15 13.5-5 5"></path></svg>',
            'polisher': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v4"></path><path d="M12 20v2"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M20 12h2"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>',
            'spray': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 17-4.2 3.4a1 1 0 0 1-1.6-1.2L10 14"></path><path d="m16 15 3.4-4.2a1 1 0 0 0-1.2-1.6L14 10"></path><path d="M21 3h-5"></path><path d="M16 3h-2"></path><path d="M12 3H9"></path><path d="M9 21H4"></path><path d="M4 16v-2"></path><path d="M4 12V9"></path></svg>',
            'vacuum': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8c-1.7-1.7-4-2.7-6.5-2.9"></path><path d="M3.2 16.8c0 2.2 1.8 4 4 4h10"></path><path d="M5 12a7 7 0 1 0 14 0h-4a3 3 0 0 1-6 0H5Z"></path><path d="M18.8 5.2c1.7 1.7 2.9 4 3.2 6.5"></path></svg>',
            'extractor': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.6 2.2c-1.3.4-2.5.9-3.5 1.7C4.1 6 2 10.3 2 15h12c0-4.7-2.1-9-5.1-11.1-1-.7-2.1-1.2-3.3-1.7Z"></path><path d="M5.5 15a7.5 7.5 0 0 0 15 0H5.5Z"></path><path d="m22 15-1.5-1.5"></path><path d="m22 11-1.5-1.5"></path></svg>'
        };

        function renderServiceContent(service) {
            let processHtml = '';
            if (service.processSteps && service.processSteps.length > 0) {
                processHtml = `
                    <h4 class="specs-title">Etapas do Nosso Processo</h4>
                    <ol class="processo-etapas">
                        ${service.processSteps.map(step => `
                            <li>
                                <div class="etapa-icone">
                                    ${icons[step.icon] || ''}
                                </div>
                                <div class="etapa-texto">
                                    <strong>${step.title}</strong>
                                </div>
                            </li>
                        `).join('')}
                    </ol>
                `;
            }

            servicosDisplay.innerHTML = `
                <div id="${service.id}-content" class="service-content-panel active">
                    <h3>${service.panelTitle}</h3>
                    <p class="service-description">${service.description}</p>
                    
                    <h4 class="specs-title">Principais Benefícios</h4>
                    <ul class="service-specs-list">
                        ${service.benefits.map(benefit => `<li>${icons[benefit.icon] || ''}<span>${benefit.text}</span></li>`).join('')}
                    </ul>

                    ${processHtml}
                    
                    <a href="#" class="cta-servico cta-whatsapp" data-message="${service.ctaMessage}">Agendar Avaliação</a>
                </div>
            `;
            setupCtaLinks();
        }

        // =================== LÓGICA PARA MONTAR O MENU E CHAMAR A FUNÇÃO ===================
        servicosMenu.innerHTML = '';
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

    // ===================================================================
    // ============= FUNÇÃO DA GALERIA (VERSÃO ATUALIZADA) ===============
    // ===================================================================
    function initGallery() {
        // --- Seletores dos Elementos ---
        const galleryGrid = document.querySelector('.gallery-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const loadMoreBtn = document.getElementById('load-more-btn');
        
        // --- Seletores do Novo "Modo Detalhe" ---
        const detailModal = document.getElementById('gallery-detail-modal');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const modalOverlay = detailModal.querySelector('.modal-overlay');
        const modalTitle = document.getElementById('modal-title');
        const modalVehicle = document.getElementById('modal-vehicle');
        const modalChallenge = document.getElementById('modal-challenge');
        const modalSolution = document.getElementById('modal-solution');
        const modalBeforeImg = document.getElementById('modal-before-img');
        const modalAfterImg = document.getElementById('modal-after-img');
        const sliderRange = document.getElementById('slider-range');
        const afterImageContainer = document.getElementById('after-image-container');
        const sliderHandle = document.getElementById('slider-handle');

        // --- Validação ---
        if (!galleryGrid || !loadMoreBtn || !detailModal) {
            console.error("Elementos essenciais da galeria não encontrados.");
            return;
        }

        // --- Configurações ---
        const ITEMS_PER_LOAD = 4; // Aumentei um pouco o padrão
        let currentFilter = 'todos';
        let itemsShown = 0;
        let allGalleryItems = []; // Array para guardar os dados e facilitar o acesso

        // --- Funções do Slider ---
        function updateSlider(value) {
            afterImageContainer.style.clipPath = `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`;
            sliderHandle.style.left = `${value}%`;
        }

        sliderRange.addEventListener('input', (e) => {
            updateSlider(e.target.value);
        });

        // --- Funções do Modal ---
        function openDetailModal(itemData) {
            modalTitle.textContent = itemData.titulo;
            modalVehicle.textContent = itemData.veiculo;
            modalChallenge.textContent = itemData.desafio;
            modalSolution.textContent = itemData.solucao;
            modalBeforeImg.src = itemData.imageBefore;
            modalAfterImg.src = itemData.imageAfter;
            
            // Reseta o slider para a posição inicial (meio)
            sliderRange.value = 50;
            updateSlider(50);
            
            detailModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impede o scroll da página ao fundo
        }

        function closeDetailModal() {
            detailModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        modalCloseBtn.addEventListener('click', closeDetailModal);
        modalOverlay.addEventListener('click', closeDetailModal);

        // --- Funções da Galeria ---
        function createGalleryItemHTML(itemData, index) {
            // Agora o subtitulo é o 'veiculo'
            return `
                <div class="gallery-item" data-index="${index}">
                    <img src="${itemData.imageBefore}" alt="${itemData.alt}" loading="lazy">
                    <div class="gallery-item-info">
                        <h3>${itemData.titulo}</h3>
                        <p>${itemData.veiculo}</p>
                        <span class="view-result-prompt">Ver Transformação</span>
                    </div>
                </div>
            `;
        }

        function populateGrid() {
            allGalleryItems = DADOS_GALERIA; // Carrega os dados
            galleryGrid.innerHTML = allGalleryItems.map((itemData, index) => createGalleryItemHTML(itemData, index)).join('');
            
            // Adiciona o evento de clique na grade
            galleryGrid.addEventListener('click', (e) => {
                const clickedItem = e.target.closest('.gallery-item');
                if (clickedItem) {
                    const itemIndex = parseInt(clickedItem.dataset.index, 10);
                    const itemData = allGalleryItems[itemIndex];
                    if (itemData) {
                        openDetailModal(itemData);
                    }
                }
            });
        }

        function showItems() {
            const filteredItems = allGalleryItems.filter(item => 
                currentFilter === 'todos' || item.categoria === currentFilter
            );

            const gridItems = galleryGrid.querySelectorAll('.gallery-item');
            
            gridItems.forEach(gridItem => {
                const itemIndex = parseInt(gridItem.dataset.index, 10);
                const itemData = allGalleryItems[itemIndex];
                
                // Verifica se o item pertence ao filtro atual
                const isInFilter = filteredItems.includes(itemData);
                
                // Verifica se o item está dentro do limite a ser exibido
                const itemPositionInFilteredList = filteredItems.indexOf(itemData);
                const shouldBeVisible = isInFilter && itemPositionInFilteredList < itemsShown;

                gridItem.style.display = shouldBeVisible ? 'block' : 'none';
            });

            loadMoreBtn.style.display = itemsShown >= filteredItems.length ? 'none' : 'block';
        }

        function handleFilterClick(e) {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            currentFilter = e.currentTarget.dataset.filter;
            itemsShown = ITEMS_PER_LOAD; // Reseta a contagem
            showItems();
        }

        function loadMoreItems() {
            itemsShown += ITEMS_PER_LOAD;
            showItems();
        }

        // --- INICIALIZAÇÃO ---
        filterButtons.forEach(button => button.addEventListener('click', handleFilterClick));
        loadMoreBtn.addEventListener('click', loadMoreItems);
        
        populateGrid();
        itemsShown = ITEMS_PER_LOAD;
        showItems();
    }

    // ===================================================================
    // ============= FUNÇÃO DOS FEEDBACKS (VERSÃO ATUALIZADA) ===============
    // ===================================================================
    function initTestimonialCarousel() {
        const carouselContainer = document.querySelector('.testimonial-carousel');

        // Verificação de segurança, garantindo que tudo que precisamos existe
        if (!carouselContainer || typeof DADOS_DEPOIMENTOS === 'undefined' || DADOS_DEPOIMENTOS.length === 0) {
            console.error("Carrossel de depoimentos não pôde ser iniciado: contêiner ou dados não encontrados.");
            return;
        }

        carouselContainer.innerHTML = ''; // Limpa o container para começar

        // Função para gerar o HTML de um único card de depoimento
        const createTestimonialCardHTML = (testimonial) => {
            let sourceHTML = '';
            if (testimonial.source) {
                if (testimonial.source.url) {
                    sourceHTML = `<a href="${testimonial.source.url}" class="testimonial-source" target="_blank" rel="noopener noreferrer">Avaliação via ${testimonial.source.name}</a>`;
                } else {
                    sourceHTML = `<span class="testimonial-source">Via ${testimonial.source.name}</span>`;
                }
            }
            return `
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}<span class="rating-off">${'★'.repeat(5 - testimonial.rating)}</span></div>
                        ${sourceHTML}
                    </div>
                    <h3 class="testimonial-highlight">"${testimonial.highlight}"</h3>
                    <p class="testimonial-quote">${testimonial.quote}</p>
                    <div class="testimonial-author">
                        <img src="${testimonial.authorImg}" alt="Foto de ${testimonial.authorName}" loading="lazy">
                        <div>
                            <h4>${testimonial.authorName}</h4>
                            <span>${testimonial.authorDetail}</span>
                        </div>
                    </div>
                </div>`;
        };

        // --- LÓGICA DO CARROSSEL INFINITO COM DOIS TRILHOS ---

        // 1. Cria o PRIMEIRO trilho e o popula com os depoimentos
        const scroller1 = document.createElement('div');
        scroller1.className = 'testimonial-scroller';
        DADOS_DEPOIMENTOS.forEach(testimonial => {
            scroller1.innerHTML += createTestimonialCardHTML(testimonial);
        });

        // 2. Cria o SEGUNDO trilho (cópia exata) para o efeito de loop
        const scroller2 = document.createElement('div');
        scroller2.className = 'testimonial-scroller';
        scroller2.setAttribute('aria-hidden', 'true'); // Oculta para leitores de tela para não ler conteúdo duplicado
        DADOS_DEPOIMENTOS.forEach(testimonial => {
            scroller2.innerHTML += createTestimonialCardHTML(testimonial);
        });

        // 3. Adiciona os dois trilhos ao contêiner principal
        carouselContainer.appendChild(scroller1);
        carouselContainer.appendChild(scroller2);
    }

    // ===================================================================
    // ============= FUNÇÃO DOS LOGOS  (VERSÃO ATUALIZADA) ===============
    // ===================================================================

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

    // ===================================================================
    // ============= FUNÇÃO DOS COMBOS   (VERSÃO ATUALIZADA) ===============
    // ===================================================================

    function initContactSection() {
        const container = document.getElementById('combo-packages-container');
        
        // ESTA É A VERIFICAÇÃO CORRIGIDA (SEM O "window.")
        if (!container || !DADOS_COMBOS || DADOS_COMBOS.length === 0) {
            return;
        }

        const icons = {
            'sun': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
            'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
            'award': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>'
        };

        DADOS_COMBOS.forEach(combo => {
            const comboCard = document.createElement('div');
            comboCard.className = 'combo-card';
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(combo.whatsappMessage)}`;
            comboCard.innerHTML = `
                <div class="combo-icon">${icons[combo.icon] || ''}</div>
                <h3 class="combo-title">${combo.title}</h3>
                <p class="combo-description">${combo.description}</p>
                <ul class="combo-services-list">
                    ${combo.services.map(service => `<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>${service}</li>`).join('')}
                </ul>
                <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="cta-combo">Tenho Interesse</a>
            `;
            container.appendChild(comboCard);
        });

        const toggleButton = document.getElementById('toggle-custom-quote');
        const content = document.getElementById('custom-quote-content');
        if (toggleButton && content) {
            toggleButton.addEventListener('click', () => {
                toggleButton.classList.toggle('active');
                content.classList.toggle('active');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    }

    // ===================================================================
    // ============= FUNÇÃO CONTATOS   (VERSÃO ATUALIZADA) ===============
    // ===================================================================
        
    function initQuoteGenerator() {
        const quoteGenerator = document.querySelector('.quote-generator-container');
        if (!quoteGenerator) return;

        const allInputs = quoteGenerator.querySelectorAll('input, textarea');
        const messagePreview = document.getElementById('whatsapp-message-preview');
        const generateBtn = document.getElementById('generate-whatsapp-btn');
        
        if(!messagePreview || !generateBtn) return;

        function updatePreviewMessage() {
            const modelo = quoteGenerator.querySelector('#veiculo-modelo')?.value.trim() || '';
            const ano = quoteGenerator.querySelector('#veiculo-ano')?.value.trim() || '';
            const observacoes = quoteGenerator.querySelector('#observacoes')?.value.trim() || '';
            const localInput = quoteGenerator.querySelector('input[name="local-atendimento"]:checked');
            const local = localInput ? localInput.value : 'não informado';
            
            let servicosSelecionados = [];
            quoteGenerator.querySelectorAll('input[name="servico"]:checked').forEach(cb => {
                let serviceText = cb.value;
                const serviceGroup = cb.closest('.service-group');
                if(serviceGroup) {
                    const subOptions = serviceGroup.querySelector('.sub-options');
                    if (subOptions) {
                        const selectedRadio = subOptions.querySelector('input[type="radio"]:checked');
                        const selectedCheckboxes = subOptions.querySelectorAll('input[type="checkbox"]:checked');
                        if (selectedRadio) {
                            serviceText += ` (${selectedRadio.value})`;
                        } else if (selectedCheckboxes.length > 0) {
                            const additionalTexts = Array.from(selectedCheckboxes).map(addCb => addCb.value);
                            serviceText += `: ${additionalTexts.join(', ')}`;
                        }
                    }
                }
                servicosSelecionados.push(serviceText);
            });

            let message = `Olá, Auto Brilho! Gostaria de uma análise para o meu veículo.\n\n`;
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
            const finalLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(finalLink, '_blank');
        });

        updatePreviewMessage();
    }

    // ===================================================================
    // ============= INICIALIZAÇÃO ROBUSTA DOS MÓDULOS =================
    // ===================================================================

    // Envolve cada inicialização em um try...catch para que um erro em um
    // módulo não impeça os outros de funcionarem.

    function safeInit(name, initFunction) {
        try {
            initFunction();
        } catch (error) {
            console.error(`Erro ao inicializar o módulo ${name}:`, error);
        }
    }

    safeInit('HamburgerMenu', initHamburgerMenu);
    safeInit('FloatingWhatsappButton', initFloatingWhatsappButton);
    safeInit('ServicesSection', initServicesSection);
    safeInit('ContactSection', initContactSection);
    safeInit('QuoteGenerator', initQuoteGenerator); // Mantenha esta chamada!
    safeInit('Gallery', initGallery);
    safeInit('TestimonialCarousel', initTestimonialCarousel);
    safeInit('LogoCarousel', initLogoCarousel);
    safeInit('CtaLinks', setupCtaLinks);
});