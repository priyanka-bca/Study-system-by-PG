// RBB Level 5 IT Assistant Study & Practice Suite - Application Controller

// --- State Variables ---
let activeTab = "dashboard";
let selectedChapterNotesId = 1;
let selectedPracticeChapter = "all";
let selectedPracticeDifficulty = "all";
let selectedPracticeCount = 50;

let activeQuizQuestions = [];
let currentQuestionIndex = 0;
let quizUserAnswers = {};
let quizTimerInterval = null;
let quizTimeRemaining = 0;
let isBookmarkQuizMode = false;

// --- Local Storage Keys ---
const STORAGE_READ_TOPICS = "rbb_prep_read_topics";
const STORAGE_BOOKMARKS = "rbb_prep_bookmarks";
const STORAGE_STATS = "rbb_prep_stats";

// --- Loaded State ---
let readTopics = {};
let bookmarkedQuestionIds = [];
let stats = { testsTaken: 0, totalScore: 0, totalCorrect: 0, totalWrong: 0 };

// Initialize Application on Window Load
window.addEventListener("load", () => {
  // Load saved state from Local Storage
  const savedRead = localStorage.getItem(STORAGE_READ_TOPICS);
  const savedBookmarks = localStorage.getItem(STORAGE_BOOKMARKS);
  const savedStats = localStorage.getItem(STORAGE_STATS);

  if (savedRead) readTopics = JSON.parse(savedRead);
  if (savedBookmarks) bookmarkedQuestionIds = JSON.parse(savedBookmarks);
  if (savedStats) stats = JSON.parse(savedStats);

  // Set Theme Class
  if (localStorage.getItem("rbb_theme") === "light") {
    document.body.className = "light";
    document.getElementById("theme-sun").style.display = "block";
    document.getElementById("theme-moon").style.display = "none";
  } else {
    document.body.className = "dark";
    document.getElementById("theme-sun").style.display = "none";
    document.getElementById("theme-moon").style.display = "block";
  }

  // Initialize UI Views
  updateDashboardData();
  loadChapterNotes(selectedChapterNotesId);
});

// --- Theme Controller ---
window.toggleTheme = function() {
  if (document.body.classList.contains("dark")) {
    document.body.className = "light";
    localStorage.setItem("rbb_theme", "light");
    document.getElementById("theme-sun").style.display = "block";
    document.getElementById("theme-moon").style.display = "none";
  } else {
    document.body.className = "dark";
    localStorage.setItem("rbb_theme", "dark");
    document.getElementById("theme-sun").style.display = "none";
    document.getElementById("theme-moon").style.display = "block";
  }
};

// --- Tab Switcher ---
window.switchTab = function(tabId) {
  if (quizTimerInterval) {
    if (!confirm("Your exam is in progress. Navigating away will submit it. Proceed?")) {
      return;
    }
    submitExam();
  }

  activeTab = tabId;
  document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));

  let screenId = `screen-${tabId}`;
  if (tabId === "practice") {
    screenId = "screen-practice-setup";
  }

  const menuBtn = document.getElementById(`menu-${tabId}`);
  if (menuBtn) menuBtn.classList.add("active");
  
  const screenEl = document.getElementById(screenId);
  if (screenEl) screenEl.classList.add("active");

  if (tabId === "dashboard") {
    updateDashboardData();
  } else if (tabId === "bookmarks") {
    renderBookmarksPage();
  }
};

