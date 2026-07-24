import { options } from './main.js'

const supports = {
  CSS: { CSSStyleSheet: false }
}

try {
  new CSSStyleSheet()
  if ('adoptedStyleSheets' in ShadowRoot.prototype && 'replaceSync' in CSSStyleSheet.prototype) {
    supports.CSS.CSSStyleSheet = true
  }
} catch (error) { }

const createStyleSheet = (css, shadowRoot) => {
  if (supports.CSS.CSSStyleSheet && 'adoptedStyleSheets' in ShadowRoot.prototype) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(css)
    shadowRoot.adoptedStyleSheets = [sheet]
    return
  }
  const el = document.createElement('style')
  el.textContent = css
  shadowRoot.appendChild(el)
}

const css = `:host{width:24px;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;aspect-ratio:1;-webkit-aspect-ratio:1;color:inherit}svg{width:100%;height:100%;fill:currentColor}`

export const define = (name, svg) => {
  class Icon extends HTMLElement {
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.innerHTML = svg
      createStyleSheet(css, shadowRoot)
    }
    connectedCallback() {
      for (const key in options.attributes) {
        if (!this.hasAttribute(key)) this.setAttribute(key, options.attributes[key])
      }
    }
  }
  customElements.define(name, Icon)
}