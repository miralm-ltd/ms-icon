export const options = {
  attributes: {},
  icons: {}
}

const supports = { CSSStyleSheet: false }

try {
  new CSSStyleSheet()
  if ('adoptedStyleSheets' in ShadowRoot.prototype && 'replaceSync' in CSSStyleSheet.prototype) {
    supports.CSSStyleSheet = true
  }
} catch (error) { }

const css = `:host{width:24px;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;aspect-ratio:1;-webkit-aspect-ratio:1;color:inherit}svg{width:100%;height:100%;fill:currentColor}`

let styleOrSheet
if (supports.CSSStyleSheet) {
  styleOrSheet = new CSSStyleSheet()
  styleOrSheet.replaceSync(css)
} else {
  styleOrSheet = document.createElement('style')
  styleOrSheet.textContent = css
}

class Icon extends HTMLElement {
  static observedAttributes = ['name']
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    supports.CSSStyleSheet ? shadowRoot.adoptedStyleSheets = [styleOrSheet] : shadowRoot.appendChild(styleOrSheet.cloneNode(true))
  }
  connectedCallback() {
    for (const key in options.attributes) {
      if (!this.hasAttribute(key)) this.setAttribute(key, options.attributes[key])
    }
  }
  attributeChangedCallback(_, _1, value) {
    const svg = this.shadowRoot.lastChild
    if (svg && svg.tagName === 'SVG') svg.remove()
    this.shadowRoot.innerHTML += `<svg viewBox="0 -960 960 960"><path d="${options.icons[value]}"/></svg>`
  }
}
customElements.define('ms-icon', Icon)