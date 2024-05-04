import css from './Feedback.module.css';
export default function Feedback({ values, sumOfResponse, goodToBad}) {
  return (
        <ul className={css.feedbackSectionUl}>
          <li className={css.feedbackSectionLi}>Good: {values.good}</li>
          <li className={css.feedbackSectionLi}>Neutral: {values.neutral}</li>
          <li className={css.feedbackSectionLi}>Bad: {values.bad}</li>
          <li className={css.feedbackSectionLi}>Total: {sumOfResponse()}</li>
          <li className={css.feedbackSectionLi}>
            Positive:{goodToBad()}%
          </li>
        </ul>
  );
}