// --- Dashboard logic ---
function updateDashboardData() {
  const notesDb = window.studyNotes;
  const questionsDb = window.questions;

  if (!notesDb || !questionsDb) return;

  // Calculate Syllabus progress
  let totalTopics = 0;
  let readCount = 0;
  for (const chId in notesDb) {
    notesDb[chId].topics.forEach(t => {
      totalTopics++;
      if (readTopics[t.id]) readCount++;
    });
  }
  
  const percent = totalTopics > 0 ? Math.round((readCount / totalTopics) * 100) : 0;
  document.getElementById("dash-syllabus-percent").innerText = `${percent}%`;
  document.getElementById("dash-syllabus-ratio").innerText = `${readCount} of ${totalTopics} subtopics read`;
  document.getElementById("dash-syllabus-progress").style.width = `${percent}%`;

  // Bookmarks count
  document.getElementById("dash-bookmark-count").innerText = bookmarkedQuestionIds.length;
  document.getElementById("btn-practice-bookmarks").disabled = (bookmarkedQuestionIds.length === 0);

  // Stats
  document.getElementById("dash-stat-tests").innerText = stats.testsTaken;
  document.getElementById("dash-stat-avg").innerText = stats.testsTaken > 0 ? (stats.totalScore / stats.testsTaken).toFixed(2) : "0.0";
  
  const totalAttempted = stats.totalCorrect + stats.totalWrong;
  const accuracy = totalAttempted > 0 ? Math.round((stats.totalCorrect / totalAttempted) * 100) : 0;
  document.getElementById("dash-stat-accuracy").innerText = `${accuracy}%`;

  // Chapters List
  const chListContainer = document.getElementById("dash-chapter-list");
  if (chListContainer) {
    chListContainer.innerHTML = "";

    for (const chId in notesDb) {
      const ch = notesDb[chId];
      let chTotal = ch.topics.length;
      let chRead = 0;
      ch.topics.forEach(t => {
        if (readTopics[t.id]) chRead++;
      });

      // Get questions count for chapter
      const chQuestions = questionsDb.filter(q => q.chapterId == chId).length;

      const item = document.createElement("div");
      item.className = "chapter-item";
      item.innerHTML = `
        <div class="chapter-info">
          <h4>${ch.title}</h4>
          <p>${chRead} of ${chTotal} subtopics read &bull; ${chQuestions} practice questions</p>
        </div>
        <div class="chapter-actions">
          <button class="btn btn-secondary" onclick="viewChapterNotes(${chId})">Study Notes</button>
          <button class="btn btn-primary" onclick="viewChapterPractice(${chId})">Practice</button>
        </div>
      `;
      chListContainer.appendChild(item);
    }
  }
}

window.viewChapterNotes = function(chapterId) {
  selectedChapterNotesId = chapterId;
  const selectEl = document.getElementById("study-chapter-select");
  if (selectEl) selectEl.value = chapterId;
  loadChapterNotes(chapterId);
  switchTab("study");
};

window.viewChapterPractice = function(chapterId) {
  switchTab("practice");
  const selectEl = document.getElementById("practice-chapter-select");
  if (selectEl) selectEl.value = chapterId;
};

// --- Study Mode Logic ---
window.loadChapterNotes = function(chapterId) {
  selectedChapterNotesId = parseInt(chapterId);
  const notesDb = window.studyNotes;
  if (!notesDb) return;

  const ch = notesDb[chapterId];
  const container = document.getElementById("study-notes-container");
  if (!container) return;
  container.innerHTML = "";

  ch.topics.forEach(t => {
    const isRead = !!readTopics[t.id];
    const card = document.createElement("div");
    card.className = "study-topic-card";
    card.innerHTML = `
      <div class="study-topic-header">
        <div class="study-topic-title-area">
          <input type="checkbox" class="study-checkbox" ${isRead ? "checked" : ""} onchange="toggleTopicRead('${t.id}', this.checked)">
          <span class="study-topic-title">${t.id} ${t.title}</span>
        </div>
        <span style="font-size:0.7rem; color:var(--text-muted);">${isRead ? "Completed" : "Mark as read"}</span>
      </div>
      <div class="study-topic-body">
        ${t.notes}
      </div>
    `;
    container.appendChild(card);
  });
};

window.toggleTopicRead = function(topicId, isChecked) {
  if (isChecked) {
    readTopics[topicId] = true;
  } else {
    delete readTopics[topicId];
  }
  localStorage.setItem(STORAGE_READ_TOPICS, JSON.stringify(readTopics));
};

window.goToPracticeFromStudy = function() {
  viewChapterPractice(selectedChapterNotesId);
};

// --- Practice Setup & Execution ---
window.restartCustomPracticeSetup = function() {
  switchTab("practice");
};

window.startCustomPractice = function() {
  const questionsDb = window.questions;
  if (!questionsDb) return;

  selectedPracticeChapter = document.getElementById("practice-chapter-select").value;
  selectedPracticeDifficulty = document.getElementById("practice-diff-select").value;
  selectedPracticeCount = parseInt(document.getElementById("practice-count-select").value);
  isBookmarkQuizMode = false;

  // Filter questions
  let pool = [...questionsDb];
  if (selectedPracticeChapter !== "all") {
    pool = pool.filter(q => q.chapterId == selectedPracticeChapter);
  }
  if (selectedPracticeDifficulty !== "all") {
    pool = pool.filter(q => q.difficulty === selectedPracticeDifficulty);
  }

  if (pool.length === 0) {
    alert("No questions matched your filter. Please choose another topic or difficulty.");
    return;
  }

  // Shuffle pool
  pool.sort(() => Math.random() - 0.5);

  // Limit size
  activeQuizQuestions = pool.slice(0, selectedPracticeCount);
  initQuiz();
};

