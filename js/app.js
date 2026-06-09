/* ============================================================
   BINGO DE STREAM — Lógica principal
   ============================================================ */

// ============================================================
//  TEMAS
// ============================================================
const THEMES = [
  {
    name: 'Dark Purple', id: 'dark-purple',
    vars: {
      '--bg': '#1a1a2e', '--surface': '#16213e', '--surface2': '#0f3460',
      '--accent': '#e94560', '--accent2': '#f5a623',
      '--cell-bg': '#1e2d4a', '--cell-selected': '#533483', '--cell-selected-border': '#a855f7',
      '--cell-border': '#2a3f6a', '--text': '#e8eaf6', '--text-muted': '#8892b0',
      '--header-bg': '#0f3460', '--btn-bg': '#1e2d4a', '--btn-hover': '#2a3f6a', '--border-color': '#2a3f6a',
    },
    swatches: ['#1a1a2e', '#533483', '#e94560', '#f5a623'],
  },
  {
    name: 'Green', id: 'green-gamer',
    vars: {
      '--bg': '#0d1117', '--surface': '#161b22', '--surface2': '#21262d',
      '--accent': '#3fb950', '--accent2': '#58a6ff',
      '--cell-bg': '#161b22', '--cell-selected': '#1a4a2a', '--cell-selected-border': '#3fb950',
      '--cell-border': '#30363d', '--text': '#c9d1d9', '--text-muted': '#8b949e',
      '--header-bg': '#161b22', '--btn-bg': '#21262d', '--btn-hover': '#30363d', '--border-color': '#30363d',
    },
    swatches: ['#0d1117', '#1a4a2a', '#3fb950', '#58a6ff'],
  },
  {
    name: 'Red', id: 'nintendo',
    vars: {
      '--bg': '#1a0a0a', '--surface': '#2a0f0f', '--surface2': '#3a1515',
      '--accent': '#e4000f', '--accent2': '#ffffff',
      '--cell-bg': '#2a0f0f', '--cell-selected': '#6b0000', '--cell-selected-border': '#e4000f',
      '--cell-border': '#4a1a1a', '--text': '#ffe8e8', '--text-muted': '#b08080',
      '--header-bg': '#e4000f', '--btn-bg': '#3a1515', '--btn-hover': '#4a1f1f', '--border-color': '#4a1a1a',
    },
    swatches: ['#1a0a0a', '#6b0000', '#e4000f', '#ffffff'],
  },
  {
    name: 'Blue', id: 'playstation',
    vars: {
      '--bg': '#00060e', '--surface': '#001020', '--surface2': '#001a35',
      '--accent': '#0070d1', '--accent2': '#00c8e0',
      '--cell-bg': '#001528', '--cell-selected': '#003366', '--cell-selected-border': '#0070d1',
      '--cell-border': '#002040', '--text': '#d0e8f8', '--text-muted': '#6090b0',
      '--header-bg': '#001a35', '--btn-bg': '#001528', '--btn-hover': '#002040', '--border-color': '#002040',
    },
    swatches: ['#00060e', '#003366', '#0070d1', '#00c8e0'],
  },
  {
    name: 'Light Minimalist', id: 'light',
    vars: {
      '--bg': '#f0f2f5', '--surface': '#ffffff', '--surface2': '#e4e8f0',
      '--accent': '#e94560', '--accent2': '#f5a623',
      '--cell-bg': '#ffffff', '--cell-selected': '#fde8ec', '--cell-selected-border': '#e94560',
      '--cell-border': '#d0d5e0', '--text': '#1a1a2e', '--text-muted': '#6b7280',
      '--header-bg': '#1a1a2e', '--btn-bg': '#f0f2f5', '--btn-hover': '#e4e8f0', '--border-color': '#d0d5e0',
    },
    swatches: ['#f0f2f5', '#fde8ec', '#e94560', '#f5a623'],
  },
  {
        name: 'Dark Minimalist', id: 'dark-minimal',
    vars: {
      '--bg': '#111111', '--surface': '#1c1c1c', '--surface2': '#242424',
      '--accent': '#e94560', '--accent2': '#f5a623',
      '--cell-bg': '#1c1c1c', '--cell-selected': '#2e1a1a', '--cell-selected-border': '#e94560',
      '--cell-border': '#2e2e2e', '--text': '#eeeeee', '--text-muted': '#777777',
      '--header-bg': '#1c1c1c', '--btn-bg': '#242424', '--btn-hover': '#2e2e2e', '--border-color': '#2e2e2e',
    },
    swatches: ['#111111', '#2e1a1a', '#e94560', '#f5a623'],
  },
  {
    name: 'Neon Purple', id: 'neon-purple',
    vars: {
      '--bg': '#0e0014', '--surface': '#160020', '--surface2': '#200030',
      '--accent': '#c84bff', '--accent2': '#ff6b9d',
      '--cell-bg': '#160020', '--cell-selected': '#3a0060', '--cell-selected-border': '#c84bff',
      '--cell-border': '#2a0045', '--text': '#f0e0ff', '--text-muted': '#9060c0',
      '--header-bg': '#200030', '--btn-bg': '#1a0028', '--btn-hover': '#2a0045', '--border-color': '#2a0045',
    },
    swatches: ['#0e0014', '#3a0060', '#c84bff', '#ff6b9d'],
  },
];

