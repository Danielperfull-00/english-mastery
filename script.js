// STATE
var currentLevel = 'all';
var currentCat = 'all';
var completedLessons = [];
var currentLessonId = null;
var searchQuery = '';
var isListView = false;
var userXP = 0;
var lastActiveDate = null;
var streak = 0;
var completedQuizzes = [];

// QUIZ STATE
var quizActive = false;
var currentQuizData = null;
var currentQuestionIdx = 0;
var quizScore = 0;

// LEVELS DEFINITION
var xpLevels = [
    { name: 'Principiante', threshold: 0 },
    { name: 'Estudiante', threshold: 500 },
    { name: 'Erudito', threshold: 1500 },
    { name: 'Experto', threshold: 3000 },
    { name: 'Maestro', threshold: 5000 },
    { name: 'Leyenda', threshold: 10000 }
];

function getCurrentLevelObj() {
    var lvl = xpLevels[0];
    for (var i = 0; i < xpLevels.length; i++) {
        if (userXP >= xpLevels[i].threshold) {
            lvl = xpLevels[i];
        } else {
            break;
        }
    }
    return lvl;
}

function getNextLevelObj() {
    for (var i = 0; i < xpLevels.length; i++) {
        if (userXP < xpLevels[i].threshold) {
            return xpLevels[i];
        }
    }
    return null; // Max level
}

// STORAGE
function loadProgress() {
    try {
        var saved = localStorage.getItem('englishMasteryProgressV2');
        if (saved) {
            var parsed = JSON.parse(saved);
            completedLessons = parsed.completedLessons || [];
            completedQuizzes = parsed.completedQuizzes || [];
            userXP = parsed.userXP || 0;
            streak = parsed.streak || 0;
            lastActiveDate = parsed.lastActiveDate || null;
            
            // Theme & View
            if (parsed.theme === 'light') toggleTheme(true);
            if (parsed.isListView) toggleView(true);
        }
        checkStreak();
    } catch (e) {
        completedLessons = [];
        completedQuizzes = [];
        userXP = 0;
        streak = 0;
    }
}

function saveProgress() {
    var theme = document.documentElement.getAttribute('data-theme') || 'dark';
    var data = {
        completedLessons: completedLessons,
        completedQuizzes: completedQuizzes,
        userXP: userXP,
        streak: streak,
        lastActiveDate: lastActiveDate,
        theme: theme,
        isListView: isListView
    };
    localStorage.setItem('englishMasteryProgressV2', JSON.stringify(data));
}

function checkStreak() {
    var today = new Date().toDateString();
    if (lastActiveDate !== today) {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastActiveDate === yesterday.toDateString()) {
            streak++; // increment streak if played yesterday
        } else if (lastActiveDate !== null) {
            streak = 1; // reset if missed a day
        } else {
            streak = 1; // first time
        }
        lastActiveDate = today;
        saveProgress();
    }
    document.getElementById('streak-display').innerText = streak + (streak === 1 ? ' día de racha' : ' días de racha');
}

function addXP(amount, reason) {
    userXP += amount;
    showToast('+' + amount + ' XP (' + reason + ')');
    updateXPUI();
    saveProgress();
}

function updateXPUI() {
    document.getElementById('xp-points-display').innerText = userXP + ' XP';
    var currentLvl = getCurrentLevelObj();
    var nextLvl = getNextLevelObj();
    
    document.getElementById('xp-level-badge').innerText = currentLvl.name;
    
    var fillPercent = 100;
    if (nextLvl) {
        var range = nextLvl.threshold - currentLvl.threshold;
        var progress = userXP - currentLvl.threshold;
        fillPercent = Math.round((progress / range) * 100);
        document.getElementById('xp-sub').innerText = userXP + ' / ' + nextLvl.threshold + ' XP para el siguiente nivel';
    } else {
        document.getElementById('xp-sub').innerText = '¡Nivel Máximo Alcanzado!';
    }
    document.getElementById('xp-bar-fill').style.width = fillPercent + '%';
}

