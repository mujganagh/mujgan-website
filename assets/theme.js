(function () {
  // Ensure theme class is present ASAP if someone forgot the head preloader
  (function ensureThemeClass(){
    const has = document.documentElement.classList.contains('dark-theme')
             || document.documentElement.classList.contains('light-theme');
    if (has) return;
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
  })();

  // Create the button if missing
  let btn = document.getElementById('theme-toggle');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label','Toggle theme');
    btn.innerHTML = '<span id="theme-text">toggle theme</span>';
    document.body.appendChild(btn);
  }

  const text = btn.querySelector('#theme-text');

  const isDark = () => document.documentElement.classList.contains('dark-theme');
  const apply = (dark) => {
    document.documentElement.classList.toggle('dark-theme', dark);
    document.documentElement.classList.toggle('light-theme', !dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (text) text.textContent = dark ? 'dark mode' : 'light mode';
  };

  // Init from saved or system
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved ? saved === 'dark' : prefersDark);

  btn.addEventListener('click', () => apply(!isDark()));
})();
