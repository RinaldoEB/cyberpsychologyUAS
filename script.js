const tips = [
"Gunakan filter Blue Light pada layar Anda untuk mengurangi ketegangan mata saat bermain di malam hari.",
"Berikan jeda 20 menit untuk setiap 2 jam bermain game guna menjaga kesehatan mental Anda.",
"Pastikan sirkulasi udara di ruang bermain lancar agar konsentrasi tetap optimal tanpa rasa penat.",
"Cobalah bermain game dengan mode sosial (bermain bersama teman nyata) untuk menjaga koneksi interpersonal.",
"Hapus notifikasi game di jam-jam produktif Anda untuk menghindari godaan 'Login' yang impulsif."
];
let currentTip = 0;

function nextTip() {
currentTip = (currentTip + 1) % tips.length;
const tipEl = document.getElementById('active-tip');
tipEl.style.opacity = 0;
setTimeout(() => {
tipEl.innerText = `"${tips[currentTip]}"`;
tipEl.style.opacity = 1;
}, 300);
}

function answer(val) {
const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');

questionArea.classList.add('hidden');
resultArea.classList.remove('hidden');

// Artificial score calculation based on the buttons (1 is best, 4 is worst)
const score = 100 - (val * 20);
document.getElementById('score-val').innerText = score;
}

function resetQuiz() {
const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');

questionArea.classList.remove('hidden');
resultArea.classList.add('hidden');
}

// Simple smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// Mobile hamburger menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuToggle.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
    });
}

