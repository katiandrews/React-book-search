import "./Button.css";

interface IProps {
  text: string;
  classNames: string;
  isSubmit?: boolean;
}

export function Button({ text, classNames, isSubmit }: IProps) {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`button ${classNames}`}
    >
      {text}
    </button>
  );
}
