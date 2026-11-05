import Link from "next/link";

interface LinkBtnProps {
  href: string;
  text: string;
  styling: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function LinkBtn({ href, text, styling, icon, onClick }: LinkBtnProps) {
  return (
    <Link href={href} className={styling} onClick={onClick}>
      <span>{text}</span>
      {icon}
    </Link>
  );
}

interface FormBtnProps {
  type: "button" | "submit" | "reset";
  text: string;
  styling: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export function FormBtn({ type, text, styling, icon, disabled }: FormBtnProps) {
  return (
    <button type={type} className={styling} disabled={disabled}>
      <span>{text}</span>
      {icon}
    </button>
  );
}
