import s from "./Loading.css";

export function Loading() {
  return (
    <div className={s.container}>
      <div className={s.yellow}></div>
      <div className={s.red}></div>
      <div className={s.blue}></div>
      <div className={s.violet}></div>
    </div>
  );
}
