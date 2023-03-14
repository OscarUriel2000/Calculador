import { useState } from 'react';
import './App.css'
// constante para modificar el tamaño de los botones
const buttonsClasses="btn btn-primary w-75";
function App() {
  const [screen, setScreen] = useState ('0')
  // funcion para el funcionemuento de los botones 
  const handleButtonClick = (e) => {
    const {value} = e.target;
    if (value === 'C'){
      setScreen('0');
      return;
    }
    if (screen === '0'){ 
    setScreen(value)
    } else {
    setScreen(`${screen}${value}`)
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
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="C"
            >C
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
            >/
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
            >*
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
            >-
            </button>
          </td>
        </tr>
        {/* Tercer fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClasses}
              value="7"
              onClick={(e) => handleButtonClick(e)}
            >7
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              value="8"
              onClick={(e) => handleButtonClick(e)}
            >8
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="9"
            >9
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
              className={buttonsClasses}
              style={{height:"80px"}}
            >+
            </button>
          </td>
        </tr>
        {/* Cuarta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="4"
            >4
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="5"
            >5
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="6"
            >6
            </button>
          </td>
        </tr>
        {/* Quinta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="1"
            >1
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="2"
            >2
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="3"
            >3
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
              className={buttonsClasses}
              style={{height:"80px"}}
            > =
            </button>
          </td>
        </tr>
        {/* Sexta fila*/}
        <tr>
        <td>
            <button type="button"
              className={buttonsClasses}
            >{'<-'}
            </button>
          </td>
          <td>
            <button type="button"
              className={buttonsClasses}
              onClick={(e) => handleButtonClick(e)}
              value="0"
            >0
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
            >.
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default App