// Traduções para múltiplos idiomas
const translations = {
    "pt-br": {
    "home": "Home",
    "servicos": "Serviços",
    "sobre_nos": "Sobre Nós",
    "contato": "Contato",
    "intro_title": "Acesso fácil a oportunidades nos mercados globais",
    "intro_desc": "A China é um país fascinante, com uma história milenar, cultura única e paisagens deslumbrantes. Venha explorar!",
    "viachina_title": "ViaChinaON.com Transforme seu sonho em realidade de conhecer a China!",
    "viachina_desc": "Estude nas melhores instituições e mergulhe na cultura única. Nós cuidamos de todo o processo para que sua jornada à China seja inesquecível. Deixe o complicado conosco e prepare-se para viver o extraordinário!",
    "cultura_title": "ViaChinaON online. A plataforma que conecta você às oportunidades da China!",
    "cultura_desc": "Tenha acesso exclusivo a mais de 1.000 catálogos digitais com informações detalhadas e serviços prontos para impulsionar seus negócios, pesquise produtos, fornecedores e oportunidades com facilidade e solicite serviços diretamente pela nossa plataforma.",
    "conectar": "Conectando Você aos Melhores Produtos da China!",
    "expansao": "Descubra a facilidade de vender produtos direto da China com foco no atacado. Comece hoje mesmo a expandir seus lucros com a plataforma que une eficiência e qualidade para empreendedores de sucesso."
    },
    "en-us": {
    "home": "Home",
    "servicos": "Services",
    "sobre_nos": "About Us",
    "contato": "Contact",
    "intro_title": "Easy access to opportunities in global markets",
    "intro_desc": "China is a fascinating country, with a millennia-old history, unique culture, and stunning landscapes. Come explore!",
    "viachina_title": "ViaChinaON.com Make your dream of visiting China come true!",
    "viachina_desc": "Study at top institutions and immerse yourself in the unique culture. We handle the entire process so your journey to China is unforgettable. Let us take care of the complicated parts and get ready for the extraordinary!",
    "cultura_title": "ViaChinaON online. The platform that connects you to opportunities in China!",
    "cultura_desc": "Gain exclusive access to over 1,000 digital catalogs with detailed information and services ready to boost your business. Research products, suppliers, and opportunities with ease, and request services directly through our platform.",
    "conectar": "Connecting You to the Best Products from China!",
    "expansao": "Discover the ease of selling products directly from China with a focus on wholesale. Start expanding your profits today with the platform that combines efficiency and quality for successful entrepreneurs."
    },
    "es": {
    "home": "Inicio",
    "servicos": "Servicios",
    "sobre_nos": "Sobre Nosotros",
    "contato": "Contacto",
    "intro_title": "Acceso fácil a oportunidades en mercados globales",
    "intro_desc": "China es un país fascinante, con una historia milenaria, cultura única y paisajes impresionantes. ¡Ven a explorar!",
    "viachina_title": "ViaChinaON.com ¡Haz realidad tu sueño de conocer China!",
    "viachina_desc": "Estudia en las mejores instituciones y sumérgete en la cultura única. Nos encargamos de todo el proceso para que tu viaje a China sea inolvidable. ¡Deja lo complicado con nosotros y prepárate para vivir lo extraordinario!",
    "cultura_title": "ViaChinaON en línea. ¡La plataforma que conecta contigo las oportunidades de China!",
    "cultura_desc": "Obtén acceso exclusivo a más de 1.000 catálogos digitales con información detallada y servicios listos para impulsar tu negocio. Investiga productos, proveedores y oportunidades con facilidad, y solicita servicios directamente a través de nuestra plataforma.",
    "conectar": "¡Conectándote con los mejores productos de China!",
    "expansao": "Descubre la facilidad de vender productos directamente desde China con un enfoque en el comercio mayorista. Comienza hoy a expandir tus ganancias con la plataforma que combina eficiencia y calidad para empresarios exitosos."
    },
    "zh": {
    "home": "主页",
    "servicos": "服务",
    "sobre_nos": "关于我们",
    "contato": "联系方式",
    "intro_title": "轻松进入全球市场的机会",
    "intro_desc": "中国是一个迷人的国家，拥有千年的历史、独特的文化和壮丽的景观。来探索吧！",
    "viachina_title": "ViaChinaON.com 让您的中国之梦成真！",
    "viachina_desc": "在顶级学府学习，沉浸在独特的文化中。我们处理整个过程，让您的中国之行难忘。让我们处理繁琐的事宜，准备好迎接非凡吧！",
    "cultura_title": "ViaChinaON在线平台，连接您与中国的机会！",
    "cultura_desc": "独家访问超过1000个数字目录，提供详细信息和服务，帮助您推动业务发展。轻松搜索产品、供应商和机会，并通过我们的平台直接申请服务。",
    "conectar": "连接您与中国的最佳产品！",
    "expansao": "发现从中国直接销售产品的便捷，专注于批发业务。今天就开始通过高效和优质的企业平台扩大您的利润。"
    }
    };
    
    // Atualizar o idioma
    function updateLanguage(language) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }
    
    // Detectar mudanças no seletor de idioma
    document.querySelector(".language-selector").addEventListener("change", (e) => {
        const language = e.target.value;
        updateLanguage(language);
    });
    
    // Inicializar com o idioma padrão
    updateLanguage("pt-br");
    
    // Rolagem entre seções
    let currentSection = 0;
    const sections = document.querySelectorAll("section");
    let scrolling = false;
    
    window.addEventListener("wheel", function (e) {
        if (scrolling) return;
        scrolling = true;
        setTimeout(() => scrolling = false, 800);
    
        if (e.deltaY > 0) {
            if (currentSection < sections.length - 1) {
                currentSection++;
                sections[currentSection].scrollIntoView({ behavior: "smooth" });
            }
        } else {
            if (currentSection > 0) {
                currentSection--;
                sections[currentSection].scrollIntoView({ behavior: "smooth" });
            }
        }
    });