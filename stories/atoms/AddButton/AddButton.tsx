import styles from "./addButton.module.css";

interface AddButtonProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const AddButton = ({ ...props }: AddButtonProps) => {
  return <button type="button" className={styles.button} {...props} />;
};

export default AddButton;
