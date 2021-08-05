import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";
import { IFormValues } from "./interfaces/IFormValues";
import s from "./style.css";

const App = () => {
  const [formValues, setFormValues] = useState<IFormValues[]>([]);

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
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
