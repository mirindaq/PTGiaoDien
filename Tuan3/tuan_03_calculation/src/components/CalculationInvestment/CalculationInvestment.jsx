import React, { useState } from "react";
import "./CalculationInvestment.css";
import TableInvestment from "../TableInvestment/TableInvestment";

export default function CalculationInvestment() {
  const [start, setStart] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState([]);

  const handleChangeStart = (e) => {
    setStart(e.target.value);
  };

  const handleChangeRate = (e) => {
    setRate(e.target.value);
  };

  const handleChangeGoal = (e) => {
    setGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult([]); 

    let startMoney = parseFloat(start);
    const ratePercent = parseFloat(rate) / 100;
    const goalAmount = parseFloat(goal);

    let years = 1;
    let resultYear;
    let newResults = []; 

    while (startMoney < goalAmount) {
      resultYear = startMoney + startMoney * ratePercent;

      newResults.push({
        year: years,
        start: startMoney,
        rate: rate,
        endYear: resultYear.toFixed(0),
      });

      startMoney = resultYear;
      years++;
    }

    setResult(newResults); 
  };

  return (
    <div>
      <img
        src="https://triluat.com/public/uploads/d43a827389d4ea36ff943a9f0af9a496/images/cac-hinh-thuc-dau-tu-1.jpg"
        alt="hinhdautu"
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="start">Start: </label>
          <input type="text" id="rate" onChange={handleChangeStart} />
        </div>
        <div>
          <label htmlFor="rate">Rate: </label>
          <input type="text" id="rate" onChange={handleChangeRate} />
        </div>
        <div>
          <label htmlFor="goal">Goal: </label>
          <input type="text" id="goal" onChange={handleChangeGoal} />
        </div>

        <button className="btn-calculation">Calculation</button>
      </form>

      {result && (
        <div>
          <TableInvestment data={result} />
        </div>
      )}
    </div>
  );
}
