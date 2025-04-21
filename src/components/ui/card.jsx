// Um wrapper simples para "Card"
export function Card({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

// Um wrapper interno para conteúdo do Card
export function CardContent({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
