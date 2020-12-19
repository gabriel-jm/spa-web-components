import './SearchBar.js'
import './GifCover.js'
import { css, html } from '../lib/templates.js'

export default class SearchContainer extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    this.shadowRoot.querySelector('search-bar')
      .addEventListener('search-complete', e => {
        this.handleSearchData(e.detail.data)
      })
  }

  handleSearchData(data) {
    const parsedData = data.map(value => {
      return html`
        <gif-cover url=${value.images.downsized_medium.url} />
      `
    }).join('')

    this.shadowRoot
      .querySelector('.search-container-images')
      .innerHTML = parsedData
  }

  getStyles() {
    return css`
      :host {
        display: block;
      }

      .search-container {
        display: block;
        padding: 10px;
      }

      .search-container-images {
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
        box-sizing: border-box;
        justify-content: space-evenly;
      }

      gif-cover {
        flex-basis: 10%;
        padding: 5px;
      }
    `
  }

  render() {
    this.shadowRoot.innerHTML = html`
      <style>${this.getStyles()}</style>

      <div class="search-container">
        <search-bar />

        <div class="search-container-images">
          <p>Try Searching for a tag in the search bar</p>
        </div>
      </div>
    `
  }
}

!customElements.get('search-container') &&
  customElements.define('search-container', SearchContainer)
