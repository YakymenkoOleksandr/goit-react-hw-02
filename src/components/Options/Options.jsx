import css from './Options.module.css';

export default function Options({
  clickOnGood,
  clickOnNeutral,
  clickOnBad,
  clickOnRest,
  buttonWasClicked,
}) {
  return (
    <div>
      <button className={css.raitingButtons} onClick={clickOnGood}>
        Good
      </button>
      <button className={css.raitingButtons} onClick={clickOnNeutral}>
        Neutral
      </button>
      <button className={css.raitingButtons} onClick={clickOnBad}>
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
