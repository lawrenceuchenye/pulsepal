import styles from "./index.module.css";

const index = () => {
  return (
    <div className={styles.main_navbar_container}>
      <div className={styles.logo_container}>
        <i className="fa-brands fa-paypal"></i>
        <i className="fa fa-heartbeat"></i>
      </div>
      <div className={styles.comp_menu_container}>
        <div>
          <h3>Home</h3>
        </div>
        <div>
          <h3>Records </h3>
          <span>28</span>
        </div>
        <div>
          <h3>Chats </h3>
          <span>5</span>
        </div>
        <div>
          <h3>DIY Remedies</h3>
          <span>99+</span>
        </div>
      </div>
      <div className={styles.auth_container}>
        <h3>Get Started!</h3>
        <i className="fa fa-user"></i>
      </div>
    </div>
  );
};

export default index;
