export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "secondary";
  disabled?: boolean;
}
