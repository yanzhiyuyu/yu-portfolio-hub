/* ===== 海洋消消乐 · 背单词 ===== */

// 8种海洋生物 SVG
const CREATURES = [
  `<svg viewBox="0 0 48 48"><ellipse cx="22" cy="24" rx="16" ry="11" fill="#ff8a65"/><polygon points="36,24 46,15 46,33" fill="#ff8a65"/><path d="M 14 14 Q 18 8 26 12" fill="#ffb74d"/><ellipse cx="14" cy="20" rx="3" ry="8" fill="#fff" opacity="0.9"/><ellipse cx="24" cy="22" rx="3" ry="10" fill="#fff" opacity="0.9"/><circle cx="12" cy="22" r="2.5" fill="#333"/><circle cx="12.8" cy="21.2" r="0.9" fill="#fff"/><path d="M 8 28 Q 12 31 16 29" stroke="#d84315" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 48 48"><ellipse cx="23" cy="24" rx="15" ry="10" fill="#42a5f5"/><polygon points="36,24 46,16 46,32" fill="#1e88e5"/><path d="M 10 20 Q 12 14 20 14 L 30 16" fill="#1e88e5"/><ellipse cx="20" cy="20" rx="4" ry="3" fill="#90caf9" opacity="0.6"/><circle cx="13" cy="22" r="2.5" fill="#333"/><circle cx="13.8" cy="21.2" r="0.9" fill="#fff"/><path d="M 8 28 Q 12 30 16 29" stroke="#1565c0" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M 38 16 L 44 14" stroke="#ffb300" stroke-width="2"/></svg>`,
  `<svg viewBox="0 0 48 48"><path d="M 28 8 Q 34 8 34 14 Q 34 18 30 20 L 28 22 Q 32 28 28 34 Q 24 40 18 38 Q 12 36 14 30 Q 16 24 22 22 L 22 16 Q 22 10 28 8 Z" fill="#f48fb1"/><path d="M 28 10 L 36 8 L 34 14 Z" fill="#f06292"/><circle cx="28" cy="14" r="2" fill="#333"/><circle cx="28.8" cy="13.3" r="0.7" fill="#fff"/><path d="M 18 38 Q 14 42 10 38 Q 14 36 16 34" fill="#f06292"/><ellipse cx="24" cy="26" rx="3" ry="5" fill="#f8bbd0" opacity="0.5"/></svg>`,
  `<svg viewBox="0 0 48 48"><path d="M 24 6 L 28 18 L 40 19 L 31 27 L 34 39 L 24 32 L 14 39 L 17 27 L 8 19 L 20 18 Z" fill="#ffab91"/><path d="M 24 12 L 26 20 L 34 21 L 28 26 L 30 34 L 24 29 L 18 34 L 20 26 L 14 21 L 22 20 Z" fill="#ffccbc"/><circle cx="22" cy="22" r="1.5" fill="#333" opacity="0.6"/><circle cx="27" cy="24" r="1.5" fill="#333" opacity="0.6"/></svg>`,
  `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="20" rx="13" ry="11" fill="#ce93d8"/><path d="M 14 28 Q 10 36 14 40 M 20 30 Q 18 38 22 42 M 28 30 Q 30 38 26 42 M 34 28 Q 38 36 34 40" stroke="#ab47bc" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="19" cy="18" r="3" fill="#fff"/><circle cx="29" cy="18" r="3" fill="#fff"/><circle cx="19.5" cy="18.5" r="1.5" fill="#333"/><circle cx="29.5" cy="18.5" r="1.5" fill="#333"/><path d="M 21 24 Q 24 26 27 24" stroke="#7b1fa2" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 48 48"><path d="M 10 30 Q 10 14 24 12 Q 38 14 38 30 Q 38 36 24 36 Q 10 36 10 30 Z" fill="#fff9c4"/><path d="M 24 14 L 24 34 M 16 16 Q 18 24 16 32 M 32 16 Q 30 24 32 32" stroke="#fdd835" stroke-width="1.2" fill="none"/><ellipse cx="24" cy="34" rx="6" ry="2" fill="#fff59d"/><circle cx="20" cy="22" r="1.5" fill="#333" opacity="0.5"/><circle cx="28" cy="22" r="1.5" fill="#333" opacity="0.5"/></svg>`,
  `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="26" rx="14" ry="10" fill="#66bb6a"/><ellipse cx="24" cy="24" rx="11" ry="7" fill="#81c784"/><path d="M 18 22 L 22 20 L 26 22 L 24 26 Z M 28 24 L 30 27 L 26 28" stroke="#388e3c" stroke-width="1" fill="none"/><circle cx="37" cy="22" r="5" fill="#81c784"/><circle cx="38" cy="21" r="1.5" fill="#333"/><ellipse cx="12" cy="20" rx="3" ry="2" fill="#66bb6a"/><ellipse cx="12" cy="30" rx="3" ry="2" fill="#66bb6a"/><ellipse cx="34" cy="34" rx="3" ry="2" fill="#66bb6a"/></svg>`,
  `<svg viewBox="0 0 48 48"><path d="M 12 22 Q 12 10 24 10 Q 36 10 36 22 Q 36 26 32 26 L 16 26 Q 12 26 12 22 Z" fill="#80deea"/><ellipse cx="24" cy="18" rx="8" ry="5" fill="#b2ebf2" opacity="0.6"/><path d="M 16 26 Q 14 32 17 38 M 21 26 Q 20 34 22 40 M 27 26 Q 28 34 26 40 M 32 26 Q 34 32 31 38" stroke="#4dd0e1" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/><circle cx="20" cy="18" r="1.5" fill="#333" opacity="0.5"/><circle cx="28" cy="18" r="1.5" fill="#333" opacity="0.5"/></svg>`
];