function showToast(msg) {
    var toast = document.getElementById('xp-toast');
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// UI LOGIC
function toggleTheme(forceLight) {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme');
    if (forceLight === true || current === 'dark') {
        html.setAttribute('data-theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
    }
    saveProgress();
}

function toggleView(forceList) {
    var grid = document.getElementById('course-grid');
    if (forceList === true || !isListView) {
        grid.classList.add('list-view');
        isListView = true;
    } else {
        grid.classList.remove('list-view');
        isListView = false;
    }
    saveProgress();
}

function getCategoryIcon(cat) {
    var icons = {
        grammar: '📝', vocab: '🗣️', listening: '🎧',
        speaking: '🎤', reading: '📚', writing: '✍️', pronunciation: '🔊'
    };
    return icons[cat] || '📌';
}

function renderCards() {
    var grid = document.getElementById('course-grid');
    if (!grid) return;
    grid.innerHTML = '';

    var filtered = [];
    var sq = searchQuery.toLowerCase();
    
    for (var i = 0; i < FULL_COURSE_DATA.length; i++) {
        var item = FULL_COURSE_DATA[i];
        var levelMatch = currentLevel === 'all' || item.level === currentLevel;
        var catMatch = currentCat === 'all' || item.category === currentCat;
        var searchMatch = sq === '' || item.title.toLowerCase().indexOf(sq) > -1 || item.desc.toLowerCase().indexOf(sq) > -1;
        
        if (levelMatch && catMatch && searchMatch) {
            filtered.push(item);
        }
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><p>No hay lecciones que coincidan con estos filtros.</p></div>';
        return;
    }

    for (var j = 0; j < filtered.length; j++) {
        var lesson = filtered[j];
        var done = completedLessons.indexOf(lesson.id) !== -1;
        var card = document.createElement('div');
        card.className = 'card' + (done ? ' completed' : '');
        card.setAttribute('data-id', lesson.id);

        var levelBadge = '<span class="card-level">' + lesson.levelName + '</span>';
        var contentWrap = '<div class="card-content-wrap">' + levelBadge + '<h3 class="card-title">' + lesson.title + '</h3><p class="card-desc">' + lesson.desc + '</p></div>';
        var icon = getCategoryIcon(lesson.category);
        var btnText = done ? '✓ Completado' : 'Estudiar';
        var footer = '<div class="card-footer"><span class="category-tag">' + icon + ' ' + lesson.catName + '</span><button class="card-action" data-id="' + lesson.id + '">' + btnText + '</button></div>';

        card.innerHTML = contentWrap + footer;

        (function(lessonId) {
            card.addEventListener('click', function(e) {
                if (e.target.classList.contains('card-action')) {
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
        addXP(100, 'Lección Completada');
        fireConfetti();
    }
    saveProgress();
    renderCards();
    updateProgress();
    
    // Update modal button if open
    if (currentLessonId === id) {
        updateModalCompleteBtn(id);
    }
}

function updateModalCompleteBtn(id) {
    var btn = document.getElementById('complete-btn');
    if (completedLessons.indexOf(id) !== -1) {
        btn.innerText = '❌ Desmarcar Lección';
        btn.className = 'complete-btn completed-state';
    } else {
        btn.innerText = '✅ Marcar como Completada (+100 XP)';
        btn.className = 'complete-btn';
    }
}

// AUDIO
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        var msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'en-US';
        msg.rate = 0.9; // slightly slower for learning
        window.speechSynthesis.speak(msg);
    } else {
        alert("Tu navegador no soporta lectura de texto.");
    }
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

    updateModalCompleteBtn(id);

    // Audio Button
    var speakBtn = document.getElementById('speak-btn');
    if (lesson.pronounceText) {
        speakBtn.style.display = 'block';
        speakBtn.onclick = function() { speakText(lesson.pronounceText); };
    } else {
        speakBtn.style.display = 'none';
    }

    // Quiz Button
    var quizStartBtn = document.getElementById('quiz-start-btn');
    var quizSection = document.getElementById('quiz-section');
    quizSection.style.display = 'none';
    quizActive = false;

    if (lesson.quiz && lesson.quiz.length > 0) {
        quizStartBtn.style.display = 'block';
        var doneQuiz = completedQuizzes.indexOf(id) !== -1;
        if (doneQuiz) {
            quizStartBtn.innerText = '✅ Quiz Completado';
            quizStartBtn.disabled = true;
        } else {
            quizStartBtn.innerText = '🧠 Hacer Quiz (+50 XP)';
            quizStartBtn.disabled = false;
        }
    } else {
        quizStartBtn.style.display = 'none';
    }

    document.getElementById('modal-overlay').classList.add('active');
    setTimeout(function() {
        document.getElementById('modal-container').classList.add('active');
    }, 10);
}

function closeModal() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
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

// QUIZ ENGINE
function startQuiz() {
    var lesson = null;
    for (var i = 0; i < FULL_COURSE_DATA.length; i++) {
        if (FULL_COURSE_DATA[i].id === currentLessonId) {
            lesson = FULL_COURSE_DATA[i];
            break;
        }
    }
    if (!lesson || !lesson.quiz) return;
    
    currentQuizData = lesson.quiz;
    currentQuestionIdx = 0;
    quizScore = 0;
    quizActive = true;
    
    document.getElementById('quiz-start-btn').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    var q = currentQuizData[currentQuestionIdx];
    document.getElementById('quiz-progress-txt').innerText = 'Pregunta ' + (currentQuestionIdx + 1) + ' de ' + currentQuizData.length;
    document.getElementById('quiz-question-text').innerText = q.question;
    
    var optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'none';
    
    for (var i = 0; i < q.options.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerText = q.options[i];
        (function(idx) {
            btn.onclick = function() { answerQuiz(idx); };
        })(i);
        optionsDiv.appendChild(btn);
    }
}

function answerQuiz(selectedIdx) {
    var q = currentQuizData[currentQuestionIdx];
    var optionsDiv = document.getElementById('quiz-options');
    var btns = optionsDiv.getElementsByTagName('button');
    
    // Disable all
    for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
        if (i === q.correct) {
            btns[i].classList.add('correct');
        }
    }
    
    var feedbackDiv = document.getElementById('quiz-feedback');
    feedbackDiv.style.display = 'block';
    
    if (selectedIdx === q.correct) {
        quizScore++;
        feedbackDiv.className = 'quiz-feedback success';
        feedbackDiv.innerHTML = '<strong>¡Correcto!</strong> ' + q.explanation;
    } else {
        btns[selectedIdx].classList.add('wrong');
        feedbackDiv.className = 'quiz-feedback error';
        feedbackDiv.innerHTML = '<strong>Incorrecto.</strong> ' + q.explanation;
    }
    
    var nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.style.display = 'block';
    if (currentQuestionIdx === currentQuizData.length - 1) {
        nextBtn.innerText = 'Finalizar Quiz';
    } else {
        nextBtn.innerText = 'Siguiente ➔';
    }
}

function nextQuizQuestion() {
    if (currentQuestionIdx < currentQuizData.length - 1) {
        currentQuestionIdx++;
        renderQuizQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    var section = document.getElementById('quiz-section');
    section.innerHTML = '<h3>Quiz Finalizado</h3><p>Acertaste ' + quizScore + ' de ' + currentQuizData.length + ' preguntas.</p>';
    
    if (quizScore === currentQuizData.length) {
        if (completedQuizzes.indexOf(currentLessonId) === -1) {
            completedQuizzes.push(currentLessonId);
            addXP(50, 'Quiz Perfecto');
            fireConfetti();
        }
        section.innerHTML += '<p style="color:#22c55e;font-weight:bold;">¡Perfecto! Has ganado 50 XP.</p>';
    } else {
        section.innerHTML += '<p>Debes responder todas correctamente para ganar los XP. ¡Inténtalo de nuevo más tarde!</p>';
        // Reset so they can try again if they close and reopen
    }
    
    // Auto mark lesson as complete if not done
    if (completedLessons.indexOf(currentLessonId) === -1 && quizScore === currentQuizData.length) {
        toggleComplete(currentLessonId);
    }
}


// EVENT LISTENERS
function setupEventListeners() {
    // Bottom Sheet & Bottom Nav (Mobile)
    var bottomSheet = document.getElementById('bottom-sheet');
    var bottomOverlay = document.getElementById('bottom-sheet-overlay');
    var sheetContent = document.getElementById('bottom-sheet-content');
    var sheetTitle = document.getElementById('bottom-sheet-title');
    var navItemsBottom = document.querySelectorAll('.bottom-nav-item');
    
    // Original containers
    var xpContainer = document.getElementById('xp-box-container');
    var levelsSection = document.getElementById('nav-levels-section');
    var catsSection = document.getElementById('nav-cats-section');
    var navMenusContainer = document.getElementById('nav-menus-container');
    var desktopSidebar = document.getElementById('desktop-sidebar');

    function closeBottomSheet() {
        if (!bottomSheet) return;
        bottomSheet.classList.remove('active');
        bottomOverlay.classList.remove('active');
        // Restore elements to sidebar
        if (xpContainer && desktopSidebar) desktopSidebar.insertBefore(xpContainer, navMenusContainer);
        if (levelsSection && navMenusContainer) navMenusContainer.insertBefore(levelsSection, catsSection);
        if (catsSection && navMenusContainer) navMenusContainer.appendChild(catsSection);
        
        // Reset active tab to home
        navItemsBottom.forEach(function(btn) { btn.classList.remove('active'); });
        if (navItemsBottom[0]) navItemsBottom[0].classList.add('active');
    }

    if (bottomOverlay) bottomOverlay.addEventListener('click', closeBottomSheet);

    navItemsBottom.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var tab = this.getAttribute('data-tab');
            
            navItemsBottom.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');

            if (tab === 'home') {
                closeBottomSheet();
                window.scrollTo(0,0);
                return;
            }

            // Move content to sheet
            sheetContent.innerHTML = '';
            if (tab === 'levels') {
                sheetTitle.innerText = 'Niveles';
                if (levelsSection) sheetContent.appendChild(levelsSection);
            } else if (tab === 'categories') {
                sheetTitle.innerText = 'Filtros por Categoría';
                if (catsSection) sheetContent.appendChild(catsSection);
            } else if (tab === 'profile') {
                sheetTitle.innerText = 'Tu Progreso';
                if (xpContainer) sheetContent.appendChild(xpContainer);
            }

            bottomSheet.classList.add('active');
            bottomOverlay.classList.add('active');
        });
    });

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
            if (currentLessonId !== null) toggleComplete(currentLessonId);
        });
    }
    
    var quizStartBtn = document.getElementById('quiz-start-btn');
    if (quizStartBtn) quizStartBtn.addEventListener('click', startQuiz);
    
    var quizNextBtn = document.getElementById('quiz-next-btn');
    if (quizNextBtn) quizNextBtn.addEventListener('click', nextQuizQuestion);

    var searchInput = document.getElementById('search-input');
    var searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchQuery = e.target.value;
            searchClear.style.display = searchQuery.length > 0 ? 'block' : 'none';
            renderCards();
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            searchQuery = '';
            searchClear.style.display = 'none';
            renderCards();
        });
    }
    
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    var viewBtn = document.getElementById('view-toggle');
    if (viewBtn) viewBtn.addEventListener('click', toggleView);

    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
        (function(btn) {
            btn.addEventListener('click', function() {
                for (var k = 0; k < navItems.length; k++) navItems[k].classList.remove('active');
                btn.classList.add('active');
                currentLevel = btn.getAttribute('data-level');
                renderCards();
                if (window.innerWidth <= 960) closeBottomSheet();
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
                if (window.innerWidth <= 960) closeBottomSheet();
            });
        })(catItems[j]);
    }
}

