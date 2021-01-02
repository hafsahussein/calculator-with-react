const Calculator = ({result, history}) => {
   
    return ( 
        <div className="calculator">
            <div className = "history">{history}</div>
    <div className = "result">{Number(result).toLocaleString("en")}</div>
        </div>
     );
}
 
export default Calculator;