export const createNode = (str,classes) => {
  const node = new DOMParser()
    .parseFromString(str, "text/html")
    .body.firstElementChild;
  return node;
};
