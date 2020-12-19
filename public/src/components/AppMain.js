import { css, html, raw } from '../lib/templates.js'

export default class AppMain extends HTMLElement {
  constructor() {
    super()

    this.currentSection = 0

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  getSection(number) {
    const sections = [
      raw`<search-container />`,
      raw`<show-trending />`,
      raw`<show-random />`
    ]

    return number in sections ? sections[number] : ''
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

      ${this.getSection(this.currentSection)}
    `
  }
}

customElements.define('app-main', AppMain)
