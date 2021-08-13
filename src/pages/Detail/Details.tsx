import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook } from "../../shared/api/book-search";
import { selectBook, setBook } from "../../redux/slices/activeBook";
import s from "./Detail.css";

interface IProps {
  match: {
    params: { id: string };
  };
}

export function Details({ match }: IProps) {
  const dispatch = useDispatch();
  const book = useSelector(selectBook);

  useEffect(() => {
    getBook(match.params.id).then((item) => {
      dispatch(setBook(item));
    });
  }, [match.params.id, dispatch]);

  return (
    <main className={s.page}>
      <div className={s.card}>
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />
        <div className={s.info}>
          <h2 className={s.title}>{book?.volumeInfo?.title}</h2>
          <p className={s.author}>
            {book?.volumeInfo?.authors?.join(", ")} •{" "}
            {book?.volumeInfo.publishedDate}
          </p>
          <p className={s.description}>{book?.volumeInfo.description}</p>
          <p className={s.additional}>
            Publisher: {book?.volumeInfo.publisher},<br /> Pages:{" "}
            {book?.volumeInfo.pageCount}
          </p>
          <a
            href={book?.volumeInfo.previewLink}
            className="button button-primary"
          >
            Open book preview
          </a>
        </div>
      </div>
    </main>
  );
}
