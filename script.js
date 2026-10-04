/* ══════════════════════════════════════════════════════════════
   ██████╗ ██╗██████╗ ████████╗██╗  ██╗██████╗  █████╗ ██╗   ██╗
   ██╔══██╗██║██╔══██╗╚══██╔══╝██║  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
   ██████╔╝██║██████╔╝   ██║   ███████║██║  ██║███████║ ╚████╔╝
   ██╔══██╗██║██╔══██╗   ██║   ██╔══██║██║  ██║██╔══██║  ╚██╔╝
   ██████╔╝██║██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║   ██║
   ╚═════╝ ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝

   ╔══════════════════════════════════════════════════════════╗
   ║  CONFIGURATION — edit this section freely               ║
   ╚══════════════════════════════════════════════════════════╝
══════════════════════════════════════════════════════════════ */

/* ─── Friend's name (appears on landing + final reveal) ─── */
const FRIEND_NAME = 'Akash';

/* ─── Birthday message shown on landing tagline ──────────── */
const BIRTHDAY_MESSAGE = '16 cards. 16 memories. One very special person.';

/* ─── Final-reveal message ────────────────────────────────── */
const FINAL_MESSAGE = "Here's to the laughs, the chaos, the memories — and many more to come.";

/* ─── Card data ───────────────────────────────────────────── */
/* Each entry:
     id      — 1..16, determines video-file name
     rank    — display rank on card face
     suit    — ♥ ♠ ♦ ♣
     title   — short poetic caption (shown on card back + modal)
     video   — path to video file (relative to site root)
                 → replace these once you drop videos into public/videos/
*/
const CARDS = [
  { id:  1, rank: 'A',  suit: '♥', title: 'The Beginning',      video: 'https://drive.google.com/file/d/145jv9CDn012zd_rk0ssET7G4ALSi_Nyv/preview' },
  { id:  2, rank: 'K',  suit: '♠', title: 'That Night',         video: 'https://drive.google.com/file/d/1xb78qD3guQQsAMPU-tHLNrZp6_me3DA_/preview' },
  { id:  3, rank: 'Q',  suit: '♦', title: 'Plot Twist',         video: 'https://drive.google.com/file/d/1QdALJ3ttPHVr9SCnF6fJNWvmYILCMyql/preview' },
  { id:  4, rank: 'J',  suit: '♣', title: 'The Chaos',          video: 'https://drive.google.com/file/d/1uJzQZiN_QrE63IfO6kdeim-Isg1qdE-k/preview' },
  { id:  5, rank: '10', suit: '♥', title: 'One for the Books',  video: 'https://drive.google.com/file/d/1lfpcWNhUMjCxt8xZvSU77cbLvBefHEYg/preview' },
  { id:  6, rank: '9',  suit: '♠', title: 'Best Memories',      video: 'https://drive.google.com/file/d/1AxhGuWMJst5oySLc233VeBih2XvAjQ3x/preview' },
  { id:  7, rank: '8',  suit: '♦', title: 'The Hangover',       video: 'https://drive.google.com/file/d/1eIaUJBjAbIT5R3EU4h1qFp4rmsPABSbF/preview' },
  { id:  8, rank: '7',  suit: '♣', title: 'No Context Needed',  video: 'https://drive.google.com/file/d/1Pv3SZvYml_XfYfHQX93y_XBV0KhuC-B3/preview' },
  { id:  9, rank: '6',  suit: '♥', title: 'Golden Hour',        video: 'https://drive.google.com/file/d/13tahlePlMuLGb73a58woZlsUH6bnmePq/preview' },
  { id: 10, rank: '5',  suit: '♠', title: 'Late Night Calls',   video: 'https://drive.google.com/file/d/1CWxgawUFNKYJANWmKujshD8eAC7aU_QT/preview' },
  { id: 11, rank: '4',  suit: '♦', title: 'The Squad',          video: 'https://drive.google.com/file/d/1lKGosqjMeb3EN1sdkaOc8enbiqj38B7M/preview' },
  { id: 12, rank: '3',  suit: '♣', title: 'Unexpected Plans',   video: 'https://drive.google.com/file/d/1A8gY-RxBzvXmKiFHEAaNxvFGlvcLHQvb/preview' },
  { id: 13, rank: '2',  suit: '♥', title: 'Wild Card',          video: 'https://drive.google.com/file/d/1k0uwD_QbWJs-i42qScUjUg2dNUhUXFVz/preview' },
  { id: 14, rank: 'A',  suit: '♠', title: 'Full House',         video: 'https://drive.google.com/file/d/1ICql9wo32Ugn2FiRh67E-HDeGA8kIdQr/preview' },
  { id: 15, rank: 'K',  suit: '♦', title: 'The Royal Flush',    video: 'https://drive.google.com/file/d/1wATZCFE0uKmTAHnqKtfhgyOSVBBDekil/preview' },
  { id: 16, rank: 'Q',  suit: '♣', title: 'To Many More',       video: 'https://drive.google.com/file/d/1_782D4h4Yf7kzzsutX-dVrKK4JjjS3i9/preview' },
];

