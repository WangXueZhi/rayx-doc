export function fixRouterPath(path: string, shouldEncode: boolean = true) {
    const pathArr = path
        .split("/")
        .map((item) => (shouldEncode ? encodeURIComponent(item) : item));
    if (pathArr[0].includes(".")) {
        pathArr.splice(0, 1, "");
    }
    return pathArr.join("/");
}
  