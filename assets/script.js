document.addEventListener("DOMContentLoaded", function () {
  // --- Gestion de la boîte Modale IA ---
  const openBtn = document.getElementById("openNotebookBtn");
  const closeBtn = document.getElementById("closeNotebookBtn");
  const modal = document.getElementById("notebookModal");

  if (openBtn && modal) {
    // Ouvrir la boîte modale au clic
    openBtn.addEventListener("click", function () {
      modal.classList.add("active");
    });

    // Fermer avec le bouton (X)
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        modal.classList.remove("active");
      });
    }

    // Fermer en cliquant en dehors de la fenêtre
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });

    // Fermer avec la touche Échap (Escape)
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
      }
    });
  }

  // --- Gestion du filtrage des documents ---
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
