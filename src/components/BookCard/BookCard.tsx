import { StringifyOptions } from "node:querystring";
import s from "./BookCard.css";

interface IProps {
  title: string;
}

export function BookCard({ title }: IProps) {
  return <div className={s.card}>{title}</div>;
}
