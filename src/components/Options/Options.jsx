import styles from './Options.module.css';
import clsx from 'clsx';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';

export default function Options({
  updateFunction,
  resetButton,
  resetFunction,
}) {
  return (
    <div className={styles.buttonSet}>
      <button
        className={styles.button}
        onClick={() => {
          updateFunction('good');
        }}
      >
        Good
        <BsEmojiSmile size={22} />
      </button>
      <button
        className={styles.button}
        onClick={() => {
          updateFunction('neutral');
        }}
      >
        Neutral
        <BsEmojiNeutral size={22} />
      </button>
      <button
        className={styles.button}
        onClick={() => {
          updateFunction('bad');
        }}
      >
        Bad
        <BsEmojiFrown size={22} />
      </button>
      {resetButton && (
        <button
          className={clsx(styles.button, styles.btnRefresh)}
          onClick={resetFunction}
        >
          Reset
          <TbRefresh color="#8B0000" size={22} />
        </button>
      )}
    </div>
  );
}
