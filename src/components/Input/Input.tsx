interface IProps {
  className: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ className, type, value, onChange, name }: IProps) {
  return (
    <label className={`input ${className}`} htmlFor={name}>
      {name}
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
