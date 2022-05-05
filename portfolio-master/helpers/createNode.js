export const createNode = (str) => {
  const node = new DOMParser()
    .parseFromString(str, "text/html")
    .body.querySelector(".personal-details");
  return node;
};
