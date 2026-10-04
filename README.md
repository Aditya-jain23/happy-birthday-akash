# Birthday Poker — Interactive Birthday Website

A premium, casino-themed birthday microsite built with vanilla HTML/CSS/JS.
Zero dependencies. Fully static. Deploys directly to Vercel.

---

## Running locally

```bash
# Option 1 — VS Code Live Server (recommended)
# Right-click index.html → Open with Live Server

# Option 2 — Python
python3 -m http.server 8080
# then open http://localhost:8080

# Option 3 — npx serve (Node)
npx serve .
# then open http://localhost:3000
```

> **Do not** open `index.html` directly as a `file://` URL — video autoplay and
> some browser security restrictions require a local HTTP server.

---

## Adding / replacing videos

1. Export or download your 16 videos.
2. Name them `video-01.mp4` through `video-16.mp4`.
3. Drop them into `public/videos/`.

The website will automatically pick them up — no code change needed.

If your files have different names, update the `video` field in each card entry
inside `script.js` (see next section).

---

## Changing the friend's name

In `script.js`, at the top of the **CONFIGURATION** section:

```js
const FRIEND_NAME = 'Yash';  // ← change this
```

---

## Changing the birthday message

In `script.js`:

```js
const BIRTHDAY_MESSAGE = '16 cards. 16 memories. One very special person.';

const FINAL_MESSAGE = "Here's to the laughs, the chaos, the memories — and many more to come.";
```

---

## Modifying card / video mapping

Each card is an object in the `CARDS` array in `script.js`:

```js
const CARDS = [
  {
    id:    1,           // internal id; also determines default video name
    rank:  'A',        // rank shown on the card face
    suit:  '♥',        // ♥ ♠ ♦ ♣
    title: 'The Beginning',              // caption shown on card back and modal
    video: 'public/videos/video-01.mp4' // path to video (relative to site root)
  },
  // ... 15 more
];
```

Change `title` for the caption, `video` for the file, `rank`/`suit` for the
playing-card appearance.

---

## Deploying to Vercel

### One-click (drag & drop)

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New → Project**.
3. Drag the entire project folder onto the upload area, **or** push to a GitHub
   repo and import it.
4. Framework preset: **Other** (no build step needed).
5. Click **Deploy**.

### Via Vercel CLI

```bash
npm i -g vercel
vercel
# Follow the prompts; choose "Other" for framework
```

The site is fully static — no environment variables, no build step, no server
required.

---

## Video card mapping (default)

| Card | Rank | Suit | Title              | Video file           |
|------|------|------|--------------------|----------------------|
| 1    | A    | ♥    | The Beginning      | video-01.mp4         |
| 2    | K    | ♠    | That Night         | video-02.mp4         |
| 3    | Q    | ♦    | Plot Twist         | video-03.mp4         |
| 4    | J    | ♣    | The Chaos          | video-04.mp4         |
| 5    | 10   | ♥    | One for the Books  | video-05.mp4         |
| 6    | 9    | ♠    | Best Memories      | video-06.mp4         |
| 7    | 8    | ♦    | The Hangover       | video-07.mp4         |
| 8    | 7    | ♣    | No Context Needed  | video-08.mp4         |
| 9    | 6    | ♥    | Golden Hour        | video-09.mp4         |
| 10   | 5    | ♠    | Late Night Calls   | video-10.mp4         |
| 11   | 4    | ♦    | The Squad          | video-11.mp4         |
| 12   | 3    | ♣    | Unexpected Plans   | video-12.mp4         |
| 13   | 2    | ♥    | Wild Card          | video-13.mp4         |
| 14   | A    | ♠    | Full House         | video-14.mp4         |
| 15   | K    | ♦    | The Royal Flush    | video-15.mp4         |
| 16   | Q    | ♣    | To Many More       | video-16.mp4         |

---

## Project structure

```
/
├── index.html          ← single HTML file; markup only
├── styles.css          ← all styling
├── script.js           ← all logic; CONFIGURATION section at top
├── README.md
└── public/
    └── videos/
        ├── video-01.mp4   ← drop your videos here
        ├── video-02.mp4
        └── ...
```
