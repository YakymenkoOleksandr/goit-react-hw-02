import css from './Feedback.module.css';
export default function Feedback({ values, buttonWasClicked }) {
  return (
    <>
      {buttonWasClicked() ? (
        <ul className={css.feedbackSectionUl}>
          <li className={css.feedbackSectionLi}>Good: {values.good}</li>
          <li className={css.feedbackSectionLi}>Neutral: {values.neutral}</li>
          <li className={css.feedbackSectionLi}>Bad: {values.bad}</li>
          <li className={css.feedbackSectionLi}>Total: {values.good + values.neutral + values.bad}</li>
          <li className={css.feedbackSectionLi}>
            Positive:{' '}
            {Math.round((values.good / (values.good + values.bad)) * 100)}%
          </li>
        </ul>
      ) : (
        <p className={css.feedbackSectionP}>No feedback yet</p>
      )}
    </>
  );
}
