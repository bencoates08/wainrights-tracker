import ListWidgetHeader from "../../molecules/ListWidgetHeader/ListWidgetHeader";
import ListWidgetItem from "../../molecules/ListWidgetItem/ListWidgetItem";
import styles from "./ListWidget.module.css";

interface ListWidgetProps {
  /**
   * Optional title header
   */
  title?: string;
  /**
   *
   */
  listItems?: { title: string }[];
}

/**
 * Primary UI component for user interaction
 */
const ListWidget = ({ title, listItems, ...props }: ListWidgetProps) => {
  const handleAddClick = () => {};

  return (
    <div className={styles.widget} {...props}>
      <ListWidgetHeader title={title} onAddClick={handleAddClick} />
      <div className={styles.widgetItems}>
        {listItems?.map((item) => {
          return <ListWidgetItem key={item.title} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default ListWidget;
