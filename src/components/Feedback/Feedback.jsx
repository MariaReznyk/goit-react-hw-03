import styles from './Feedback.module.css';
import clsx from 'clsx';

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={styles.feedbackSet}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        Positive:{' '}
        <span
          className={clsx(
            positiveFeedback >= 80 && styles.feedbackGreen,
            positiveFeedback >= 60 &&
              positiveFeedback < 80 &&
              styles.feedbackYellow,
            positiveFeedback < 60 && styles.feedbackRed,
          )}
        >
          {positiveFeedback}%
        </span>
      </p>
    </div>
  );
}
