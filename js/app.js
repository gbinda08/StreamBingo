/* ============================================================
   BINGO DE STREAM — Lógica principal
   ============================================================ */

// ============================================================
//  IDIOMA / TRADUÇÕES
// ============================================================
const I18N = {
  en: {
    pageTitle: 'Stream Bingo',
    headerTitle: 'Stream Bingo',
    langLabel: 'PT-BR',
    langToggleTitle: 'Switch language',
    editLabel: 'Edit',
    playLabel: 'Play',
    editModeTitle: 'Toggle edit mode',
    shuffleLabel: 'Randomize',
    shuffleTitle: 'Randomize cells',
    clearLabel: 'Clear',
    clearTitle: 'Clear selections',
    saveLabel: 'Save',
    saveLoadTitle: 'Save / Load',
    themeLabel: 'Theme',
    themeTitle: 'Themes',
    labelTitle: 'Title:',
    titlePlaceholder: 'Bingo Name',
    labelGrid: 'Grid:',
    decreaseGridTitle: 'Decrease Grid',
    increaseGridTitle: 'Increase Grid',
    footerPrivacy: 'Privacy',
    footerCredit: 'Created by Binda',
    modalEditTitle: 'Edit',
    labelText: 'Text',
    textPlaceholder: 'Enter text...',
    labelImage: 'Image (paste Ctrl+V, drag or click)',
    dropZoneTitle: 'Drag image here',
    dropZoneSubtitle: 'or click to select a file',
    pasteHint: 'Hint: Copy an image and press Ctrl+V here!',
    btnClearCell: 'Clear',
    btnCancel: 'Cancel',
    btnSave: 'Save',
    modalSaveLoadTitle: 'Save / Load Bingo',
    saveNamePlaceholder: 'Bingo Name (e.g., Nintendo Direct June)',
    labelSavedBingos: 'Saved Bingos',
    btnClose: 'Close',
    modalThemeTitle: 'Choose Theme',
    confirmTitle: 'Confirm',
    btnConfirm: 'Confirm',
    winTitle: 'BINGO!',
    winSubtitle: 'You completed a line!',
    removeImageTitle: 'Remove Image',
    loadBtn: 'Load',
    deleteBtn: 'Delete',
    emptyState: 'No bingo saved yet.',
    toastImageAdded: 'Image added!',
    toastImagePasted: 'Image pasted!',
    toastCellSaved: 'Cell saved!',
    toastCellCleared: 'Cell cleared!',
    toastTypeAName: 'Type a name!',
    toastBingoSaved: name => `Bingo "${name}" saved!`,
    toastBingoLoaded: name => `Bingo "${name}" loaded!`,
    toastDeleted: 'Deleted!',
    toastNoSpace: 'No space! Try deleting old bingos or using fewer images.',
    toastSelectionsCleared: 'Selections cleared!',
    toastBingoRandomized: 'Bingo randomized!',
    toastThemeApplied: name => `Theme "${name}" applied!`,
    confirmRandomizeTitle: 'Randomize?',
    confirmRandomizeMsg: 'The content will be kept, only the order will change.',
    confirmClearTitle: 'Clear selections?',
    confirmClearMsg: 'All marked cells will be unmarked. The content will be kept.',
    confirmDecreaseTitle: 'Decrease grid?',
    confirmDecreaseMsg: size => `The grid will decrease to ${size}×${size}. Extra cells will be removed.`,
    confirmDeleteTitle: name => `Delete "${name}"?`,
    confirmDeleteMsg: 'This action cannot be undone.',
    themeNames: {
      'dark-purple': 'Dark Purple',
      'green-gamer': 'Green',
      'nintendo': 'Red',
      'playstation': 'Blue',
      'light': 'Light Minimalist',
      'dark-minimal': 'Dark Minimalist',
      'neon-purple': 'Neon Purple',
    },
  },
  pt: {
    pageTitle: 'Bingo de Stream',
    headerTitle: 'Bingo de Stream',
    langLabel: 'EN',
    langToggleTitle: 'Mudar idioma',
    editLabel: 'Editar',
    playLabel: 'Jogar',
    editModeTitle: 'Alternar modo edição',
    shuffleLabel: 'Aleatorizar',
    shuffleTitle: 'Aleatorizar células',
    clearLabel: 'Limpar',
    clearTitle: 'Limpar seleções',
    saveLabel: 'Salvar',
    saveLoadTitle: 'Salvar / Carregar',
    themeLabel: 'Tema',
    themeTitle: 'Temas',
    labelTitle: 'Título:',
    titlePlaceholder: 'Nome do Bingo',
    labelGrid: 'Grade:',
    decreaseGridTitle: 'Diminuir grade',
    increaseGridTitle: 'Aumentar grade',
    footerPrivacy: 'Privacidade',
    footerCredit: 'Criado por Binda',
    modalEditTitle: 'Editar Célula',
    labelText: 'Texto',
    textPlaceholder: 'Ex: Nintendo anuncia novo Mario...',
    labelImage: 'Imagem (cole Ctrl+V, arraste ou clique)',
    dropZoneTitle: 'Soltar imagem aqui',
    dropZoneSubtitle: 'ou clique para selecionar arquivo',
    pasteHint: 'Dica: copie uma imagem e pressione Ctrl+V aqui!',
    btnClearCell: 'Limpar célula',
    btnCancel: 'Cancelar',
    btnSave: 'Salvar',
    modalSaveLoadTitle: 'Salvar / Carregar Bingo',
    saveNamePlaceholder: 'Nome do bingo (ex: Nintendo Direct Junho)',
    labelSavedBingos: 'Bingos Salvos',
    btnClose: 'Fechar',
    modalThemeTitle: 'Escolher Tema',
    confirmTitle: 'Confirmar',
    btnConfirm: 'Confirmar',
    winTitle: 'BINGO!',
    winSubtitle: 'Você completou uma linha!',
    removeImageTitle: 'Remover imagem',
    loadBtn: 'Carregar',
    deleteBtn: 'Deletar',
    emptyState: 'Nenhum bingo salvo ainda.',
    toastImageAdded: 'Imagem adicionada à célula!',
    toastImagePasted: 'Imagem colada!',
    toastCellSaved: 'Célula salva!',
    toastCellCleared: 'Célula limpa!',
    toastTypeAName: 'Digite um nome!',
    toastBingoSaved: name => `Bingo "${name}" salvo!`,
    toastBingoLoaded: name => `Bingo "${name}" carregado!`,
    toastDeleted: 'Deletado!',
    toastNoSpace: 'Sem espaço! Tente deletar bingos antigos ou usar menos imagens.',
    toastSelectionsCleared: 'Seleções limpas!',
    toastBingoRandomized: 'Bingo aleatorizado!',
    toastThemeApplied: name => `Tema "${name}" aplicado!`,
    confirmRandomizeTitle: 'Aleatorizar ordem das células?',
    confirmRandomizeMsg: 'O conteúdo será mantido, apenas a ordem vai mudar.',
    confirmClearTitle: 'Limpar seleções?',
    confirmClearMsg: 'Todas as células marcadas serão desmarcadas. O conteúdo será mantido.',
    confirmDecreaseTitle: 'Diminuir grade?',
    confirmDecreaseMsg: size => `A grade vai diminuir para ${size}×${size}. Células extras serão removidas.`,
    confirmDeleteTitle: name => `Deletar "${name}"?`,
    confirmDeleteMsg: 'Esta ação não pode ser desfeita.',
    themeNames: {
      'dark-purple': 'Noturno Roxo',
      'green-gamer': 'Verde Gamer',
      'nintendo': 'Nintendo Red',
      'playstation': 'PlayStation Blue',
      'light': 'Claro Minimalista',
      'dark-minimal': 'Escuro Minimalista',
      'neon-purple': 'Roxo Neon',
    },
  },
};

