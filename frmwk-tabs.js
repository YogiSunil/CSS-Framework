class FrmwkTabs extends HTMLElement {
  static get observedAttributes() { return ['variant']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._onClick = this._onClick.bind(this);
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; font-family: var(--font-family-sans); color: var(--color-fg); }
        .tabs__list { display:flex; gap: var(--space-xs); border-bottom: 2px solid var(--color-border); list-style:none; margin:0; padding:0; }
        button {
          background:none; border:none; padding: var(--space-sm) var(--space-lg);
          font-size: var(--font-size-body); font-weight: var(--font-weight-medium);
          color: var(--color-fg-secondary); cursor:pointer; border-bottom:2px solid transparent; margin-bottom:-2px;
          transition: color var(--transition-fast), border-color var(--transition-fast);
        }
        button:hover { color: var(--color-fg); border-bottom-color: var(--color-border-hover); }
        button[aria-selected="true"] { color: var(--color-primary); border-bottom-color: var(--color-primary); font-weight: var(--font-weight-semibold); }
        .tabs__panel { padding: var(--space-lg); background: var(--color-bg); border: 1px solid var(--color-border); border-top:none; border-radius: 0 0 var(--radius-md) var(--radius-md); }
        .tabs__panel[hidden] { display:none; }
      </style>
      <div class="tabs">
        <div role="tablist" class="tabs__list"></div>
        <slot name="panel" class="tabs__slot"></slot>
      </div>
    `;
  }
  connectedCallback() {
    this._upgrade();
    this.shadowRoot.addEventListener('click', this._onClick);
  }
  disconnectedCallback() { this.shadowRoot.removeEventListener('click', this._onClick); }
  _upgrade() {
    const list = this.shadowRoot.querySelector('.tabs__list');
    list.innerHTML = '';
    const panels = Array.from(this.querySelectorAll('[slot="panel"]'));
    panels.forEach((panel, i) => {
      panel.classList.add('tabs__panel');
      if (i !== 0) panel.hidden = true; else panel.hidden = false;
      const label = panel.getAttribute('label') || `Tab ${i+1}`;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('role','tab');
      btn.dataset.index = String(i);
      btn.textContent = label;
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      list.appendChild(btn);
    });
  }
  _onClick(e) {
    const btn = e.target.closest('button[role="tab"]');
    if (!btn) return;
    const idx = Number(btn.dataset.index);
    const panels = Array.from(this.querySelectorAll('[slot="panel"]'));
    const tabs = Array.from(this.shadowRoot.querySelectorAll('button[role="tab"]'));
    panels.forEach((p,i)=>{ p.hidden = i !== idx; });
    tabs.forEach((t,i)=>{ t.setAttribute('aria-selected', i === idx ? 'true' : 'false'); });
    this.dispatchEvent(new CustomEvent('change', { detail: { index: idx, label: tabs[idx].textContent } }));
  }
}
customElements.define('frmwk-tabs', FrmwkTabs);
