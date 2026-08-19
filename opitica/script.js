
// Inicializar ícones
lucide.createIcons();


// --- Menu Mobile ---
var btnMenu = document.getElementById('btn-menu');
var navMobile = document.getElementById('nav-mobile');
var iconeAbrir = document.getElementById('icone-abrir');
var iconeFechar = document.getElementById('icone-fechar');
var menuAberto = false;

btnMenu.addEventListener('click', function () {
  menuAberto = !menuAberto;
  navMobile.classList.toggle('open', menuAberto);
  iconeAbrir.classList.toggle('hidden', menuAberto);
  iconeFechar.classList.toggle('hidden', !menuAberto);
  btnMenu.setAttribute('aria-expanded', menuAberto);
});

// Fechar menu ao clicar num link
document.querySelectorAll('.link-mobile').forEach(function (link) {
  link.addEventListener('click', function () {
    menuAberto = false;
    navMobile.classList.remove('open');
    iconeAbrir.classList.remove('hidden');
    iconeFechar.classList.add('hidden');
    btnMenu.setAttribute('aria-expanded', 'false');
  });
});


// --- Header: sombra e botão flutuante ao rolar ---
var topoNav = document.getElementById('topo-nav');
var btnWhatsapp = document.getElementById('btn-whatsapp-fixo');

window.addEventListener('scroll', function () {
  var rolou = window.scrollY > 50;
  topoNav.classList.toggle('shadow-lg', rolou);
  topoNav.classList.toggle('shadow-neutral-200/50', rolou);

  if (window.scrollY > 400) {
    btnWhatsapp.style.opacity = '1';
    btnWhatsapp.style.pointerEvents = 'auto';
  } else {
    btnWhatsapp.style.opacity = '0';
    btnWhatsapp.style.pointerEvents = 'none';
  }
});


// --- Aparição das seções ao rolar ---
var elementos = document.querySelectorAll('.reveal');

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

elementos.forEach(function (el) { observer.observe(el); });


// --- Scroll suave com compensação do header ---
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      var offset = topoNav.offsetHeight + 16;
      var posicao = destino.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: posicao, behavior: 'smooth' });
    }
  });
});
