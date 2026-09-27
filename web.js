
/* FastTap Ultra Web Enhancements */
(() => {
  const state = { deferredInstall: null };

  const ready = () => {
    document.documentElement.classList.add('web-ready');

    // Connection badge
    const badge = document.createElement('div');
    badge.id = 'webConnectionBadge';
    badge.className = 'web-connection-badge';
    badge.setAttribute('aria-live','polite');
    badge.innerHTML = '<span class="web-dot"></span><span class="web-connection-text">Online</span>';
    document.body.appendChild(badge);

    const updateConnection = () => {
      const online = navigator.onLine;
      badge.classList.toggle('offline', !online);
      badge.querySelector('.web-connection-text').textContent = online ? 'Online' : 'Offline';
    };
    window.addEventListener('online', updateConnection);
    window.addEventListener('offline', updateConnection);
    updateConnection();

    // Install button: appears only when the browser offers installation.
    const install = document.createElement('button');
    install.id = 'installAppBtn';
    install.className = 'web-install-btn';
    install.textContent = '⬇ Install FastTap';
    install.hidden = true;
    install.addEventListener('click', async () => {
      if (!state.deferredInstall) return;
      state.deferredInstall.prompt();
      await state.deferredInstall.userChoice;
      state.deferredInstall = null;
      install.hidden = true;
    });
    document.body.appendChild(install);

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      state.deferredInstall = event;
      install.hidden = false;
    });
    window.addEventListener('appinstalled', () => {
      state.deferredInstall = null;
      install.hidden = true;
    });

    // Prevent accidental browser gestures while tapping the game surface.
    document.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.tap-zone, button')) e.preventDefault();
    }, { passive:false });

    // Register the service worker for the web shell.
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