/* ════════════════════════════════════════════════════════════
   APPLICATION STATE
════════════════════════════════════════════════════════════ */
const state = {
  soundOn: true,
  openedCards: new Set(),   // ids
  watchedCards: new Set(),  // ids
  activeCardId: null,
  finalShown: false,
};

/* ════════════════════════════════════════════════════════════
   DOM REFS
════════════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const landing      = $('landing');
const dealBtn      = $('dealBtn');
const table        = $('table');
const cardsGrid    = $('cardsGrid');
const openedCount  = $('openedCount');
const soundToggle  = $('soundToggle');
const soundIcon    = $('soundIcon');
const videoModal   = $('videoModal');
const modalBackdrop= $('modalBackdrop');
const modalClose   = $('modalClose');
const modalTitle   = $('modalTitle');
const modalCardBadge = $('modalCardBadge');
const modalVideo   = $('modalVideo');
const videoLoading = $('videoLoading');
const finalReveal  = $('finalReveal');
const finalBtn     = $('finalBtn');

/* ════════════════════════════════════════════════════════════
   APPLY CONFIGURATION TO DOM
════════════════════════════════════════════════════════════ */
document.querySelectorAll('#friendName, #finalFriendName').forEach(el => {
  el.textContent = FRIEND_NAME;
});
document.querySelector('.landing-tagline').textContent = BIRTHDAY_MESSAGE;
document.querySelector('.final-message').textContent = FINAL_MESSAGE;

/* ════════════════════════════════════════════════════════════
   AUDIO
════════════════════════════════════════════════════════════ */
/* Card flip sound — synthesised with Web Audio API so no audio file needed */
let audioCtx = null;
function ensureAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playCardFlipSound() {
  if (!state.soundOn) return;
  try {
    const ctx = ensureAudioCtx();
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 3) * 0.4;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    src.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  } catch (_) { /* silently fail if audio unavailable */ }
}

soundToggle.addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  soundIcon.textContent = state.soundOn ? '🔈' : '🔇';
});

/* back button */
const backBtn = $('backBtn');
backBtn.addEventListener('click', () => {
  closeVideo();
  videoModal.classList.add('hidden');
  document.body.style.overflow = '';
  table.classList.add('hidden');
  landing.classList.remove('fade-out', 'gone');
  /* reset state */
  state.openedCards.clear();
  state.watchedCards.clear();
  state.activeCardId = null;
  state.finalShown = false;
  updateCounter();
});

/* ════════════════════════════════════════════════════════════
   PARTICLES
════════════════════════════════════════════════════════════ */
function spawnParticles(container, count, colours) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 4 + Math.random() * 8;
    const colour = colours[Math.floor(Math.random() * colours.length)];
    const delay = Math.random() * 3;
    const duration = 3 + Math.random() * 4;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${-10 - Math.random() * 20}%;
      width: ${size}px;
      height: ${size}px;
      background: ${colour};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(p);
  }
}

/* subtle landing particles */
spawnParticles($('landingParticles'), 18, [
  'rgba(201,168,76,0.4)',
  'rgba(192,57,43,0.35)',
  'rgba(245,240,232,0.2)',
]);

/* ════════════════════════════════════════════════════════════
   LANDING → TABLE TRANSITION
════════════════════════════════════════════════════════════ */
dealBtn.addEventListener('click', () => {
  landing.classList.add('fade-out');
  setTimeout(() => {
    landing.classList.add('gone');
    table.classList.remove('hidden');
    dealCards();
  }, 750);
});

/* ════════════════════════════════════════════════════════════
   BUILD + DEAL CARDS
════════════════════════════════════════════════════════════ */
const isRed = suit => suit === '♥' || suit === '♦';

function buildCard(card) {
  const slot = document.createElement('div');
  slot.className = 'card-slot';
  slot.setAttribute('role', 'listitem');
  slot.setAttribute('tabindex', '0');
  slot.setAttribute('aria-label', `Card ${card.id}: ${card.title}. Click to open.`);
  slot.dataset.id = card.id;

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  /* ── FRONT (mystery face-down card — shows ? until flipped) ── */
  const front = document.createElement('div');
  front.className = 'card-front';
  front.innerHTML = `
    <div class="card-mystery">
      <div class="card-mystery-q">?</div>
      <div class="card-mystery-label">Click to reveal</div>
    </div>
  `;

  /* ── BACK (just a play button) ── */
  const back = document.createElement('div');
  back.className = 'card-back';
  back.innerHTML = `<div class="card-back-play-only">▶</div>`;

  inner.appendChild(front);
  inner.appendChild(back);
  slot.appendChild(inner);

  /* interactions */
  slot.addEventListener('click', () => handleCardClick(card, slot));
  slot.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick(card, slot); }
  });

  return slot;
}

