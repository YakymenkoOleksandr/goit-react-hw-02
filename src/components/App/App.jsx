import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import css from './App.module.css'
import { useState, useEffect } from 'react';
export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('key');
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const clickOnGood = () =>
    setValues({
      ...values,
      good: values.good + 1,
    });

  const clickOnNeutral = () =>
    setValues({ ...values, neutral: values.neutral + 1 });

  const clickOnBad = () => setValues({ ...values, bad: values.bad + 1 });

  const buttonWasClicked = () => {
    return Object.values(values).some(value => value > 0);
  };

  const clickOnRest = () =>
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(values));
  }, [values]);

  return (
    <div className={css.sectionBody}>
      <Description />
      <Options
        values={values}
        clickOnGood={clickOnGood}
        clickOnNeutral={clickOnNeutral}
        clickOnBad={clickOnBad}
        clickOnRest={clickOnRest}
        buttonWasClicked={buttonWasClicked}
      />
      <Feedback values={values} buttonWasClicked={buttonWasClicked} />
    </div>
  );
}
