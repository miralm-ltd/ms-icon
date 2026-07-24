const supports = {
    CSS: { CSSStyleSheet: false }
};
try {
    new CSSStyleSheet();
    if ('adoptedStyleSheets' in ShadowRoot.prototype && 'replaceSync' in CSSStyleSheet.prototype) {
        supports.CSS.CSSStyleSheet = true;
    }
}
catch (error) { }
const createStyleSheet = (css, shadowRoot) => {
    if (supports.CSS.CSSStyleSheet && 'adoptedStyleSheets' in ShadowRoot.prototype) {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(css);
        shadowRoot.adoptedStyleSheets = [sheet];
        return;
    }
    const el = document.createElement('style');
    el.textContent = css;
    shadowRoot.appendChild(el);
};
const css = `:host{width:24px;display:inline-flex;vertical-align:middle;aspect-ratio:1;-webkit-aspect-ratio:1;color:inherit;}`;
export const useElement = (name, svg) => {
    class IconElement extends HTMLElement {
        static observedAttributes = ['name'];
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            const shadowRoot = this.attachShadow({ mode: 'open' });
            createStyleSheet(css, shadowRoot);
            shadowRoot.innerHTML = '';
        }
    }
    customElements.define(name, IconElement);
};
