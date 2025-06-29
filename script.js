document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // =================== CONFIGURAÇÕES GLOBAIS E DADOS =================
    // ===================================================================

    const WHATSAPP_NUMBER = "5519993040543";
    const BASE_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

    const DADOS_SERVICOS = [
    // LAVAGEM
    {
        id: 'lavagem-tecnica',
        menuTitle: 'Lavagem Técnica',
        panelTitle: 'Limpeza Profunda e Segura para o Seu Veículo',
        description: 'Processo de lavagem que utiliza técnicas e produtos específicos para limpar o veículo de forma detalhada, preservando a pintura e os componentes.',
        benefits: [
        { icon: 'shield-check', text: 'Remoção segura de sujeiras sem danificar a pintura.' }, // Usando shield-check para proteção
        { icon: 'sparkles', text: 'Brilho intenso e duradouro pós-lavagem.' }, // Usando sparkles para brilho
        { icon: 'droplet', text: 'Utilização de produtos de pH neutro e ceras protetoras.' } // Usando droplet para líquidos/produtos
        ],
        processSteps: [
        { icon: 'droplet', title: 'Pré-lavagem com jatos suaves' }, // Água/líquido
        { icon: 'brush', title: 'Aplicação de shampoo automotivo' }, // Escova/aplicação
        { icon: 'glove', title: 'Lavagem manual com luva de microfibra' }, // Luva
        { icon: 'droplet', title: 'Enxágue completo' }, // Água/líquido
        { icon: 'dry', title: 'Secagem com toalhas de microfibra' } // Secagem
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma Lavagem Técnica.'
    },
    {
        id: 'lavagem-detalhada',
        menuTitle: 'Lavagem Detalhada',
        panelTitle: 'Cada Detalhe Impecável, por Dentro e por Fora',
        description: 'Lavagem que vai além, focando nos mínimos detalhes internos e externos, garantindo uma limpeza completa e um acabamento premium.',
        benefits: [
        { icon: 'search', text: 'Limpeza minuciosa em cada canto do veículo.' }, // Busca/detalhe
        { icon: 'award', text: 'Interior e exterior com aparência e cheiro de novo.' }, // Qualidade/novo
        { icon: 'protect', text: 'Cuidado extra com as superfícies mais delicadas.' } // Proteção
        ],
        processSteps: [
        { icon: 'car-wash', title: 'Lavagem externa com produtos premium' }, // Carro/lavagem
        { icon: 'brush', title: 'Limpeza detalhada de rodas e caixas de roda' }, // Escova/limpeza
        { icon: 'vacuum', title: 'Aspiração e limpeza interna completa' }, // Aspirador
        { icon: 'brush', title: 'Limpeza de painel, portas e console' }, // Escova/limpeza
        { icon: 'sparkles', title: 'Aplicação de condicionadores e protetores' } // Brilho/finalização
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma Lavagem Detalhada.'
    },
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
        { icon: 'car-wash', title: 'Lavagem Técnica Detalhada' }, // Carro/lavagem
        { icon: 'hand-sparkles', title: 'Descontaminação de Pintura' }, // Mão/brilho
        { icon: 'polisher', title: 'Correção de Pintura (se necessário)' }, // Politriz
        { icon: 'layers', title: 'Aplicação do Nano Revestimento' }, // Camadas
        { icon: 'search', title: 'Cura e Inspeção Final' } // Busca/inspeção
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
        { icon: 'sync', text: 'Recupera a cor original dos plásticos externos.' }, // Recarregar/sincronizar
        { icon: 'layers', text: 'Cria um escudo resistente contra desgaste prematuro.' } // Camadas
        ],
        processSteps: [
        { icon: 'brush', title: 'Limpeza e Preparo da Superfície' }, // Escova
        { icon: 'spray-can', title: 'Aplicação do Vitrificador' }, // Spray
        { icon: 'hourglass', title: 'Cura do Produto' }, // Ampulheta
        { icon: 'search', title: 'Inspeção Final' } // Busca/inspeção
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
        { icon: 'search', text: 'Eliminação de até 95% das imperfeições visuais.' }, // Busca/inspeção
        { icon: 'layers', text: 'Reflexo puro e pintura nivelada com precisão.' }, // Camadas
        { icon: 'sun', text: 'Revitaliza a pintura com proteção ao verniz original.' } // Sol
        ],
        processSteps: [
        { icon: 'car-wash', title: 'Lavagem Técnica Detalhada' }, // Carro/lavagem
        { icon: 'hand-sparkles', title: 'Descontaminação de Pintura' }, // Mão/brilho
        { icon: 'tape', title: 'Mascaramento de Áreas Sensíveis' }, // Fita
        { icon: 'polisher', title: 'Execução do Polimento Técnico' }, // Politriz
        { icon: 'shield-check', title: 'Inspeção Final com Proteção' } // Escudo/check
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para o serviço de Polimento Técnico.'
    },
    {
        id: 'polimento-comercial',
        menuTitle: 'Polimento Comercial',
        panelTitle: 'Pintura Renovada e Pronta para Venda ou Troca',
        description: 'Ideal para valorizar o veículo na hora da venda. Remove micro riscos, devolve o brilho e melhora visualmente o estado geral da pintura.',
        benefits: [
        { icon: 'sparkles', text: 'Revitaliza o brilho sem remover camadas de verniz.' }, // Brilho
        { icon: 'eye', text: 'Melhora imediata na aparência para negociações.' }, // Olho
        { icon: 'dollar-sign', text: 'Aumenta o valor percebido do veículo.' } // Dinheiro
        ],
        processSteps: [
        { icon: 'car-wash', title: 'Lavagem e Análise Inicial' }, // Carro/lavagem
        { icon: 'hand-sparkles', title: 'Descontaminação Leve' }, // Mão/brilho
        { icon: 'polisher', title: 'Polimento de Realce' }, // Politriz
        { icon: 'droplet', title: 'Finalização com Cera' } // Líquido/gota
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
        { icon: 'bacteria', text: 'Elimina fungos, ácaros e bactérias.' }, // Bactérias
        { icon: 'droplet', text: 'Hidrata profundamente para manter a flexibilidade.' }, // Líquido/gota
        { icon: 'award', text: 'Restaura o toque e visual original do couro.' } // Qualidade
        ],
        processSteps: [
        { icon: 'vacuum', title: 'Aspiração Detalhada' }, // Aspirador
        { icon: 'spray-can', title: 'Aplicação do Produto Limpeza' }, // Spray
        { icon: 'brush', title: 'Esfregação Técnica' }, // Escova
        { icon: 'droplet', title: 'Hidratação com Produto Profissional' } // Líquido/gota
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para a Higienização de Couro.'
    },
    {
        id: 'higienizacao-tecido',
        menuTitle: 'Higienização de Bancos de Tecido',
        panelTitle: 'Tecidos Livres de Manchas, Odores e Impurezas',
        description: 'Limpeza profunda nos bancos de pano, removendo manchas, odores e microorganismos, promovendo conforto e saúde no interior do carro.',
        benefits: [
        { icon: 'wind', text: 'Neutralização completa de odores.' }, // Vento
        { icon: 'bacteria', text: 'Eliminação de bactérias, fungos e ácaros.' }, // Bactérias
        { icon: 'award', text: 'Restaura a aparência original dos bancos.' } // Qualidade
        ],
        processSteps: [
        { icon: 'vacuum', title: 'Aspiração Profunda' }, // Aspirador
        { icon: 'spray-can', title: 'Aplicação de Detergente Técnico' }, // Spray
        { icon: 'sweeper', title: 'Extração de Sujeira e Umidade' }, // Extrator/limpador
        { icon: 'fan', title: 'Secagem com Ar Forçado' } // Ventilador
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
        { icon: 'umbrella', text: 'Repele água, sujeira e óleo.' }, // Guarda-chuva
        { icon: 'eye', text: 'Visão clara mesmo sob chuva intensa.' }, // Olho
        { icon: 'hourglass', text: 'Efeito duradouro com proteção contínua.' } // Ampulheta
        ],
        processSteps: [
        { icon: 'spray-can', title: 'Limpeza Técnica do Vidro' }, // Spray
        { icon: 'layers', title: 'Aplicação do Cristalizador' }, // Camadas
        { icon: 'hourglass', title: 'Tempo de Cura Controlado' }, // Ampulheta
        { icon: 'search', title: 'Inspeção Final' } // Busca/inspeção
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para a Cristalização de Para-brisa.'
    },
    {
        id: 'tratamento-motor',
        menuTitle: 'Tratamento de Motor',
        panelTitle: 'Desempenho Protegido Contra o Desgaste Extremo',
        description: 'Aplicação de uma película protetora que reduz o atrito entre peças móveis, principalmente em partidas a frio e uso intenso.',
        benefits: [
        { icon: 'bolt', text: 'Protege o motor em altas temperaturas.' }, // Raio/energia
        { icon: 'engine', text: 'Reduz o desgaste interno por atrito.' }, // Motor
        { icon: 'hourglass', text: 'Prolonga a vida útil dos componentes internos.' } // Ampulheta
        ],
        processSteps: [
        { icon: 'search', title: 'Análise Técnica Inicial' }, // Busca/inspeção
        { icon: 'spray-can', title: 'Aplicação do Produto Protetor' }, // Spray
        { icon: 'hourglass', title: 'Ativação do Tratamento' }, // Ampulheta
        { icon: 'check-circle', title: 'Finalização e Verificação' } // Check/círculo
        ],
        ctaMessage: 'Olá! Gostaria de agendar uma avaliação para o Tratamento de Motor.'
    }
    ];

    const DADOS_GALERIA = [
        {
            categoria: ['lavagens', 'lavagem-detalhada'],
            imageBefore: '/assets/img/gallery/creta.avif',
            imageAfter: '/assets/img/gallery/creta2.avif',
            alt: 'Lavagem detalhada do Hyundai Creta Comfort',
            titulo: 'Lavagem Detalhada a Domicílio',
            veiculo: 'Hyundai Creta Comfort',
            desafio: 'O cliente buscava uma limpeza externa minuciosa sem precisar sair de casa. O veículo apresentava sujeiras de chuva e fuligem urbana acumulada em áreas detalhadas.',
            solucao: 'Executamos uma lavagem detalhada com produtos automotivos de alta performance, utilizando técnica de duas etapas e microfibra. Todo o atendimento foi realizado na residência do cliente, com comodidade e zero impacto no ambiente.'
        },
        {
            categoria: ['lavagens', 'lavagem-detalhada'],
            imageBefore: '/assets/img/gallery/lavasimples.avif',
            imageAfter: '/assets/img/gallery/lavasimples2.avif',
            alt: 'Lavagem externa do Hyundai Santa Fé',
            titulo: 'Lavagem Externa',
            veiculo: 'Hyundai Santa Fé',
            desafio: 'Veículo com sujeira superficial acumulada por uso urbano e exposição ao tempo, afetando o brilho natural da pintura.',
            solucao: 'Realizamos uma lavagem completa com shampoo neutro, enxágue pressurizado e secagem com toalhas de microfibra, restaurando o brilho e a presença do SUV com segurança.'
        },
        {
            categoria: ['higienizacoes'],
            imageBefore: '/assets/img/gallery/higiinterna.avif',
            imageAfter: '/assets/img/gallery/higiinterna2.avif',
            alt: 'Higienização interna do Hyundai HB20X',
            titulo: 'Higienização Interna Profunda',
            veiculo: 'Hyundai HB20X',
            desafio: 'O interior apresentava acúmulo de sujeira em áreas de uso frequente, como volante, painel e bancos, além de odor causado por umidade e bactérias invisíveis.',
            solucao: 'Realizamos uma higienização completa com vaporização e produtos antibacterianos, eliminando impurezas, maus odores e devolvendo o aspecto renovado ao interior do veículo.'
        },
        {
            categoria: ['lavagens', 'polimentos'],
            imageBefore: '/assets/img/gallery/onix.avif',
            imageAfter: '/assets/img/gallery/onix2.avif',
            alt: 'Lavagem completa e polimento técnico do Chevrolet Onix',
            titulo: 'Lavagem Detalhada + Polimento Técnico',
            veiculo: 'Chevrolet Onix',
            desafio: 'O veículo apresentava acúmulo de sujeira em áreas de difícil acesso, motor com poeira incrustada e a pintura já começava a mostrar sinais de opacidade e micro riscos.',
            solucao: 'Realizamos uma lavagem detalhada em todo o veículo, incluindo o cofre do motor com segurança. Finalizamos com um polimento técnico que restaurou o brilho e reduziu as imperfeições da pintura, devolvendo o aspecto de carro novo.'
        },
        {
            categoria: ['lavagens', 'lavagem-tecnica'],
            imageBefore: '/assets/img/gallery/chevro.avif',
            imageAfter: '/assets/img/gallery/chevro2.avif',
            alt: 'Lavagem técnica em Chevrolet S10 4x4',
            titulo: 'Lavagem Técnica',
            veiculo: 'Chevrolet S10 4x4',
            desafio: 'A S10 apresentava acúmulo de sujeira em áreas críticas como rodas, para-lamas internos e grade frontal, comuns após uso em estrada ou áreas rurais.',
            solucao: 'Aplicamos uma lavagem técnica completa com foco nos detalhes, remoção de sujeiras pesadas e revitalização visual. O resultado foi um acabamento de alto padrão, sem comprometer a pintura ou partes sensíveis.'
        },
        {
            categoria: ['lavagens', 'lavagem-tecnica'],
            imageBefore: '/assets/img/gallery/nivus.avif',
            imageAfter: '/assets/img/gallery/nivus2.avif',
            alt: 'Lavagem técnica em Volkswagen Nivus',
            titulo: 'Lavagem Técnica',
            veiculo: 'Volkswagen Nivus',
            desafio: 'O veículo apresentava marcas de uso diário, acúmulo de sujeiras em detalhes da carroceria e rodas sem o brilho original.',
            solucao: 'Realizamos uma lavagem técnica completa com foco na remoção precisa das impurezas, aplicação de produtos específicos para revitalizar o acabamento e garantir brilho duradouro com segurança para a pintura.'
        },
        {
            categoria: ['lavagens', 'lavagem-detalhada'],
            imageBefore: '/assets/img/gallery/hrv.avif',
            imageAfter: '/assets/img/gallery/hrv2.avif',
            alt: 'Lavagem detalhada em Honda HR-V',
            titulo: 'Lavagem Detalhada a Domicílio',
            veiculo: 'Honda HR-V',
            desafio: 'O veículo apresentava sujeira acumulada nos detalhes da carroceria e rodas, com aspecto opaco causado por lavagens anteriores incorretas.',
            solucao: 'Nossa equipe foi até o local do cliente e realizou uma lavagem detalhada completa, utilizando produtos neutros e equipamentos profissionais para devolver o brilho e a proteção da pintura, sem comprometer o acabamento.'
        },
    ];

    const DADOS_DEPOIMENTOS = [
        { 
            rating: 5, 
            highlight: 'Meu carro parece um espelho!',
            quote: 'Serviço impecável! O brilho da vitrificação é inacreditável, meu carro parece um espelho.', 
            authorName: 'Carlos Monteiro', 
            authorDetail: 'Proprietário de um Audi A4', 
            authorImg: 'assets/img/feedbacks/cliente1.avif',
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
            authorImg: 'assets/img/feedbacks/cliente2.avif',
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
            authorImg: 'assets/img/feedbacks/cliente3.avif',
            source: {
                name: 'Google',
                // IMPORTANTE: Substitua pela URL real da sua página de reviews do Google!
                url: 'https://www.google.com/maps/search/?api=1&query=Auto+Brilho+Piracicaba'
            }
        }
    ];

    const DADOS_COMBOS = [
        {
            icon: 'sparkles', // Ícone para brilho e renovação
            title: 'Pacote Renovação e Brilho',
            description: 'Perfeito para quem quer destacar o carro visualmente, seja para venda, troca ou para recuperar o brilho de um carro bem cuidado.',
            services: [
            'Lavagem Detalhada', // Usando "Lavagem Detalhada" do DADOS_SERVICOS
            'Descontaminação de Pintura', // Nome do passo de processo em Vitrificação/Polimento
            'Polimento Comercial', // Nome do serviço
            'Finalização com Cera Protetora (até 6 meses)' // Descrição do processo, não um serviço individual
            ],
            whatsappMessage: 'Olá! Tenho interesse no Pacote Renovação e Brilho.'
        },
        {
            icon: 'shield-check', // Ícone para proteção
            title: 'Pacote Proteção Cerâmica',
            description: 'Indicado para quem busca proteção de médio a longo prazo, com estética impecável e resistência contra os agentes do dia a dia.',
            services: [
            'Lavagem Técnica', // Usando "Lavagem Técnica" do DADOS_SERVICOS
            'Descontaminação de Pintura', // Nome do passo de processo
            'Polimento Técnico', // Nome do serviço
            'Vitrificação da Pintura', // Nome do serviço
            'Cristalização de Para-brisa' // Nome do serviço
            ],
            whatsappMessage: 'Olá! Tenho interesse no Pacote Proteção Cerâmica.'
        },
        {
            icon: 'award', // Ícone para qualidade premium
            title: 'Pacote Detalhamento Premium',
            description: 'Um cuidado completo e superior ao padrão de fábrica. Ideal para quem exige o máximo em estética, proteção e conforto.',
            services: [
            'Todos os itens do Pacote Proteção Cerâmica', // Mantendo para indicar abrangência
            'Higienização de Couro', // Nome do serviço
            'Higienização de Bancos de Tecido', // Nome do serviço (adicionei ambos se for o caso)
            'Vitrificação de Plásticos' // Nome do serviço
            ],
            whatsappMessage: 'Olá! Tenho interesse no Pacote Detalhamento Premium.'
        }
    ];

    const DADOS_MARCAS = [
        { name: 'Menzerna', imgSrc: 'assets/img/logos/menzerna-logo.avif' },
        { name: 'CarPro', imgSrc: 'assets/img/logos/carpro-logo.avif' },
        { name: 'Rupes', imgSrc: 'assets/img/logos/rupes-logo.avif' },
        { name: 'Vonixx', imgSrc: 'assets/img/logos/vonixx-logo.avif'} ,
        { name: 'Koch Chemie', imgSrc: 'assets/img/logos/koch-chemie-logo.avif' },
        { name: 'Nasiol', imgSrc: 'assets/img/logos/nasiol-logo.avif' },
        { name: 'Soft99', imgSrc: 'assets/img/logos/soft99-logo.avif' },
        { name: '3M', imgSrc: 'assets/img/logos/3m-logo.avif' },
        { name: 'Gyeon', imgSrc: 'assets/img/logos/gyeon-logo.avif' },
        
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
        const closeMenuBtn = document.getElementById('close-menu-btn'); // <-- Reativado

        if (!hamburgerBtn || !mobileMenu || !closeMenuBtn) {
            console.error("Erro: Elementos essenciais do menu mobile não foram encontrados.");
            return;
        }

        const openMenu = () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        // O hambúrguer AGORA SÓ ABRE o menu
        hamburgerBtn.addEventListener('click', openMenu);
        
        // O botão 'X' e os links AGORA SÓ FECHAM o menu
        closeMenuBtn.addEventListener('click', closeMenu);
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Efeito de scroll no header continua igual
        window.addEventListener('scroll', () => {
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 50);
            }
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
            'protect': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>', // Ícone de escudo simples para proteção
            'wind': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
            'droplet': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>',
            'sync': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"></path><path d="m16.24 7.76 2.83-2.83"></path><path d="M20 12h-4"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M12 20v-4"></path><path d="m7.76 16.24-2.83 2.83"></path><path d="M4 12h4"></path><path d="m7.76 7.76-2.83-2.83"></path></svg>', // Ícone para 'refresh-cw'
            'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.8 4.6L5 9.5l4.2 1.9L12 16l1.8-4.6L19 9.5l-4.2-1.9L12 3Z"/><path d="m20 16-1.2 3L15 20l3-1.2L20 22l1.2-3L24 16l-3 1.2Z"/><path d="M5 19l-1-2.5L1.5 15l2.5-1L5 11.5l1 2.5L8.5 15l-2.5 1L5 19Z"/></svg>', // Ícone para 'sparkles'
            'eye': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
            'dollar-sign': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
            'umbrella': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12V2C6.5 2 2 6.5 2 12a10 10 0 0 0 20 0c0-5.5-4.5-10-10-10Z"/><path d="M12 2v20"/></svg>',
            'bolt': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7Z"/></svg>', // Ícone para 'zap'
            'engine': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4H9.5L6 7l2 6h8l2-6Z"/><path d="M2 20h20"/><path d="M12 13V7"/><path d="m14 13 2 5-2 2-2-2-2-5Z"/></svg>', // Ícone para 'engine'
            'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
            'bacteria': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2.05L7.95 2.05A10.05 10.05 0 0 0 2.05 12.1L2.05 12A10.05 10.05 0 0 0 12.1 21.95L12 21.95A10.05 10.05 0 0 0 21.95 11.9L21.95 12A10.05 10.05 0 0 0 11.9 2.05L12 2.05A10.05 10.05 0 0 0 8 2.05Z"/><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/></svg>', // Ícone para 'bacteria'

            // Ícones de Processo (Novos ou Padronizados)
            'car-wash': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="15" rx="2"/><path d="M7 19v-2"/><path d="M12 19v-2"/><path d="M17 19v-2"/><path d="M4 11h16"/><path d="M4 15h16"/><line x1="8" y1="5" x2="8" y2="19"/><line x1="16" y1="5" x2="16" y2="19"/></svg>', // Carro com lavagem
            'glove': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 10V5c0-1.1.9-2 2-2s2 .9 2 2v5"/><path d="M10 21V10c0-1.1-.9-2-2-2s-2 .9-2 2v11"/><path d="M6 15h12c1.1 0 2-.9 2-2s-.9-2-2-2H6c-1.1 0-2 .9-2 2s.9 2 2 2z"/><line x1="10" y1="15" x2="10" y2="21"/><line x1="14" y1="15" x2="14" y2="21"/></svg>', // Luva
            'dry': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v6l4 2"/></svg>', // Secagem
            'hand-sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17.5V9a2.5 2.5 0 0 1 2.5-2.5h10A2.5 2.5 0 0 1 19 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 2 17.5Z"/><path d="M22 13 19 10"/><path d="M18.5 16.5 19 17.5"/><path d="M16 20.5 19 17.5"/><path d="M14 17 19 12"/><path d="M17 19 19 17"/></svg>', // Mão com brilho (para descontaminação/preparo)
            'tape': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 7.85 16.15 3.41a2 2 0 0 0-2.83 0L3.41 13.32a2 2 0 0 0 0 2.83l4.44 4.44a2 2 0 0 0 2.83 0L20.59 10.68a2 2 0 0 0 0-2.83z"></path><path d="m9.5 12.5 5-5"></path><path d="M14.5 7.5 11 11"></path><path d="M12 2h4v4h-4z"></path><path d="m15 13.5-5 5"></path></svg>',
            'polisher': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v4"></path><path d="M12 20v2"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M20 12h2"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>',
            'spray-can': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6"/><path d="M2 17h20"/><path d="M2 21h20"/><path d="M7 17v4"/><path d="M17 17v4"/><path d="M12 3v4"/><path d="M12 17v4"/></svg>', // Lata de spray
            'vacuum': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8c-1.7-1.7-4-2.7-6.5-2.9"></path><path d="M3.2 16.8c0 2.2 1.8 4 4 4h10"></path><path d="M5 12a7 7 0 1 0 14 0h-4a3 3 0 0 1-6 0H5Z"></path><path d="M18.8 5.2c1.7 1.7 2.9 4 3.2 6.5"></path></svg>',
            'sweeper': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.8 2.2C15.9-.6 11.2-.6 8.3 2.2L3.6 7c-2.9 2.9-2.9 7.6 0 10.5L12 22l8.4-8.4c2.9-2.9 2.9-7.6 0-10.5Z"/><path d="M8 2.5v15"/><path d="M16 2.5v15"/></svg>', // Extrator/Limpador (genérico)
            'fan': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v1m0 4v.75"/><path d="M17.5 4.5l-.75.75"/><path d="M6.5 19.5l.75-.75"/><path d="M3 12h1m4 .25h.75"/><path d="M20 12h1m-4 .25h-.75"/><path d="M4.5 6.5l.75-.75"/><path d="M19.5 17.5l-.75.75"/></svg>', // Ventilador
            'hourglass': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22V2L7 12Z"/><path d="M7 2v20L17 12Z"/></svg>', // Ampulheta para tempo/cura
            'brush': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.5c-.86-.86-.06-2.12.93-2.92.8-.64 2.05-1.07 3.04-.68.86-.33 1.9-.38 2.54.46.73.91.43 2.15-.38 2.96-.8.81-2.05 1.07-3.04.68-.86.33-1.9.38-2.54-.46-.73-.91-.43-2.15.38-2.96Z"/><path d="M15.5 13.5 17 15l2-2 1.5 1.5c.2-.2.5-.3.8-.3.3 0 .6.1.8.3L22 17l-1 1-1.5-1.5c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3L18 17l-1.5 1.5z"/><path d="m11 7-4 4-2-2 4-4Z"/></svg>' // Pincel/Escova
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
    // ============= FUNÇÃO DA GALERIA (VERSÃO ESTÁTICA) =================
    // ===================================================================

    function initGallery() {
        // --- Seletores dos Elementos HTML ---
        const galleryGrid = document.querySelector('.gallery-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const loadMoreBtn = document.getElementById('load-more-btn');
        const noItemsMessage = document.getElementById('no-items-message');
        const resetFilterBtn = noItemsMessage ? noItemsMessage.querySelector('.reset-filter-btn') : null;

        // --- Seletores do Modo Detalhe (Modal) ---
        const detailModal = document.getElementById('gallery-detail-modal');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const modalOverlay = detailModal ? detailModal.querySelector('.modal-overlay') : null;
        const modalTitle = document.getElementById('modal-title');
        const modalVehicle = document.getElementById('modal-vehicle');
        const modalChallenge = document.getElementById('modal-challenge');
        const modalSolution = document.getElementById('modal-solution');

        // --- Validação Inicial dos Elementos Essenciais ---
        if (!galleryGrid || !loadMoreBtn || !detailModal || !noItemsMessage || !modalOverlay ||
            !modalTitle || !modalVehicle || !modalChallenge || !modalSolution) {
            console.error("Um ou mais elementos essenciais da galeria (ou modal) não foram encontrados. Verifique o HTML e os IDs/classes correspondentes.");
            return;
        }

        // --- Configurações da Galeria ---
        const ITEMS_PER_LOAD = 4;
        let currentFilter = 'todos';
        let itemsShown = 0;

        // --- Funções do Modal de Detalhes ---
        function openDetailModal(itemData) {
            modalTitle.textContent = itemData.titulo;
            modalVehicle.textContent = itemData.veiculo;
            modalChallenge.textContent = itemData.desafio;
            modalSolution.textContent = itemData.solucao;

            const beforeImg = detailModal.querySelector('.image-before');
            const afterImg = detailModal.querySelector('.image-after');
            const comparisonContainer = detailModal.querySelector('.comparison-container');
            const slider = detailModal.querySelector('.slider');

            if (beforeImg && afterImg && comparisonContainer && slider) {
                beforeImg.src = itemData.imageBefore;
                afterImg.src = itemData.imageAfter;
                beforeImg.alt = `Antes - ${itemData.alt || ''}`;
                afterImg.alt = `Depois - ${itemData.alt || ''}`;

                slider.value = 50;
                comparisonContainer.style.setProperty('--position', '50%');

                slider.oninput = (e) => {
                    comparisonContainer.style.setProperty('--position', `${e.target.value}%`);
                };
            } else {
                console.warn("Elementos do comparador não encontrados no modal.");
            }

            detailModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeDetailModal() {
            detailModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        modalCloseBtn.addEventListener('click', closeDetailModal);
        modalOverlay.addEventListener('click', closeDetailModal);

        function createGalleryItemHTML(itemData, index) {
            return `
                <div class="gallery-item" data-index="${index}">
                    <img src="${itemData.imageBefore}" alt="${itemData.alt}" loading="lazy">
                    <div class="gallery-item-info">
                        <h3>${itemData.titulo}</h3>
                        <p>${itemData.veiculo}</p>
                    </div>
                </div>
            `;
        }

        function populateGrid() {
            galleryGrid.innerHTML = DADOS_GALERIA.map((itemData, index) => createGalleryItemHTML(itemData, index)).join('');

            galleryGrid.addEventListener('click', (e) => {
                const clickedItem = e.target.closest('.gallery-item');
                if (clickedItem) {
                    const itemIndex = parseInt(clickedItem.dataset.index, 10);
                    const itemData = DADOS_GALERIA[itemIndex];
                    if (itemData) {
                        openDetailModal(itemData);
                    }
                }
            });
        }

        function showItems() {
            const filteredItems = DADOS_GALERIA.filter(item => {
                if (currentFilter === 'todos') return true;
                return Array.isArray(item.categoria)
                    ? item.categoria.includes(currentFilter)
                    : item.categoria === currentFilter;
            });

            const allGridItems = galleryGrid.querySelectorAll('.gallery-item');
            allGridItems.forEach(gridItem => {
                gridItem.style.display = 'none';
            });

            filteredItems.slice(0, itemsShown).forEach(itemData => {
                const itemIndex = DADOS_GALERIA.indexOf(itemData);
                const gridItem = galleryGrid.querySelector(`.gallery-item[data-index="${itemIndex}"]`);
                if (gridItem) gridItem.style.display = 'block';
            });

            if (filteredItems.length === 0) {
                noItemsMessage.style.display = 'block';
                loadMoreBtn.style.display = 'none';
            } else {
                noItemsMessage.style.display = 'none';
                loadMoreBtn.style.display = itemsShown >= filteredItems.length ? 'none' : 'block';
            }
        }

        function handleFilterClick(e) {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentFilter = e.currentTarget.dataset.filter;
            itemsShown = ITEMS_PER_LOAD;
            showItems();
        }

        function loadMoreItems() {
            itemsShown += ITEMS_PER_LOAD;
            showItems();
        }

        function resetFilterToAll() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const allButton = document.querySelector('.filter-btn[data-filter="todos"]');
            if (allButton) allButton.classList.add('active');
            currentFilter = 'todos';
            itemsShown = ITEMS_PER_LOAD;
            showItems();
        }

        filterButtons.forEach(button => button.addEventListener('click', handleFilterClick));
        loadMoreBtn.addEventListener('click', loadMoreItems);
        if (resetFilterBtn) resetFilterBtn.addEventListener('click', resetFilterToAll);

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
    function initProductShowcase() {
        const productLogosContainer = document.querySelector('.product-logos');
        
        // Cria o elemento que vai rolar
        const logosScroller = document.createElement('div');
        logosScroller.className = 'logos-scroller';

        if (!productLogosContainer) {
            console.error("Container de logos de produtos (.product-logos) não encontrado.");
            return;
        }

        // Popula o scroller com as logos do seu DADOS_MARCAS
        // E duplica o conteúdo para criar o efeito de loop infinito (seamless)
        // Ao ter duas cópias das logos dentro do mesmo elemento de rolagem,
        // a animação CSS pode fazer um loop suave.
        const allLogosToDisplay = [...DADOS_MARCAS, ...DADOS_MARCAS]; 

        allLogosToDisplay.forEach(marca => {
            const logoItem = document.createElement('div');
            logoItem.className = 'logo-item';
            const img = document.createElement('img');
            img.src = marca.imgSrc;
            img.alt = `Logo ${marca.name}`; // Acessibilidade: usar o nome da marca como alt text
            logoItem.appendChild(img);
            logosScroller.appendChild(logoItem);
        });

        productLogosContainer.appendChild(logosScroller);


        // Observador para adicionar a classe 'is-visible' quando a seção entra no viewport
        // Isso aciona a animação de fade-in e slide-up para o container das logos.
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Quando o elemento está visível, adicione a classe
                    productLogosContainer.classList.add('is-visible');
                    // Pare de observar após a primeira vez que ele se torna visível para não repetir a animação
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento estiver visível na tela
        });

        // Começa a observar o container das logos
        observer.observe(productLogosContainer);
    }

 // ===================================================================
    // ============= FUNÇÃO DOS COMBOS (VERSÃO ATUALIZADA) ===============
    // ===================================================================

    function initContactSection() {
        const container = document.getElementById('combo-packages-container');
        if (!container || !DADOS_COMBOS || !DADOS_COMBOS.length) return;

        const icons = {
            'sun': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
            'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
            'award': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>'
        };

        DADOS_COMBOS.forEach(combo => {
            const comboCard = document.createElement('div');
            comboCard.className = 'combo-card';
            const whatsappURL = `${BASE_WHATSAPP_URL}${encodeURIComponent(combo.whatsappMessage)}`;
            comboCard.innerHTML = `
                <div class="combo-icon">${icons[combo.icon] || ''}</div>
                <h3 class="combo-title">${combo.title}</h3>
                <p class="combo-description">${combo.description}</p>
                <ul class="combo-services-list">
                    ${combo.services.map(service => `<li><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>${service}</li>`).join('')}
                </ul>
                <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="cta-combo">Tenho Interesse</a>
            `;
            container.appendChild(comboCard);
        });

        // Accordion toggle logic (corrigido e sem duplicidade)
        const toggleButton = document.getElementById('toggle-custom-quote');
        const content = document.getElementById('custom-quote-content');
        if (toggleButton && content) {
            // Inicializa o estado fechado
            content.style.maxHeight = '0px';
            toggleButton.addEventListener('click', () => {
                toggleButton.classList.toggle('active');
                content.classList.toggle('active');
                if (content.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0px';
                }
            });
            // Atualiza a altura ao redimensionar
            window.addEventListener('resize', function() {
                if (content.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    }

    // ===================================================================
    // ============= FUNÇÃO GERADOR DE ORÇAMENTO PERSONALIZADO =========
    // ===================================================================

    function initQuoteGenerator() {
        const quoteGenerator = document.querySelector('.quote-generator-container');
        if (!quoteGenerator) return;

        const allInputs = quoteGenerator.querySelectorAll('input, textarea');
        const messagePreview = document.getElementById('whatsapp-message-preview');
        const generateBtn = document.getElementById('generate-whatsapp-btn');
        const customQuoteContent = document.getElementById('custom-quote-content'); // Referência ao contêiner principal do acordeão

        if (!messagePreview || !generateBtn || !customQuoteContent) return;

        function updatePreviewMessage() {
            const modelo = quoteGenerator.querySelector('#veiculo-modelo')?.value.trim() || 'Não informado';
            const ano = quoteGenerator.querySelector('#veiculo-ano')?.value.trim() || 'Não informado';
            const observacoes = quoteGenerator.querySelector('#observacoes')?.value.trim() || '';
            const localInput = quoteGenerator.querySelector('input[name="local-atendimento"]:checked');
            const local = localInput ? localInput.value : 'não informado';

            let servicosSelecionados = [];

            // --- Adição para o grupo de Lavagem (garante a ordem se for importante) ---
            const lavagemGroup = quoteGenerator.querySelector('.service-group:has(input[value="Lavagem"])');
            if (lavagemGroup) {
                const mainCheckbox = lavagemGroup.querySelector('input[name="servico_principal"]');
                if (mainCheckbox && mainCheckbox.checked) {
                    const selectedLavagemType = lavagemGroup.querySelector('input[name="lavagem_type"]:checked');
                    if (selectedLavagemType) {
                        servicosSelecionados.push(selectedLavagemType.value);
                    } else {
                        servicosSelecionados.push("Lavagem (tipo não especificado)");
                    }
                }
            }
            // --- Fim da adição para Lavagem ---

            // Iterar sobre cada grupo de serviço principal (excluindo Lavagem se já tratado)
            quoteGenerator.querySelectorAll('.service-group').forEach(group => {
                const mainCheckbox = group.querySelector('input[name="servico_principal"]');
                if (mainCheckbox && mainCheckbox.value === "Lavagem") return; // Evita reprocessar Lavagem

                if (mainCheckbox && mainCheckbox.checked) {
                    let serviceGroupName = mainCheckbox.value;
                    const subOptionsContainer = group.querySelector('.sub-options');

                    let selectedSubOptions = [];

                    if (subOptionsContainer) {
                        subOptionsContainer.querySelectorAll('input[type="radio"]:checked').forEach(subInput => {
                            selectedSubOptions.push(subInput.value);
                        });
                        subOptionsContainer.querySelectorAll('input[type="checkbox"]:checked').forEach(subInput => {
                            selectedSubOptions.push(subInput.value);
                        });
                    }

                    if (selectedSubOptions.length > 0) {
                        servicosSelecionados.push(`${serviceGroupName}: ${selectedSubOptions.join(', ')}`);
                    } else {
                        servicosSelecionados.push(serviceGroupName);
                    }
                }
            });

            let message = `Olá, Auto Brilho! Gostaria de um orçamento para o meu veículo.\n\n`;
            message += `*Veículo:* ${modelo} (${ano})\n`;
            message += `*Local:* Atendimento ${local}\n`;

            if (servicosSelecionados.length > 0) {
                message += `*Serviços de Interesse:*\n- ${servicosSelecionados.join('\n- ')}\n`;
            } else {
                message += `*Serviços de Interesse:* Nenhum serviço específico selecionado (apenas análise geral).\n`;
            }

            if (observacoes) {
                message += `\n*Observações:* ${observacoes}`;
            }

            messagePreview.textContent = message;
        }

        // Função auxiliar para recalcular a altura do acordeão principal
        function updateCustomQuoteContentHeight() {
            if (customQuoteContent.classList.contains('active')) {
                // Recalcula a altura total do conteúdo e aplica ao maxHeight
                customQuoteContent.style.maxHeight = customQuoteContent.scrollHeight + "px";
            }
        }

        // Adiciona event listeners para todos os inputs e textareas para atualizar a prévia
        allInputs.forEach(input => input.addEventListener('input', () => {
            updatePreviewMessage();
            updateCustomQuoteContentHeight(); // Recalcula a altura ao digitar ou alterar qualquer campo
        }));

        // Adiciona event listeners para os checkboxes de grupo para mostrar/esconder sub-opções
        document.querySelectorAll('.service-group .group-title input[name="servico_principal"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const subOptions = this.closest('.service-group').querySelector('.sub-options');
                if (subOptions) {
                    if (this.checked) {
                        subOptions.style.maxHeight = subOptions.scrollHeight + "px";
                        subOptions.style.opacity = 1;
                        subOptions.style.marginTop = 'var(--space-md)';
                    } else {
                        subOptions.style.maxHeight = 0;
                        subOptions.style.opacity = 0;
                        subOptions.style.marginTop = 0;
                        // Opcional: desmarcar sub-opções se o grupo principal for desmarcado
                        subOptions.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(subInput => {
                            subInput.checked = false;
                        });
                    }
                }
                updatePreviewMessage();
                updateCustomQuoteContentHeight(); // CHAVE: Recalcula a altura do pai após a sub-opção mudar
            });
        });

        // Event listener para as sub-opções, para que a prévia seja atualizada E a altura do pai recalculada
        document.querySelectorAll('.sub-options input').forEach(subInput => {
            subInput.addEventListener('change', () => {
                updatePreviewMessage();
                updateCustomQuoteContentHeight(); // CHAVE: Recalcula a altura do pai após a sub-opção ser marcada/desmarcada
            });
        });

        generateBtn.addEventListener('click', () => {
            const message = messagePreview.textContent;
            const finalLink = `${BASE_WHATSAPP_URL}${encodeURIComponent(message)}`;
            window.open(finalLink, '_blank');
        });

        // Chama a função pela primeira vez para exibir a mensagem inicial
        updatePreviewMessage();

        // Esconde as sub-opções inicialmente se não estiverem marcadas
        document.querySelectorAll('.service-group').forEach(group => {
            const mainCheckbox = group.querySelector('.group-title input[name="servico_principal"]');
            const subOptions = group.querySelector('.sub-options');
            if (mainCheckbox && subOptions && !mainCheckbox.checked) {
                subOptions.style.maxHeight = 0;
                subOptions.style.opacity = 0;
                subOptions.style.marginTop = 0;
            }
        });

        // Event listener para o botão principal do acordeão
        const toggleButton = document.getElementById('toggle-custom-quote');
        if (togtoggle-custom-quotegleButton) {
            toggleButton.addEventListener('click', () => {
                // A lógica de toggle da classe e maxHeight já está em initContactSection,
                // mas é crucial que updateCustomQuoteContentHeight seja chamado após a abertura
                // para garantir que o scrollHeight seja preciso.
                // O initContactSection já tem o setTimeout para isso, mas se houver algum bug,
                // poderíamos duplicar a chamada aqui com um pequeno setTimeout.
                // Por enquanto, confiamos no initContactSection para lidar com a abertura.
            });
        }
    }

    // ===================================================================
    // ============= INICIALIZAÇÃO ROBUSTA DOS MÓDULOS =================
    // ===================================================================

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
    safeInit('ProductShowCase', initProductShowcase);
    safeInit('CtaLinks', setupCtaLinks);
    
});