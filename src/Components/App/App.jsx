import React, { Component } from "react";
import Statistics from "./Statistic/Statistic";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handleFn = (e) => {
    this.setState((prevState) => {
      if (e.target.textContent === "Good") {
        return {
          good: prevState.good + 1,
        };
      }
      if (e.target.textContent === "Neutral") {
        return {
          neutral: prevState.neutral + 1,
        };
      }
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () =>
    this.setState((prevState) => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => {
      return {
        positive: Math.round((good / total) * 100),
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onHandleFn={this.handleFn} />
        </Section>

        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positive={this.state.positive}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
