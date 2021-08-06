import { useEffect, useState } from "react";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";
import { IFormValues } from "./interfaces/IFormValues";
import s from "./style.css";

export const App = () => {
  const [formValues, setFormValues] = useState<IFormValues[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (formValues.length > 0) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, [formValues]);

  return (
    <main>
      <Form setFormValues={setFormValues} />
      <div className={s.cards}>
        {formValues.map((form, index) => {
          return (
            <Card
              key={index.toString()}
              name={form.dish}
              type={form.type}
              description={form.description}
              date={form.date}
              vegan={form.vegan}
              tried={form.tried}
            />
          );
        })}
      </div>
      {success && (
        <div className={s.successToast}>The info was successfully added!</div>
      )}
    </main>
  );
};
