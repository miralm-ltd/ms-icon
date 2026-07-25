import { options } from './main.js'

const supports = {
  CSSStyleSheet: false
}

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

export const define = (name, svg) => {
  class Icon extends HTMLElement {
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.innerHTML = svg
      supports.CSSStyleSheet ? shadowRoot.adoptedStyleSheets = [styleOrSheet] : shadowRoot.appendChild(styleOrSheet.cloneNode(true))
    }
    connectedCallback() {
      for (const key in options.attributes) {
        if (!this.hasAttribute(key)) this.setAttribute(key, options.attributes[key])
      }
    }
  }
  customElements.define(name, Icon)
}