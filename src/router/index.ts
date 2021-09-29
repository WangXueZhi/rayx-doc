import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Menu } from "@src/types"
import { fixRouterPath } from '../util/util'
import docsConfig from "@docs-config"

type Modules = Record<
  string,
  () => Promise<{
    [key: string]: any;
  }>
>;

const menu: Menu[] = [];
let currentMenu: Menu[] = menu;
let currentItem: Menu | null = null;

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
      const link = currentItem ? [...currentItem.link, title] : [title]
      const newItem: Menu = {
        title: title,
        link: link,
        weight: docsConfig.weight[link.join('/')] || 0
      };
      currentMenu.push(newItem);
      if (i < pathSplitArr.length - 1) {
        newItem.children = [];
        currentMenu = newItem.children;
        currentItem = newItem
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
      currentItem = findItem
    }
  }
  currentMenu = menu;
  currentItem = null
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
    const menuPathArr = createMenu(fixRouterPath(path, false));
    routes.push({
      path: fixRouterPath(path),
      component: ()=>{
        return new Promise((resolve, reject)=>{
          modules[path]().then(res=>{
            resolve(res.default)
            const getSessionItem = sessionStorage.getItem('md-heading-map')
            const mdHeadingMap: any = getSessionItem? JSON.parse(getSessionItem) : {}
            mdHeadingMap[fixRouterPath(path)] = res.headings
            sessionStorage.setItem('md-heading-map', JSON.stringify(mdHeadingMap))
          })
        })
      },
      meta: {
        menuPath: menuPathArr.length > 0 ? menuPathArr.join(',') : menuPathArr[0],
      },
    });

    if (otherRouts && Array.isArray(otherRouts) && otherRouts.length > 0) {
      routes = [...routes, ...otherRouts];
    }
  }

  const deepSort = function(menu: Menu[]){
    menu.forEach(item=>{
      if(item.children){
        deepSort(item.children)
      }
    })
    menu.sort((next: Menu, prev: Menu)=>{
      return prev.weight - next.weight
    })
  }
  
  deepSort(menu)

  return {
    Router: createRouter({
      history: createWebHashHistory(),
      routes,
      scrollBehavior(to, from, savedPosition) {
        return {
          el: `#${to.query.p}`,
          top: 70,
        }
      }
    }),
    routes,
    menu,
  };
}
