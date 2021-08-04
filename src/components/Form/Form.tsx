import { useState } from "react";
import { Input } from "../Input/Input";
import s from "./Form.css";

export function Form() {
  const [dish, setDish] = useState("");

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDish(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(dish);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} action="">
      <Input
        className={s.item}
        type="text"
        name="Dish"
        value={dish}
        onChange={changeState}
      />
      <Input
        className={s.item}
        type="file"
        name="Image"
        value={dish}
        onChange={changeState}
      />
      <label className={s.item} htmlFor="type">
        Type of Meal
        <select name="type" id="type">
          <option value="">Choose a type</option>
          <option value="salad">Salad</option>
          <option value="hot">Hot</option>
          <option value="dessert">Dessert</option>
          <option value="cocktail">Cocktail</option>
        </select>
      </label>
      <Input
        className={s.item}
        type="text"
        name="Description"
        value={dish}
        onChange={changeState}
      />
      <Input
        className={s.item}
        type="date"
        name="Date"
        value={dish}
        onChange={changeState}
      />
      <label className={s.switch}>
        <input type="checkbox" />
        <span className={`${s.slider} ${s.round}`}></span>
        Vegan
      </label>
      <Input
        className={`${s.checkbox} ${s.item}`}
        type="checkbox"
        name="Ever tried this"
        value={dish}
        onChange={changeState}
      />
      <input type="submit" value="Send" />
    </form>
  );
}
