import styles from "./ListWidgetItem.module.css";

interface ListWidgetItemProps {
  /**
   * Optional title header
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
const ListWidgetItem = ({ title, ...props }: ListWidgetItemProps) => {
  return (
    <div className={styles.item} {...props}>
      <h2 className={styles.itemTitle}>{title}</h2>
    </div>
  );
};

export default ListWidgetItem;
