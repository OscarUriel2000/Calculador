import { useState } from 'react';
import './App.css'
import Button from './components/buttons';
// constante para modificar el tamaño de los botones
const buttonClasses="btn btn-primary w-75";
function App() {
  const [operator,setOperator] = useState('');
  const [number1, setNumber1] = useState ('');
  const [clearScreen, setClearScreen] = useState(false);
  const [screen, setScreen] = useState ('0');
  // funcion para el funcionemuento de los botones 
  const handleButtonClick = (e) => {
    const {value} = e.target;
    if (value === '.'){
      if (screen.includes('.'))
      return; 
    }
    if (value === 'C'){
      setScreen('0');
      return;
    }
    if (clearScreen){
      setScreen(value);
      setClearScreen(false);
      return;
    }
    if(screen === '0' && value !== '.'){
      setScreen(value)
      return;
    }
    setScreen(`${screen}${value}`)
  }
  // Boton de borrar
  const handleDelButtonClick = () => {
    if(screen.length === 1){
      setScreen('0');
      return;
    }
      setScreen(screen.slice(0, -1));
  }
  const handleOperationButtonClick = (e) => {
    setOperator(e.target.value);
    setNumber1(screen);
    setClearScreen(true);
  }
  const handleEqualButtonClick = () => {
    const a = +number1;
    const b = +screen;
    switch (operator) {
      case "+":
        setScreen((a+b).toString());
        break;
      case "-":
        setScreen((a-b).toString());
        break;
      case "*":
        setScreen((a*b).toString());
        break;
      case "/":
        setScreen((a/b).toString());
        break;
        default:
        break;
    }
  }
  return (
    <div className='app'>
      <h1 className='shadow-sm'>Calculator</h1>
      <table>
        {/* First row*/}
        <tr>
          <td colSpan={4} style={{
            border: "1px solid black",
            textAlign: "end"
            }}>
            <h2>{screen}</h2>
          </td>
        </tr>
        {/* Segunda fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="C"
              onClick={(e) => handleButtonClick(e)}
            >C
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="/"
              onClick={(e) => handleOperationButtonClick (e)}
            >/
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="*"
              onClick={(e) => handleOperationButtonClick (e)}
            >*
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="-"
              onClick={(e) => handleOperationButtonClick (e)}
            >-
            </button>
          </td>
        </tr>
        {/* Tercer fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="7"
              onClick={(e) => handleButtonClick(e)}
              >7
            </button>
          </td>
          <td>
            {/* <button type='button'
              className={buttonClasses}
              value="8"
              onClick={(e) => handleButtonClick(e)}
            >8
            </button> */}
            <Button 
            style={buttonClasses}
            handleClick={handleButtonClick}/>     
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="9"
              onClick={(e) => handleButtonClick(e)}
            >9
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
              className={buttonClasses}
              style={{height:"80px"}}
              value="+"
              onClick={(e) => handleOperationButtonClick (e)}
            >+
            </button>
          </td>
        </tr>
        {/* Cuarta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="4"
              onClick={(e) => handleButtonClick(e)}
            >4
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="5"
              onClick={(e) => handleButtonClick(e)}
            >5
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="6"
              onClick={(e) => handleButtonClick(e)}
            >6
            </button>
          </td>
        </tr>
        {/* Quinta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonClasses}
              value="1"
              onClick={(e) => handleButtonClick(e)}
            >1
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="2"
              onClick={(e) => handleButtonClick(e)}
            >2
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="3"
              onClick={(e) => handleButtonClick(e)}
            >3
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
              className={buttonClasses}
              style={{height:"80px"}}
              onClick={handleEqualButtonClick}
            > =
            </button>
          </td>
        </tr>
        {/* Sexta fila*/}
        <tr>
        <td>
            <button type="button"
              className={buttonClasses}
              onClick={handleDelButtonClick}
            >{'DEL'}
            </button>
          </td>
          <td>
            <button type="button"
              className={buttonClasses}
              value="0"
              onClick={(e) => handleButtonClick(e)}
            >0
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonClasses}
              value="."
              onClick={(e) => handleButtonClick(e)}
            >.
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default App