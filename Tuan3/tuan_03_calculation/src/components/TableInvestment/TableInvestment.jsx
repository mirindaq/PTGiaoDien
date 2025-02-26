import React from "react";
import './TableInvestment.css'


export default function TableInvestment(props) {
  const { data } = props;
  return (
    <div>
      {data && (
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Start</th>
              <th>Rate</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.year}</td>
                <td>{entry.start}</td>
                <td>{entry.rate}</td>
                <td>{entry.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
