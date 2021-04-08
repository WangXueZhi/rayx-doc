import { createApp, h } from "vue";
import App from "./App.vue";
// import { createRouter, createWebHashHistory } from "vue-router";
import { createStore, Store } from 'vuex'
import Markdown from "./components/Markdown.vue";

import createRouter from "./router"
// import AAA from "docs/开始.md";
// import BBB from "docs/javascript/闭包.md";

// console.log(AAA)

// const md = (content) => h(Markdown, { content: content });

// router
const modules = import.meta.glob("../docs/**/*.md");

const {Router, routes, menus} = createRouter(modules)
console.log(routes)

for (let i = 0; i < routes.length; i++) {
  const route = routes[i];
}

// store
interface State {
  menu: Object[]
}

const store = createStore<State>({
  state () {
    return {
      menu: menus
    }
  },
  mutations: {
    increment (state) {
      
    }
  }
})

const app = createApp(App);
app.use(Router);
app.use(store)
app.mount("#app");
