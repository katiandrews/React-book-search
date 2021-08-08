export function calculatePages(totalItems: number, itemsOnPage: number) {
  return Math.ceil(totalItems / itemsOnPage);
}
