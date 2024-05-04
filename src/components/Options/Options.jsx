import css from './Options.module.css';

export default function Options({
  updateFeedback,
  clickOnRest,
  buttonWasClicked,
}) {
  return (
    <div>
      <button
        className={css.raitingButtons}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.raitingButtons}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.raitingButtons}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {buttonWasClicked() ? (
        <button className={css.raitingButtons} onClick={clickOnRest}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
