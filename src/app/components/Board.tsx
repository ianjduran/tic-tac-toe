'use client'
import Tile from './Tile'
import { useState } from 'react'

// Board component
export default function Board(){
    const [xIsNext, setXIsNext] = useState(true);
    const [squares,setSquares] = useState(Array(9).fill(null))
    
    /**
     * Calcula el jugador de 3 en raya.
     *
     * @param {Array} squares arreglo de las celdas
     * @return {string} valor del ganador (X o O).
     */
    function calculateWinner(squares: any) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
    
    /**
     * Modifica el valor de las celdas del tablero.
     *
     * @param {number} i celda a ser modificada
     */
    function handleClick(i: number) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    // Calcula el estado del juego
    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Turn: " + (xIsNext ? "X" : "O");
    }

    // Reinicia el juego
    function restartGame(){
        setXIsNext(true);
        setSquares(Array(9).fill(null));
    }

    return (
        <>
            <div>{status}</div>
            <div className='grid grid-cols-3 row-span-3 gap-4 mb-4'>
                <Tile value={squares[0]} onSquareClick={() => handleClick(0)} ></Tile>
                <Tile value={squares[1]} onSquareClick={() => handleClick(1)} ></Tile>
                <Tile value={squares[2]} onSquareClick={() => handleClick(2)} ></Tile>
                <Tile value={squares[3]} onSquareClick={() => handleClick(3)} ></Tile>
                <Tile value={squares[4]} onSquareClick={() => handleClick(4)} ></Tile>
                <Tile value={squares[5]} onSquareClick={() => handleClick(5)} ></Tile>
                <Tile value={squares[6]} onSquareClick={() => handleClick(6)} ></Tile>
                <Tile value={squares[7]} onSquareClick={() => handleClick(7)} ></Tile>
                <Tile value={squares[8]} onSquareClick={() => handleClick(8)} ></Tile>
            </div>
            <button onClick={restartGame} className='px-6 py-4 hover:scale-95 active:ring active:ring-slate-400 transition ease-int-out bg-sky-950 rounded-md'>Restart Game</button>
        </>
    )
}