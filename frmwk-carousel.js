class FrmwkCarousel extends HTMLElement {
  static get observedAttributes() { return ['interval', 'paused']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._current = 0;
    this._timer = null;
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; font-family: var(--font-family-sans); color: var(--color-fg); }
        .wrap { position: relative; overflow: hidden; border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); background: var(--color-bg); }
        /* Establish a sensible height so slides aren't tiny if images fail */
        .wrap { min-height: 240px; }
        .track { display: grid; grid-auto-flow: column; grid-auto-columns: 100%; transition: transform var(--transition-slow); align-items: center; min-height: 240px; }
        /* Center slide content */
        ::slotted(figure), ::slotted(img), ::slotted(div) { width: 100%; display: block; margin: 0; }
        ::slotted(figure) { display: grid; place-items: center; padding: var(--space-md); }
        ::slotted(img) { width: 100%; height: auto; }
        .controls { position: absolute; inset-inline: var(--space-sm); bottom: var(--space-sm); display:flex; gap: var(--space-sm); }
        button { background: var(--color-bg); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: var(--space-xs) var(--space-sm); cursor: pointer; }
        button:hover { border-color: var(--color-border-hover); }
        button:focus-visible { outline: var(--focus-ring-width) solid var(--focus-ring-color); outline-offset: var(--focus-ring-offset); }
        .dots { position: absolute; left: 50%; transform: translateX(-50%); bottom: var(--space-sm); display:flex; gap: var(--space-xs); }
        .dot { width: 10px; height: 10px; border-radius: var(--radius-full); background: var(--color-border); }
        .dot[aria-current="true"] { background: var(--color-primary); }
      </style>
      <div class="wrap">
        <div class="track"><slot></slot></div>
        <div class="controls" part="controls">
          <button type="button" data-action="prev" aria-label="Previous">◀</button>
          <button type="button" data-action="next" aria-label="Next">▶</button>
        </div>
        <div class="dots" part="dots"></div>
      </div>
    `;
    this._onClick = this._onClick.bind(this);
  }
  connectedCallback() {
    this.shadowRoot.addEventListener('click', this._onClick);
    this._renderDots();
    this._startTimer();
    this._update();
  }
  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this._onClick);
    this._clearTimer();
  }
  attributeChangedCallback(name) {
    if (name === 'interval' || name === 'paused') {
      this._startTimer();
    }
  }
  _onClick(e) {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === 'prev') this._prev();
    if (action === 'next') this._next();
  }
  _items() { return Array.from(this.querySelectorAll(':scope > *')); }
  _renderDots() {
    const dots = this.shadowRoot.querySelector('.dots');
    dots.innerHTML = '';
    this._items().forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'dot';
      d.setAttribute('role','button');
      d.setAttribute('tabindex','0');
      d.dataset.index = String(i);
      d.addEventListener('click', () => { this._current = i; this._update(); this._emit(); });
      dots.appendChild(d);
    });
  }
  _update() {
    const track = this.shadowRoot.querySelector('.track');
    const count = this._items().length;
    if (count === 0) return;
    this._current = (this._current + count) % count;
    track.style.transform = `translateX(-${this._current * 100}%)`;
    const dots = Array.from(this.shadowRoot.querySelectorAll('.dot'));
    dots.forEach((d,i)=> d.setAttribute('aria-current', i === this._current ? 'true' : 'false'));
  }
  _next() { this._current++; this._update(); this._emit(); }
  _prev() { this._current--; this._update(); this._emit(); }
  _emit() { this.dispatchEvent(new CustomEvent('change', { detail: { index: this._current } })); }
  _clearTimer() { if (this._timer) { clearInterval(this._timer); this._timer = null; } }
  _startTimer() {
    this._clearTimer();
    const paused = this.getAttribute('paused') !== null;
    const interval = Number(this.getAttribute('interval')) || 4000;
    if (paused) return;
    this._timer = setInterval(() => { this._next(); }, interval);
  }
}
customElements.define('frmwk-carousel', FrmwkCarousel);
