import React, { useState, useEffect, useRef } from 'react';
import './LuxuryHeroSlide.css';
import AddressFields from './Address';

const WORDS = [
  { text: 'Sell Your Home', cls: 'lhw-small' },
  { text: 'With',           cls: 'lhw-small' },
  { text: 'Clarity',        cls: 'lhw-large lhw-clarity' },
  { text: 'and',            cls: 'lhw-small' },
  { text: 'Confidence',     cls: 'lhw-large lhw-confidence' },
];

const CHAR_MS  = 72;
const PAUSE_MS = 380;

// ── Hexagon grid (computed once at module load) ───────────────
const HEX_R  = 20;
const HEX_B  = HEX_R * Math.sqrt(3) / 2;  // short radius ≈ 17.32
const H_STEP = HEX_R * Math.sqrt(3);       // col spacing ≈ 34.64
const V_STEP = HEX_R * 1.5;               // row spacing = 30
const SVG_SZ = 380;

const hexD = (cx, cy) =>
  `M${cx + HEX_R},${cy} ` +
  `L${cx + HEX_R / 2},${cy + HEX_B} ` +
  `L${cx - HEX_R / 2},${cy + HEX_B} ` +
  `L${cx - HEX_R},${cy} ` +
  `L${cx - HEX_R / 2},${cy - HEX_B} ` +
  `L${cx + HEX_R / 2},${cy - HEX_B}Z`;

// Hand-picked gold hex positions (row, col) for natural scatter
const GOLD_SET = new Set([
  '0,1','1,0','2,2','0,4','3,1','1,3','4,0','5,2','2,5','3,4','6,1','4,3',
]);

const HEX_CELLS = (() => {
  const cells = [];
  for (let row = 0; row <= 11; row++) {
    for (let col = 0; col <= 11; col++) {
      const cx = col * H_STEP + (row % 2 === 1 ? H_STEP / 2 : 0) + HEX_B;
      const cy = SVG_SZ - row * V_STEP - HEX_B;
      if (cy + HEX_B < 0 || cx - HEX_R > SVG_SZ) continue;
      const isGold = GOLD_SET.has(`${row},${col}`);
      cells.push({ d: hexD(cx, cy), isGold });
    }
  }
  return cells;
})();

const TEAL_CELLS = HEX_CELLS.filter(h => !h.isGold);
const GOLD_CELLS = HEX_CELLS.filter(h =>  h.isGold);

// ─────────────────────────────────────────────────────────────

