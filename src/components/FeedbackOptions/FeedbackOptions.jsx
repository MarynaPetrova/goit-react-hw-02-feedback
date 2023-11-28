import React, { Component } from "react";
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  increaseFeedback = (option) => {
    this.props.onLeaveFeedback(option);
  }

  render() {
    return (
      <>
        <button className={css.button} onClick={() => this.increaseFeedback('Good')}>Good</button>
        <button className={css.button} onClick={() => this.increaseFeedback('Neutral')}>Neutral</button>
        <button className={css.button} onClick={() => this.increaseFeedback('Bad')}>Bad</button>
      </>
    );
  }
}

export default FeedbackOptions;