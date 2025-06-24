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

// ===================================================================
// =================== LÓGICA DO ORÇAMENTO INTERATIVO ==================
// ===================================================================
const comboOptionsContainer = document.querySelector('.combo-options');
const summaryList = document.getElementById('summary-list');
const sendComboBtn = document.getElementById('send-combo-btn');

if (comboOptionsContainer && summaryList && sendComboBtn) {

    // Função para atualizar o resumo do pacote
    function updateComboSummary() {
        summaryList.innerHTML = ''; // Limpa a lista atual
        let selectedItems = [];

        // Pega todos os checkboxes de serviço que estão marcados
        const selectedServices = comboOptionsContainer.querySelectorAll('input[name="servico"]:checked');

        if (selectedServices.length === 0) {
            summaryList.innerHTML = '<li>Nenhum serviço selecionado.</li>';
            return;
        }

        selectedServices.forEach(checkbox => {
            let serviceName = checkbox.value;
            let serviceDetail = '';
            
            // Procura por uma sub-opção selecionada para este serviço
            const serviceGroup = checkbox.closest('.service-group');
            const selectedRadio = serviceGroup.querySelector('input[type="radio"]:checked');
            
            if (selectedRadio) {
                serviceDetail = ` (${selectedRadio.value})`;
            }

            // Adiciona o item formatado à lista
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${serviceName}</strong>${serviceDetail}`;
            summaryList.appendChild(listItem);
            selectedItems.push(`${serviceName}${serviceDetail}`);
        });
    }

    // "Escuta" por qualquer mudança nos inputs dentro das opções
    comboOptionsContainer.addEventListener('change', updateComboSummary);

    // Lógica do botão "Enviar para Orçamento"
    sendComboBtn.addEventListener('click', () => {
        const items = summaryList.querySelectorAll('li');
        if (items.length === 0 || items[0].textContent === 'Nenhum serviço selecionado.') {
            alert('Por favor, selecione ao menos um serviço para solicitar um orçamento.');
            return;
        }

        let messageText = "Olá! Gostaria de um orçamento para o seguinte pacote personalizado:\n";
        items.forEach(item => {
            messageText += `\n- ${item.textContent}`;
        });

        // Encontra o formulário de contato e preenche a mensagem
        const contactFormMessage = document.querySelector('#contato textarea[name="message"]');
        if (contactFormMessage) {
            contactFormMessage.value = messageText;
            
            // Rola a página suavemente até a seção de contato
            document.getElementById('contato').scrollIntoView({
                behavior: 'smooth'
            });

            // Dá um foco visual no campo da mensagem
            contactFormMessage.focus();
        } else {
            alert('Não foi possível encontrar o formulário de contato.');
        }
    });

    // Inicia o resumo ao carregar a página
    updateComboSummary();
}