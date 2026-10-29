import Link from "next/link";

interface LinkBtnProps {
  href: string;
  text: string;
  styling: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function LinkBtn({
  href,
  text,
  styling,
  icon,
  onClick,
}: LinkBtnProps) {
  return (
    <Link href={href} className={styling} onClick={onClick}>
      <span>{text}</span>
      {icon}
    </Link>
  );
}
