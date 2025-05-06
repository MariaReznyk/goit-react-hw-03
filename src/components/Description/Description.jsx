import styles from './Description.module.css';
import { SiCoffeescript } from 'react-icons/si';

export default function Description() {
  return (
    <>
      <h1 className={styles.header}>
        <SiCoffeescript color="#213547" size={48} />
        Sip Happens Café
        <SiCoffeescript color="#213547" size={48} />
      </h1>
      <p className={styles.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
