// Le bouton "Assistant NotebookLM" est maintenant un simple lien qui ouvre
// NotebookLM dans un nouvel onglet (Google bloque l'affichage de NotebookLM
// dans une iframe, c'est pour ça que la fenêtre ne s'ouvrait pas avant).
// Aucun script n'est donc nécessaire pour ce bouton.

// Filtrage des documents (Tous / Cours / TD / TP)
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const rows = document.querySelectorAll('.doc-row');
  const blocks = document.querySelectorAll('.course-block');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      rows.forEach(function (row) {
        const match = filter === 'all' || row.getAttribute('data-type') === filter;
        row.classList.toggle('is-hidden', !match);
      });

      // Masquer une matière entière si plus aucun document n'y correspond
      blocks.forEach(function (block) {
        const visibleRows = block.querySelectorAll('.doc-row:not(.is-hidden)');
        block.classList.toggle('is-hidden', visibleRows.length === 0);
      });
    });
  });
});
