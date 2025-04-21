// Um Button básico estilizado via Tailwind
export function Button({ children, className = '', ...props }) {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
}
