const STORAGE_KEY = 'prime-barbearia-store-v1';
const ADMIN_LOGIN = 'b123456';
const ADMIN_PASSWORD = '654321';
const SERVICE_CATALOG_VERSION = 4;
const SERVICE_IMAGE_VERSION = 1;
const PRODUCT_CATALOG_VERSION = 1;
const PRODUCT_IMAGE_VERSION = 1;
const SERVICES_ADDED_IN_VERSION_4 = [
  'svc-corte-americano',
  'svc-cone-hindu',
  'svc-depilacao-orelhas-cera',
  'svc-depilacao-nasal-cera'
];

const defaultStore = {
  serviceCatalogVersion: SERVICE_CATALOG_VERSION,
  serviceImageVersion: SERVICE_IMAGE_VERSION,
  productCatalogVersion: PRODUCT_CATALOG_VERSION,
  productImageVersion: PRODUCT_IMAGE_VERSION,
  config: {
    shop_name: 'Prime Barbearia Outlet',
    whatsapp: '5534997741715',
    instagram: '@primebarbearia',
    address: 'Avenida José do Patrocínio, 439, Uberlândia, MG',
    maps_url: 'https://www.google.com/maps/search/?api=1&query=Avenida+Jos%C3%A9+do+Patroc%C3%ADnio+439+Marta+Helena+Uberl%C3%A2ndia+MG',
    hours: [{ days: 'Terça a sábado', time: '8h30 às 19h30' }],
    hero_title: 'SEU ESTILO.\nSUA IDENTIDADE.',
    hero_subtitle: 'Encontre o corte ideal para você. Conheça nossos serviços, escolha seu profissional e venha para a PRIME.',
    hero_image_url: '../assets/barbershop-hero.jpg',
    about_title: 'ESTILO NÃO É DETALHE. É IDENTIDADE.',
    about_text: 'Na PRIME, acreditamos que um bom corte vai além da aparência. É sobre confiança, personalidade e a forma como você escolhe se apresentar ao mundo.',
    allow_no_preference: true
  },
  services: [
    { id: 'svc-corte-social', name: 'Corte Social', description: 'Corte social masculino com acabamento preciso e visual elegante. Ideal para quem busca praticidade, estilo e um corte alinhado para qualquer ocasião.', price: 30, image_url: '../assets/corte-social.jpg', duration_min: 25, category: 'Cortes' },
    { id: 'svc-corte-degrade', name: 'Corte Degradê', description: 'Degradê moderno com transição suave entre os comprimentos, laterais bem definidas e acabamento profissional. Um dos estilos mais procurados para quem gosta de um visual atual.', price: 35, image_url: '../assets/corte-degrade.jpg', duration_min: 30, category: 'Cortes' },
    { id: 'svc-corte-americano', name: 'Corte Americano', description: 'Corte americano masculino com degradê suave nas laterais, acabamento alinhado e topo harmonizado. Um estilo moderno e versátil, ideal para quem busca um visual marcante, elegante e bem definido.', price: 35, image_url: '../assets/corte-americano.jpg', duration_min: 25, category: 'Cortes' },
    { id: 'svc-corte-navalhado', name: 'Corte Navalhado', description: 'Corte masculino com acabamento feito na navalha para proporcionar contornos definidos e um visual marcante. Ideal para quem valoriza precisão e detalhes no corte.', price: 40, image_url: '../assets/corte-navalhado.jpg', duration_min: 35, category: 'Cortes' },
    { id: 'svc-barba', name: 'Barba', description: 'Aparação e modelagem da barba para valorizar os traços do rosto. Um acabamento cuidadoso para deixar sua aparência mais alinhada, com contornos definidos e visual renovado.', price: 25, image_url: '../assets/barba.jpg', duration_min: 20, category: 'Barba e Acabamentos' },
    { id: 'svc-sobrancelha', name: 'Sobrancelha', description: 'Limpeza e alinhamento das sobrancelhas para realçar o olhar e harmonizar os traços do rosto. Um acabamento rápido que faz toda a diferença no visual masculino.', price: 10, image_url: '../assets/sobrancelha.jpg', duration_min: 10, category: 'Barba e Acabamentos' },
    { id: 'svc-pigmentacao', name: 'Pigmentação', description: 'Procedimento estético para realçar a aparência dos fios e destacar o acabamento do visual. Ideal para quem busca um resultado mais definido e uniforme, conforme a técnica utilizada.', price: 10, image_url: '../assets/pigmentacao.jpg', duration_min: 15, category: 'Barba e Acabamentos' },
    { id: 'svc-nevou', name: 'Nevou', description: 'Transforme seu visual com o famoso efeito nevou! A descoloração proporciona um tom loiro muito claro ou platinado, criando um estilo moderno, ousado e cheio de personalidade.', price: 99.9, image_url: '../assets/nevou.jpg', duration_min: 120, category: 'Coloração e Descoloração' },
    { id: 'svc-reflexo-alinhado', name: 'Reflexo Alinhado', description: 'Reflexos claros distribuídos de maneira alinhada para criar contraste, luminosidade e um visual moderno. Ideal para quem quer destacar o cabelo com mechas bem definidas.', price: 129.9, image_url: '../assets/reflexo-alinhado.jpg', duration_min: 150, category: 'Coloração e Descoloração' },
    { id: 'svc-luzes', name: 'Luzes', description: 'Ilumine seu visual com luzes que criam contraste e realçam a textura do cabelo. Uma ótima opção para quem deseja renovar o estilo com mechas claras e um resultado personalizado.', price: 99.9, image_url: '../assets/luzes.jpg', duration_min: 120, category: 'Coloração e Descoloração' },
    { id: 'svc-matizacao', name: 'Matização', description: 'Tratamento de tonalização que ajuda a ajustar a cor dos cabelos descoloridos, neutralizando reflexos indesejados e realçando o tom desejado. Ideal para manter o cabelo com uma aparência mais uniforme.', price: 25, image_url: '../assets/matizacao.jpg', duration_min: 30, category: 'Coloração e Descoloração' },
    { id: 'svc-alisamento-americano', name: 'Alisamento Americano', description: 'Procedimento químico voltado à redução do volume e ao controle da textura dos fios, proporcionando um visual mais alinhado e fácil de modelar. O resultado depende do tipo de cabelo e da técnica utilizada.', price: 35, image_url: '../assets/alisamento-americano.jpg', duration_min: 20, category: 'Química e Alisamento' },
    { id: 'svc-selagem', name: 'Selagem', description: 'Tratamento capilar que busca alinhar os fios, reduzir o frizz e proporcionar mais brilho e maciez. Ideal para quem deseja um cabelo com aparência mais disciplinada e fácil de cuidar.', price: 59.9, image_url: '../assets/selagem.jpg', duration_min: 45, category: 'Química e Alisamento' },
    { id: 'svc-progressiva', name: 'Progressiva', description: 'Procedimento capilar destinado a alisar ou reduzir o volume dos fios, deixando o cabelo com uma aparência mais lisa e alinhada. A indicação e o resultado variam conforme o cabelo e o produto utilizado.', price: 99.9, image_url: '../assets/progressiva.jpg', duration_min: 90, category: 'Química e Alisamento' },
    { id: 'svc-limpeza-de-pele', name: 'Limpeza de Pele', description: 'Cuidados faciais para remover impurezas superficiais e proporcionar uma sensação de limpeza e frescor. Um momento de cuidado pessoal para deixar a pele com aparência renovada.', price: 40, image_url: '../assets/limpeza-de-pele.jpg', duration_min: 30, category: 'Estética Facial' },
    { id: 'svc-cone-hindu', name: 'Cone Hindu', description: 'Uma experiência de cuidado e relaxamento realizada com cone hindu, em um ambiente tranquilo e acolhedor. Ideal para quem busca um momento de pausa e bem-estar durante sua visita à barbearia.', price: 50, image_url: '../assets/cone-hindu.jpg', duration_min: 30, category: 'Bem-estar e Cuidados Pessoais' },
    { id: 'svc-depilacao-orelhas-cera', name: 'Depilação das Orelhas com Cera', description: 'Remoção dos pelos aparentes na região externa das orelhas com cera, ajudando a manter uma aparência mais limpa, cuidada e alinhada. Ideal para complementar o corte e o acabamento pessoal.', price: 15, image_url: '../assets/depilacao-orelhas-cera.jpg', duration_min: 10, category: 'Depilação e Cuidados Pessoais' },
    { id: 'svc-depilacao-nasal-cera', name: 'Depilação Nasal com Cera', description: 'Remoção cuidadosa dos pelos aparentes do nariz com cera, proporcionando um visual mais limpo e um acabamento impecável. Um cuidado rápido e prático para complementar seu atendimento na barbearia.', price: 15, image_url: '../assets/depilacao-nasal-cera.jpg', duration_min: 10, category: 'Depilação e Cuidados Pessoais' }
  ],
  products: [
    { id: 'prod-pomada-fox-efeito-teia', name: 'Pomada Fox — Efeito Teia', description: 'Pomada modeladora com efeito teia, ideal para criar textura, separar mechas e dar definição ao penteado. Perfeita para quem busca um visual moderno e cheio de personalidade.', price: 39.9, category: 'Pomadas e Finalizadores', image_url: '../assets/pomada-fox-efeito-teia.jpg' },
    { id: 'prod-pomada-fox-orange', name: 'Pomada Fox — Orange', description: 'Finalizador capilar ideal para modelar e estilizar os cabelos, ajudando a criar penteados definidos e um acabamento profissional para diferentes estilos.', price: 39.9, category: 'Pomadas e Finalizadores', image_url: '../assets/pomada-fox-orange.jpg' },
    { id: 'prod-pomada-fox-efeito-black', name: 'Pomada Fox — Efeito Black', description: 'Pomada capilar para estilizar os fios e valorizar o acabamento do penteado. Ideal para quem busca um visual marcante, com cabelos bem definidos e alinhados.', price: 39.9, category: 'Pomadas e Finalizadores', image_url: '../assets/pomada-fox-efeito-black.jpg' },
    { id: 'prod-pomada-fox-cera-capilar', name: 'Pomada Fox — Cera Capilar', description: 'Cera capilar para modelar e definir os fios, permitindo criar diferentes estilos com praticidade. Ideal para valorizar o corte e manter o penteado bem cuidado.', price: 39.9, category: 'Pomadas e Finalizadores', image_url: '../assets/pomada-fox-cera-capilar.jpg' },
    { id: 'prod-pomada-fox-uva', name: 'Pomada Fox — Uva', description: 'Pomada capilar prática para modelar e dar forma ao penteado. Ideal para quem deseja manter os cabelos estilosos e alinhados no dia a dia.', price: 24.9, category: 'Pomadas e Finalizadores', image_url: '../assets/pomada-fox-uva.jpg' },
    { id: 'prod-gel-capilar-fox', name: 'Gel Capilar Fox', description: 'Gel capilar para modelar os fios e criar penteados definidos. Uma opção prática para quem busca um visual alinhado e fácil de estilizar.', price: 34.9, category: 'Pomadas e Finalizadores', image_url: '../assets/gel-capilar-fox.jpg' },
    { id: 'prod-oleo-barba-fox', name: 'Óleo para Barba Fox', description: 'Óleo desenvolvido para complementar os cuidados com a barba, ajudando a manter os fios macios, alinhados e com aparência saudável. Ideal para uma barba bem cuidada.', price: 49.9, category: 'Cuidados com a Barba', image_url: '../assets/oleo-barba-fox.jpg' },
    { id: 'prod-balm-barba-fox', name: 'Balm para Barba Fox', description: 'Balm para auxiliar no cuidado e na organização dos fios da barba, proporcionando maciez e facilitando a manutenção de um visual alinhado e bem cuidado.', price: 49.9, category: 'Cuidados com a Barba', image_url: '../assets/balm-barba-fox.jpg' },
    { id: 'prod-pente-de-dedo', name: 'Pente de Dedo', description: 'Acessório prático para auxiliar na modelagem e na separação dos fios, especialmente em penteados texturizados. Compacto, fácil de usar e ideal para a finalização do cabelo.', price: 6, category: 'Acessórios', image_url: '../assets/pente-de-dedo.jpg' },
    { id: 'prod-bucha-cabelo-afro', name: 'Bucha para Cabelo Afro (P, M e G)', description: 'Acessório ideal para modelar e texturizar cabelos crespos e afro, ajudando a criar e definir o efeito de cachos e twists. Disponível nos tamanhos P, M e G para atender a diferentes comprimentos de cabelo e estilos.', price: 39.9, category: 'Acessórios', image_url: '../assets/bucha-cabelo-afro.jpg' },
    { id: 'prod-tonico-capilar-fox', name: 'Tônico Capilar Fox', description: 'Produto para complementar a rotina de cuidados com os cabelos e o couro cabeludo. Ideal para quem busca incluir um cuidado capilar específico no dia a dia, seguindo as orientações de uso da embalagem.', price: 79.9, category: 'Tratamentos Capilares', image_url: '../assets/tonico-capilar-fox.jpg' }
  ],
  pros: [
    { id: 'pro-1', name: 'Rafael', description: 'Especialista em cortes clássicos e acabamento impecável.', photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80', specialties: ['Cortes', 'Barba'], service_ids: ['svc-1', 'svc-2', 'svc-4', 'svc-6'] },
    { id: 'pro-2', name: 'Marcos', description: 'Focado em cortes modernos e visual mais arrojado.', photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80', specialties: ['Degradê', 'Navalhado'], service_ids: ['svc-2', 'svc-3', 'svc-7'] },
    { id: 'pro-3', name: 'Lucas', description: 'Cuida de detalhes finos e acabamento masculino refinado.', photo_url: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=80', specialties: ['Barba', 'Acabamentos'], service_ids: ['svc-4', 'svc-5', 'svc-6', 'svc-7'] }
  ]
};

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultStore;
    const parsed = JSON.parse(raw);
    const storedCatalogVersion = Number(parsed.serviceCatalogVersion || 0);
    const shouldReplaceServiceCatalog = storedCatalogVersion < 2;
    const shouldAddVersionedServices = storedCatalogVersion < SERVICE_CATALOG_VERSION;
    const shouldSetServiceImagePaths = parsed.serviceImageVersion !== SERVICE_IMAGE_VERSION;
    const shouldReplaceProductCatalog = Number(parsed.productCatalogVersion || 0) < PRODUCT_CATALOG_VERSION;
    const shouldSetProductImagePaths = parsed.productImageVersion !== PRODUCT_IMAGE_VERSION;
    const store = {
      serviceCatalogVersion: SERVICE_CATALOG_VERSION,
      serviceImageVersion: SERVICE_IMAGE_VERSION,
      productCatalogVersion: PRODUCT_CATALOG_VERSION,
      productImageVersion: PRODUCT_IMAGE_VERSION,
      config: { ...defaultStore.config, ...(parsed.config || {}) },
      services: shouldReplaceServiceCatalog
        ? defaultStore.services.map((service) => ({ ...service }))
        : (Array.isArray(parsed.services) && parsed.services.length ? parsed.services : defaultStore.services),
      products: shouldReplaceProductCatalog
        ? defaultStore.products.map((product) => ({ ...product }))
        : (Array.isArray(parsed.products) && parsed.products.length ? parsed.products : defaultStore.products),
      pros: Array.isArray(parsed.pros) && parsed.pros.length ? parsed.pros : defaultStore.pros
    };
    if (shouldSetProductImagePaths && !shouldReplaceProductCatalog) {
      const defaultProductImages = new Map(defaultStore.products.map((product) => [product.id, product.image_url]));
      store.products = store.products.map((product) => defaultProductImages.has(product.id)
        ? { ...product, image_url: defaultProductImages.get(product.id) }
        : product);
    }
    if (shouldAddVersionedServices) {
      const servicesToAdd = defaultStore.services.filter((service) =>
        SERVICES_ADDED_IN_VERSION_4.includes(service.id)
        && !store.services.some((storedService) => storedService.id === service.id)
      );
      store.services = [...store.services, ...servicesToAdd.map((service) => ({ ...service }))];
    }
    if (shouldSetServiceImagePaths && !shouldReplaceServiceCatalog) {
      const defaultImages = new Map(defaultStore.services.map((service) => [service.id, service.image_url]));
      store.services = store.services.map((service) => defaultImages.has(service.id)
        ? { ...service, image_url: defaultImages.get(service.id) }
        : service);
    }
    if (shouldReplaceServiceCatalog || shouldAddVersionedServices || shouldSetServiceImagePaths || shouldReplaceProductCatalog || shouldSetProductImagePaths) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    }
    return store;
  } catch {
    return defaultStore;
  }
}

