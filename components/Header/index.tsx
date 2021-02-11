import Logo from '../../ui/svg/pokemon-logo.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
