import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

function fixRouterPath(path: string, shouldEncode: boolean = true) {
  const pathArr = path.split("/").map((item) => shouldEncode ? encodeURIComponent(item): item);
  if (pathArr[0].includes(".")) {
    pathArr.splice(0, 1, "");
  }
  return pathArr.join("/");
}

function findMenuItem(menu: object[], title:string){
  if(menu.length>0){
    for (let i = 0; i < menu.length; i++) {
      const menuItem = menu[i];
      if(menuItem.title === title){
        return menuItem
      }
    }
  } 
  return null
}

function createMenu(menu: object[], path: string) {
  const pathSplitArr = path.replace("/docs/", '').split('/');
  pathSplitArr.splice(pathSplitArr.length-1, 1, pathSplitArr[pathSplitArr.length-1].split('.')[0])
  
  const menuItem = findMenuItem(menu, pathSplitArr[0])

  if(menuItem){
    for (let i = 0; i < pathSplitArr.length; i++) {
      const element = pathSplitArr[i];
      
    }
    menuItem
  }
  
}

type Modules = Record<
  string,
  () => Promise<{
    [key: string]: any;
  }>
>;

export default function (modules: Modules, otherRouts: RouteRecordRaw[]) {
  let routes: RouteRecordRaw[] = [];
  let menus = [];

  for (const path in modules) {
    const pathSplitArr = path.split("/");
    routes.push({
      path: fixRouterPath(path) + "/:position?",
      component: modules[path],
      meta: {
        title: pathSplitArr[pathSplitArr.length - 1].split(".")[0],
      },
    });
    menus.push({
      title: pathSplitArr[pathSplitArr.length - 1].split(".")[0],
      path: fixRouterPath(path),
    });
    createMenu(menus, fixRouterPath(path, false))
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
    menus,
  };
}
