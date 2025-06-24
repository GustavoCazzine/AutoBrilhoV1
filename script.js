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
    // =================== LÓGICA DO ORÇAMENTO INTERATIVO ==================
    // ===================================================================
    const comboOptionsContainer = document.querySelector('.combo-options');
    const summaryList = document.getElementById('summary-list');
    const sendComboBtn = document.getElementById('send-combo-btn');

    if (comboOptionsContainer && summaryList && sendComboBtn) {
        function updateComboSummary() {
            summaryList.innerHTML = '';
            let selectedItems = [];
            const selectedServices = comboOptionsContainer.querySelectorAll('input[name="servico"]:checked');
            if (selectedServices.length === 0) {
                summaryList.innerHTML = '<li>Nenhum serviço selecionado.</li>';
                return;
            }
            selectedServices.forEach(checkbox => {
                let serviceName = checkbox.value;
                let serviceDetail = '';
                const serviceGroup = checkbox.closest('.service-group');
                const selectedRadio = serviceGroup.querySelector('input[type="radio"]:checked');
                if (selectedRadio) {
                    serviceDetail = ` (${selectedRadio.value})`;
                }
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${serviceName}</strong>${serviceDetail}`;
                summaryList.appendChild(listItem);
                selectedItems.push(`${serviceName}${serviceDetail}`);
            });
        }

        comboOptionsContainer.addEventListener('change', updateComboSummary);

        sendComboBtn.addEventListener('click', () => {
            const items = summaryList.querySelectorAll('li');
            if (items.length === 0 || items[0].textContent === 'Nenhum serviço selecionado.') {
                alert('Por favor, selecione ao menos um serviço para solicitar um orçamento.');
                return;
            }
            let messageText = "Olá! Gostaria de um orçamento para o seguinte pacote personalizado:\n";
            items.forEach(item => { messageText += `\n- ${item.textContent}`; });
            const contactFormMessage = document.querySelector('#contato textarea[name="message"]');
            if (contactFormMessage) {
                contactFormMessage.value = messageText;
                document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
                contactFormMessage.focus();
            } else {
                alert('Não foi possível encontrar o formulário de contato.');
            }
        });
        updateComboSummary();
    }

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