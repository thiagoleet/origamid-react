import Label from "./Label";

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className="form-group">
      <Label htmlFor={id}>{label}:</Label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Input;
