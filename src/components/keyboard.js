const Keyboard = ({handleChange}) => {
    const handleClick = (e) =>{
        handleChange(e.target)
    }
    return ( 
        <div className="keyboard">
            <button onClick = {handleClick} className = "operator" id = "%">%</button>
            <button onClick = {handleClick} className = "backspace" id = "backspace">CE</button>
            <button onClick = {handleClick} className = "clear" id = "clear">C</button>
            <button onClick = {handleClick} className = "operator" id = "*">&times;</button>
            <button onClick = {handleClick} className = "number" id = "7">7</button>
            <button onClick = {handleClick} className = "number" id = "8">8</button>
            <button onClick = {handleClick} className = "number" id = "9">9</button>
            <button onClick = {handleClick} className = "operator" id = "/">&divide;</button>
            <button onClick = {handleClick} className = "number" id = "4">4</button>
            <button onClick = {handleClick} className = "number" id = "5">5</button>
            <button onClick = {handleClick} className = "number" id = "6">6</button>
            <button onClick = {handleClick} className = "operator" id = "-">-</button>
            <button onClick = {handleClick} className = "number" id = "1">1</button>
            <button onClick = {handleClick} className = "number" id = "2">2</button>
            <button onClick = {handleClick} className = "number" id = "3">3</button>
            <button onClick = {handleClick} className = "operator" id = "+">+</button>
            <button onClick = {handleClick} className = "minus-symbol">-/+</button>
            <button onClick = {handleClick} className = "number" id = "0">0</button>
            <button onClick = {handleClick} className = "dot" id = "dot">.</button>
            <button onClick = {handleClick} className = "calculate" id = "calculate">=</button>
        </div>
     );
}
 
export default Keyboard;