import { useState, useEffect } from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <Section>
      <Container>
        <PageHeader>Homework #2</PageHeader>
      </Container>

      <Container>
        <Description />

        <Options
          updateFunction={updateFeedback}
          resetButton={Boolean(totalFeedback)}
          resetFunction={resetFeedback}
        />

        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
      </Container>
    </Section>
  );
}

export default App;
