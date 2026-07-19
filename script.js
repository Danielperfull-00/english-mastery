var currentLevel = 'all';
var currentCat = 'all';
var completedLessons = [];
var currentLessonId = null;

function loadProgress() {
    try {
        var saved = localStorage.getItem('englishMasteryProgress');
        if (saved) {
            var parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                completedLessons = parsed;
            }
        }
    } catch (e) {
        completedLessons = [];
    }
}

function saveProgress() {
    localStorage.setItem('englishMasteryProgress', JSON.stringify(completedLessons));
}

function isCompleted(id) {
    return completedLessons.indexOf(id) !== -1;
}

function getCategoryIcon(cat) {
    var icons = {
        grammar: '📖',
        vocab: '🗣️',
        listening: '🎧',
        speaking: '🎤',
        reading: '📚',
        writing: '✍️',
        pronunciation: '🔊'
    };
    return icons[cat] || '📝';
}

function renderCards() {
    var grid = document.getElementById('course-grid');
    if (!grid) return;
    grid.innerHTML = '';

    var filtered = [];
    for (var i = 0; i < FULL_COURSE_DATA.length; i++) {
        var item = FULL_COURSE_DATA[i];
        var levelMatch = currentLevel === 'all' || item.level === currentLevel;
        var catMatch = currentCat === 'all' || item.category === currentCat;
        if (levelMatch && catMatch) {
            filtered.push(item);
        }
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><p>No hay lecciones que coincidan con estos filtros.</p></div>';
        return;
    }

    for (var j = 0; j < filtered.length; j++) {
        var lesson = filtered[j];
        var done = isCompleted(lesson.id);
        var card = document.createElement('div');
        card.className = 'card' + (done ? ' completed' : '');
        card.setAttribute('data-id', lesson.id);

        var levelBadge = '<span class="card-level">' + lesson.levelName + '</span>';
        var titleEl = '<h3 class="card-title">' + lesson.title + '</h3>';
        var descEl = '<p class="card-desc">' + lesson.desc + '</p>';
        var icon = getCategoryIcon(lesson.category);
        var btnText = done ? '✓ Completado' : 'Estudiar';
        var footer = '<div class="card-footer"><span class="category-tag">' + icon + ' ' + lesson.catName + '</span><button class="card-action" data-id="' + lesson.id + '">' + btnText + '</button></div>';

        card.innerHTML = levelBadge + titleEl + descEl + footer;

        (function(lessonId) {
            card.addEventListener('click', function(e) {
                if (e.target.classList.contains('card-action') || e.target.parentElement.classList.contains('card-action')) {
                    toggleComplete(lessonId);
                } else {
                    openLesson(lessonId);
                }
            });
        })(lesson.id);

        grid.appendChild(card);
    }
}

function toggleComplete(id) {
    var idx = completedLessons.indexOf(id);
    if (idx !== -1) {
        completedLessons.splice(idx, 1);
    } else {
        completedLessons.push(id);
    }
    saveProgress();
    renderCards();
    updateProgress();
}

function openLesson(id) {
    var lesson = null;
    for (var i = 0; i < FULL_COURSE_DATA.length; i++) {
        if (FULL_COURSE_DATA[i].id === id) {
            lesson = FULL_COURSE_DATA[i];
            break;
        }
    }
    if (!lesson) return;

    currentLessonId = id;
    document.getElementById('modal-level').innerText = lesson.levelName;
    document.getElementById('modal-title').innerText = lesson.title;
    document.getElementById('modal-body').innerHTML = lesson.content;

    var btn = document.getElementById('complete-btn');
    if (isCompleted(id)) {
        btn.innerText = 'Desmarcar Lección';
        btn.className = 'complete-btn completed-state';
    } else {
        btn.innerText = 'Marcar como Completada ✓';
        btn.className = 'complete-btn';
    }

    document.getElementById('modal-overlay').classList.add('active');
    setTimeout(function() {
        document.getElementById('modal-container').classList.add('active');
    }, 10);
}

function closeModal() {
    document.getElementById('modal-container').classList.remove('active');
    setTimeout(function() {
        document.getElementById('modal-overlay').classList.remove('active');
    }, 300);
}

function updateProgress() {
    var total = FULL_COURSE_DATA.length;
    var done = completedLessons.length;
    var percent = total === 0 ? 0 : Math.round((done / total) * 100);
    document.getElementById('progress-percent').innerText = percent + '%';
    document.getElementById('main-progress').style.width = percent + '%';
    var sub = document.getElementById('progress-sub');
    if (sub) sub.innerText = done + ' de ' + total + ' lecciones completadas';
}

function setupEventListeners() {
    var closeBtn = document.getElementById('close-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    var overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) closeModal();
        });
    }

    var completeBtn = document.getElementById('complete-btn');
    if (completeBtn) {
        completeBtn.addEventListener('click', function() {
            if (currentLessonId !== null) {
                toggleComplete(currentLessonId);
                closeModal();
            }
        });
    }

    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
        (function(btn) {
            btn.addEventListener('click', function() {
                for (var k = 0; k < navItems.length; k++) navItems[k].classList.remove('active');
                btn.classList.add('active');
                currentLevel = btn.getAttribute('data-level');
                renderCards();
            });
        })(navItems[i]);
    }

    var catItems = document.querySelectorAll('.cat-item');
    for (var j = 0; j < catItems.length; j++) {
        (function(btn) {
            btn.addEventListener('click', function() {
                for (var k = 0; k < catItems.length; k++) catItems[k].classList.remove('active');
                btn.classList.add('active');
                currentCat = btn.getAttribute('data-cat');
                renderCards();
            });
        })(catItems[j]);
    }
}

function init() {
    loadProgress();
    renderCards();
    setupEventListeners();
    updateProgress();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
