import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img id="logo" src="/images/Logo.png" alt="logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;