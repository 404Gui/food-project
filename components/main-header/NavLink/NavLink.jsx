import { usePathname } from "next/navigation";
import styles from "../MainHeader.module.css"
import Link from "next/link";

export function NavLink({href, children}) {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
}
