import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

type Modules = Record<
  string,
  () => Promise<{
    [key: string]: any;
  }>
>;

type Menu = {
  title: string,
  path?: string,
  children?: Menu[]
}

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

function createMenu(path: string) {
  // 分割路径层级
  const pathSplitArr = path.replace("/docs/", "").split("/");
  pathSplitArr.splice(
    pathSplitArr.length - 1,
    1,
    pathSplitArr[pathSplitArr.length - 1].split(".")[0]
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
        newItem.path = path
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
}

export default function (modules: Modules, otherRouts?: RouteRecordRaw[]) {
  let routes: RouteRecordRaw[] = [];

  for (const path in modules) {
    const pathSplitArr = path.split("/");
    routes.push({
      path: fixRouterPath(path) + "/:position?",
      component: modules[path],
      meta: {
        title: pathSplitArr[pathSplitArr.length - 1].split(".")[0],
      },
    });

    createMenu(fixRouterPath(path, false));

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
