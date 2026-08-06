document.addEventListener("DOMContentLoaded", function () {
  
  // --- Gestion de la Fenêtre Popup Assistant IA ---
  const openBtn = document.getElementById("openNotebookBtn");
  const notebookUrl = "https://notebook.google.com/notebook/47d33ef0-e66e-4c1c-8d0e-93e682bf35d5";

  if (openBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Largeur fixée (type panneau latéral) et hauteur adaptée à l'écran de l'étudiant
      const width = 540;
      const height = window.innerHeight - 80;
      
      // Positionnement automatique tout à droite de l'écran
      const left = window.screen.width - width - 30;
      const top = 40;

      // Propriétés de la fenêtre popup
      const windowFeatures = `
        width=${width},
        height=${height},
        top=${top},
        left=${left},
        resizable=yes,
        scrollbars=yes,
        status=no,
        toolbar=no,
        menubar=no,
        location=no
      `;

      // Ouverture de la fenêtre sur-mesure
      window.open(notebookUrl, "NotebookLMAssistant", windowFeatures);
    });
  }

  // --- Gestion du filtrage des documents (Conservé à l'identique) ---
  const filterBtns = document.querySelectorAll(".filter-btn");
  const docRows = document.querySelectorAll(".doc-row");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      docRows.forEach(function (row) {
        if (filterValue === "all" || row.getAttribute("data-type") === filterValue) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
});
