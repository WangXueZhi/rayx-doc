import { createApp, h, nextTick } from "vue";
import App from "./App.vue";
import { createStore, Store } from 'vuex'
import createRouter from "./router"
import "highlight.js/styles/color-brewer.css";
// import "animate.css"

import docs from "@docs-data"
console.log(docs)

import RayxUi from "rayx-ui";
import "rayx-ui/lib/index.css";

import './style.scss'
// router
const modules = import.meta.glob("../docs/**/*.md");

const {Router, routes, menu} = createRouter(modules)

Router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */  
  store.commit('setActiveDocPath', to.meta.menuPath)
  next()
})

// store
interface State {
  menu: Object[],
  activeDocPath: String,
  docsData: Object[],
  showSearch: Boolean
}

const store = createStore<State>({
  state () {
    return {
      menu: menu,
      activeDocPath: '',
      docsData: docs,
      showSearch: false
    }
  },
  mutations: {
    setActiveDocPath (state, value) {
      state.activeDocPath = value
    },
    setShowSearchState (state, value) {
      state.showSearch = value
    }
  }
})

const app = createApp(App);
app.use(RayxUi);
app.use(Router);
app.use(store)
app.mount("#app");
