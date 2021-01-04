const Calculator = ({result, history}) => {
   result = String(result).includes('.')? result: Number(result).toLocaleString("en");
    return ( 
        <div className="calculator">
            <div className = "history">{history}</div>
    <div className = "result">{result}</div>
        </div>
     );
}
 
export default Calculator;