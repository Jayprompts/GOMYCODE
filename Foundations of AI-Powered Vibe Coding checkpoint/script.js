/**
 * Foundations of AI-Powered Vibe Coding - Main Interaction Script
 */

(function () {
  'use strict';

  // --- Theme Vibe Switcher ---
  const vibeButtons = document.querySelectorAll('.vibe-btn');
  const savedAccent = localStorage.getItem('jay_vibe_accent') || 'indigo';

  function setAccent(accent) {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('jay_vibe_accent', accent);

    vibeButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.vibe === accent);
    });
    showToast(`Vibe accent set to ${capitalize(accent)} ✨`);
  }

  // Initialize saved theme
  document.documentElement.setAttribute('data-accent', savedAccent);
  vibeButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.vibe === savedAccent);
    btn.addEventListener('click', () => setAccent(btn.dataset.vibe));
  });

  // --- Modal Management: "View My Projects" ---
  const viewProjectsBtn = document.getElementById('viewProjectsBtn');
  const projectsDialog = document.getElementById('projectsDialog');
  const closeDialogBtn = document.getElementById('closeDialogBtn');
  const contactBtn = document.getElementById('contactBtn');

  if (viewProjectsBtn && projectsDialog) {
    viewProjectsBtn.addEventListener('click', () => {
      projectsDialog.showModal();
    });

    closeDialogBtn.addEventListener('click', () => {
      projectsDialog.close();
    });

    projectsDialog.addEventListener('click', (e) => {
      const rect = projectsDialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        projectsDialog.close();
      }
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      showToast('📬 Connect with Jay: ready for innovative opportunities!');
    });
  }

  // --- Toast Notification Feedback ---
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // --- Interactive Ambient Canvas Particle System ---
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // Set Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
