import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app');

class Pembayaran extends HTMLElement {
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
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('pembayaran-fe');
  }
}

window.customElements.define('pembayaran-fe', Pembayaran);
