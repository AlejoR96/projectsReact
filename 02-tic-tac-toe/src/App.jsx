import { useState } from 'react'
import './App.css'

// Definicion de variables iniciales 
const TURNS = {
  X: 'x',
  O: 'o'
}



const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
 // Funcion para hacer click en donde el usuario sepa que es su turno
 const handleClick = () => {
  updateBoard(index)
 }

 return(
   <div onClick={handleClick} className={className}>
    {children}
   </div>
 )
}

const WINNER_COMBOS = [
  [0,1,3],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


function App() {

  // Variables para ser uso de la tabla 
  
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  // Variables para saber el ganador o empate

  const [winner, setWinner] = useState(null);

  // Paramentro para validar cual es el ganador o perdedor 

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null;

  }
  // Funcion para actualizar turnos 

  const updateBoard = (index) => {
    // Condicional para no sobreescribir si ya se tiene algo
    if(board[index]) return 
    // Actualizar el tablero 
    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el tablero 
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  // Detectar el gandor  min 32:08

 return(

  <main className='board'>
    <h1>Tic Tac Toe</h1>
    <section className='game'>
    {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
    }
    </section>

    <section className="turn">
      <Square isSelected= {turn === TURNS.X}>
       {TURNS.X}
      </Square>
      <Square isSelected= {turn === TURNS.O}>
       {TURNS.O}
      </Square>
    </section>
  </main>
  
 );
}

export default App
