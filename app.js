const express = require('express');
const app = express();
const PORT = 3000;

const questions = [
  // DSA
  { id: 1, category: "DSA", question: "What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: 1 },
  { id: 2, category: "DSA", question: "Which data structure uses LIFO order?", options: ["Queue", "Array", "Stack", "Linked List"], answer: 2 },
  { id: 3, category: "DSA", question: "What is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], answer: 2 },
  { id: 4, category: "DSA", question: "Which traversal visits root first, then left, then right?", options: ["Inorder", "Postorder", "Preorder", "Level Order"], answer: 2 },
  { id: 5, category: "DSA", question: "What is the space complexity of Merge Sort?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 2 },
  { id: 6, category: "DSA", question: "A complete binary tree with n nodes has height of?", options: ["n", "n/2", "log n", "2n"], answer: 2 },
  { id: 7, category: "DSA", question: "Which algorithm finds shortest path in a weighted graph?", options: ["BFS", "DFS", "Dijkstra", "Prim"], answer: 2 },

  // OOP / Java
  { id: 8, category: "OOP", question: "Which OOP concept hides internal implementation?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: 2 },
  { id: 9, category: "OOP", question: "What keyword prevents a class from being inherited in Java?", options: ["static", "abstract", "final", "private"], answer: 2 },
  { id: 10, category: "OOP", question: "Which of these is NOT a pillar of OOP?", options: ["Encapsulation", "Compilation", "Inheritance", "Polymorphism"], answer: 1 },
  { id: 11, category: "OOP", question: "What is method overloading?", options: ["Same name, different class", "Same name, same parameters", "Same name, different parameters", "Different name, same parameters"], answer: 2 },
  { id: 12, category: "OOP", question: "In Java, which class is the parent of all classes?", options: ["Base", "Super", "Object", "Root"], answer: 2 },

  // DBMS / SQL
  { id: 13, category: "SQL", question: "Which SQL command is used to retrieve data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], answer: 2 },
  { id: 14, category: "SQL", question: "Which JOIN returns all rows from both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], answer: 3 },
  { id: 15, category: "SQL", question: "What does ACID stand for in databases?", options: ["Array, Class, Index, Data", "Atomicity, Consistency, Isolation, Durability", "Access, Control, Insert, Delete", "None of these"], answer: 1 },
  { id: 16, category: "SQL", question: "Which SQL clause filters grouped results?", options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"], answer: 2 },
  { id: 17, category: "SQL", question: "What is a PRIMARY KEY?", options: ["Any column in a table", "A column that can have NULL values", "A unique identifier for each row", "A foreign reference"], answer: 2 },

  // OS
  { id: 18, category: "OS", question: "Which scheduling algorithm gives CPU to shortest job first?", options: ["FCFS", "Round Robin", "SJF", "Priority"], answer: 2 },
  { id: 19, category: "OS", question: "What is a deadlock?", options: ["When CPU is idle", "When two processes wait for each other indefinitely", "When memory is full", "When a process crashes"], answer: 1 },
  { id: 20, category: "OS", question: "What does LRU stand for in page replacement?", options: ["Last Recently Used", "Least Recently Used", "Least Remaining Utility", "Last Remaining Unit"], answer: 1 },

  // Networking
  { id: 21, category: "Networks", question: "How many layers does the OSI model have?", options: ["4", "5", "6", "7"], answer: 3 },
  { id: 22, category: "Networks", question: "Which protocol assigns IP addresses automatically?", options: ["DNS", "FTP", "DHCP", "HTTP"], answer: 2 },
  { id: 23, category: "Networks", question: "TCP is a _____ protocol.", options: ["Connectionless", "Unreliable", "Connection-oriented", "Stateless"], answer: 2 },

  // DevOps
  { id: 24, category: "DevOps", question: "What does CI/CD stand for?", options: ["Code Integration / Code Delivery", "Continuous Integration / Continuous Delivery", "Compiled Install / Compiled Deploy", "None of these"], answer: 1 },
  { id: 25, category: "DevOps", question: "Which tool is used for containerization?", options: ["Jenkins", "Git", "Docker", "Ansible"], answer: 2 },
  { id: 26, category: "DevOps", question: "What is a Dockerfile?", options: ["A log file", "A script to build Docker images", "A Docker database", "A Jenkins config"], answer: 1 },
  { id: 27, category: "DevOps", question: "Which command builds a Docker image?", options: ["docker run", "docker pull", "docker build", "docker start"], answer: 2 },
  { id: 28, category: "DevOps", question: "Jenkins is primarily used for?", options: ["Version control", "Container management", "CI/CD automation", "Database management"], answer: 2 },

  // Web
  { id: 29, category: "Web", question: "What does REST stand for?", options: ["Remote Execution State Transfer", "Representational State Transfer", "Request State Transfer", "Reliable State Transfer"], answer: 1 },
  { id: 30, category: "Web", question: "Which HTTP method is used to update a resource?", options: ["GET", "POST", "PUT", "DELETE"], answer: 2 },
];

app.get('/api/questions', (req, res) => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  const safe = shuffled.map(({ answer, ...rest }) => rest);
  res.json(safe);
});

app.get('/api/answer/:id', (req, res) => {
  const q = questions.find(q => q.id === parseInt(req.params.id));
  if (!q) return res.status(404).json({ error: 'Not found' });
  res.json({ answer: q.answer });
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DevQuiz — CS MCQ Challenge</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #0a0a0f;
      --surface: #111118;
      --border: #1e1e2e;
      --accent: #00ff88;
      --accent2: #ff6b35;
      --accent3: #7c3aed;
      --text: #e8e8f0;
      --muted: #555570;
      --card: #16161f;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Space Mono', monospace;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* animated grid bg */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      z-index: 0;
    }

    #app {
      position: relative;
      z-index: 1;
      max-width: 760px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }

    /* ── HEADER ── */
    .header {
      text-align: center;
      margin-bottom: 48px;
      animation: fadeDown 0.6s ease both;
    }

    .logo-tag {
      display: inline-block;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--accent);
      border: 1px solid var(--accent);
      padding: 4px 12px;
      margin-bottom: 16px;
    }

    h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.4rem, 6vw, 4rem);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -2px;
    }

    h1 span { color: var(--accent); }

    .subtitle {
      margin-top: 12px;
      color: var(--muted);
      font-size: 12px;
      letter-spacing: 1px;
    }

    /* ── CATEGORY PILLS ── */
    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      margin-bottom: 40px;
      animation: fadeUp 0.6s 0.2s ease both;
    }

    .cat-pill {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      padding: 5px 14px;
      border: 1px solid var(--border);
      color: var(--muted);
      text-transform: uppercase;
      cursor: default;
    }

    .cat-pill.DSA     { border-color: #00ff88; color: #00ff88; }
    .cat-pill.OOP     { border-color: #ff6b35; color: #ff6b35; }
    .cat-pill.SQL     { border-color: #7c3aed; color: #a78bfa; }
    .cat-pill.OS      { border-color: #06b6d4; color: #06b6d4; }
    .cat-pill.Networks{ border-color: #f59e0b; color: #f59e0b; }
    .cat-pill.DevOps  { border-color: #ec4899; color: #ec4899; }
    .cat-pill.Web     { border-color: #10b981; color: #10b981; }

    /* ── START SCREEN ── */
    #start-screen {
      text-align: center;
      animation: fadeUp 0.6s 0.3s ease both;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin: 32px 0;
    }

    .info-box {
      background: var(--card);
      border: 1px solid var(--border);
      padding: 24px 16px;
      text-align: center;
    }

    .info-box .num {
      font-family: 'Syne', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      color: var(--accent);
    }

    .info-box .label {
      font-size: 10px;
      letter-spacing: 2px;
      color: var(--muted);
      text-transform: uppercase;
      margin-top: 4px;
    }

    .btn-start {
      background: var(--accent);
      color: #000;
      border: none;
      font-family: 'Space Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 16px 48px;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 8px;
    }

    .btn-start:hover {
      background: #fff;
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0,255,136,0.3);
    }

    /* ── QUIZ SCREEN ── */
    #quiz-screen { display: none; }

    .progress-bar-wrap {
      height: 3px;
      background: var(--border);
      margin-bottom: 32px;
      position: relative;
      overflow: hidden;
    }

    .progress-bar-fill {
      height: 100%;
      background: var(--accent);
      transition: width 0.4s ease;
    }

    .quiz-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      font-size: 11px;
      letter-spacing: 2px;
      color: var(--muted);
    }

    .q-counter { color: var(--accent); font-weight: 700; }

    .cat-badge {
      font-size: 9px;
      letter-spacing: 2px;
      padding: 3px 10px;
      border: 1px solid currentColor;
      text-transform: uppercase;
    }

    .question-text {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.1rem, 3vw, 1.5rem);
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 32px;
      min-height: 80px;
    }

    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 32px;
    }

    @media (max-width: 500px) {
      .options-grid { grid-template-columns: 1fr; }
      .info-grid { grid-template-columns: repeat(3,1fr); }
    }

    .option-btn {
      background: var(--card);
      border: 1px solid var(--border);
      color: var(--text);
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      padding: 16px 20px;
      text-align: left;
      cursor: pointer;
      transition: all 0.15s;
      line-height: 1.5;
      position: relative;
    }

    .option-btn:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(0,255,136,0.05);
    }

    .option-btn .opt-letter {
      font-size: 9px;
      letter-spacing: 2px;
      color: var(--muted);
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    .option-btn.correct {
      border-color: var(--accent);
      background: rgba(0,255,136,0.12);
      color: var(--accent);
    }

    .option-btn.wrong {
      border-color: var(--accent2);
      background: rgba(255,107,53,0.12);
      color: var(--accent2);
    }

    .option-btn:disabled { cursor: default; }

    .feedback-bar {
      min-height: 48px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
      letter-spacing: 1px;
      margin-bottom: 24px;
      padding: 0 4px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .feedback-bar.show { opacity: 1; }
    .feedback-bar.correct-fb { color: var(--accent); }
    .feedback-bar.wrong-fb   { color: var(--accent2); }

    .feedback-icon { font-size: 20px; }

    .btn-next {
      background: transparent;
      border: 1px solid var(--accent);
      color: var(--accent);
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 12px 32px;
      cursor: pointer;
      float: right;
      transition: all 0.2s;
      display: none;
    }

    .btn-next.show { display: inline-block; }
    .btn-next:hover { background: var(--accent); color: #000; }

    /* ── RESULT SCREEN ── */
    #result-screen {
      display: none;
      text-align: center;
      animation: fadeUp 0.5s ease both;
    }

    .score-ring {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 3px solid var(--border);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto 32px;
      position: relative;
    }

    .score-ring::before {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 50%;
      background: conic-gradient(var(--accent) var(--pct), var(--border) 0);
      z-index: -1;
    }

    .score-ring::after {
      content: '';
      position: absolute;
      inset: 6px;
      border-radius: 50%;
      background: var(--bg);
      z-index: 0;
    }

    .score-num {
      font-family: 'Syne', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      color: var(--accent);
      position: relative;
      z-index: 1;
    }

    .score-label {
      font-size: 10px;
      letter-spacing: 2px;
      color: var(--muted);
      position: relative;
      z-index: 1;
    }

    .result-title {
      font-family: 'Syne', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .result-sub {
      color: var(--muted);
      font-size: 12px;
      letter-spacing: 1px;
      margin-bottom: 40px;
    }

    .result-breakdown {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 12px;
      margin-bottom: 40px;
    }

    .breakdown-box {
      background: var(--card);
      border: 1px solid var(--border);
      padding: 20px;
    }

    .breakdown-box .bnum {
      font-family: 'Syne', sans-serif;
      font-size: 1.8rem;
      font-weight: 800;
    }

    .breakdown-box .blabel {
      font-size: 9px;
      letter-spacing: 2px;
      color: var(--muted);
      text-transform: uppercase;
      margin-top: 4px;
    }

    .btn-restart {
      background: transparent;
      border: 1px solid var(--accent);
      color: var(--accent);
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 14px 40px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-restart:hover { background: var(--accent); color: #000; }

    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .clearfix::after { content: ''; display: table; clear: both; }
  </style>
</head>
<body>
<div id="app">

  <div class="header">
    <div class="logo-tag">// DevQuiz v1.0</div>
    <h1>DEV<span>QUIZ</span></h1>
    <p class="subtitle">// CS PLACEMENT MCQ CHALLENGE</p>
  </div>

  <div class="categories" id="cat-pills"></div>

  <!-- START SCREEN -->
  <div id="start-screen">
    <div class="info-grid">
      <div class="info-box">
        <div class="num">10</div>
        <div class="label">Questions</div>
      </div>
      <div class="info-box">
        <div class="num">7</div>
        <div class="label">Topics</div>
      </div>
      <div class="info-box">
        <div class="num">∞</div>
        <div class="label">Attempts</div>
      </div>
    </div>
    <button class="btn-start" onclick="startQuiz()">START QUIZ</button>
  </div>

  <!-- QUIZ SCREEN -->
  <div id="quiz-screen">
    <div class="progress-bar-wrap">
      <div class="progress-bar-fill" id="progress-bar"></div>
    </div>
    <div class="quiz-meta">
      <span class="q-counter" id="q-counter">Q 1 / 10</span>
      <span class="cat-badge" id="cat-badge">DSA</span>
    </div>
    <div class="question-text" id="question-text"></div>
    <div class="options-grid" id="options-grid"></div>
    <div class="feedback-bar" id="feedback-bar">
      <span class="feedback-icon" id="feedback-icon"></span>
      <span id="feedback-text"></span>
    </div>
    <div class="clearfix">
      <button class="btn-next" id="btn-next" onclick="nextQuestion()">NEXT →</button>
    </div>
  </div>

  <!-- RESULT SCREEN -->
  <div id="result-screen">
    <div class="score-ring" id="score-ring">
      <span class="score-num" id="score-num">0</span>
      <span class="score-label">/ 10</span>
    </div>
    <div class="result-title" id="result-title"></div>
    <div class="result-sub" id="result-sub"></div>
    <div class="result-breakdown">
      <div class="breakdown-box">
        <div class="bnum" style="color:var(--accent)" id="r-correct">0</div>
        <div class="blabel">Correct</div>
      </div>
      <div class="breakdown-box">
        <div class="bnum" style="color:var(--accent2)" id="r-wrong">0</div>
        <div class="blabel">Wrong</div>
      </div>
      <div class="breakdown-box">
        <div class="bnum" style="color:#a78bfa" id="r-pct">0%</div>
        <div class="blabel">Score</div>
      </div>
    </div>
    <button class="btn-restart" onclick="restartQuiz()">↺ TRY AGAIN</button>
  </div>

</div>

<script>
  const LETTERS = ['A','B','C','D'];
  const CATS = ['DSA','OOP','SQL','OS','Networks','DevOps','Web'];
  const CAT_COLORS = { DSA:'#00ff88',OOP:'#ff6b35',SQL:'#a78bfa',OS:'#06b6d4',Networks:'#f59e0b',DevOps:'#ec4899',Web:'#10b981' };

  let questions = [], current = 0, score = 0, answered = false;

  // Render category pills
  const pillsEl = document.getElementById('cat-pills');
  CATS.forEach(c => {
    const el = document.createElement('span');
    el.className = 'cat-pill ' + c;
    el.textContent = c;
    pillsEl.appendChild(el);
  });

  async function startQuiz() {
    const res = await fetch('/api/questions');
    questions = await res.json();
    current = 0; score = 0;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const q = questions[current];
    const total = questions.length;

    document.getElementById('q-counter').textContent = 'Q ' + (current+1) + ' / ' + total;
    document.getElementById('progress-bar').style.width = ((current/total)*100) + '%';

    const badge = document.getElementById('cat-badge');
    badge.textContent = q.category;
    badge.style.color = CAT_COLORS[q.category] || '#fff';
    badge.style.borderColor = CAT_COLORS[q.category] || '#fff';

    document.getElementById('question-text').textContent = q.question;

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = '<span class="opt-letter">Option ' + LETTERS[i] + '</span>' + opt;
      btn.onclick = () => selectAnswer(i, q.id);
      grid.appendChild(btn);
    });

    const fb = document.getElementById('feedback-bar');
    fb.className = 'feedback-bar';
    document.getElementById('btn-next').className = 'btn-next';
  }

  async function selectAnswer(idx, qid) {
    if (answered) return;
    answered = true;

    const res = await fetch('/api/answer/' + qid);
    const data = await res.json();
    const correct = data.answer;

    const btns = document.querySelectorAll('.option-btn');
    btns.forEach((b,i) => {
      b.disabled = true;
      if (i === correct) b.classList.add('correct');
      else if (i === idx && idx !== correct) b.classList.add('wrong');
    });

    const fb = document.getElementById('feedback-bar');
    const fbIcon = document.getElementById('feedback-icon');
    const fbText = document.getElementById('feedback-text');

    if (idx === correct) {
      score++;
      fb.className = 'feedback-bar correct-fb show';
      fbIcon.textContent = '✓';
      fbText.textContent = 'CORRECT — WELL DONE';
    } else {
      fb.className = 'feedback-bar wrong-fb show';
      fbIcon.textContent = '✗';
      fbText.textContent = 'WRONG — CORRECT: ' + LETTERS[correct];
    }

    const nextBtn = document.getElementById('btn-next');
    nextBtn.className = 'btn-next show';
    nextBtn.textContent = current+1 >= questions.length ? 'SEE RESULTS →' : 'NEXT →';
  }

  function nextQuestion() {
    current++;
    if (current >= questions.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function showResult() {
    document.getElementById('quiz-screen').style.display = 'none';
    const rs = document.getElementById('result-screen');
    rs.style.display = 'block';

    const pct = Math.round((score / questions.length) * 100);
    document.getElementById('score-ring').style.setProperty('--pct', pct + '%');
    document.getElementById('score-num').textContent = score;
    document.getElementById('r-correct').textContent = score;
    document.getElementById('r-wrong').textContent = questions.length - score;
    document.getElementById('r-pct').textContent = pct + '%';

    let title, sub;
    if (pct >= 90)      { title = '🔥 LEGEND'; sub = 'You are placement-ready. Interview? Bring it on.'; }
    else if (pct >= 70) { title = '💪 SOLID'; sub = 'Good fundamentals. Revise the wrong ones and you\'re set.'; }
    else if (pct >= 50) { title = '📚 KEEP GRINDING'; sub = 'Decent start. Hit the weak topics harder.'; }
    else                { title = '😅 STUDY MORE'; sub = 'Concepts need work. Go again — you\'ll improve.'; }

    document.getElementById('result-title').textContent = title;
    document.getElementById('result-sub').textContent = sub;
  }

  function restartQuiz() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
  }
</script>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log('DevQuiz app running at http://localhost:' + PORT);
});
