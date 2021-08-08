import "./Button.css";

interface IProps {
  text: string;
  classNames: string;
  isSubmit?: boolean;
  onSubmit: (e: React.SyntheticEvent) => void;
}

export function Button({ text, classNames, isSubmit, onSubmit }: IProps) {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`button ${classNames}`}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}