// ===== 游戏状态 =====
const GRID = 6;
let state = {
  level: null,
  words: [],
  board: [],       // GRID×GRID, each cell = { wordIdx, el } or null
  selected: null,
  stepsLeft: 20,
  lights: 0,
  lightsTarget: 30,
  isBusy: false,
  soundOn: true,
};

const $ = id => document.getElementById(id);
const boardEl = $('board');

// ===== 事件绑定 =====
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => startGame(btn.dataset.level));
});
$('btn-back').addEventListener('click', () => {
  $('game-screen').classList.remove('active');
  $('start-screen').classList.add('active');
});
$('btn-sound').addEventListener('click', toggleSound);
$('btn-replay').addEventListener('click', () => speakWord(currentCardWord));
$('btn-retry').addEventListener('click', () => startGame(state.level));
$('btn-back-level').addEventListener('click', () => {
  $('end-overlay').classList.remove('show');
  $('game-screen').classList.remove('active');
  $('start-screen').classList.add('active');
});

// ===== 开始游戏 =====
function startGame(level) {
  state.level = level;
  const bank = WORD_BANKS[level];
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  state.words = shuffled.slice(0, 8);
  state.stepsLeft = 20;
  state.lights = 0;
  state.lightsTarget = 30;
  state.selected = null;
  state.isBusy = false;

  updateHUD();
  $('start-screen').classList.remove('active');
  $('game-screen').classList.add('active');
  $('end-overlay').classList.remove('show');
  $('word-card').classList.remove('show');
  initBoard();
}

// ===== 棋盘初始化 =====
function initBoard() {
  boardEl.innerHTML = '';
  state.board = [];
  for (let r = 0; r < GRID; r++) {
    state.board[r] = [];
    for (let c = 0; c < GRID; c++) {
      let wordIdx;
      do {
        wordIdx = Math.floor(Math.random() * 8);
      } while (wouldCreateMatch(r, c, wordIdx));
      const el = createTileEl(r, c, wordIdx);
      boardEl.appendChild(el);
      state.board[r][c] = { wordIdx, el };
    }
  }
}

function wouldCreateMatch(r, c, wordIdx) {
  if (c >= 2 && state.board[r][c-1].wordIdx === wordIdx && state.board[r][c-2].wordIdx === wordIdx) return true;
  if (r >= 2 && state.board[r-1][c].wordIdx === wordIdx && state.board[r-2][c].wordIdx === wordIdx) return true;
  return false;
}

function createTileEl(r, c, wordIdx) {
  const el = document.createElement('div');
  el.className = 'tile';
  el.dataset.r = r;
  el.dataset.c = c;
  el.dataset.type = wordIdx;
  el.style.gridRow = (r + 1);
  el.style.gridColumn = (c + 1);
  const word = state.words[wordIdx];
  el.innerHTML = '<div class="creature">' + CREATURES[wordIdx] + '</div>' +
    '<div class="word-label">' + word.en + '</div>';
  el.addEventListener('pointerdown', onTileTap);
  return el;
}

