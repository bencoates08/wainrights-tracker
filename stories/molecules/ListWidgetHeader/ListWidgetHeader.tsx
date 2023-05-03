import AddButton from "../../atoms/AddButton/AddButton";
import styles from "./ListWidgetHeader.module.css";

interface ListWidgetHeaderProps {
  /**
   * Optional title header
   */
  title?: string;
  /**
   * Optional click handler
   */
  onAddClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ListWidgetHeader = ({
  title,
  onAddClick,
  ...props
}: ListWidgetHeaderProps) => {
  return (
    <div className={styles.header} {...props}>
      <h2 className={styles.headerTitle}>{title}</h2>
      {onAddClick && <AddButton onClick={onAddClick} />}
    </div>
  );
};

export default ListWidgetHeader;
