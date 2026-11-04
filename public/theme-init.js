// Evitar el "flash" del modo incorrecto y aplicar el tema (oscuro/claro) lo antes posible
// Carga el tema desde localStorage. Por defecto es oscuro.
if (localStorage.getItem('color-theme') === 'light') {
    document.documentElement.classList.remove('dark');
} else {
    document.documentElement.classList.add('dark');
}
