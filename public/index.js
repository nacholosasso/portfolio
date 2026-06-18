// Lógica de Proyectos
const proyectos = [
    {
        titulo: "Portal de Noticias con IA",
        descripcion: "Arquitectura backend escalable en python, clasificación de noticias en tiempo real y almacenamiento eficiente en NoSQL.",
        linkGithub: "https://github.com/nacholosasso/noticias-ia",
        linkProyecto: "https://info-noticias-ia.web.app/",
        imagen: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=70&w=600",
        tecnologias: ["Python", "NoSQL", "Cloud Run", "Docker", "Firebase"]
    },
    {
        titulo: "Contenido Personal de Cine",
        descripcion: "Contenido personal interactivo del mundo cine con integración de API Sheets y JavaScript y un diseño moderno enfocado en la experiencia de usuario.",
        linkGithub: "https://github.com/nacholosasso/peliculas",
        linkProyecto: "https://cineayn.web.app/",
        imagen: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=70&w=600",
        tecnologias: ["JavaScript", "API Sheets", "NoSQL", "Firebase"]
    },
    {
        titulo: "Turnos Barberia",
        descripcion: "Plataforma de reservas para barbería construida con backend en Python desplegado mediante contenedores en Google Cloud Run, almacenamiento en NoSQL y frontend en Firebase Hosting.",
        linkGithub: "https://github.com/nacholosasso/turnos",
        linkProyecto: "https://turnos-497423.web.app/",
        imagen: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=70&w=600",
        tecnologias: ["Python", "NoSQL", "Cloud Run", "Firebase", "Docker"]
    },
    {
        titulo: "Homenaje a Boca Juniors",
        descripcion: "Proyecto web con palmarés, historia y el plantel en vivo actualizado automáticamente mediante integraciones de APIs deportivas y Google Cloud Scheduler.",
        linkGithub: "https://github.com/nacholosasso/boca",
        linkProyecto: "https://boca-497814.web.app/",
        imagen: "bombonera.jpg",
        tecnologias: ["JavaScript", "Node.js", "Cloud Run", "Docker", "Firebase"]
    },
    {
        titulo: "Ataque y Justicia",
        descripcion: "Plantel y armador de formaciones en tiempo real para mi equipo de fútbol 8 (F8), con datos de jugadores sincronizados desde Google Sheets, backend en Firestore y despliegue en Firebase Hosting para que todo el equipo vea las jugadas en vivo.",
        linkGithub: "https://github.com/nacholosasso/ataqueyjusticia",
        linkProyecto: "https://ataqueyjusticia.web.app/",
        imagen: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=70&w=600",
        tecnologias: ["JavaScript", "Firestore", "API Sheets", "Firebase"]
    },
    {
        titulo: "Práctica Python",
        descripcion: "Repositorio personal de prácticas y ejercicios en Python. Aquí alojo los archivos .py sobre los diversos temas del curso.",
        linkGithub: "https://github.com/nacholosasso/practica-python",
        linkProyecto: "",
        linkCurso: "https://www.youtube.com/playlist?list=PLyvsggKtwbLW1j0d5yaCkRF9Axpdlhsxz",
        imagen: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=70&w=600",
        tecnologias: ["Python"]
    }
];

function renderizarProyectos() {
    const grid = document.getElementById('proyectos-grid');
    grid.innerHTML = proyectos.map((p, i) => `
        <div class="fade-in-up group flex-none w-[90%] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] snap-start bg-paper dark:bg-bg-dark border border-line dark:border-line-dark rounded-2xl overflow-hidden hover:border-signal dark:hover:border-signal-dark hover:shadow-xl transition duration-300"
             data-delay="${i * 100}">
            <div class="h-48 overflow-hidden relative">
                <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" decoding="async" width="600" height="400" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                <div class="absolute inset-0 bg-ink/70 flex items-center justify-center gap-3 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    ${p.linkGithub ? `
                    <a href="${p.linkGithub}" target="_blank" rel="noopener noreferrer" class="bg-paper text-ink font-semibold text-sm px-4 py-2 rounded-lg hover:bg-signal hover:text-paper transition flex items-center gap-2">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>` : ''}
                    ${p.linkProyecto ? `
                    <a href="${p.linkProyecto}" target="_blank" rel="noopener noreferrer" class="bg-signal-deep text-paper font-semibold text-sm px-4 py-2 rounded-lg hover:bg-signal transition flex items-center gap-2">
                        <i class="fa-solid fa-rocket"></i> Ver App
                    </a>` : ''}
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-display text-xl font-bold mb-2">${p.titulo}</h3>
                <p class="text-ink-dim dark:text-ink-dim-dark text-sm mb-3">${p.descripcion}</p>
                ${p.tecnologias && p.tecnologias.length ? `
                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${p.tecnologias.map(t => `<span class="text-xs px-2 py-1 bg-signal/10 dark:bg-signal-dark/10 text-signal-deep dark:text-signal-dark rounded-md font-medium border border-signal/20 dark:border-signal-dark/20">${t}</span>`).join('')}
                </div>` : ''}
                <div class="flex flex-col space-y-2">
                    ${p.linkGithub ? `
                    <a href="${p.linkGithub}" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-panel dark:bg-panel-dark text-ink dark:text-ink-dark font-semibold py-2 rounded-lg hover:bg-line dark:hover:bg-line-dark transition text-sm">
                        <i class="fa-brands fa-github mr-2"></i> Ver en GitHub
                    </a>` : ''}
                    ${p.linkProyecto ? `
                    <a href="${p.linkProyecto}" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-signal-deep dark:bg-signal-dark text-paper dark:text-bg-dark font-semibold py-2 rounded-lg hover:bg-ink dark:hover:bg-ink-dark transition text-sm">
                        <i class="fa-solid fa-rocket mr-2"></i> Link del app web
                    </a>` : ''}
                    ${p.linkCurso ? `
                    <a href="${p.linkCurso}" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition text-sm">
                        <i class="fa-brands fa-youtube mr-2"></i> Ver Curso
                    </a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    observeElements();
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.dataset.delay) {
                    el.style.transitionDelay = el.dataset.delay + 'ms';
                }
                el.classList.add('is-visible');
                el.querySelectorAll('.skill-bar-fill').forEach(bar => {
                    bar.classList.add('is-visible');
                });
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarProyectos();
    observeElements();

    // Manejo profesional del formulario de contacto
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('¡Gracias! Tu mensaje ha sido enviado con éxito.');
                contactForm.reset();
            } else {
                throw new Error();
            }
        } catch (err) {
            alert('Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
});
