import { useState } from 'react';
import './App.css'
// constante para modificar el tamaño de los botones
const buttonsClasses="btn btn-primary w-75";
function App() {
  const [screen, setScreen] = useState ('0')
  // funcion para el funcionemuento de los botones 
  const handleButtonClick = (e) => {
    const {value} = e.target;
    if (value === '.'){
      // if (screen.indexOf(value) !== -1) return;
      if (screen.includes('.')) return; 
    }
    if (value === 'C'){
      setScreen('0');
      return;
    }
    if (screen === '0' && value !== '.'){
      setScreen(value)
    } else {
    setScreen(`${screen}${value}`)
   }
  }
  // Boton de borrar
  const handleDelButtonClick = () => {
    if(screen.length === 1){
      setScreen('0');
      return;
    }
      setScreen(screen.slice(0, -1));
  }
  // const handleDelButtonClick = () => {
  //   if(screen.length === 1){
  //     setScreen('0');
  //     return;
  //   } else {
  //     setScreen(screen.slice(0, -1));
  //   }
  // }
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
              value="C"
              onClick={(e) => handleButtonClick(e)}
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
              value="9"
              onClick={(e) => handleButtonClick(e)}
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
              value="4"
              onClick={(e) => handleButtonClick(e)}
            >4
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              value="5"
              onClick={(e) => handleButtonClick(e)}
            >5
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
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
              className={buttonsClasses}
              value="1"
              onClick={(e) => handleButtonClick(e)}
            >1
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              value="2"
              onClick={(e) => handleButtonClick(e)}
            >2
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
              value="3"
              onClick={(e) => handleButtonClick(e)}
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
              onClick={handleDelButtonClick}
            >{'DEL'}
            </button>
          </td>
          <td>
            <button type="button"
              className={buttonsClasses}
              value="0"
              onClick={(e) => handleButtonClick(e)}
            >0
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClasses}
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