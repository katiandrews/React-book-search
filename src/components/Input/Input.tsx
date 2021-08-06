import s from "../Form/Form.css";

interface IProps {
  className: string;
  type: string;
  name: string;
  value: string;
  text: string;
  error?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  className,
  type,
  value,
  onChange,
  name,
  text,
  error,
}: IProps) {
  return (
    <label className={`input ${className}`} htmlFor={name}>
      {text}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className={s.error}>*This input must be filled</span>}
    </label>
  );
}
