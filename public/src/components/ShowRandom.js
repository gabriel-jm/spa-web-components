import { css, html } from '../lib/templates.js'

export default class ShowTrending extends HTMLElement {
  constructor() {
    super()

    this.key = 'Nm8PyXV7XHUWsLNXOs0VtL86NwIS1LDa'
    this.apiUrl = 'https://api.giphy.com/v1/gifs/random'

    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    this.fetchRandom()

    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', () => this.fetchRandom())
  }

  fetchRandom() {
    fetch(`${this.apiUrl}?api_key=${this.key}`)
      .then(response => response.json())
      .then(jsonResponse => this.handleData(jsonResponse.data))
  }

  handleData(data) {
    this.shadowRoot
      .querySelector('.show-random-images')
      .innerHTML = html`
        <gif-cover url=${data.image_url} />
      `
  }

  getStyles() {
    return css`
      :host {
        display: block;
      }

      .show-random-container {
        text-align: center;
      }

      .show-random-images {
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
        box-sizing: border-box;
        justify-content: space-evenly;
      }

      .show-random-button {
        margin: 10px;
        border: none;
        font-size: 18px;
        color: #5f5f5f;
        cursor: pointer;
        padding: 10px;
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

      <div class="show-random-container">
        <div class="show-random-images"></div>
        <button class="show-random-button">Another Random Gif</button>
      </div>
    `
  }
}

!customElements.get('show-random') &&
  customElements.define('show-random', ShowTrending)