window.startBookmarkPractice = function() {
  const questionsDb = window.questions;
  if (!questionsDb || bookmarkedQuestionIds.length === 0) {
    alert("No bookmarks available to practice!");
    return;
  }

  isBookmarkQuizMode = true;
  activeQuizQuestions = questionsDb.filter(q => bookmarkedQuestionIds.includes(q.id));
  activeQuizQuestions.sort(() => Math.random() - 0.5);
  
  initQuiz();
};

function initQuiz() {
  currentQuestionIndex = 0;
  quizUserAnswers = {};
  
  // Set timer (1 minute per question)
  quizTimeRemaining = activeQuizQuestions.length * 60;

  // Render Navigation Grid
  const grid = document.getElementById("grid-container");
  if (grid) {
    grid.innerHTML = "";
    activeQuizQuestions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.className = "grid-btn";
      btn.id = `qgrid-btn-${idx}`;
      btn.innerText = idx + 1;
      btn.onclick = () => jumpToQuestion(idx);
      grid.appendChild(btn);
    });
  }

  // Switch screen to active practice
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.getElementById("screen-practice-active").classList.add("active");

  loadQuestion(0);
  startTimer();
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const q = activeQuizQuestions[index];

  // Meta UI
  document.getElementById("question-index-badge").innerText = `Q ${index + 1}/${activeQuizQuestions.length}`;
  document.getElementById("question-category").innerText = `${q.category} (${q.difficulty.toUpperCase()})`;
  document.getElementById("question-text").innerText = q.question;

  // Options
  const optionsContainer = document.getElementById("options-list");
  if (optionsContainer) {
    optionsContainer.innerHTML = "";

    const userSel = quizUserAnswers[q.id];

    q.options.forEach((opt, oIdx) => {
      const letter = String.fromCharCode(65 + oIdx);
      const card = document.createElement("div");
      card.className = `option-card ${userSel === oIdx ? 'selected' : ''}`;
      card.onclick = () => selectOption(q.id, oIdx);
      card.innerHTML = `
        <div class="option-letter">${letter}</div>
        <div class="option-text">${opt}</div>
      `;
      optionsContainer.appendChild(card);
    });
  }

  // Update grid styling
  activeQuizQuestions.forEach((_, idx) => {
    const btn = document.getElementById(`qgrid-btn-${idx}`);
    if (!btn) return;
    btn.className = "grid-btn";
    if (currentQuestionIndex === idx) btn.classList.add("current");
    if (quizUserAnswers[activeQuizQuestions[idx].id] !== undefined) btn.classList.add("answered");
  });

  // Progress bar
  const answeredCount = Object.keys(quizUserAnswers).length;
  const progressPercent = (answeredCount / activeQuizQuestions.length) * 100;
  document.getElementById("exam-progress-bar").style.width = `${progressPercent}%`;

  // Next / Previous buttons
  document.getElementById("prev-btn").disabled = (index === 0);
  document.getElementById("next-btn").innerText = (index === activeQuizQuestions.length - 1) ? "Submit Exam" : "Skip / Next \u2192";
}

function selectOption(qId, oIdx) {
  quizUserAnswers[qId] = oIdx;
  
  // Update UI selection
  const cards = document.querySelectorAll(".option-card");
  cards.forEach((c, idx) => {
    if (idx === oIdx) c.classList.add("selected");
    else c.classList.remove("selected");
  });

  // Update Grid styling
  const btn = document.getElementById(`qgrid-btn-${currentQuestionIndex}`);
  if (btn) btn.classList.add("answered");

  // Progress bar
  const answeredCount = Object.keys(quizUserAnswers).length;
  const progressPercent = (answeredCount / activeQuizQuestions.length) * 100;
  document.getElementById("exam-progress-bar").style.width = `${progressPercent}%`;
}

window.clearSelection = function() {
  const q = activeQuizQuestions[currentQuestionIndex];
  delete quizUserAnswers[q.id];
  loadQuestion(currentQuestionIndex);
};

