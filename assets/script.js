// Fonction pour ouvrir la fenêtre de NotebookLM
function openNotebookModal() {
  const modal = document.getElementById('notebookModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Empêche le défilement en arrière-plan
  }
}

// Fonction pour fermer la fenêtre
function closeNotebookModal() {
  const modal = document.getElementById('notebookModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Rétablit le défilement
  }
}

// Fermer la modal si touche Echap pressée
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeNotebookModal();
  }
});
