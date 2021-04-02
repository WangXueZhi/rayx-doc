import { createApp, h } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Markdown from "./components/Markdown.vue";
// import AAA from "docs/开始.md";
// import BBB from "docs/javascript/闭包.md";

// console.log(AAA)

// const md = (content) => h(Markdown, { content: content });

function fixRouterPath(path: string) {
  const pathArr = path.split("/").map((item) => encodeURIComponent(item));
  if (pathArr[0].includes(".")) {
    pathArr.splice(0, 1, "");
  }
  return pathArr.join("/");
}

const routes = [{ path: "/about", component: h("div", {}, ["about"]) }];

// routes.push({
//     path: fixRouterPath('/docs/开始.md'),
//     component: ()=>import('docs/开始.md')
// })
// routes.push({
//     path: fixRouterPath('/docs/javascript/闭包.md'),
//     component: md(BBB)
// })

const modules = import.meta.glob("../docs/**/*.md");
for (const path in modules) {
  routes.push({
    path: fixRouterPath(path),
    component: modules[path],
  });
}

console.log(routes);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  // ...
  console.log(to);
});

const app = createApp(App);
app.use(router);
app.mount("#app");
