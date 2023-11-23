import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hdrInc = (ev) => {
    ev.preventDefault();
    if (ev.target.innerText === "Good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    }
    if (ev.target.innerText === "Neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (ev.target.innerText === "Bad") {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback() {
    return (
      this.state.good +
      this.state.neutral +
      this.state.bad
    );
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.countTotalFeedback() > 0)
        ? (this.state.good / this.countTotalFeedback()) * 100
        : 0
    );
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.hdrInc} />
        </Section>
        {this.countTotalFeedback() > 0 ?
          (<Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>): (<Notification message="There is no feedback" />)}
      </>
    );
  }
}

export default App;