// ===== 点击交换 =====
function onTileTap(e) {
  if (state.isBusy) return;
  const el = e.currentTarget;
  const r = parseInt(el.dataset.r);
  const c = parseInt(el.dataset.c);

  if (!state.selected) {
    selectTile(r, c);
  } else {
    const dr = Math.abs(state.selected.r - r);
    const dc = Math.abs(state.selected.c - c);
    if (dr + dc === 1) {
      swapTiles(state.selected.r, state.selected.c, r, c);
      deselectTile();
    } else if (state.selected.r === r && state.selected.c === c) {
      deselectTile();
    } else {
      deselectTile();
      selectTile(r, c);
    }
  }
}

function selectTile(r, c) {
  state.selected = { r, c };
  const cell = state.board[r][c];
  if (cell && cell.el) cell.el.classList.add('selected');
}
function deselectTile() {
  if (state.selected) {
    const cell = state.board[state.selected.r][state.selected.c];
    if (cell && cell.el) cell.el.classList.remove('selected');
  }
  state.selected = null;
}

// ===== 交换 =====
async function swapTiles(r1, c1, r2, c2) {
  state.isBusy = true;
  const cell1 = state.board[r1][c1];
  const cell2 = state.board[r2][c2];

  state.board[r1][c1] = cell2;
  state.board[r2][c2] = cell1;

  if (cell1 && cell1.el) {
    cell1.el.dataset.r = r2; cell1.el.dataset.c = c2;
    cell1.el.style.gridRow = (r2 + 1);
    cell1.el.style.gridColumn = (c2 + 1);
  }
  if (cell2 && cell2.el) {
    cell2.el.dataset.r = r1; cell2.el.dataset.c = c1;
    cell2.el.style.gridRow = (r1 + 1);
    cell2.el.style.gridColumn = (c1 + 1);
  }

  await sleep(250);

  const matches = findMatches();
  if (matches.length === 0) {
    // 换回来
    state.board[r1][c1] = cell1;
    state.board[r2][c2] = cell2;
    if (cell1 && cell1.el) {
      cell1.el.dataset.r = r1; cell1.el.dataset.c = c1;
      cell1.el.style.gridRow = (r1 + 1);
      cell1.el.style.gridColumn = (c1 + 1);
    }
    if (cell2 && cell2.el) {
      cell2.el.dataset.r = r2; cell2.el.dataset.c = c2;
      cell2.el.style.gridRow = (r2 + 1);
      cell2.el.style.gridColumn = (c2 + 1);
    }
    await sleep(250);
    state.isBusy = false;
    return;
  }

  state.stepsLeft--;
  updateHUD();
  await processMatches(matches);
  checkEnd();
  state.isBusy = false;
}

// ===== 消除检测 =====
function findMatches() {
  const matched = new Set();
  // 横向
  for (let r = 0; r < GRID; r++) {
    let count = 1;
    for (let c = 1; c <= GRID; c++) {
      const cur = c < GRID ? state.board[r][c] : null;
      const prev = state.board[r][c-1];
      if (cur && prev && cur.wordIdx === prev.wordIdx) {
        count++;
      } else {
        if (count >= 3) {
          for (let i = c - count; i < c; i++) matched.add(r + ',' + i);
        }
        count = 1;
      }
    }
  }
  // 纵向
  for (let c = 0; c < GRID; c++) {
    let count = 1;
    for (let r = 1; r <= GRID; r++) {
      const cur = r < GRID ? state.board[r][c] : null;
      const prev = state.board[r-1][c];
      if (cur && prev && cur.wordIdx === prev.wordIdx) {
        count++;
      } else {
        if (count >= 3) {
          for (let i = r - count; i < r; i++) matched.add(i + ',' + c);
        }
        count = 1;
      }
    }
  }
  return [...matched].map(s => s.split(',').map(Number));
}

// ===== 消除处理 =====
async function processMatches(matches) {
  while (matches.length > 0) {
    matches.forEach(([r, c]) => {
      const cell = state.board[r][c];
      if (cell && cell.el) {
        cell.el.classList.add('matched');
        spawnBubbles(cell.el);
      }
    });

    state.lights += matches.length;
    updateHUD();

    const firstWord = state.words[state.board[matches[0][0]][matches[0][1]].wordIdx];
    showWordCard(firstWord);

    await sleep(400);

    matches.forEach(([r, c]) => {
      const cell = state.board[r][c];
      if (cell && cell.el) cell.el.remove();
      state.board[r][c] = null;
    });

    await dropAndRefill();
    await sleep(250);
    matches = findMatches();
  }
}

