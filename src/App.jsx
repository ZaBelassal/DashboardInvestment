import {calculateInvestmentResults} from './util/investment'

const result = calculateInvestmentResults({initialInvestment:1,annualInvestment:100,expectedReturn:10,duration:2})
const handleClick = () => {
  console.log(result)
}
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
    </>
  );
}

export default App