// --- Submissions ---
window.nextQuestion = function() {
  if (currentQuestionIndex < activeQuizQuestions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    openSubmitModal();
  }
};

window.prevQuestion = function() {
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1);
  }
};

window.jumpToQuestion = function(idx) {
  loadQuestion(idx);
};

// --- Timer Handling ---
function startTimer() {
  if (quizTimerInterval) clearInterval(quizTimerInterval);
  quizTimerInterval = setInterval(() => {
    quizTimeRemaining--;

    const mins = Math.floor(quizTimeRemaining / 60);
    const secs = quizTimeRemaining % 60;
    document.getElementById("timer-display").innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const container = document.getElementById("countdown-timer");
    if (quizTimeRemaining < 60) {
      container.classList.add("warning");
    } else {
      container.classList.remove("warning");
    }

    if (quizTimeRemaining <= 0) {
      clearInterval(quizTimerInterval);
      alert("Time is up! Your answers are being submitted.");
      submitExam();
    }
  }, 1000);
}

window.openSubmitModal = function() {
  const answeredCount = Object.keys(quizUserAnswers).length;
  document.getElementById("modal-answered-count").innerText = answeredCount;
  document.getElementById("submit-modal").style.display = "flex";
};

window.closeSubmitModal = function() {
  document.getElementById("submit-modal").style.display = "none";
};

window.submitExam = function() {
  closeSubmitModal();
  if (quizTimerInterval) clearInterval(quizTimerInterval);
  quizTimerInterval = null;

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  const categoryTotals = {};
  const categoryCorrects = {};
  const categoryWrongs = {};

  activeQuizQuestions.forEach(q => {
    // Init categories
    if (!categoryTotals[q.category]) {
      categoryTotals[q.category] = 0;
      categoryCorrects[q.category] = 0;
      categoryWrongs[q.category] = 0;
    }
    categoryTotals[q.category]++;

    const userSel = quizUserAnswers[q.id];
    if (userSel === undefined) {
      skipped++;
    } else if (userSel === q.answerIndex) {
      correct++;
      categoryCorrects[q.category]++;
      
      // Remove from bookmarks if answered correctly
      const bookmarkIdx = bookmarkedQuestionIds.indexOf(q.id);
      if (bookmarkIdx > -1) {
        bookmarkedQuestionIds.splice(bookmarkIdx, 1);
      }
    } else {
      wrong++;
      categoryWrongs[q.category]++;

      // Add to bookmarks if answered incorrectly
      if (!bookmarkedQuestionIds.includes(q.id)) {
        bookmarkedQuestionIds.push(q.id);
      }
    }
  });

  // Calculate Marks: +1 correct, -0.20 incorrect
  const rawScore = correct - (wrong * 0.20);
  const finalScore = Math.max(0, parseFloat(rawScore.toFixed(2)));

  // Save Stats
  stats.testsTaken++;
  stats.totalScore += finalScore;
  stats.totalCorrect += correct;
  stats.totalWrong += wrong;

  localStorage.setItem(STORAGE_STATS, JSON.stringify(stats));
  localStorage.setItem(STORAGE_BOOKMARKS, JSON.stringify(bookmarkedQuestionIds));

  // Render Results Page
  document.getElementById("final-score").innerText = finalScore.toFixed(2);
  document.getElementById("max-marks-label").innerText = `out of ${activeQuizQuestions.length}.0`;
  
  const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
  document.getElementById("accuracy-badge").innerText = `Accuracy: ${accuracy}%`;
  
  document.getElementById("stat-correct").innerText = correct;
  document.getElementById("stat-wrong").innerText = wrong;
  document.getElementById("stat-skipped").innerText = skipped;

  // Category breakdown
  const analysisContainer = document.getElementById("category-analysis-list");
  if (analysisContainer) {
    analysisContainer.innerHTML = "";
    for (const cat in categoryTotals) {
      const total = categoryTotals[cat];
      const catCorr = categoryCorrects[cat];
      const catWr = categoryWrongs[cat];
      const catScore = catCorr - (catWr * 0.20);
      const catPercent = Math.max(0, Math.round((catScore / total) * 100));

      const item = document.createElement("div");
      item.className = "topic-progress-item";
      item.innerHTML = `
        <div class="topic-info">
          <span class="topic-name" title="${cat}">${cat}</span>
          <span class="topic-score">${catScore.toFixed(1)}/${total} (${catPercent}%)</span>
        </div>
        <div class="topic-bar-outer">
          <div class="topic-bar-inner" style="width:${catPercent}%"></div>
        </div>
      `;
      analysisContainer.appendChild(item);
    }
  }

  // Review detailed list
  const reviewContainer = document.getElementById("review-list");
  if (reviewContainer) {
    reviewContainer.innerHTML = "";
    activeQuizQuestions.forEach((q, index) => {
      const userSel = quizUserAnswers[q.id];
      const isCorrect = userSel === q.answerIndex;
      const isSkipped = userSel === undefined;

      let statusClass = "skipped";
      let statusText = "Unanswered";
      if (!isSkipped) {
        statusClass = isCorrect ? "correct" : "wrong";
        statusText = isCorrect ? "Correct" : "Incorrect";
      }

      let optionsHTML = "";
      q.options.forEach((opt, oIdx) => {
        const letter = String.fromCharCode(65 + oIdx);
        let optClass = "";
        if (oIdx === q.answerIndex) {
          optClass = isCorrect ? "selected-correct" : "actual-correct";
        } else if (oIdx === userSel) {
          optClass = "selected-wrong";
        }

        optionsHTML += `
          <div class="review-option ${optClass}">
            <div class="review-option-letter">${letter}</div>
            <span>${opt}</span>
          </div>
        `;
      });

      const rItem = document.createElement("div");
      rItem.className = `review-item ${statusClass}`;
      rItem.innerHTML = `
        <span class="review-badge ${statusClass}">${statusText}</span>
        <div class="review-question">${index + 1}. ${q.question}</div>
        <div class="review-options">${optionsHTML}</div>
        <div class="review-explanation">
          <strong>Explanation / Study Note:</strong>
          ${q.explanation}
        </div>
      `;
      reviewContainer.appendChild(rItem);
    });
  }

  // Switch to Results Screen
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.getElementById("screen-results").classList.add("active");
};

