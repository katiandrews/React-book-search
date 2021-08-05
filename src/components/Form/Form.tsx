import { Dispatch, SetStateAction, useState } from "react";
import { IFormValues } from "../../interfaces/IFormValues";
import { Input } from "../Input/Input";
import s from "./Form.css";

interface IProps {
  setFormValues: Dispatch<SetStateAction<IFormValues[]>>;
}

export function Form({ setFormValues }: IProps) {
  const [formState, setFormState] = useState({
    dish: "",
    type: "",
    description: "",
    date: "",
    vegan: false,
    tried: false,
  });

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const changeSelectState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormValues((state) => [...state, formState]);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} action="">
      <Input
        className={s.item}
        type="text"
        name="dish"
        value={formState.dish}
        onChange={changeState}
      />
      <label className={s.item} htmlFor="type">
        Type of Meal
        <select
          name="type"
          id="type"
          value={formState.type}
          onChange={changeSelectState}
        >
          <option value="">Choose a type</option>
          <option value="salad">Salad</option>
          <option value="hot">Hot dish</option>
          <option value="dessert">Dessert</option>
          <option value="cocktail">Cocktail</option>
        </select>
      </label>
      <Input
        className={s.item}
        type="text"
        name="description"
        value={formState.description}
        onChange={changeState}
      />
      <Input
        className={s.item}
        type="date"
        name="date"
        value={formState.date}
        onChange={changeState}
      />
      <label className={s.switch}>
        <input
          type="checkbox"
          name="vegan"
          checked={formState.vegan}
          onChange={changeState}
        />
        <span className={`${s.slider} ${s.round}`}></span>
        Vegan
      </label>
      <label className={`${s.checkbox} ${s.item}`}>
        <input
          type="checkbox"
          name="tried"
          checked={formState.tried}
          onChange={changeState}
        />
        Tried
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}