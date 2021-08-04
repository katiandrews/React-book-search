import { useState } from "react";
import s from "./Form.css";

export function Form() {
  const [country, setCountry] = useState("");

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(country);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} action="">
      <label htmlFor="country">
        Country:
        <input
          type="text"
          name="country"
          value={country}
          onChange={changeState}
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}
