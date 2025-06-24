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

    if (hamburgerBtn && mobileMenu) {
        // Evento para abrir/fechar o menu
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Evento para fechar o menu ao clicar em um link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Adiciona efeito de fundo no header ao rolar a página
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

});

// ===================================================================
// =================== LÓGICA DO FILTRO DA GALERIA ===================
// ===================================================================

// Seleciona todos os elementos necessários
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Adiciona um evento de clique a cada botão de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' apenas ao botão clicado
        button.classList.add('active');

        // Pega o valor do filtro do atributo 'data-filter'
        const filterValue = button.dataset.filter;

        // Itera sobre cada item da galeria para mostrar ou esconder
        galleryItems.forEach(item => {
            const itemCategory = item.dataset.category;

            // Se o filtro for "todos" OU a categoria do item for a mesma do filtro
            if (filterValue === 'todos' || itemCategory === filterValue) {
                item.classList.remove('hide'); // Mostra o item
            } else {
                item.classList.add('hide'); // Esconde o item
            }
        });
    });
});