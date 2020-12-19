import { css, html } from '../lib/templates.js'

export default class AppMain extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = this.getTemplate()
  }

  getStyles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
      }
    `
  }

  getTemplate() {
    return html`
      <style>${this.getStyles()}</style>

      <search-container />
    `
  }
}

customElements.define('app-main', AppMain)
