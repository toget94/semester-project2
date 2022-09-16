export function getAddedProduct() {
  const added = localStorage.getItem("addedProduct");

  if (added === null) {
    return [];
  } else {
    return JSON.parse(added);
  }
}
