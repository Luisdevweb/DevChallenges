export function createHtml(strings, ...keys) {
  return function () {
    const temp = strings.slice();
    keys.forEach((key, i) => {
      temp[i] += key;
    });
    return temp.join("");
  };
}
