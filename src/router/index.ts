import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Menu } from "@src/types"

type Modules = Record<
  string,
  () => Promise<{
    [key: string]: any;
  }>
>;

function fixRouterPath(path: string, shouldEncode: boolean = true) {
  const pathArr = path
    .split("/")
    .map((item) => (shouldEncode ? encodeURIComponent(item) : item));
  if (pathArr[0].includes(".")) {
    pathArr.splice(0, 1, "");
  }
  return pathArr.join("/");
}

const menu: Menu[] = [];
let currentMenu: Menu[] = menu;

function findMenuItem(menu: Menu[], title: string) {
  if (menu.length > 0) {
    for (let i = 0; i < menu.length; i++) {
      const menuItem = menu[i];
      if (menuItem.title === title) {
        return menuItem;
      }
    }
  }
  return null;
}

// 创建菜单，返回当前菜单路径数组
function createMenu(path: string): String[] {
  // 分割路径层级
  const pathSplitArr = path.replace("/docs/", "").split("/");
  pathSplitArr.splice(
    pathSplitArr.length - 1,
    1,
    pathSplitArr[pathSplitArr.length - 1].split(".").slice(0, -1).join('.')
  );
  for (let i = 0; i < pathSplitArr.length; i++) {
    const title = pathSplitArr[i];
    const findItem = findMenuItem(currentMenu, title);
    if (!findItem) {
      const newItem: Menu = {
        title: title
      };
      currentMenu.push(newItem);
      if (i < pathSplitArr.length - 1) {
        newItem.children = [];
        currentMenu = newItem.children;
      }
      if (i === pathSplitArr.length - 1) {
        newItem.path = fixRouterPath(path)
      }
      continue
    }
    if (findItem && i < pathSplitArr.length - 1) {
      if(!findItem.children){
        findItem.children = [];
      }
      currentMenu = findItem.children
    }
  }
  currentMenu = menu;
  return pathSplitArr
}

export default function (modules: Modules, otherRouts?: RouteRecordRaw[]) {
  let routes: RouteRecordRaw[] = [
    {
      path: '/',
      redirect: fixRouterPath('../docs/开始.md'),
    }
  ];

  for (const path in modules) {
    console.log(path)
    const menuPathArr = createMenu(fixRouterPath(path, false));
    routes.push({
      path: fixRouterPath(path) + "/:position?",
      component: modules[path],
      meta: {
        menuPath: menuPathArr.length > 0 ? menuPathArr.join(',') : menuPathArr[0],
      },
    });

    if (otherRouts && Array.isArray(otherRouts) && otherRouts.length > 0) {
      routes = [...routes, ...otherRouts];
    }
  }

  return {
    Router: createRouter({
      history: createWebHashHistory(),
      routes,
    }),
    routes,
    menu,
  };
}
