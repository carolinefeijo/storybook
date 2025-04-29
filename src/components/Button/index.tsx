import "./styles.css";

interface ButtonProps {
  label: string;
  color?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function Button({
  label,
  color = "#ce3bae",
  size = "medium",
  onClick,
}: ButtonProps) {
  return (
    <button
      // style={{ backgroundColor: color }}
      className={`btn ${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
