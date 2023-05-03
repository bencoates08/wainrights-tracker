import HeaderLink from "../../atoms/HeaderLink/HeaderLink";
import styles from "./header.module.css";

interface Header {
  links: {
    title: string;
    path: string;
  }[];
}

const Header = ({ links, ...props }: Header) => {
  return (
    <header>
      <nav className={styles.header} {...props}>
        {links.map((link) => {
          return (
            <HeaderLink key={link.path} path={link.path}>
              {link.title}
            </HeaderLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
