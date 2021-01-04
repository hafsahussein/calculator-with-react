import {useState} from 'react';
import Keyboard from "./components/keyboard";
import Calculator from "./components/calculator";

import './App.css'
const App = () => {
  const [state, stateSetter] = useState({
    result:'',
    history:''
  });

  // listen for the keyboard changes
  const handleChange = (button) =>{
    const {history, result} = state;
     const cName = button.className;
     if(cName === 'number'){
      stateSetter({
         ...state, result:result.length<15?result+button.id:result
       })
     }
     else if(cName === 'operator'){
       if(result===''&&history==='')
       return;
       else if(result!== ''&&history === '')
       stateSetter({
         ...state,
         history:result+button.id,
         result:''
       })
       else if(result===''&&!Number(history.charAt(history.length-1)))
        stateSetter({
          ...state, history:history.replace(/.$/,button.id)
        })
        else {
          stateSetter({
            ...state, history:history+result+button.id,
            result:''
          })
        }
     }
      else if(cName === 'calculate')
      calculate()
      else if(cName === 'backspace')  
        backspace()
      else if(cName === 'clear')
      clear();
     else if(cName==='minus-symbol')
     Minus()
     else if(cName === 'dot'){
       if(!(result.toString()).includes('.'))
       stateSetter({
         ...state, result:result+'.'
       })
     }

    }
    // clear the state (initialize it again)
      const clear = () =>{
        stateSetter({
          history:'',
          result:'',
        })
      }

      // backspace (remove the last number of the result number)
      const backspace = () =>{
        const {result} = state;
        stateSetter({
          ...state, result:String(result).replace(/.$/,"")
        })
      }

      // toggle minus symbol
      const Minus = () =>{
        stateSetter({
          ...state, result:state.result*-1
        })
      }

      // make the caculation
        const calculate = () =>{
          const {result, history} = state;
          if(!Number(history.charAt(history.length-1))&&result==='')
          return;
          stateSetter({
            ...state, result:eval(history+result),
            history:''
          })
         }
  return ( 
    <div className = "app">
    <Calculator result = {state.result} 
      history = {state.history} />
    <Keyboard 
    handleChange = {handleChange} 
    />
    </div>
   );
}
 
export default App;