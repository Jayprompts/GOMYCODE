/**
 * Aura Audio - Product Showcase Gallery Logic
 * Vanilla JavaScript (No Frameworks)
 */

(function () {
  'use strict';

  // --- Products Data for Modal/Quick View ---
  const products = {
    1: {
      name: 'Aura Horizon ANC',
      tagline: 'Flagship Wireless Active Noise-Cancelling Headphones',
      price: '$349',
      rating: '4.9 ★ (420 reviews)',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80',
      specs: [
        '40mm Custom Beryllium Acoustic Drivers',
        'Hybrid Active Noise Cancellation (-42dB attenuation)',
        'Up to 55 Hours Playback with Fast Fuel (10 min = 5 hours)',
        'Lossless Bluetooth 5.3 with LDAC & aptX HD support',
        'Ultra-plush Memory Foam & Anodized Aluminum build'
      ]
    },
    2: {
      name: 'Aura Pods Ultra',
      tagline: 'Spatial 360° True Wireless Earbuds with Smart Charging Case',
      price: '$199',
      rating: '5.0 ★ (890 reviews)',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&auto=format&fit=crop&q=80',
      specs: [
        'True Dynamic Head-Tracking Spatial Audio',
        'Quad-Mic Environmental Noise Filtering for Calls',
        '36-Hour Total Battery Life with Qi Wireless Charging',
        'IPX7 Sweat & Water Resistance for Extreme Workouts',
        'Touch Pressure Controls with Instant Device Pairing'
      ]
    },
    3: {
      name: 'Aura Pulse Studio',
      tagline: 'High-Fidelity Desktop & Studio Soundbar',
      price: '$279',
      rating: '4.8 ★ (215 reviews)',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&auto=format&fit=crop&q=80',
      specs: [
        'Dual Silk Dome Tweeters & Carbon Fiber Woofers',
        'Integrated 32-bit/384kHz Audiophile USB-C DAC',
        'Optical, Aux, USB-C, and Low-Latency Bluetooth 5.4',
        'Aircraft-Grade Solid Extruded Aluminum Enclosure',
        'Multi-Room Audio Sync via Wireless AuraLink'
      ]
    }
  };

  // --- DOM Elements ---
  const themeToggle = document.getElementById('themeToggle');
  const cartBadge = document.getElementById('cartBadge');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const quickViewModal = document.getElementById('quickViewModal');
  const modalDynamicContent = document.getElementById('modalDynamicContent');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const yearSpan = document.getElementById('year');

  let cartCount = 0;
  let toastTimer = null;

  // --- Theme Controller ---
  function initTheme() {
    const savedTheme = localStorage.getItem('aura_theme_mode') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('aura_theme_mode', next);
    showToast(`Theme switched to ${next} mode`);
  }

  // --- Toast Feedback ---
  function showToast(text) {
    clearTimeout(toastTimer);
    toastMessage.textContent = text;
    toastNotification.classList.add('show');

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // --- Cart Counter Interaction ---
  function addToCart(productName, price) {
    cartCount++;
    cartBadge.textContent = cartCount;

    // Small pop animation
    cartBadge.style.transform = 'scale(1.35)';
    setTimeout(() => {
      cartBadge.style.transform = 'scale(1)';
    }, 200);

    showToast(`Added ${productName} (${price}) to cart! 🛍️`);
  }

  // --- Quick View Modal ---
  function openQuickView(productId) {
    const p = products[productId];
    if (!p) return;

    modalDynamicContent.innerHTML = `
      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
        <img src="${p.image}" alt="${p.name}" style="width: 180px; height: 180px; object-fit: cover; border-radius: 12px; border: 1px solid var(--card-border);" />
        <div style="flex: 1; min-width: 240px;">
          <h2 style="font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 0.25rem;">${p.name}</h2>
          <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.75rem;">${p.tagline}</p>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem;">${p.price}</div>
        </div>
      </div>
      <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--card-border);">
        <h4 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-primary); margin-bottom: 0.75rem;">Technical Specifications:</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
          ${p.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
      </div>
      <div style="margin-top: 1.75rem; display: flex; justify-content: flex-end;">
        <button id="modalAddCartBtn" style="background: var(--accent-gradient); color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: var(--radius-full); font-weight: 700; cursor: pointer;">
          Add to Cart — ${p.price}
        </button>
      </div>
    `;

    // Bind modal Add to Cart button
    modalDynamicContent.querySelector('#modalAddCartBtn').addEventListener('click', () => {
      addToCart(p.name, p.price);
      quickViewModal.close();
    });

    quickViewModal.showModal();
  }

  // --- Event Listeners Setup ---
  function initEvents() {
    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Add to Cart Buttons
    document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const name = btn.dataset.name;
        const price = '$' + btn.dataset.price;
        addToCart(name, price);
      });
    });

    // Quick View Buttons
    document.querySelectorAll('.quick-view-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        openQuickView(id);
      });
    });

    // Modal Close
    closeModalBtn.addEventListener('click', () => quickViewModal.close());
    quickViewModal.addEventListener('click', (e) => {
      const rect = quickViewModal.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        quickViewModal.close();
      }
    });

    // Color Dot Switching
    document.querySelectorAll('.color-options').forEach((container) => {
      const dots = container.querySelectorAll('.color-dot');
      dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          dots.forEach((d) => d.classList.remove('active'));
          dot.classList.add('active');
          showToast(`Color selected: ${dot.getAttribute('title')}`);
        });
      });
    });

    // Year in footer
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEvents();
  });
})();
