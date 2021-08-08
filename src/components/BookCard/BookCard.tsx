import { IBook } from "../../interfaces/IBook";
import s from "./BookCard.css";

interface IProps {
  book: IBook;
}

export function BookCard({ book }: IProps) {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img
          src={
            book.volumeInfo?.imageLinks?.smallThumbnail ||
            "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
          }
          alt="book cover"
        />
      </div>
      <div className={s.description}>
        <h3 className={s.title}>
          {book.volumeInfo.title.length > 50
            ? `${book.volumeInfo.title.slice(0, 50)}...`
            : book.volumeInfo.title}
        </h3>
        <p className={s.author}>{book.volumeInfo?.authors?.join(", ")}</p>
        <p className={s.subtitle}>
          {book.volumeInfo.publishedDate}, Language: {book.volumeInfo.language}
        </p>
      </div>
    </div>
  );
}
