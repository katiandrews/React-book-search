interface IProps {
  className: string;
  type: string;
  name: string;
  value: string;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  className,
  type,
  value,
  onChange,
  name,
  text,
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
    </label>
  );
}