// CONFETTI LOGIC
var confettiParticles = [];
var confettiCtx = null;
var confettiW = 0;
var confettiH = 0;
var confettiInterval = null;

function fireConfetti() {
    var canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    confettiCtx = canvas.getContext('2d');
    confettiW = window.innerWidth;
    confettiH = window.innerHeight;
    canvas.width = confettiW;
    canvas.height = confettiH;
    
    confettiParticles = [];
    var colors = ['#dc2626', '#f87171', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];
    
    for (var i = 0; i < 150; i++) {
        confettiParticles.push({
            x: confettiW / 2,
            y: confettiH / 2,
            r: Math.random() * 6 + 2,
            dx: Math.random() * 20 - 10,
            dy: Math.random() * -20 - 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleInc: (Math.random() * 0.07) + 0.05,
            tiltAngle: 0
        });
    }
    
    if (confettiInterval) clearInterval(confettiInterval);
    confettiInterval = setInterval(drawConfetti, 20);
    setTimeout(function() {
        clearInterval(confettiInterval);
        confettiCtx.clearRect(0, 0, confettiW, confettiH);
    }, 4000);
}

function drawConfetti() {
    confettiCtx.clearRect(0, 0, confettiW, confettiH);
    for (var i = 0; i < confettiParticles.length; i++) {
        var p = confettiParticles[i];
        p.tiltAngle += p.tiltAngleInc;
        p.y += (Math.cos(p.tiltAngle) + 1 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle) * 2;
        p.dy += 0.2; // gravity
        p.x += p.dx;
        p.y += p.dy;
        
        confettiCtx.beginPath();
        confettiCtx.lineWidth = p.r;
        confettiCtx.strokeStyle = p.color;
        confettiCtx.moveTo(p.x + p.tilt + p.r, p.y);
        confettiCtx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
        confettiCtx.stroke();
    }
}

function init() {
    loadProgress();
    updateXPUI();
    renderCards();
    setupEventListeners();
    updateProgress();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
