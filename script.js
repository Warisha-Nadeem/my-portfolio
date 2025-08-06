// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Close dropdown on mobile after click
      document.getElementById('dropdown')?.classList.remove('active');
    }
  });
});

// Hamburger menu toggle for mobile
const hamburg = document.getElementById('hamburg');
const dropdown = document.getElementById('dropdown');
const cancl = document.getElementById('cancl');

if (hamburg && dropdown) {
  hamburg.onclick = () => dropdown.classList.add('active');
}
if (cancl && dropdown) {
  cancl.onclick = () => dropdown.classList.remove('active');
}

// Contact form popup
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  alert(`Thank you for your message, ${name || 'Guest'}!`);
  this.reset();
});

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});