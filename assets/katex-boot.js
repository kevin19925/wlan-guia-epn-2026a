/** Inicializa KaTeX en tarjetas data-latex / data-latex-inline (portal y páginas MD). */
function renderAllKatex() {
  if (typeof katex === 'undefined') return;
  document.querySelectorAll('[data-latex]').forEach(function (el) {
    var lat = el.getAttribute('data-latex');
    var inner = el.querySelector('.formula-inner') || el;
    if (!lat || !inner) return;
    try {
      katex.render(lat, inner, { displayMode: true, throwOnError: false, strict: 'ignore' });
    } catch (e) { /* MathML de respaldo ya en HTML */ }
  });
  document.querySelectorAll('[data-latex-inline]').forEach(function (el) {
    var lat = el.getAttribute('data-latex-inline');
    if (!lat) return;
    try {
      katex.render(lat, el, { displayMode: false, throwOnError: false, strict: 'ignore' });
    } catch (e) { /* noop */ }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAllKatex);
} else {
  renderAllKatex();
}
