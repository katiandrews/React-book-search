const url = "https://www.googleapis.com/books/v1/volumes?";

export const getBooks = async (
  query: string,
  sort: string,
  quantity: number,
  start = 0
) => {
  try {
    const res = await fetch(
      `${url}q=${query}&orderBy=${sort}&maxResults=${quantity}&startIndex=${start}`
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Nothing has been found");
    }
    return data.totalItems > 0 ? data : false;
  } catch (error) {
    return error.message;
  }
};