// ===== 下落与补充 =====
async function dropAndRefill() {
  for (let c = 0; c < GRID; c++) {
    let writeRow = GRID - 1;
    for (let r = GRID - 1; r >= 0; r--) {
      if (state.board[r][c] !== null) {
        if (writeRow !== r) {
          state.board[writeRow][c] = state.board[r][c];
          state.board[r][c] = null;
          const cell = state.board[writeRow][c];
          cell.el.dataset.r = writeRow;
          cell.el.style.gridRow = (writeRow + 1);
        }
        writeRow--;
      }
    }
    // 顶部填充新棋子（从棋盘上方落下）
    for (let r = writeRow; r >= 0; r--) {
      const wordIdx = Math.floor(Math.random() * 8);
      const el = createTileEl(r, c, wordIdx);
      // 先放到棋盘上方的虚拟行
      el.style.gridRow = (r - writeRow - 1);
      boardEl.appendChild(el);
      state.board[r][c] = { wordIdx, el };
      // 下一帧移到目标行，触发过渡
      requestAnimationFrame(() => {
        el.style.gridRow = (r + 1);
      });
    }
  }
  await sleep(350);
}

// ===== 气泡特效 =====
function spawnBubbles(el) {
  const rect = el.getBoundingClientRect();
  const boardRect = boardEl.getBoundingClientRect();
  for (let i = 0; i < 5; i++) {
    const b = document.createElement('div');
    b.className = 'bubble-fx';
    const size = 4 + Math.random() * 8;
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = (rect.left - boardRect.left + rect.width/2 - size/2 + (Math.random()-0.5)*30) + 'px';
    b.style.top = (rect.top - boardRect.top + rect.height/2 - size/2) + 'px';
    b.style.animationDelay = (Math.random() * 0.2) + 's';
    boardEl.appendChild(b);
    setTimeout(() => b.remove(), 1000);
  }
  for (let i = 0; i < 4; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle-fx';
    s.style.left = (rect.left - boardRect.left + Math.random() * rect.width) + 'px';
    s.style.top = (rect.top - boardRect.top + Math.random() * rect.height) + 'px';
    s.style.animationDelay = (Math.random() * 0.15) + 's';
    boardEl.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }
}

// ===== 单词卡片 + TTS =====
let currentCardWord = null;
let cardTimer = null;

function showWordCard(word) {
  currentCardWord = word;
  $('card-en').textContent = word.en;
  $('card-cn').textContent = word.cn;
  $('word-card').classList.add('show');
  if (state.soundOn) speakWord(word);
  clearTimeout(cardTimer);
  cardTimer = setTimeout(() => {
    $('word-card').classList.remove('show');
  }, 3500);
}

function speakWord(word) {
  if (!state.soundOn || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const en = new SpeechSynthesisUtterance(word.en);
  en.lang = 'en-US'; en.rate = 0.9;
  const cn = new SpeechSynthesisUtterance(word.cn);
  cn.lang = 'zh-CN'; cn.rate = 1;
  window.speechSynthesis.speak(en);
  window.speechSynthesis.speak(cn);
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  $('icon-sound-on').style.display = state.soundOn ? '' : 'none';
  $('icon-sound-off').style.display = state.soundOn ? 'none' : '';
  if (!state.soundOn && window.speechSynthesis) window.speechSynthesis.cancel();
}

// ===== HUD =====
function updateHUD() {
  $('steps-left').textContent = state.stepsLeft;
  $('lights-count').textContent = state.lights;
  $('lights-target').textContent = state.lightsTarget;
  const pct = Math.min(100, (state.lights / state.lightsTarget) * 100);
  $('progress-fill').style.width = pct + '%';
}

// ===== 胜负 =====
function checkEnd() {
  if (state.lights >= state.lightsTarget) {
    setTimeout(() => showEnd(true), 600);
  } else if (state.stepsLeft <= 0) {
    setTimeout(() => showEnd(false), 600);
  }
}

function showEnd(win) {
  $('end-icon').className = 'end-icon ' + (win ? 'win' : 'lose');
  $('end-title').textContent = win ? '通关成功！' : '步数用完了';
  $('end-msg').textContent = win
    ? '你收集了 ' + state.lights + ' 个海洋光点，太棒了！'
    : '你收集了 ' + state.lights + '/' + state.lightsTarget + ' 个光点，再试一次吧！';
  $('end-lights').textContent = state.lights;
  $('end-overlay').classList.add('show');
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
