const url = "https://www.googleapis.com/books/v1/volumes?";

export const getBooks = async (
  query: string,
  sort: string,
  quantity: number
) => {
  try {
    const res = await fetch(
      `${url}q=${query}&orderBy=${sort}&maxResults=${quantity}`
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Nothing has been found");
    }
    return data.items;
  } catch (error) {
    throw error;
  }
};
