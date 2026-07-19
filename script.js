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
    loadProgress();
    renderCards();
    setupEventListeners();
    updateProgress();
}

function loadProgress() {
    try {
        const saved = localStorage.getItem('englishMasteryProgress');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                completedLessons = new Set(parsed);
            }
        }
    } catch (e) {
        console.error("Error loading progress", e);
    }
}

function saveProgress() {
    localStorage.setItem('englishMasteryProgress', JSON.stringify([...completedLessons]));
}

function renderCards() {
    const grid = document.getElementById('course-grid');
    if (!grid) return;
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
        if (window.lucide) lucide.createIcons();
        return;
    }

    filtered.forEach(item => {
        const isCompleted = completedLessons.has(item.id);
        const card = document.createElement('div');
        card.className = `card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <span class="card-level">${item.levelName}</span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.desc}</p>
            <div class="card-footer">
                <span class="category-tag"><i data-lucide="${item.icon}"></i> ${item.catName}</span>
                <button class="card-action" data-id="${item.id}">
                    ${isCompleted ? 'Completado' : 'Estudiar'}
                </button>
            </div>
        `;
        
        card.onclick = (e) => {
            if (e.target.classList.contains('card-action')) {
                handleAction(item.id, e);
            } else {
                openLesson(item.id);
            }
        };
        grid.appendChild(card);
    });
    if (window.lucide) lucide.createIcons();
}

function handleAction(id, event) {
    if (event) event.stopPropagation();
    if (completedLessons.has(id)) {
        completedLessons.delete(id);
    } else {
        completedLessons.add(id);
    }
    saveProgress();
    renderCards();
    updateProgress();
}

function openLesson(id) {
    const lesson = FULL_COURSE_DATA.find(l => l.id === id);
    if (!lesson) return;

    modalLevel.innerText = lesson.levelName;
    modalTitle.innerText = lesson.title;
    modalBody.innerHTML = lesson.content;
    
    if (completedLessons.has(id)) {
        completeBtn.innerText = "Desmarcar";
        completeBtn.classList.add("completed-state");
    } else {
        completeBtn.innerText = "Marcar como Completada";
        completeBtn.classList.remove("completed-state");
    }
    
    completeBtn.onclick = () => {
        handleAction(id);
        closeModal();
    };

    modalOverlay.classList.add('active');
    setTimeout(() => {
        document.querySelector('.modal-container').classList.add('active');
    }, 10);
}

function closeModal() {
    document.querySelector('.modal-container').classList.remove('active');
    setTimeout(() => {
        modalOverlay.classList.remove('active');
    }, 300);
}

function updateProgress() {
    if (FULL_COURSE_DATA.length === 0) return;
    const percent = Math.round((completedLessons.size / FULL_COURSE_DATA.length) * 100);
    document.getElementById('progress-percent').innerText = \`\${percent}%\`;
    document.getElementById('main-progress').style.width = \`\${percent}%\`;
}

function setupEventListeners() {
    if(closeModalBtn) closeModalBtn.onclick = closeModal;
    
    if(modalOverlay) {
        modalOverlay.onclick = (e) => {
            if (e.target === modalOverlay) closeModal();
        };
    }

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

// Guarantee execution when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
