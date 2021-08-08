import { FormEventHandler, SyntheticEvent, useRef } from "react";
import s from "./Pagination.css";

interface IProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  currentPage: number;
}

export function Pagination({ pages, currentPage, setCurrentPage }: IProps) {
  const input = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    input.current?.blur();
  };

  return (
    <form className={s.pagination} onSubmit={handleSubmit}>
      Page
      <input
        ref={input}
        className={s.pageNumber}
        type="text"
        defaultValue={currentPage}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentPage(() =>
            Number(e.target.value) > 0 ? Number(e.target.value) : 1
          );
          e.target.value = !e.target.value ? "1" : e.target.value;
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
      />
      of {pages}
    </form>
  );
}
