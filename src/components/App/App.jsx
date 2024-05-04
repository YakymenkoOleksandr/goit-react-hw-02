import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';
import css from './App.module.css';
import { useState, useEffect } from 'react';
export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('key');
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = arrayOfNumbers => {
    setValues(num => ({ ...num, [arrayOfNumbers]: num[arrayOfNumbers] + 1 }));
  };

  const buttonWasClicked = () => {
    return Object.values(values).some(value => value > 0);
  };

  const clickOnReset = () =>
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(values));
  }, [values]);

  const sumOfResponse = () => values.good + values.neutral + values.bad;
  const goodToBad = () =>
    Math.round((values.good / (values.good + values.bad)) * 100);

  return (
    <div className={css.sectionBody}>
      <Description />
      <Options
        values={values}
        updateFeedback={updateFeedback}
        clickOnRest={clickOnReset}
        buttonWasClicked={buttonWasClicked}
        sumOfresponse={sumOfResponse}
        goodToBad={goodToBad}
      />
      {buttonWasClicked() ? (
        <Feedback
          values={values}
          buttonWasClicked={buttonWasClicked}
          sumOfResponse={sumOfResponse}
          goodToBad={goodToBad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
