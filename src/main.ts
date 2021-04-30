import { createApp, h } from "vue";
import App from "./App.vue";
import { createStore, Store } from 'vuex'
import createRouter from "./router"
import "highlight.js/styles/color-brewer.css";

import docs from "@docs-data"
console.log(docs)

// router
const modules = import.meta.glob("../docs/**/*.md");

const {Router, routes, menu} = createRouter(modules)
console.log(Router)

Router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  console.log(to.meta.menuPath)
  store.commit('setActiveDocPath', to.meta.menuPath)
  next()
})

// store
interface State {
  menu: Object[],
  activeDocPath: String
}

const store = createStore<State>({
  state () {
    return {
      menu: menu,
      activeDocPath: ''
    }
  },
  mutations: {
    setActiveDocPath (state, value) {
      state.activeDocPath = value
    }
  }
})

const app = createApp(App);
app.use(Router);
app.use(store)
app.mount("#app");