// --- Bookmarks Screen Management ---
function renderBookmarksPage() {
  const questionsDb = window.questions;
  const container = document.getElementById("bookmarks-review-list");
  const emptyMsg = document.getElementById("bookmarks-empty-msg");
  const practiceBtn1 = document.getElementById("btn-practice-bookmarks-page");
  
  if (!container || !questionsDb) return;
  container.innerHTML = "";

  if (bookmarkedQuestionIds.length === 0) {
    if (emptyMsg) emptyMsg.style.display = "block";
    if (practiceBtn1) practiceBtn1.style.display = "none";
    return;
  }

  if (emptyMsg) emptyMsg.style.display = "none";
  if (practiceBtn1) practiceBtn1.style.display = "inline-flex";

  const bookmarkedQuestions = questionsDb.filter(q => bookmarkedQuestionIds.includes(q.id));

  bookmarkedQuestions.forEach((q, index) => {
    let optionsHTML = "";
    q.options.forEach((opt, oIdx) => {
      const letter = String.fromCharCode(65 + oIdx);
      const isCorrect = oIdx === q.answerIndex;
      optionsHTML += `
        <div class="review-option ${isCorrect ? 'actual-correct' : ''}">
          <div class="review-option-letter">${letter}</div>
          <span>${opt}</span>
        </div>
      `;
    });

    const item = document.createElement("div");
    item.className = "review-item wrong";
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
        <span class="review-badge wrong">Mistake Log</span>
        <button class="btn btn-secondary" style="font-size:0.7rem; padding:0.2rem 0.5rem;" onclick="removeBookmark(${q.id})">Remove Bookmark</button>
      </div>
      <div class="review-question">${index + 1}. ${q.question} <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">[${q.category}]</span></div>
      <div class="review-options">${optionsHTML}</div>
      <div class="review-explanation">
        <strong>Study Note:</strong>
        ${q.explanation}
      </div>
    `;
    container.appendChild(item);
  });
}

window.removeBookmark = function(qId) {
  const idx = bookmarkedQuestionIds.indexOf(qId);
  if (idx > -1) {
    bookmarkedQuestionIds.splice(idx, 1);
    localStorage.setItem(STORAGE_BOOKMARKS, JSON.stringify(bookmarkedQuestionIds));
    renderBookmarksPage();
  }
};
