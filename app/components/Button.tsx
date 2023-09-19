type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  icon?: React.ReactNode;
};
export default function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {icon && <i className="icon">{icon}</i>}
      {children}
    </button>
  );
}
