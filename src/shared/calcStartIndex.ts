export function calcStartIndex(page: number, itemsOnPage: number) {
  return (page - 1) * itemsOnPage;
}
