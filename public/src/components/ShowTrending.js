import { css, html } from '../lib/templates.js'

export default class ShowTrending extends HTMLElement {
  #key = 'Nm8PyXV7XHUWsLNXOs0VtL86NwIS1LDa'
  apiUrl = 'https://api.giphy.com/v1/gifs/trending'
  showLimit = 20
  
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    fetch(`${this.apiUrl}?api_key=${this.#key}&limit=${this.showlimit}`)
      .then(response => response.json())
      .then(jsonResponse => this.handleTrendingData(jsonResponse.data))
  }

  handleTrendingData(data) {
    const parsedData = data.map(value => {
      return html`
        <gif-cover url=${value.images.downsized_medium.url} />
      `
    }).join('')

    this.shadowRoot
      .querySelector('.show-trending-images')
      .innerHTML = parsedData
  }

  getStyles() {
    return css`
      :host {
        display: block;
      }

      .show-trending-heading {
        text-align: center;
        color: #333;
        font-style: italic;
      }

      .show-trending-images {
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

      <div class="show-trending-container">
        <h2 class="show-trending-heading">Trending Gifs</h2>
        <div class="show-trending-images"></div>
      </div>
    `
  }
}

!customElements.get('show-trending') &&
  customElements.define('show-trending', ShowTrending)