// ============================================================
//  ESTADO GLOBAL
// ============================================================
let gridSize = 4;
let editMode = false;
let editingCellIndex = null;
let editingImageData = null; // string base64 ou null
let hadBingo = false;

// cells[i] = { text: string, img: string|null }
let cells = [];

let currentThemeId = 'dark-purple';

// ============================================================
//  INICIALIZAÇÃO
// ============================================================
function initCells(size) {
  const total = size * size;
  while (cells.length < total) cells.push({ text: '', img: null });
  if (cells.length > total) cells = cells.slice(0, total);
}

function startup() {
  const savedTheme = localStorage.getItem('stream-bingo-theme');
  if (savedTheme && THEMES.find(t => t.id === savedTheme)) {
    applyTheme(savedTheme);
  } else {
    applyTheme('dark-purple');
  }

  initCells(gridSize);
  buildGrid();
  updateTitleDisplay();
}

// ============================================================
//  CONSTRUÇÃO DO GRID
// ============================================================
function buildGrid() {
  const grid = document.getElementById('bingo-grid');
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.innerHTML = '';

  for (let i = 0; i < gridSize * gridSize; i++) {
    grid.appendChild(createCellEl(i));
  }

  updateTitleDisplay();
}

function createCellEl(i) {
  const div = document.createElement('div');
  div.className = 'cell';
  div.dataset.index = i;
  renderCellContent(div, i);

  div.addEventListener('click', () => onCellClick(i));

  // Drag & drop de imagem direto na célula (no modo jogo ou edição)
  div.addEventListener('dragover', e => {
    e.preventDefault();
    div.style.outline = '2px solid var(--accent)';
  });
  div.addEventListener('dragleave', () => {
    div.style.outline = '';
  });
  div.addEventListener('drop', e => {
    e.preventDefault();
    div.style.outline = '';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      readImageFile(file, base64 => {
        cells[i].img = base64;
        refreshCell(i);
        toast('Image added!');
      });
    }
  });

  return div;
}

function renderCellContent(div, i) {
  div.innerHTML = '';
  const c = cells[i];

  if (c.img) {
    const img = document.createElement('img');
    img.className = 'cell-img';
    img.src = c.img;
    div.appendChild(img);
  }

  const textDiv = document.createElement('div');
  textDiv.className = 'cell-text';
  textDiv.textContent = c.text;
  div.appendChild(textDiv);
}

function refreshCell(i) {
  const grid = document.getElementById('bingo-grid');
  const div = grid.children[i];
  if (!div) return;
  const wasSelected = div.classList.contains('selected');
  renderCellContent(div, i);
  if (wasSelected) div.classList.add('selected');
}

// ============================================================
//  CLIQUE NA CÉLULA
// ============================================================
function onCellClick(i) {
  if (editMode) {
    openEditModal(i);
  } else {
    const grid = document.getElementById('bingo-grid');
    grid.children[i].classList.toggle('selected');
    checkBingo();
  }
}

