import React, { useState } from 'react'
import './TicTacToe.css'
import calculateWinner from './CalculateWinner'

function TicTacToe() {
    
    const [turn, setTurn] = useState('x')
    const [cells, setCells] = useState(Array(9).fill(''))
    
    const restartHandler = () => {
        setCells(Array(9).fill(''))
    }
    
    const winner = calculateWinner(cells);

    const handleClick = ( num ) => {

        if(winner) {
            return
        }

        if(cells[num] !== '') {
            return
        }
        let squares = [...cells]
        
        if (turn === 'x') {
            setTurn('O')
            squares[num] = 'x'
        }else{
            squares[num] = 'O'
            setTurn('x')
        }
        console.log(squares)
        setCells(squares)
    }
    
    const Square = ( {num} ) => {
        return(
            <td onClick={() => handleClick(num)}><b>{cells[num]}</b></td>
        )
    }

    return (
        <div className='container'>
            <h3>Turn: {turn}</h3>
            <table>
                <tbody>
                    <tr>
                        <Square num={0} />
                        <Square num={1} />
                        <Square num={2} />
                    </tr>
                    <tr>
                        <Square num={3} />
                        <Square num={4} />
                        <Square num={5} />
                    </tr>
                    <tr>
                        <Square num={6} />
                        <Square num={7} />
                        <Square num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                <b>{winner}</b> is the winner!!!
                
                <button onClick={restartHandler}>restart</button>
                </>
                )}
        </div>
    )
}

export default TicTacToe
