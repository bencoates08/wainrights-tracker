import { JsxElement } from "typescript";
import styles from "./headerLink.module.css";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

export interface HeaderLinkProps {
  /**
   * Link title
   */
  children: ReactNode;
  /**
   * Path to navigate to
   */
  path: string;
}

const HeaderLink = ({ children, path, ...props }: HeaderLinkProps) => {
  return (
    <Link className={styles.link} {...props} href={path}>
      {children}
    </Link>
  );
};

export default HeaderLink;