// ============================================================
//  VERIFICAÇÃO DE BINGO
// ============================================================
function checkBingo() {
  const grid = document.getElementById('bingo-grid');
  const selected = Array.from(grid.children).map(c => c.classList.contains('selected'));

  let bingo = false;

  // Linhas
  for (let r = 0; r < gridSize; r++) {
    if (Array.from({ length: gridSize }, (_, c) => selected[r * gridSize + c]).every(Boolean)) {
      bingo = true; break;
    }
  }

  // Colunas
  if (!bingo) {
    for (let c = 0; c < gridSize; c++) {
      if (Array.from({ length: gridSize }, (_, r) => selected[r * gridSize + c]).every(Boolean)) {
        bingo = true; break;
      }
    }
  }

  // Diagonal principal
  if (!bingo && Array.from({ length: gridSize }, (_, i) => selected[i * gridSize + i]).every(Boolean)) {
    bingo = true;
  }

  // Diagonal secundária
  if (!bingo && Array.from({ length: gridSize }, (_, i) => selected[i * gridSize + (gridSize - 1 - i)]).every(Boolean)) {
    bingo = true;
  }

  if (bingo && !hadBingo) {
    hadBingo = true;
    showWinBanner();
  } else if (!bingo) {
    hadBingo = false;
  }
}

function showWinBanner() {
  const banner = document.getElementById('win-banner');
  banner.classList.add('show');
  setTimeout(() => banner.classList.remove('show'), 3000);
}

// ============================================================
//  MODO EDIÇÃO
// ============================================================
function setEditMode(on) {
  editMode = on;
  const grid = document.getElementById('bingo-grid');
  const label = document.getElementById('btn-edit-label');
  const btn = document.getElementById('btn-edit-mode');

  if (on) {
    grid.querySelectorAll('.cell').forEach(c => c.classList.add('edit-mode'));
    label.textContent = 'Play';
    btn.style.borderColor = 'var(--accent2)';
    btn.style.color = 'var(--accent2)';
  } else {
    grid.querySelectorAll('.cell').forEach(c => c.classList.remove('edit-mode'));
    label.textContent = 'Edit';
    btn.style.borderColor = '';
    btn.style.color = '';
  }
}

// ============================================================
//  MODAL DE EDIÇÃO DA CÉLULA
// ============================================================
function openEditModal(i) {
  editingCellIndex = i;
  editingImageData = cells[i].img;
  document.getElementById('cell-edit-text').value = cells[i].text;
  renderImgPreview(editingImageData);
  showModal('cell-edit-modal');
  setTimeout(() => document.getElementById('cell-edit-text').focus(), 80);
}

function renderImgPreview(dataUrl) {
  const container = document.getElementById('img-preview-container');
  if (dataUrl) {
    container.innerHTML = `
      <div class="img-preview-wrap" style="text-align:center;width:100%;">
        <img src="${dataUrl}" alt="Preview" />
        <button class="remove-img" id="btn-remove-img" title="Remove Image">×</button>
      </div>`;
    document.getElementById('btn-remove-img').onclick = () => {
      editingImageData = null;
      renderImgPreview(null);
    };
  } else {
    container.innerHTML = '';
  }
}

