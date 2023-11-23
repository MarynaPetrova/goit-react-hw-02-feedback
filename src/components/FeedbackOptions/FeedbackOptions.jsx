import { Component } from "react";
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <button className={css.button} onClick={this.props.onLeaveFeedback}>Good</button>
        <button className={css.button} onClick={this.props.onLeaveFeedback}>Neutral</button>
        <button className={css.button} onClick={this.props.onLeaveFeedback}>Bad</button>
      </>
    );
  }
}

export default FeedbackOptions;
