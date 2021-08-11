import { useEffect, useState } from "react";
import { getBook } from "../../api/book-search";
import { IBook } from "../../interfaces/IBook";

interface IProps {
  match: {
    params: { id: string };
  };
}

export function Details({ match }: IProps) {
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    getBook(match.params.id).then((item) => {
      setBook(item);
    });
  });

  return <main>{book?.volumeInfo.title}</main>;
}