function readImageFile(file, cb) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const MAX = 400;
      let { width, height } = img;
      if (width > MAX || height > MAX) {
        if (width > height) { height = Math.round(height * MAX / width); width = MAX; }
        else                { width  = Math.round(width  * MAX / height); height = MAX; }
      }
      const canvas = document.createElement('canvas');
      canvas.width  = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      cb(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ============================================================
//  TEMAS
// ============================================================
function applyTheme(id) {
  const theme = THEMES.find(t => t.id === id);
  if (!theme) return;
  currentThemeId = id;
  Object.entries(theme.vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  localStorage.setItem('stream-bingo-theme', id);
}

function renderThemeGrid() {
  const grid = document.getElementById('theme-grid');
  grid.innerHTML = '';
  THEMES.forEach(t => {
    const el = document.createElement('div');
    el.className = 'theme-item' + (t.id === currentThemeId ? ' active' : '');
    el.style.background = t.vars['--surface'];
    el.style.borderColor = t.id === currentThemeId ? 'var(--accent2)' : t.vars['--border-color'];
    el.innerHTML = `
      <div class="theme-swatch">
        ${t.swatches.map(s => `<span style="background:${s}"></span>`).join('')}
      </div>
      <div class="theme-name" style="color:${t.vars['--text']}">${t.name}</div>`;
    el.addEventListener('click', () => {
      applyTheme(t.id);
      renderThemeGrid();
      toast(`Theme "${t.name}" applied!`);
    });
    grid.appendChild(el);
  });
}

// ============================================================
//  SALVAR / CARREGAR
// ============================================================
function getSaves() {
  try { return JSON.parse(localStorage.getItem('stream-bingo-saves') || '{}'); }
  catch { return {}; }
}

function saveBingo(name) {
  const saves = getSaves();
  saves[name] = {
    gridSize,
    cells: cells.map(c => ({ text: c.text, img: c.img })),
    savedAt: new Date().toLocaleString('pt-BR'),
  };
  try {
    localStorage.setItem('stream-bingo-saves', JSON.stringify(saves));
    return true;
  } catch (e) {
    // QuotaExceededError — storage full even after compression
    toast('No space. Try deleting old bingos or using fewer images.', true);
    return false;
  }
}

function loadBingo(name, data) {
  gridSize = data.gridSize || 4;
  cells = (data.cells || []).map(c => ({ text: c.text || '', img: c.img || null }));
  initCells(gridSize);
  document.getElementById('title-input').value = name;
  document.getElementById('grid-size-display').textContent = `${gridSize}×${gridSize}`;
  hadBingo = false;
  buildGrid();
  updateTitleDisplay();
}

function renderSavedList() {
  const saves = getSaves();
  const container = document.getElementById('saved-list');
  const keys = Object.keys(saves);

  if (!keys.length) {
    container.innerHTML = '<div class="empty-state">No bingo saved yet.</div>';
    return;
  }

  container.innerHTML = '';
  [...keys].reverse().forEach(name => {
    const s = saves[name];
    const item = document.createElement('div');
    item.className = 'saved-item';
    item.innerHTML = `
      <div>
        <div class="saved-item-name">${escHtml(name)}</div>
        <div class="saved-item-meta">${s.gridSize}×${s.gridSize} · ${s.savedAt || ''}</div>
      </div>
      <div class="saved-item-actions">
        <button class="load-btn">Load</button>
        <button class="del">Delete</button>
      </div>`;

    item.querySelector('.load-btn').addEventListener('click', () => {
      loadBingo(name, s);
      hideModal('save-load-modal');
      toast(`Bingo "${name}" loaded!`);
    });

    item.querySelector('.del').addEventListener('click', () => {
      confirm_(`Delete "${name}"?`, 'This action cannot be undone.', () => {
        const sv = getSaves();
        delete sv[name];
        localStorage.setItem('stream-bingo-saves', JSON.stringify(sv));
        renderSavedList();
        toast('Deleted!');
      });
    });

    container.appendChild(item);
  });
}

// ============================================================
//  TÍTULO
// ============================================================
function updateTitleDisplay() {
  const val = document.getElementById('title-input').value.trim();
  const disp = document.getElementById('bingo-title-display');
  if (val) {
    disp.textContent = val;
    disp.style.display = 'block';
  } else {
    disp.style.display = 'none';
  }
}

// ============================================================
//  ALEATORIZAR
// ============================================================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ============================================================
//  MODAIS
// ============================================================
function showModal(id) {
  document.getElementById(id).classList.add('active');
}

function hideModal(id) {
  document.getElementById(id).classList.remove('active');
}

// ============================================================
//  DIÁLOGO DE CONFIRMAÇÃO
// ============================================================
let confirmCallback = null;

function confirm_(title, msg, cb) {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-message').textContent = msg;
  confirmCallback = cb;
  showModal('confirm-modal');
}

// ============================================================
//  TOAST
// ============================================================
let toastTimeout;

function toast(msg, isError = false) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'show' + (isError ? ' error' : '');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { el.className = ''; }, 2500);
}

// ============================================================
//  UTILITÁRIOS
// ============================================================
function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============================================================
//  EVENTOS — Botões do Header
// ============================================================
document.getElementById('btn-edit-mode').addEventListener('click', () => {
  setEditMode(!editMode);
});

document.getElementById('btn-shuffle').addEventListener('click', () => {
  confirm_('Randomize?', 'The content will be kept, only the order will change.', () => {
    const nonEmpty = cells.filter(c => c.text || c.img);
    const empty = cells.filter(c => !c.text && !c.img);
    shuffle(nonEmpty);
    cells = [...nonEmpty, ...empty];
    buildGrid();
    hadBingo = false;
    toast('Bingo randomized!');
  });
});

document.getElementById('btn-clear').addEventListener('click', () => {
  confirm_('Clear selections?', 'All marked cells will be unmarked. The content will be kept.', () => {
    document.querySelectorAll('#bingo-grid .cell.selected').forEach(c => c.classList.remove('selected'));
    hadBingo = false;
    toast('Selections cleared!');
  });
});

