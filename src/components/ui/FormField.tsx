interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'tel' | 'number';
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export function FormField({
  id,
  label,
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
}: FormFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-white/70" htmlFor={id}>
      {label}
      <input
        className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-neon-blue/70 focus:ring-2 focus:ring-neon-blue/35"
        id={id}
        name={name ?? id}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </label>
  );
}

