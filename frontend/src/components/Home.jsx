import React from "react";
import Button from "./Button";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-secondary">
          <h1 className="text-light">Stock Prediction App</h1>
          <p className="text-light lead">
            This stock prediction application utilizes machine learning
            techniques, specifically employing Keras, and LSTM model, integrated
            within the Django framework. It forecasts future stock rices by
            analyzing 100-day and 200-day moving averages, essential indicators
            widely used by stock analysts to inform trading and investment
            decisions.
          </p>
          <Button text="Login" class="btn-info" url="/login"/>
        </div>
      </div>
    </>
  );
};

export default Home;
