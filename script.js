// Filtre simple par type de document (Tous / Cours / TD / TP)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const rows = document.querySelectorAll(".doc-row");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      rows.forEach((row) => {
        if (filter === "all" || row.dataset.type === filter) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });

      // Masquer les blocs de cours devenus vides
      document.querySelectorAll(".course-block").forEach((block) => {
        const visibleRows = block.querySelectorAll(
          '.doc-row:not([style*="display: none"])'
        );
        block.style.display = visibleRows.length ? "" : "none";
      });
    });
  });
});
