import { css, html, raw } from '../lib/templates.js'

export default class AppMain extends HTMLElement {
  constructor() {
    super()

    this.currentSection = 0

    this.attachShadow({ mode: 'open' })
    this.handleUrl()
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('app-header')
      .addEventListener('app-header-click', e => {
        const newSection = e.detail.data
        if(newSection !== this.currentSection) {
          this.currentSection = newSection
          this.reRenderApp()
        }
      })
  }

  getSection(number) {
    const sections = [
      raw`<search-container />`,
      raw`<show-trending />`,
      raw`<show-random />`
    ]

    return number in sections ? sections[number] : ''
  }

  handleUrl() {
    const urls = {
      '#/search': () => this.currentSection = 0,
      '#/trending': () => this.currentSection = 1,
      '#/random': () => this.currentSection = 2
    }

    urls[window.location.hash || '#/search']()

    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = this.getTemplate()
  }

  reRenderApp() {
    this.shadowRoot
      .querySelector('div')
      .innerHTML = this.getSection(this.currentSection).html
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

      <app-header />
      <div>
        ${this.getSection(this.currentSection)}
      </div>
    `
  }
}

customElements.define('app-main', AppMain)