export default function LuxuryHeroSlide({ isActive, image, searchAddress, setSearchAddress, onSearch }) {
  const [done,       setDone]       = useState([]);
  const [wIdx,       setWIdx]       = useState(0);
  const [cIdx,       setCIdx]       = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [cursor,     setCursor]     = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    if (isActive) {
      setDone([]);
      setWIdx(0);
      setCIdx(0);
      setTypingDone(false);
    }
    return () => clearTimeout(timer.current);
  }, [isActive]);

  useEffect(() => {
    if (!isActive || typingDone) return;
    const word = WORDS[wIdx];
    if (!word) { setTypingDone(true); return; }

    if (cIdx < word.text.length) {
      timer.current = setTimeout(() => setCIdx(c => c + 1), CHAR_MS);
    } else {
      timer.current = setTimeout(() => {
        setDone(d => [...d, word]);
        setWIdx(i => i + 1);
        setCIdx(0);
      }, PAUSE_MS);
    }
    return () => clearTimeout(timer.current);
  }, [isActive, wIdx, cIdx, typingDone]);

  useEffect(() => {
    const iv = setInterval(() => setCursor(v => !v), 530);
    return () => clearInterval(iv);
  }, []);

  const currentWord    = WORDS[wIdx];
  const currentPartial = currentWord ? currentWord.text.slice(0, cIdx) : '';

  return (
    <div className="lh-slide">
      {/* Glossy corner glow effects */}
      <div className="lh-glow lh-glow-tl" />
      <div className="lh-glow lh-glow-tr" />
      <div className="lh-glow lh-glow-bl" />
      <div className="lh-glow lh-glow-br" />
      {/* Ambient orbs */}
      <div className="lh-orb lh-orb-1" />
      <div className="lh-orb lh-orb-2" />

      {/* Hexagon texture — bottom-left corner */}
      <svg
        className="lh-hex-texture"
        viewBox={`0 0 ${SVG_SZ} ${SVG_SZ}`}
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
        aria-hidden="true"
      >
        <defs>
          {/* Radial fade: solid at bottom-left corner, transparent outward */}
          <radialGradient id="lhHexFade" cx="0%" cy="100%" r="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="white" stopOpacity="1"   />
            <stop offset="42%"  stopColor="white" stopOpacity="0.70" />
            <stop offset="68%"  stopColor="white" stopOpacity="0.18" />
            <stop offset="86%"  stopColor="white" stopOpacity="0"    />
          </radialGradient>

          <mask id="lhHexMask">
            <rect width={SVG_SZ} height={SVG_SZ} fill="url(#lhHexFade)" />
          </mask>

          {/* Gold glow filter */}
          <filter id="lhGoldGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Teal hexagons */}
        <g mask="url(#lhHexMask)" stroke="#0F4C4C" strokeWidth="0.9" fill="none" strokeOpacity="0.38">
          {TEAL_CELLS.map((h, i) => <path key={i} d={h.d} />)}
        </g>

        {/* Gold glowing hexagons */}
        <g mask="url(#lhHexMask)" stroke="#F1C40F" strokeWidth="1.4" fill="none" strokeOpacity="0.82" filter="url(#lhGoldGlow)">
          {GOLD_CELLS.map((h, i) => <path key={i} d={h.d} />)}
        </g>
      </svg>

      <div className="lh-inner">
        {/* ─── LEFT PANEL ─── */}
        <div className="lh-left">
          {/* ── Hero block: logo + animated headline (top on mobile) ── */}
          <div className="lh-hero-block">
          <img src="/guidedpathlogo.png" alt="GuidedPath Homes" className="lh-logo" />

          <div className="lh-headline" aria-label="Sell Your Home With Clarity and Confidence">
            {/* Row 1: "Sell Your Home" + "With" — inline on desktop, stacked on mobile */}
            {(done.length >= 1 || wIdx === 0) && (
              <div className="lh-inline-row">
                <span className={`lhw ${WORDS[0].cls}`}>
                  {done.length >= 1 ? WORDS[0].text : (wIdx === 0 ? currentPartial : '')}
                  {!typingDone && wIdx === 0 && <span className={`lh-cur ${cursor ? 'lh-cur--on' : ''}`}>|</span>}
                </span>
                {(done.length >= 2 || wIdx === 1) && (
                  <span className={`lhw ${WORDS[1].cls}`}>
                    {done.length >= 2 ? WORDS[1].text : currentPartial}
                    {!typingDone && wIdx === 1 && <span className={`lh-cur ${cursor ? 'lh-cur--on' : ''}`}>|</span>}
                  </span>
                )}
              </div>
            )}

            {/* Row 2: "Clarity" + "and" — inline on desktop, stacked on mobile */}
            {(done.length >= 3 || wIdx === 2 || wIdx === 3) && (
              <div className="lh-inline-row">
                <span className={`lhw ${WORDS[2].cls}`}>
                  {done.length >= 3 ? WORDS[2].text : (wIdx === 2 ? currentPartial : '')}
                  {!typingDone && wIdx === 2 && <span className={`lh-cur ${cursor ? 'lh-cur--on' : ''}`}>|</span>}
                </span>
                {(done.length >= 4 || wIdx === 3) && (
                  <span className={`lhw ${WORDS[3].cls}`}>
                    {done.length >= 4 ? WORDS[3].text : currentPartial}
                    {!typingDone && wIdx === 3 && <span className={`lh-cur ${cursor ? 'lh-cur--on' : ''}`}>|</span>}
                  </span>
                )}
              </div>
            )}

            {/* Row 3: "Confidence" */}
            {(done.length >= 5 || wIdx === 4) && (
              <span className={`lhw ${WORDS[4].cls}`}>
                {done.length >= 5 ? WORDS[4].text : currentPartial}
                {typingDone && <span className={`lh-cur lh-cur--end ${cursor ? 'lh-cur--on' : ''}`}>|</span>}
                {!typingDone && wIdx === 4 && <span className={`lh-cur ${cursor ? 'lh-cur--on' : ''}`}>|</span>}
              </span>
            )}
          </div>
          </div>{/* end lh-hero-block */}

          {/* ── Bottom block: subtitle + form (bottom on mobile) ── */}
          <div className="lh-bottom-block">
          <p className="lh-sub">
            Fair, data-backed offers and flexible solutions&nbsp;—&nbsp;designed around your situation.
          </p>

          <div className="lh-form">
            <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
              <AddressFields onAddressChange={setSearchAddress} />
              <span className="lh-pin">📍</span>
              <div style={{ marginTop: 12 }}>
                <button
                  className="lh-btn"
                  onClick={onSearch}
                  disabled={!searchAddress.trim()}
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
          </div>{/* end lh-bottom-block */}
        </div>

        {/* ─── RIGHT PANEL – image with soft blurry left edge ─── */}
        <div className="lh-right">
          <div className="lh-img-wrap">
            <img src={image} alt="Beautiful home" className="lh-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
