   // Theme toggle
    const themeBtn = document.getElementById('themeBtn');
    const themeFooterBtn = document.getElementById('themeFooterBtn');
    function setTheme(isDark) {
      if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('eunline_theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        themeFooterBtn.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('eunline_theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        themeFooterBtn.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
      }
    }

    (function () {
      const saved = (localStorage.getItem('eunline_theme') || '').toLowerCase();
      if (saved === 'dark') setTheme(true);
      else if (saved === 'light') setTheme(false);
      else setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    })();

    themeBtn.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') !== 'dark'));
    themeFooterBtn.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') !== 'dark'));

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileBtn');
    const topnav = document.getElementById('topnav');
    mobileBtn.addEventListener('click', () => topnav.classList.toggle('show'));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
    
       
