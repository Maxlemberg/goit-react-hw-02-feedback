import React from "react";

const FeedbackOptions = ({ onHandleFn }) => (
  <div>
    <button type="button" onClick={onHandleFn}>
      Good
    </button>
    <button type="button" onClick={onHandleFn}>
      Neutral
    </button>
    <button type="button" onClick={onHandleFn}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
