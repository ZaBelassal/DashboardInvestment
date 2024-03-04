import {calculateInvestmentResults} from './util/investment'

const result = calculateInvestmentResults({initialInvestment:15000,annualInvestment:900,expectedReturn:6,duration:10})
const handleClick = () => {
  console.log(result)
  console.log(result1)
}
const result1 = result.map(item => item.interest)

function App() {
  return (
    <>
    <h1>React Investment Calculator</h1>
    <div className="grid2x2">
      <div className="box box1">Initial investment <br/><input type="number"/></div>
      <div className="box box2">Annual investment <br/><input type="number"/></div>
    </div>
    <div className="grid2x2">
      <div className="box box3">Expected Return <br/><input type="number"/></div>
      <div className="box box4">Duration <br/><input type="number"/></div>
    </div>
    <button onClick={handleClick}>TEST</button>

  <table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    {result.map((item,key) => {
      return (
      <tbody key={key}>
        <tr>
          <td>{key}</td>
          <td>{item.valueEndOfYear}</td>
          <td>{item.interest}</td>
          <td>{result1.slice(0,key+1).reduce((accumulator,currentValue)=>{return accumulator + currentValue},0)}</td>
          <td>{item.annualInvestment}</td>
        </tr>
      </tbody>
      );
    })}
</table>
    </>
  );
}

export default App