function dealCards() {
  cardsGrid.innerHTML = '';
  const slots = CARDS.map(card => buildCard(card));
  slots.forEach(slot => cardsGrid.appendChild(slot));

  /* staggered deal animation */
  slots.forEach((slot, i) => {
    setTimeout(() => slot.classList.add('dealt'), 60 * i + 100);
  });
}

/* ════════════════════════════════════════════════════════════
   CARD CLICK
════════════════════════════════════════════════════════════ */
function handleCardClick(card, slot) {
  playCardFlipSound();

  /* mark opened */
  if (!state.openedCards.has(card.id)) {
    state.openedCards.add(card.id);
    updateCounter();
  }

  /* flip the card visually */
  slot.classList.add('flipped');

  /* short delay so user sees the flip before modal opens */
  setTimeout(() => openModal(card), 450);
}

function updateCounter() {
  openedCount.textContent = `${state.openedCards.size} / 16 memories opened`;
}

/* ════════════════════════════════════════════════════════════
   VIDEO MODAL
════════════════════════════════════════════════════════════ */
function isDriveUrl(url) {
  return url.includes('drive.google.com');
}

function openModal(card) {
  closeVideo();

  state.activeCardId = card.id;
  modalCardBadge.textContent = `${card.rank}${card.suit}`;
  modalTitle.textContent = card.title;
  videoLoading.classList.remove('hidden');
  videoModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const wrap = modalVideo.parentElement;

  if (isDriveUrl(card.video)) {
    modalVideo.style.display = 'none';
    let iframe = wrap.querySelector('iframe.drive-embed');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.className = 'drive-embed';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      wrap.appendChild(iframe);
    }
    iframe.src = card.video;
    iframe.onload = () => videoLoading.classList.add('hidden');
  } else {
    modalVideo.style.display = 'block';
    const iframe = wrap.querySelector('iframe.drive-embed');
    if (iframe) iframe.src = '';
    modalVideo.src = card.video;
    modalVideo.muted = true;
    modalVideo.preload = 'auto';
    modalVideo.load();
    modalVideo.addEventListener('canplay', onCanPlay, { once: true });
    modalVideo.addEventListener('error', onVideoError, { once: true });
  }
}

function onCanPlay() {
  videoLoading.classList.add('hidden');
  modalVideo.play().catch(() => {});
}

function onVideoError() {
  videoLoading.innerHTML = `
    <div class="loading-spinner" style="border-top-color:#c0392b"></div>
    <p style="color:#e74c3c">Couldn't load this video.<br>
    <span style="font-size:0.8em;opacity:0.7">Make sure the file is in public/videos/</span></p>
  `;
}

function closeVideo() {
  if (!modalVideo.paused) modalVideo.pause();
  modalVideo.src = '';
  modalVideo.style.display = 'block';
  modalVideo.removeEventListener('canplay', onCanPlay);
  modalVideo.removeEventListener('error', onVideoError);
  const iframe = document.querySelector('iframe.drive-embed');
  if (iframe) iframe.src = '';
  videoLoading.classList.remove('hidden');
  videoLoading.innerHTML = `
    <div class="loading-spinner"></div>
    <p>Dealing your memory…</p>
  `;
}

function closeModal() {
  closeVideo();
  videoModal.classList.add('hidden');
  document.body.style.overflow = '';

  /* mark as watched */
  if (state.activeCardId !== null) {
    state.watchedCards.add(state.activeCardId);
    const slot = cardsGrid.querySelector(`[data-id="${state.activeCardId}"]`);
    if (slot) slot.classList.add('watched');
    state.activeCardId = null;
  }

  /* check if all 16 opened */
  if (state.openedCards.size === 16 && !state.finalShown) {
    setTimeout(showFinalReveal, 600);
  }
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) closeModal();
  if (e.key === 'Escape' && !finalReveal.classList.contains('hidden')) closeFinalReveal();
});

/* ════════════════════════════════════════════════════════════
   FINAL REVEAL
════════════════════════════════════════════════════════════ */
function showFinalReveal() {
  state.finalShown = true;

  /* glow all cards */
  document.querySelectorAll('.card-slot').forEach(slot => {
    slot.style.filter = 'drop-shadow(0 0 10px rgba(201,168,76,0.7))';
    setTimeout(() => slot.style.filter = '', 2500);
  });

  spawnParticles($('finalParticles'), 60, [
    'rgba(201,168,76,0.85)',
    'rgba(232,201,106,0.7)',
    'rgba(192,57,43,0.6)',
    'rgba(245,240,232,0.5)',
    'rgba(125,101,48,0.7)',
  ]);

  finalReveal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeFinalReveal() {
  finalReveal.classList.add('hidden');
  document.body.style.overflow = '';
}

finalBtn.addEventListener('click', () => {
  /* reset everything */
  state.openedCards.clear();
  state.watchedCards.clear();
  state.activeCardId = null;
  state.finalShown = false;

  closeFinalReveal();
  updateCounter();
  dealCards();
});
