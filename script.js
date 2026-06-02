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

const quizResults = {
    1: {
        title: 'Kamu Mengontrol Waktu dengan Baik Teruskan Ya !!',
        description: 'Jarang melewatkan makan demi bermain game berarti kamu sudah menjaga keseimbangan antara hiburan dan kebutuhan tubuhmu.'
    },
    2: {
        title: 'Perlu Lebih Waspada Jangan Sampai Kecanduan',
        description: 'Kadang-kadang melewatkan waktu makan bisa menjadi tanda bahwa kamu harus lebih memperhatikan batasan dan istirahat saat bermain.'
    },
    3: {
        title: 'Awas, Mulai Terjadi Pola Berisiko Tuh, Nanti Kecanduan',
        description: 'Sering memprioritaskan game dibanding kebutuhan dasar menunjukkan kamu perlu mengatur ulang rutinitas untuk kesehatan fisik dan mental.'
    },
    4: {
        title: 'Kurangin Ya ! Itu Bahaya',
        description: 'Hampir setiap hari melewatkan makan demi bermain game adalah tanda kuat untuk segera mencari dukungan dan membuat jadwal bermain yang sehat.'
    }
};

function answer(val) {
    const questionArea = document.getElementById('question-area');
    const resultArea = document.getElementById('result-area');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');

    questionArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    const result = quizResults[val] || {
        title: 'Hasil Asesmen',
        description: 'Pilihan tidak dikenali. Silakan coba lagi.'
    };
    resultTitle.innerText = result.title;
    resultDescription.innerText = result.description;
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

