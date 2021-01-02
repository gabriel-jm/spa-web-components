import { css, html } from '../lib/templates.js'

export default class AppHeader extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    this.shadowRoot
      .querySelectorAll('.app-header-li a')
      .forEach((anchor, index) => {
        anchor.addEventListener('click', e => {
          e.preventDefault()

          history.pushState(null, '', e.target.href)
          window.dispatchEvent(new Event('popstate'))

          this.handleClick(index)
        })
      })
  }

  handleClick(index) {
    this.dispatchEvent(new CustomEvent('app-header-click', {
      detail: { data: index },
      bubbles: false
    }))
  }

  getStyles() {
    return css`
      :host {
        display: flex;
        top: 0;
        background: #46cff3;
        position: sticky;
        height: 75px;
        justify-content: space-between;
        padding: 0 18px;
        color: white;
      }

      h1 {
        font-family: Consolas, sans-serif;
      }

      .app-header-ul {
        display: flex;
        margin: 0;
        justify-content: flex-end;
        height: 100%;
      }

      .app-header-li {
        align-self: center;
        list-style-type: none;
        margin-right: 25px;
      }

      .app-header-li a {
        text-decoration: none;
        font-size: 25px;
        color: inherit;
      }
    `
  }

  render() {
    this.shadowRoot.innerHTML = html`
      <style>${this.getStyles()}</style>

      <h1>GIF Gallery</h1>

      <ul class="app-header-ul">
        <li class="app-header-li">
          <a href="/search">Search</a>
        </li>
        <li class="app-header-li">
          <a href="/trending">Trending</a>
        </li>
        <li class="app-header-li">
          <a href="/random">Random</a>
        </li>
      </ul>
    `
  }
}

!customElements.get('app-header') &&
  customElements.define('app-header', AppHeader)
