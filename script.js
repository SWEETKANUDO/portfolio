// ── Mobile Nav Toggle ──
function toggleNav() {
  document.getElementById('navbar').classList.toggle('nav-open');
  const icon = document.getElementById('menuIcon');
  icon.className = document.getElementById('navbar').classList.contains('nav-open')
    ? 'fas fa-times'
    : 'fas fa-bars';
}

function closeNav() {
  document.getElementById('navbar').classList.remove('nav-open');
  document.getElementById('menuIcon').className = 'fas fa-bars';
}

// ── Scroll Reveal ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.chip, .proj-card, .edu-card, .exp-card, .about-card, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  obs.observe(el);
});