// Evitar el "flash" del modo incorrecto y aplicar el tema (oscuro/claro) lo antes posible
// Carga el tema desde localStorage. Por defecto es claro.
if (localStorage.getItem('color-theme') === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
