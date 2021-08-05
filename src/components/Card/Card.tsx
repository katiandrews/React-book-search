import s from "./Card.css";

interface IProps {
  name: string;
  type: string;
  date: string;
  description: string;
  vegan: boolean;
  tried: boolean;
}

export function Card({ name, type, date, description, vegan, tried }: IProps) {
  return (
    <div className={s.card}>
      <ul className={s.info}>
        <li className={s.item}>Dish: {name}</li>
        <li className={s.item}>Type: {type}</li>
        <li className={s.item}>Description: {description}</li>
        <li className={s.item}>{vegan ? "Vegan" : ""}</li>
        <li className={s.item}>{tried ? "Already tried" : ""}</li>
        <li className={s.item}>Date: {date}</li>
      </ul>
    </div>
  );
}