document.getElementById('btn-save-load').addEventListener('click', () => {
  document.getElementById('save-name-input').value = document.getElementById('title-input').value || '';
  renderSavedList();
  showModal('save-load-modal');
});

document.getElementById('btn-theme').addEventListener('click', () => {
  renderThemeGrid();
  showModal('theme-modal');
});

// ============================================================
//  EVENTOS — Tamanho da Grade
// ============================================================
document.getElementById('btn-size-inc').addEventListener('click', () => {
  if (gridSize >= 8) return;
  gridSize++;
  initCells(gridSize);
  buildGrid();
  document.getElementById('grid-size-display').textContent = `${gridSize}×${gridSize}`;
});

document.getElementById('btn-size-dec').addEventListener('click', () => {
  if (gridSize <= 2) return;
  confirm_(
    'Decrease grid?',
    `The grid will decrease to ${gridSize - 1}×${gridSize - 1}. Extra cells will be removed.`,
    () => {
      gridSize--;
      initCells(gridSize);
      buildGrid();
      document.getElementById('grid-size-display').textContent = `${gridSize}×${gridSize}`;
    }
  );
});

// ============================================================
//  EVENTOS — Título
// ============================================================
document.getElementById('title-input').addEventListener('input', e => {
  updateTitleDisplay();
  document.getElementById('header-title').textContent = e.target.value || '🎯 Bingo de Stream';
});

// ============================================================
//  EVENTOS — Modal de Edição de Célula
// ============================================================

// Input de arquivo
document.getElementById('img-file-input').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) {
    readImageFile(file, base64 => {
      editingImageData = base64;
      renderImgPreview(base64);
    });
  }
  e.target.value = '';
});

// Drag & drop na zona de upload
const dropZone = document.getElementById('img-drop-zone');
dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    readImageFile(file, base64 => {
      editingImageData = base64;
      renderImgPreview(base64);
    });
  }
});

// Colar imagem com Ctrl+V dentro do modal
document.addEventListener('paste', e => {
  const modal = document.getElementById('cell-edit-modal');
  if (!modal.classList.contains('active')) return;
  const items = e.clipboardData.items;
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      readImageFile(item.getAsFile(), base64 => {
        editingImageData = base64;
        renderImgPreview(base64);
        toast('Image pasted!');
      });
      break;
    }
  }
});

// Salvar célula
document.getElementById('btn-save-cell').addEventListener('click', () => {
  cells[editingCellIndex].text = document.getElementById('cell-edit-text').value.trim();
  cells[editingCellIndex].img  = editingImageData;
  refreshCell(editingCellIndex);
  hideModal('cell-edit-modal');
  toast('Célula salva!');
});

// Cancelar edição
document.getElementById('btn-cancel-edit').addEventListener('click', () => hideModal('cell-edit-modal'));

// Limpar célula
document.getElementById('btn-clear-cell').addEventListener('click', () => {
  cells[editingCellIndex] = { text: '', img: null };
  refreshCell(editingCellIndex);
  document.getElementById('bingo-grid').children[editingCellIndex].classList.remove('selected');
  hideModal('cell-edit-modal');
  toast('Cell cleared!');
});

// ============================================================
//  EVENTOS — Modal Salvar/Carregar
// ============================================================
document.getElementById('btn-do-save').addEventListener('click', () => {
  const name = document.getElementById('save-name-input').value.trim();
  if (!name) { toast('Type a name!', true); return; }
  saveBingo(name);
  renderSavedList();
  toast(`Bingo "${name}" saved!`);
});

document.getElementById('btn-close-save-load').addEventListener('click', () => hideModal('save-load-modal'));

// ============================================================
//  EVENTOS — Modal de Tema
// ============================================================
document.getElementById('btn-close-theme').addEventListener('click', () => hideModal('theme-modal'));

// ============================================================
//  EVENTOS — Modal de Confirmação
// ============================================================
document.getElementById('btn-confirm-yes').addEventListener('click', () => {
  hideModal('confirm-modal');
  if (confirmCallback) { confirmCallback(); confirmCallback = null; }
});

document.getElementById('btn-confirm-no').addEventListener('click', () => {
  hideModal('confirm-modal');
  confirmCallback = null;
});

// ============================================================
//  EVENTOS — Fechar modais clicando fora ou pressionando ESC
// ============================================================
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
  }
});

// ============================================================
//  ARRANQUE
// ============================================================
startup();