
let currentLevel = 'all';
let currentCat = 'all';
let completedLessons = new Set();

const modalOverlay = document.getElementById('modal-overlay');
const modalLevel = document.getElementById('modal-level');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');
const completeBtn = document.getElementById('complete-btn');

function init() {
    renderCards();
    setupEventListeners();
    updateProgress();
}

function renderCards() {
    const grid = document.getElementById('course-grid');
    grid.innerHTML = '';

    const filtered = FULL_COURSE_DATA.filter(item => {
        const levelMatch = currentLevel === 'all' || item.level === currentLevel;
        const catMatch = currentCat === 'all' || item.category === currentCat;
        return levelMatch && catMatch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i data-lucide="search-x"></i>
                <p>No hay lecciones que coincidan con estos filtros.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = `card ${completedLessons.has(item.id) ? 'completed' : ''}`;
        card.innerHTML = `
            <span class="card-level">${item.levelName}</span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.desc}</p>
            <div class="card-footer">
                <span class="category-tag">${item.catName}</span>
                <button class="card-action" data-id="${item.id}">
                    ${completedLessons.has(item.id) ? 'Completado' : 'Estudiar'}
                </button>
            </div>
        `;
        
        // Open lesson on card click, but handle button specifically
        card.onclick = (e) => {
            if (e.target.classList.contains('card-action')) {
                handleAction(item.id);
            } else {
                openLesson(item.id);
            }
        };
        grid.appendChild(card);
    });
    lucide.createIcons();
}

function handleAction(id) {
    if (completedLessons.has(id)) {
        completedLessons.delete(id);
    } else {
        completedLessons.add(id);
    }
    renderCards();
    updateProgress();
}

function openLesson(id) {
    const lesson = FULL_COURSE_DATA.find(l => l.id === id);
    if (!lesson) return;

    modalLevel.innerText = lesson.levelName;
    modalTitle.innerText = lesson.title;
    modalBody.innerHTML = lesson.content;
    
    completeBtn.onclick = () => {
        completedLessons.add(id);
        updateProgress();
        renderCards();
        closeModal();
    };

    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

function updateProgress() {
    const percent = Math.round((completedLessons.size / FULL_COURSE_DATA.length) * 100);
    document.getElementById('progress-percent').innerText = `${percent}%`;
    document.getElementById('main-progress').style.width = `${percent}%`;
}

function setupEventListeners() {
    closeModalBtn.onclick = closeModal;
    
    // Close modal on clicking outside the container
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) closeModal();
    };

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLevel = btn.dataset.level;
            renderCards();
        });
    });

    document.querySelectorAll('.cat-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCat = btn.dataset.cat;
            renderCards();
        });
    });
}

window.onload = init;
