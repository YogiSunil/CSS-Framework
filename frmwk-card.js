class FrmwkCard extends HTMLElement {
  static get observedAttributes() { return ['variant']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          color: var(--color-fg);
          font-family: var(--font-family-sans);
        }
        .card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          padding: var(--space-lg);
        }
        .card--elevated { box-shadow: var(--shadow-lg); }
        .card--dark { background: var(--color-bg-tertiary); border-color: var(--color-border-hover); }
        .header { margin-bottom: var(--space-md); padding-bottom: var(--space-md); border-bottom: 1px solid var(--color-border); }
        .footer { margin-top: var(--space-md); padding-top: var(--space-md); border-top: 1px solid var(--color-border); }
        ::slotted([slot="title"]) { font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); margin: 0; }
        ::slotted([slot="subtitle"]) { color: var(--color-fg-secondary); font-size: var(--font-size-sm); margin-top: var(--space-xs); }
      </style>
      <div class="card">
        <div class="header">
          <slot name="header"></slot>
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
  connectedCallback() { this._applyVariant(); }
  attributeChangedCallback() { this._applyVariant(); }
  _applyVariant() {
    const root = this.shadowRoot.querySelector('.card');
    root.classList.remove('card--elevated','card--dark','card--bordered');
    const v = this.getAttribute('variant');
    if (!v) return;
    if (v === 'elevated') root.classList.add('card--elevated');
    if (v === 'dark') root.classList.add('card--dark');
    if (v === 'bordered') root.style.border = `2px solid var(--color-primary)`;
  }
}
customElements.define('frmwk-card', FrmwkCard);
