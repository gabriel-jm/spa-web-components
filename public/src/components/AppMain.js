import { css, html } from '../lib/templates.js'
import routes from '../routes.js'

export default class AppMain extends HTMLElement {
  currentSection = 0
  
  constructor() {
    super()

    onpopstate = () => this.reRenderApp()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('app-header')
      .addEventListener('app-header-click', e => {
        const newSection = e.detail.data
        if(newSection !== this.currentSection) {
          this.currentSection = newSection
        }
      })
  }

  handleUrl() {
    const { pathname } = window.location

    return pathname in routes ? routes[pathname] : 'search-container'
  }

  render() {
    this.shadowRoot.innerHTML = this.getTemplate()
  }

  reRenderApp() {
    this.shadowRoot
      .querySelector('div')
      .innerHTML = html`<${this.handleUrl()} />`
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
        <${this.handleUrl()} />
      </div>
    `
  }
}

customElements.define('app-main', AppMain)
