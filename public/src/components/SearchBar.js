import { css, html } from '../lib/templates.js'

export default class SearchBar extends HTMLElement {
  constructor() {
    super()

    this.key = 'Nm8PyXV7XHUWsLNXOs0VtL86NwIS1LDa'
    this.apiUrl = 'https://api.giphy.com/v1/gifs/search'
    this.showLimit = 20

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button')
      .addEventListener('click', () => this.handleSearch())
  }

  handleSearch() {
    const { value } = this.shadowRoot.querySelector('input')

    fetch(`${this.apiUrl}?api_key=${this.key}&q=${value}&limit=${this.showLimit}`)
      .then(response => response.json())
      .then(response => this.dispatchDataInEvent(response.data))
  }

  dispatchDataInEvent(data) {
    const searchEvent = new CustomEvent('search-complete', {
      detail: { data },
      bubbles: false
    })

    this.dispatchEvent(searchEvent)
  }

  getStyles() {
    return css`
      :host {
        display: block;
      }

      .search-bar-container {
        display: flex;
      }

      .search-input {
        flex: 1;
        margin: 10px;
        height: 50px;
        font-size: 18px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        color: #8e8e8e;
      }

      .search-button {
        margin: 10px;
        width: 200px;
        border: none;
        font-size: 18px;
        color: #5f5f5f;
        cursor: pointer;
      }

      .search-button:hover {
        background: #68f583;
      }
    `
  }

  render() {
    this.shadowRoot.innerHTML = html`
      <style>${this.getStyles()}</style>

      <div class="search-bar-container">
        <input
          type="text"
          class="search-input"
          placeholder="Enter search text here"
        />
        <button class="search-button">Search</button>
      </div>
    `
  }
}

!customElements.get('search-bar') &&
  customElements.define('search-bar', SearchBar)
