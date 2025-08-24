// Alternar tema claro/escuro
    const app = document.getElementById('app');
    document.getElementById('themeToggle').addEventListener('click', () => {
      app.classList.toggle('light');
    });

    // Alternar visibilidade da sidebar em telas menores
    const sidebar = document.getElementById('sidebar');
    const btnMenu = document.getElementById('btnMenu');
    btnMenu.addEventListener('click', () => {
      if (getComputedStyle(sidebar).display === 'none') {
        sidebar.style.display = 'flex';
      } else {
        sidebar.style.display = '';
      }
    });