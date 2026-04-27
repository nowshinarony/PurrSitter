import "./Button.css"

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
}: ButtonProps) => (
  <button
    className={[
      "button",
      `button--${variant}`,
      `button--${size}`,
      fullWidth ? "btn--full-width" : "",
    ]
      .filter(Boolean)
      .join(" ")}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;