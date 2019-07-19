import React from 'react';
import ReactDOM, { render, unmountComponentAtNode} from 'react-dom';
import App from './App.jsx';

// Standard ReactJS App
// ReactDOM.render(<App/>, document.getElementById('app'))

// micro frontends custom components
class Katalog extends HTMLElement {
  constructor() {
    super()
    this.observer = new MutationObserver(() => this.update())
    this.observer.observe(this, { attributes: true })
  }

  connectedCallback() {
    this.mount()
  }

  update() {
    this.unmount()
    this.mount()
  }

  unmount() {
    unmountComponentAtNode(this)
  }
  
  mount() {
    document.addEventListener('route', ({ detail }) => {
      let route = detail.to.path
      render(<App route={route}/>, this)
    })
  }
}

window.customElements.define('katalog-barang', Katalog)