let currentLang = 'en';
function i18n(key) { return I18N[currentLang][key]; }

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

  const savedLang = localStorage.getItem('stream-bingo-lang');
  applyLang(savedLang === 'pt' ? 'pt' : 'en');

  initCells(gridSize);
  buildGrid();
  updateTitleDisplay();
}

// ============================================================
//  APLICAR IDIOMA
// ============================================================
function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('page-title').textContent = dict.pageTitle;
  document.getElementById('header-title').textContent = document.getElementById('title-input').value || dict.headerTitle;
  document.getElementById('btn-lang-label').textContent = dict.langLabel;
  document.getElementById('btn-lang-toggle').title = dict.langToggleTitle;

  document.getElementById('btn-edit-label').textContent = editMode ? dict.playLabel : dict.editLabel;
  document.getElementById('btn-edit-mode').title = dict.editModeTitle;
  document.getElementById('btn-shuffle-label').textContent = dict.shuffleLabel;
  document.getElementById('btn-shuffle').title = dict.shuffleTitle;
  document.getElementById('btn-clear-label').textContent = dict.clearLabel;
  document.getElementById('btn-clear').title = dict.clearTitle;
  document.getElementById('btn-save-label').textContent = dict.saveLabel;
  document.getElementById('btn-save-load').title = dict.saveLoadTitle;
  document.getElementById('btn-theme-label').textContent = dict.themeLabel;
  document.getElementById('btn-theme').title = dict.themeTitle;

  document.getElementById('label-title').textContent = dict.labelTitle;
  document.getElementById('title-input').placeholder = dict.titlePlaceholder;
  document.getElementById('label-grid').textContent = dict.labelGrid;
  document.getElementById('btn-size-dec').title = dict.decreaseGridTitle;
  document.getElementById('btn-size-inc').title = dict.increaseGridTitle;

  document.getElementById('footer-privacy-link').textContent = dict.footerPrivacy;
  document.getElementById('footer-credit').textContent = dict.footerCredit;

  document.getElementById('modal-edit-title').textContent = dict.modalEditTitle;
  document.getElementById('label-text').textContent = dict.labelText;
  document.getElementById('cell-edit-text').placeholder = dict.textPlaceholder;
  document.getElementById('label-image').textContent = dict.labelImage;
  document.getElementById('drop-zone-title').textContent = dict.dropZoneTitle;
  document.getElementById('drop-zone-subtitle').textContent = dict.dropZoneSubtitle;
  document.getElementById('paste-hint').textContent = dict.pasteHint;
  document.getElementById('btn-clear-cell').textContent = dict.btnClearCell;
  document.getElementById('btn-cancel-edit').textContent = dict.btnCancel;
  document.getElementById('btn-save-cell').textContent = dict.btnSave;

  document.getElementById('modal-saveload-title').textContent = dict.modalSaveLoadTitle;
  document.getElementById('save-name-input').placeholder = dict.saveNamePlaceholder;
  document.getElementById('btn-do-save').textContent = dict.btnSave;
  document.getElementById('label-saved-bingos').textContent = dict.labelSavedBingos;
  document.getElementById('btn-close-save-load').textContent = dict.btnClose;

  document.getElementById('modal-theme-title').textContent = dict.modalThemeTitle;
  document.getElementById('btn-close-theme').textContent = dict.btnClose;

  document.getElementById('btn-confirm-no').textContent = dict.btnCancel;
  document.getElementById('btn-confirm-yes').textContent = dict.btnConfirm;

  document.getElementById('win-title').textContent = dict.winTitle;
  document.getElementById('win-subtitle').textContent = dict.winSubtitle;

  // Re-render listas dinâmicas que dependem do idioma
  renderThemeGrid();
  renderSavedList();

  localStorage.setItem('stream-bingo-lang', lang);
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
        toast(i18n('toastImageAdded'));
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

  if (c.text) {
    const textDiv = document.createElement('div');
    textDiv.className = 'cell-text';
    textDiv.textContent = c.text;
    div.appendChild(textDiv);
  }
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
    label.textContent = i18n('playLabel');
    btn.style.borderColor = 'var(--accent2)';
    btn.style.color = 'var(--accent2)';
  } else {
    grid.querySelectorAll('.cell').forEach(c => c.classList.remove('edit-mode'));
    label.textContent = i18n('editLabel');
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
        <button class="remove-img" id="btn-remove-img" title="${i18n('removeImageTitle')}">×</button>
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
    const themeName = I18N[currentLang].themeNames[t.id] || t.name;
    const el = document.createElement('div');
    el.className = 'theme-item' + (t.id === currentThemeId ? ' active' : '');
    el.style.background = t.vars['--surface'];
    el.style.borderColor = t.id === currentThemeId ? 'var(--accent2)' : t.vars['--border-color'];
    el.innerHTML = `
      <div class="theme-swatch">
        ${t.swatches.map(s => `<span style="background:${s}"></span>`).join('')}
      </div>
      <div class="theme-name" style="color:${t.vars['--text']}">${themeName}</div>`;
    el.addEventListener('click', () => {
      applyTheme(t.id);
      renderThemeGrid();
      toast(i18n('toastThemeApplied')(themeName));
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
    savedAt: new Date().toLocaleString(currentLang === 'pt' ? 'pt-BR' : 'en-US'),
  };
  try {
    localStorage.setItem('stream-bingo-saves', JSON.stringify(saves));
    return true;
  } catch (e) {
    // QuotaExceededError — storage full even after compression
    toast(i18n('toastNoSpace'), true);
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
    container.innerHTML = `<div class="empty-state">${i18n('emptyState')}</div>`;
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
        <button class="load-btn">${i18n('loadBtn')}</button>
        <button class="del">${i18n('deleteBtn')}</button>
      </div>`;

    item.querySelector('.load-btn').addEventListener('click', () => {
      loadBingo(name, s);
      hideModal('save-load-modal');
      toast(i18n('toastBingoLoaded')(name));
    });

    item.querySelector('.del').addEventListener('click', () => {
      confirm_(i18n('confirmDeleteTitle')(name), i18n('confirmDeleteMsg'), () => {
        const sv = getSaves();
        delete sv[name];
        localStorage.setItem('stream-bingo-saves', JSON.stringify(sv));
        renderSavedList();
        toast(i18n('toastDeleted'));
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
document.getElementById('btn-lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'pt' : 'en');
});

document.getElementById('btn-edit-mode').addEventListener('click', () => {
  setEditMode(!editMode);
});

document.getElementById('btn-shuffle').addEventListener('click', () => {
  confirm_(i18n('confirmRandomizeTitle'), i18n('confirmRandomizeMsg'), () => {
    const nonEmpty = cells.filter(c => c.text || c.img);
    const empty = cells.filter(c => !c.text && !c.img);
    shuffle(nonEmpty);
    cells = [...nonEmpty, ...empty];
    buildGrid();
    hadBingo = false;
    toast(i18n('toastBingoRandomized'));
  });
});

document.getElementById('btn-clear').addEventListener('click', () => {
  confirm_(i18n('confirmClearTitle'), i18n('confirmClearMsg'), () => {
    document.querySelectorAll('#bingo-grid .cell.selected').forEach(c => c.classList.remove('selected'));
    hadBingo = false;
    toast(i18n('toastSelectionsCleared'));
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
    i18n('confirmDecreaseTitle'),
    i18n('confirmDecreaseMsg')(gridSize - 1),
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
  document.getElementById('header-title').textContent = e.target.value || i18n('headerTitle');
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
        toast(i18n('toastImagePasted'));
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
  toast(i18n('toastCellSaved'));
});

// Cancelar edição
document.getElementById('btn-cancel-edit').addEventListener('click', () => hideModal('cell-edit-modal'));

// Limpar célula
document.getElementById('btn-clear-cell').addEventListener('click', () => {
  cells[editingCellIndex] = { text: '', img: null };
  refreshCell(editingCellIndex);
  document.getElementById('bingo-grid').children[editingCellIndex].classList.remove('selected');
  hideModal('cell-edit-modal');
  toast(i18n('toastCellCleared'));
});

// ============================================================
//  EVENTOS — Modal Salvar/Carregar
// ============================================================
document.getElementById('btn-do-save').addEventListener('click', () => {
  const name = document.getElementById('save-name-input').value.trim();
  if (!name) { toast(i18n('toastTypeAName'), true); return; }
  const ok = saveBingo(name);
  if (ok) {
    renderSavedList();
    toast(i18n('toastBingoSaved')(name));
  }
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