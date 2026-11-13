// Library 1: Glide.js - responsive destination carousel
if (typeof Glide !== 'undefined') {
  new Glide('.destination-glide', {
    type: 'carousel', perView: 4, gap: 20, animationDuration: 650,
    breakpoints: { 1100: { perView: 3 }, 800: { perView: 2 }, 580: { perView: 1 } }
  }).mount();
} else { console.warn('Glide.js did not load.'); }

// Library 2: AOS - scroll reveal animations
if (typeof AOS !== 'undefined') AOS.init({ duration: 850, once: true, offset: 70 });

// Library 3: Leaflet - interactive map with real Bali coordinates
if (typeof L !== 'undefined') {
  const map = L.map('bali-map', { scrollWheelZoom: false }).setView([-8.48, 115.22], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors', maxZoom: 18
  }).addTo(map);
  const places = [
    ['Ulun Danu Beratan', -8.275, 115.167],
    ['Ubud', -8.5069, 115.2625],
    ['Kelingking Beach, Nusa Penida', -8.7504, 115.4731],
    ['Mount Batur', -8.242, 115.375],
    ['Uluwatu Temple', -8.8291, 115.0849]
  ];
  places.forEach(([name, lat, lng]) => L.marker([lat, lng]).addTo(map).bindPopup(`<strong>${name}</strong><br>Bali, Indonesia`));
} else { console.warn('Leaflet did not load.'); }

// Library 4: FsLightbox 

// Mobile navigation (vanilla JavaScript)
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
