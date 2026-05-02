/* ---------- Sticky-nav scroll state ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---------- Year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Menu data (rendered dynamically) ---------- */
const menuSections = [
  {
    title: 'Antipasti',
    items: [
      { name: 'Burrata & Stone Fruit', desc: 'Heirloom peaches, basil oil, sourdough', price: '18' },
      { name: 'Charred Octopus', desc: 'Smoked paprika, fingerling potato, salsa verde', price: '24' },
      { name: 'Hand-cut Beef Tartare', desc: 'Cured yolk, capers, grilled focaccia', price: '22' },
    ],
  },
  {
    title: 'Primi',
    items: [
      { name: 'Black Truffle Tonnarelli', desc: 'House-pulled pasta, aged pecorino, butter', price: '32' },
      { name: 'Wild Mushroom Risotto', desc: 'Carnaroli rice, thyme, parmigiano 24-month', price: '28' },
      { name: 'Squid Ink Linguine', desc: 'Maine lobster, chili, lemon', price: '36' },
    ],
  },
  {
    title: 'Secondi',
    items: [
      { name: 'Wood-fired Ribeye', desc: 'Hudson Valley farm, bone marrow, charred onion', price: '58' },
      { name: 'Roasted Branzino', desc: 'Whole fish, fennel, salsa verde, lemon', price: '44' },
      { name: "Duck Breast à l'Orange", desc: 'Crisp skin, blood orange gastrique, pommes anna', price: '42' },
    ],
  },
];

const menuCols = document.getElementById('menu-cols');
menuCols.innerHTML = menuSections
  .map(
    (s) => `
    <div class="menu-section">
      <h3>${s.title}</h3>
      <ul class="menu-list">
        ${s.items
          .map(
            (i) => `
          <li>
            <div class="menu-row">
              <span class="name">${i.name}</span>
              <span class="price">$${i.price}</span>
            </div>
            <p class="menu-desc">${i.desc}</p>
          </li>`
          )
          .join('')}
      </ul>
    </div>`
  )
  .join('');

/* ---------- Reservation form ---------- */
function handleReservation(e) {
  e.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Thank you — we will confirm your reservation by email shortly.';
  e.target.reset();
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('fade-up');
        io.unobserve(en.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.section h2, .section .muted, .dish, .menu-section, .reservation').forEach((el) => io.observe(el));
