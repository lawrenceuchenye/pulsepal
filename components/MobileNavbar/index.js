import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.mobile_menu}>
      <div className={styles.menu_item}>
        <i className="fa fa-home"></i>
        <h3>Home</h3>
      </div>
      <div className={styles.menu_item}>
        <i className="fa fa-database"></i>
        <h3>Records</h3>
        <span>35</span>
      </div>
      <div className={styles.menu_item}>
        <i className="fas fa-comment-alt"></i>
        <span>28</span>
        <h3>Chats</h3>
      </div>
      <div className={styles.menu_item}>
        <i className="fas fa-first-aid"></i>
        <h3>DIY Remedies</h3>
        <span>99+</span>
      </div>
    </div>
  );
};

export default index;
