import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Form } from "./components/Form/Form";
import { IFormValues } from "./interfaces/IFormValues";
import "./style.css";

const App = () => {
  const [formValues, setFormValues] = useState<IFormValues[]>([]);

  return <Form setFormValues={setFormValues} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
