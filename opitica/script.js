// Inicializar ícones
lucide.createIcons();

// --- Menu Mobile ---
var btnMenu = document.getElementById("btn-menu");
var navMobile = document.getElementById("nav-mobile");
var iconeAbrir = document.getElementById("icone-abrir");
var iconeFechar = document.getElementById("icone-fechar");
var menuAberto = false;

btnMenu.addEventListener("click", function () {
	menuAberto = !menuAberto;
	navMobile.classList.toggle("open", menuAberto);
	iconeAbrir.classList.toggle("hidden", menuAberto);
	iconeFechar.classList.toggle("hidden", !menuAberto);
	btnMenu.setAttribute("aria-expanded", menuAberto);
});

// Fechar menu ao clicar num link
document.querySelectorAll(".link-mobile").forEach(function (link) {
	link.addEventListener("click", function () {
		menuAberto = false;
		navMobile.classList.remove("open");
		iconeAbrir.classList.remove("hidden");
		iconeFechar.classList.add("hidden");
		btnMenu.setAttribute("aria-expanded", "false");
	});
});

// --- Header: sombra e botão flutuante ao rolar ---
var topoNav = document.getElementById("topo-nav");
var btnWhatsapp = document.getElementById("btn-whatsapp-fixo");

window.addEventListener("scroll", function () {
	var rolou = window.scrollY > 50;
	topoNav.classList.toggle("shadow-lg", rolou);
	topoNav.classList.toggle("shadow-neutral-200/50", rolou);

	if (window.scrollY > 400) {
		btnWhatsapp.style.opacity = "1";
		btnWhatsapp.style.pointerEvents = "auto";
	} else {
		btnWhatsapp.style.opacity = "0";
		btnWhatsapp.style.pointerEvents = "none";
	}
});

// --- Aparição das seções ao rolar ---
var elementos = document.querySelectorAll(".reveal");

var observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry, i) {
			if (entry.isIntersecting) {
				setTimeout(function () {
					entry.target.classList.add("visible");
				}, i * 80);
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

elementos.forEach(function (el) {
	observer.observe(el);
});

// --- Scroll suave com compensação do header ---
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
	link.addEventListener("click", function (e) {
		var destino = document.querySelector(this.getAttribute("href"));
		if (destino) {
			e.preventDefault();
			var offset = topoNav.offsetHeight + 16;
			var posicao =
				destino.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: posicao, behavior: "smooth" });
		}
	});
});

lucide.createIcons();
var bm = document.getElementById("cat-btn-menu"),
	nm = document.getElementById("cat-nav-mobile"),
	ia = document.getElementById("cat-icone-abrir"),
	ic = document.getElementById("cat-icone-fechar"),
	mo = false;
bm.addEventListener("click", function () {
	mo = !mo;
	nm.classList.toggle("open", mo);
	ia.classList.toggle("hidden", mo);
	ic.classList.toggle("hidden", !mo);
	bm.setAttribute("aria-expanded", String(mo));
});
document.querySelectorAll(".cat-link-mobile").forEach(function (l) {
	l.addEventListener("click", function () {
		mo = false;
		nm.classList.remove("open");
		ia.classList.remove("hidden");
		ic.classList.add("hidden");
		bm.setAttribute("aria-expanded", "false");
	});
});
var nav = document.getElementById("cat-nav"),
	bw = document.getElementById("btn-whatsapp-fixo-cat");
window.addEventListener("scroll", function () {
	nav.classList.toggle("shadow-lg", window.scrollY > 50);
	bw.style.opacity = window.scrollY > 400 ? "1" : "0";
	bw.style.pointerEvents = window.scrollY > 400 ? "auto" : "none";
});
var obs = new IntersectionObserver(
	function (es) {
		es.forEach(function (e, i) {
			if (e.isIntersecting) {
				setTimeout(function () {
					e.target.classList.add("visible");
				}, i * 70);
				obs.unobserve(e.target);
			}
		});
	},
	{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".reveal").forEach(function (el) {
	obs.observe(el);
});
document.querySelectorAll('a[href^="#"]').forEach(function (l) {
	l.addEventListener("click", function (e) {
		var d = document.querySelector(this.getAttribute("href"));
		if (d) {
			e.preventDefault();
			window.scrollTo({
				top:
					d.getBoundingClientRect().top +
					window.scrollY -
					(nav.offsetHeight + 16),
				behavior: "smooth",
			});
		}
	});
});
var fs = document.querySelectorAll("#filtros-armacoes .filter-pill"),
	cs = document.querySelectorAll("#grid-armacoes .marca-card");
fs.forEach(function (b) {
	b.addEventListener("click", function () {
		fs.forEach(function (f) {
			f.classList.remove("active");
		});
		this.classList.add("active");
		var f = this.getAttribute("data-filter");
		cs.forEach(function (c) {
			var s = f === "todos" || c.getAttribute("data-categoria") === f;
			c.style.transition = "opacity .35s ease,transform .35s ease";
			c.style.opacity = s ? "1" : "0.2";
			c.style.transform = s ? "" : "scale(0.94)";
			c.style.pointerEvents = s ? "" : "none";
		});
	});
});
window.addEventListener("load", function () {
	document.querySelectorAll(".reveal").forEach(function (el) {
		if (el.getBoundingClientRect().top < window.innerHeight)
			el.classList.add("visible");
	});
});