function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value || 0));
}

function uniqueCategories(services) {
  return services.reduce((acc, service) => {
    if (!acc.includes(service.category)) acc.push(service.category);
    return acc;
  }, []);
}

function normalizePhone(raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.length === 10 || digits.length === 11) return '55' + digits;
  return digits.length >= 12 ? digits : null;
}

function buildWhatsAppUrl({ phone, shop, service, price, professional, durationMin = 0, items = [] }) {
  const normalizedPhone = normalizePhone(phone);
  if (!normalizedPhone) return null;

  const serviceSummary = Array.isArray(items) && items.length
    ? items.map((item) => `${item.name} (${item.duration_min || 0} min)`).join(', ')
    : service || 'Atendimento personalizado';

  const durationText = durationMin > 0
    ? `${Math.floor(durationMin / 60)}h ${durationMin % 60 ? `${durationMin % 60}min` : ''}`.trim()
    : 'A definir';

  const professionalText = professional && professional !== 'Produtos' ? professional : 'Sem preferência';

  const text = [
    'Olá! 👋',
    `Quero agendar um atendimento na ${shop}.`,
    '',
    'Resumo do pedido:',
    `• Serviços: ${serviceSummary}`,
    `• Valor estimado: ${formatCurrency(price)}`,
    `• Tempo estimado: ${durationText}`,
    `• Profissional: ${professionalText}`,
    '',
    'Pode me confirmar a disponibilidade? Muito obrigado! 🙌'
  ].join('\n');

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(text)}`;
}

function renderHome() {
  const store = loadStore();
  const hero = document.getElementById('hero');
  if (hero && store.config.hero_image_url) {
    hero.style.backgroundImage = `linear-gradient(180deg, rgba(11,11,13,0.1), rgba(11,11,13,0.9)), url('${store.config.hero_image_url}')`;
  }

  document.getElementById('hero-title').textContent = store.config.hero_title;
  document.getElementById('hero-subtitle').textContent = store.config.hero_subtitle;
  document.getElementById('about-title').textContent = store.config.about_title;
  document.getElementById('about-text').textContent = store.config.about_text;

  const categoryList = document.getElementById('service-categories');
  const categories = ['Todos', ...uniqueCategories(store.services)];
  categoryList.innerHTML = categories.map((category, index) => {
    const active = index === 0 ? 'active' : '';
    return `<button class="category-tab ${active}" type="button" data-category="${category}">${category}</button>`;
  }).join('');

  const cards = document.getElementById('services-list');
  const currentCategory = categoryList.dataset.currentCategory || 'Todos';
  const filteredServices = currentCategory === 'Todos'
    ? store.services
    : store.services.filter((service) => service.category === currentCategory);

  cards.innerHTML = filteredServices.map((service) => `
    <article class="service-card">
      <div class="service-photo">
        ${service.image_url ? `<img src="${service.image_url}" alt="${service.name}" />` : 'Foto a ser adicionada'}
      </div>
      <div class="service-body">
        <div class="service-header">
          <h3>${service.name}</h3>
          <span class="service-price">${formatCurrency(service.price)}</span>
        </div>
        ${service.duration_min ? `<div class="service-duration">Cerca de ${service.duration_min} min</div>` : ''}
        <p class="service-description">${service.description}</p>
        <button type="button" data-service-id="${service.id}">Quero este serviço</button>
      </div>
    </article>
  `).join('');

  const prosList = document.getElementById('pros-list');
  prosList.innerHTML = store.pros.map((pro) => `
    <article class="pro-card">
      <div class="pro-avatar">
        ${pro.photo_url ? `<img src="${pro.photo_url}" alt="${pro.name}" />` : pro.name[0]}
      </div>
      <div class="pro-body">
        <div class="pro-header">
          <h3>${pro.name}</h3>
        </div>
        <div class="pro-specialties">${pro.specialties.join(', ') || 'Especialidades variadas'}</div>
        <p class="pro-description">${pro.description}</p>
      </div>
    </article>
  `).join('');

  const productsList = document.getElementById('products-list');
  productsList.innerHTML = store.products.map((product) => `
    <article class="product-card">
      <div class="product-photo">
        ${product.image_url ? `<img src="${product.image_url}" alt="${product.name}" />` : 'Produto'}
      </div>
      <div class="product-body">
        <div class="product-header">
          <span class="product-tag">${product.category}</span>
          <span class="product-price">${formatCurrency(product.price)}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button type="button" data-product-id="${product.id}">Solicitar</button>
      </div>
    </article>
  `).join('');

  document.getElementById('contact-address').textContent = store.config.address;
  const hoursList = document.getElementById('hours-list');
  hoursList.innerHTML = (store.config.hours || []).map((hour) => `<p>${hour.days}: ${hour.time}</p>`).join('');

  const instagramEl = document.getElementById('instagram-link');
  const instagramHandle = store.config.instagram ? store.config.instagram.replace('@', '') : '';
  instagramEl.innerHTML = instagramHandle ? `<a href="https://instagram.com/${instagramHandle}" target="_blank" rel="noreferrer">Instagram</a>` : '';

  const mapsLink = document.getElementById('maps-link');
  mapsLink.href = store.config.maps_url || '#';

  document.querySelectorAll('.category-tab').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.category;
      categoryList.dataset.currentCategory = selected;
      document.querySelectorAll('.category-tab').forEach((node) => node.classList.toggle('active', node === button));
      renderHome();
    });
  });

  document.querySelectorAll('[data-service-id]').forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.serviceId);
    });
  });

  document.querySelectorAll('[data-product-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = store.products.find((product) => product.id === button.dataset.productId);
      if (!item) return;
      const productList = `${item.name} (${formatCurrency(item.price)})`;
      const url = buildWhatsAppUrl({
        phone: store.config.whatsapp,
        shop: store.config.shop_name,
        service: productList,
        price: item.price,
        professional: 'Produtos',
        durationMin: 0,
        items: []
      });

      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

function openModal(initialServiceId) {
  const modal = document.getElementById('service-modal');
  const body = document.getElementById('modal-body');
  const store = loadStore();

  let selectedServiceIds = initialServiceId ? [initialServiceId] : [];
  let selectedProId = null;
  let currentStep = 'services';

  const selectedServices = () => store.services.filter((item) => selectedServiceIds.includes(item.id));
  const totalPrice = () => selectedServices().reduce((sum, item) => sum + Number(item.price || 0), 0);
  const totalMinutes = () => selectedServices().reduce((sum, item) => sum + Number(item.duration_min || 0), 0);

  const render = () => {
    const services = selectedServices();
    const allPros = store.pros;
    const professional = store.pros.find((pro) => pro.id === selectedProId) || null;
    const url = selectedProId || store.config.allow_no_preference
      ? buildWhatsAppUrl({
          phone: store.config.whatsapp,
          shop: store.config.shop_name,
          service: services.map((service) => service.name).join(', '),
          price: totalPrice(),
          professional: professional ? professional.name : null,
          durationMin: totalMinutes(),
          items: services
        })
      : null;

    if (currentStep === 'services') {
      body.innerHTML = `
        <h2>Escolha os serviços</h2>
        <p class="modal-subtext">Você pode adicionar quantos serviços quiser e ver o valor e o tempo total somados.</p>
        <div class="modal-list">
          ${store.services.map((service) => {
            const selected = selectedServiceIds.includes(service.id);
            return `
              <button type="button" class="pro-option ${selected ? 'active' : ''}" data-service-select="${service.id}">
                <div class="pro-avatar">${service.image_url ? `<img src="${service.image_url}" alt="${service.name}" />` : service.name.slice(0, 1)}</div>
                <div class="pro-meta">
                  <strong>${service.name}</strong>
                  <small>${formatCurrency(service.price)} • ${service.duration_min || 0} min</small>
                  <span>${service.description}</span>
                </div>
              </button>
            `;
          }).join('')}
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" type="button" data-close-modal>Fechar</button>
          <button class="btn btn-primary" type="button" ${services.length ? '' : 'disabled'} data-next-step>Continuar</button>
        </div>
      `;

      body.querySelectorAll('[data-service-select]').forEach((option) => {
        option.addEventListener('click', () => {
          const serviceId = option.dataset.serviceSelect;
          if (selectedServiceIds.includes(serviceId)) {
            selectedServiceIds = selectedServiceIds.filter((id) => id !== serviceId);
          } else {
            selectedServiceIds = [...selectedServiceIds, serviceId];
          }
          render();
        });
      });

      body.querySelector('[data-next-step]')?.addEventListener('click', () => {
        currentStep = 'pro';
        render();
      });

      body.querySelector('[data-close-modal]')?.addEventListener('click', closeModal);
      return;
    }

    if (currentStep === 'pro') {
      const prosToShow = allPros;

      body.innerHTML = `
        <h2>Quem vai cuidar do seu estilo?</h2>
        <p class="modal-subtext">Escolha seu profissional de preferência e continue para o agendamento.</p>
        <p class="modal-service-name">Serviços: <strong>${services.map((service) => service.name).join(', ')}</strong></p>
        <div class="modal-list">
          ${prosToShow.length ? prosToShow.map((pro) => `
            <button type="button" class="pro-option ${selectedProId === pro.id ? 'active' : ''}" data-pro-id="${pro.id}">
              <div class="pro-avatar">${pro.photo_url ? `<img src="${pro.photo_url}" alt="${pro.name}" />` : pro.name[0]}</div>
              <div class="pro-meta">
                <strong>${pro.name}</strong>
                <small>${pro.specialties.join(', ')}</small>
                <span>${pro.description}</span>
              </div>
            </button>
          `).join('') : '<div class="empty-state">Nenhum profissional disponível para esses serviços.</div>'}
          ${store.config.allow_no_preference ? `
            <button type="button" class="pro-option ${selectedProId === 'none' ? 'active' : ''}" data-pro-id="none">
              <div class="pro-avatar">N</div>
              <div class="pro-meta">
                <strong>Sem preferência</strong>
                <span>Não tem um profissional específico em mente? Continue e deixe nossa equipe orientar seu atendimento.</span>
              </div>
            </button>
          ` : ''}
        </div>
        <div class="modal-actions">
          <button class="btn btn-secondary" type="button" data-back-step>Voltar para serviços</button>
          <button class="btn btn-primary" type="button" ${selectedProId || store.config.allow_no_preference ? '' : 'disabled'} data-next-step>Continuar</button>
        </div>
      `;

      body.querySelectorAll('[data-pro-id]').forEach((option) => {
        option.addEventListener('click', () => {
          selectedProId = option.dataset.proId;
          render();
        });
      });

      body.querySelector('[data-next-step]')?.addEventListener('click', () => {
        currentStep = 'summary';
        render();
      });

      body.querySelector('[data-back-step]')?.addEventListener('click', () => {
        currentStep = 'services';
        render();
      });
      return;
    }

    const durationHours = Math.floor(totalMinutes() / 60);
    const durationMinutes = totalMinutes() % 60;
    const durationText = durationHours ? `${durationHours}h ${durationMinutes ? `${durationMinutes}m` : ''}`.trim() : `${durationMinutes}m`;

    body.innerHTML = `
      <h2>Resumo do seu atendimento</h2>
      <div class="summary-list">
        <div class="summary-item">
          <small>Serviços</small>
          <strong>${services.map((service) => service.name).join(', ')}</strong>
        </div>
        <div class="summary-item">
          <small>Tempo total</small>
          <strong>${durationText}</strong>
        </div>
        <div class="summary-item">
          <small>Valor total</small>
          <span class="summary-amount">${formatCurrency(totalPrice())}</span>
        </div>
        <div class="summary-item">
          <small>Profissional</small>
          <strong>${professional ? professional.name : 'Sem preferência'}</strong>
        </div>
      </div>
      <p class="modal-subtext">O horário não é reservado por aqui: nossa equipe confirma a disponibilidade pelo WhatsApp.</p>
      <div class="modal-actions">
        ${url ? `<a class="btn btn-primary" href="${url}" target="_blank" rel="noreferrer">Continuar para o WhatsApp</a>` : '<div class="empty-state">O WhatsApp da barbearia ainda não foi configurado.</div>'}
      </div>
      <div class="modal-actions">
        <button class="btn btn-secondary" type="button" data-close-modal>Alterar serviços</button>
        <button class="btn btn-secondary" type="button" data-back-step>Alterar profissional</button>
      </div>
    `;

    body.querySelector('[data-close-modal]')?.addEventListener('click', closeModal);
    body.querySelector('[data-back-step]')?.addEventListener('click', () => {
      currentStep = 'pro';
      render();
    });
  };

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  render();
}

function closeModal() {
  const modal = document.getElementById('service-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderAdmin() {
  const app = document.getElementById('admin-app');
  const store = loadStore();

  app.innerHTML = `
    <section class="admin-section">
      <h2>Configurações gerais</h2>
      <div class="admin-grid">
        <div class="admin-field"><label>Nome da loja</label><input data-field="shop_name" value="${escapeHtml(store.config.shop_name)}" /></div>
        <div class="admin-field"><label>WhatsApp</label><input data-field="whatsapp" value="${escapeHtml(store.config.whatsapp)}" /></div>
        <div class="admin-field"><label>Instagram</label><input data-field="instagram" value="${escapeHtml(store.config.instagram)}" /></div>
        <div class="admin-field"><label>Endereço</label><input data-field="address" value="${escapeHtml(store.config.address)}" /></div>
        <div class="admin-field full"><label>Google Maps</label><input data-field="maps_url" value="${escapeHtml(store.config.maps_url)}" /></div>
        <div class="admin-field full"><label>Título principal</label><textarea data-field="hero_title">${escapeHtml(store.config.hero_title)}</textarea></div>
        <div class="admin-field full"><label>Subtítulo principal</label><textarea data-field="hero_subtitle">${escapeHtml(store.config.hero_subtitle)}</textarea></div>
        <div class="admin-field full"><label>Título sobre</label><input data-field="about_title" value="${escapeHtml(store.config.about_title)}" /></div>
        <div class="admin-field full"><label>Texto sobre</label><textarea data-field="about_text">${escapeHtml(store.config.about_text)}</textarea></div>
        <div class="admin-field full checkbox-row">
          <input type="checkbox" data-field="allow_no_preference" ${store.config.allow_no_preference ? 'checked' : ''} />
          <label>Permitir sem preferência</label>
        </div>
      </div>
    </section>

    <section class="admin-section">
      <h2>Serviços</h2>
      <button class="add-btn" type="button" data-add-service>Adicionar serviço</button>
      ${store.services.map((service, index) => `
        <div class="admin-card">
          <div class="card-actions"><button class="remove-btn" type="button" data-remove-service="${index}">Remover</button></div>
          <div class="admin-grid">
            <div class="admin-field"><label>Nome</label><input data-service-index="${index}" data-service-field="name" value="${escapeHtml(service.name)}" /></div>
            <div class="admin-field"><label>Categoria</label><input data-service-index="${index}" data-service-field="category" value="${escapeHtml(service.category)}" /></div>
            <div class="admin-field"><label>Preço</label><input type="number" data-service-index="${index}" data-service-field="price" value="${service.price}" /></div>
            <div class="admin-field"><label>Duração (min)</label><input type="number" data-service-index="${index}" data-service-field="duration_min" value="${service.duration_min ?? ''}" /></div>
            <div class="admin-field full"><label>Descrição</label><textarea data-service-index="${index}" data-service-field="description">${escapeHtml(service.description)}</textarea></div>
            <div class="admin-field full"><label>Imagem</label><input data-service-index="${index}" data-service-field="image_url" value="${escapeHtml(service.image_url || '')}" /></div>
          </div>
        </div>
      `).join('')}
    </section>

    <section class="admin-section">
      <h2>Produtos</h2>
      <button class="add-btn" type="button" data-add-product>Adicionar produto</button>
      ${store.products.map((product, index) => `
        <div class="admin-card">
          <div class="card-actions"><button class="remove-btn" type="button" data-remove-product="${index}">Remover</button></div>
          <div class="admin-grid">
            <div class="admin-field"><label>Nome</label><input data-product-index="${index}" data-product-field="name" value="${escapeHtml(product.name)}" /></div>
            <div class="admin-field"><label>Categoria</label><input data-product-index="${index}" data-product-field="category" value="${escapeHtml(product.category)}" /></div>
            <div class="admin-field"><label>Preço</label><input type="number" data-product-index="${index}" data-product-field="price" value="${product.price}" /></div>
            <div class="admin-field full"><label>Descrição</label><textarea data-product-index="${index}" data-product-field="description">${escapeHtml(product.description)}</textarea></div>
            <div class="admin-field full"><label>Imagem</label><input data-product-index="${index}" data-product-field="image_url" value="${escapeHtml(product.image_url || '')}" /></div>
          </div>
        </div>
      `).join('')}
    </section>

    <section class="admin-section">
      <h2>Profissionais</h2>
      <button class="add-btn" type="button" data-add-pro>Adicionar profissional</button>
      ${store.pros.map((pro, index) => `
        <div class="admin-card">
          <div class="card-actions"><button class="remove-btn" type="button" data-remove-pro="${index}">Remover</button></div>
          <div class="admin-grid">
            <div class="admin-field"><label>Nome</label><input data-pro-index="${index}" data-pro-field="name" value="${escapeHtml(pro.name)}" /></div>
            <div class="admin-field"><label>Especialidades</label><input data-pro-index="${index}" data-pro-field="specialties" value="${escapeHtml(pro.specialties.join(', '))}" /></div>
            <div class="admin-field full"><label>Descrição</label><textarea data-pro-index="${index}" data-pro-field="description">${escapeHtml(pro.description)}</textarea></div>
            <div class="admin-field full"><label>Foto</label><input data-pro-index="${index}" data-pro-field="photo_url" value="${escapeHtml(pro.photo_url || '')}" /></div>
          </div>
        </div>
      `).join('')}
    </section>
  `;

  document.querySelectorAll('[data-field]').forEach((input) => {
    const key = input.dataset.field;
    input.addEventListener('input', () => {
      const store = loadStore();
      const value = input.type === 'checkbox' ? input.checked : input.value;
      store.config[key] = value;
      saveStore(store);
    });
  });

  document.querySelectorAll('[data-service-field]').forEach((input) => {
    input.addEventListener('input', () => {
      const store = loadStore();
      const serviceIndex = Number(input.dataset.serviceIndex);
      const field = input.dataset.serviceField;
      const value = input.type === 'number' && input.value === '' ? null : (input.type === 'number' ? Number(input.value) : input.value);
      store.services[serviceIndex][field] = value;
      saveStore(store);
    });
  });

  document.querySelectorAll('[data-pro-field]').forEach((input) => {
    input.addEventListener('input', () => {
      const store = loadStore();
      const proIndex = Number(input.dataset.proIndex);
      const field = input.dataset.proField;
      const value = field === 'specialties' ? input.value.split(',').map((item) => item.trim()).filter(Boolean) : input.value;
      store.pros[proIndex][field] = value;
      saveStore(store);
    });
  });

  document.querySelectorAll('[data-product-field]').forEach((input) => {
    input.addEventListener('input', () => {
      const store = loadStore();
      const productIndex = Number(input.dataset.productIndex);
      const field = input.dataset.productField;
      const value = input.type === 'number' && input.value === '' ? null : (input.type === 'number' ? Number(input.value) : input.value);
      store.products[productIndex][field] = value;
      saveStore(store);
    });
  });

  document.querySelector('[data-add-service]')?.addEventListener('click', () => {
    const store = loadStore();
    store.services.push({
      id: `svc-${Date.now()}`,
      name: 'Novo serviço',
      description: 'Descrição do serviço',
      price: 0,
      image_url: '',
      duration_min: 30,
      category: 'Cortes'
    });
    saveStore(store);
    renderAdmin();
  });

  document.querySelector('[data-add-product]')?.addEventListener('click', () => {
    const store = loadStore();
    store.products.push({
      id: `prod-${Date.now()}`,
      name: 'Novo produto',
      description: 'Descrição do produto',
      price: 0,
      category: 'Produtos',
      image_url: ''
    });
    saveStore(store);
    renderAdmin();
  });

  document.querySelector('[data-add-pro]')?.addEventListener('click', () => {
    const store = loadStore();
    store.pros.push({
      id: `pro-${Date.now()}`,
      name: 'Novo profissional',
      description: 'Descrição do profissional',
      photo_url: '',
      specialties: ['Cortes'],
      service_ids: []
    });
    saveStore(store);
    renderAdmin();
  });

  document.querySelectorAll('[data-remove-service]').forEach((button) => {
    button.addEventListener('click', () => {
      const store = loadStore();
      const index = Number(button.dataset.removeService);
      store.services.splice(index, 1);
      saveStore(store);
      renderAdmin();
    });
  });

  document.querySelectorAll('[data-remove-product]').forEach((button) => {
    button.addEventListener('click', () => {
      const store = loadStore();
      const index = Number(button.dataset.removeProduct);
      store.products.splice(index, 1);
      saveStore(store);
      renderAdmin();
    });
  });

  document.querySelectorAll('[data-remove-pro]').forEach((button) => {
    button.addEventListener('click', () => {
      const store = loadStore();
      const index = Number(button.dataset.removePro);
      store.pros.splice(index, 1);
      saveStore(store);
      renderAdmin();
    });
  });

  document.getElementById('save-store')?.addEventListener('click', () => {
    alert('Dados salvos no navegador.');
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function handleAdminLogin() {
  const loginInput = document.getElementById('admin-login-input');
  const passInput = document.getElementById('admin-password-input');
  const button = document.getElementById('admin-login-button');

  button?.addEventListener('click', () => {
    const login = loginInput?.value.trim();
    const password = passInput?.value.trim();

    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      window.location.href = 'admin-editor.html';
      return;
    }

    alert('Login ou senha inválidos.');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  if (page === 'home') {
    renderHome();
    const modal = document.getElementById('service-modal');
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }

  if (page === 'admin-login') {
    handleAdminLogin();
  }

  if (page === 'admin') {
    renderAdmin();
  }
});
