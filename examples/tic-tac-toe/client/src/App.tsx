import React from 'react'
import { useValue, useMutation } from '@visly/state'
import { Board } from './Board';
import { Score } from './Score';
import { gameState, mutations } from './state';
import './App.css'

function App() {
  const currentPlayer = useValue(gameState, s => s.currentPlayer)
  const winner = useValue(gameState, s => s.winner)
  const noughtScore = useValue(gameState, s => s.noughtScore)
  const crossScore = useValue(gameState, s => s.crossScore)
  const ties = useValue(gameState, s => s.ties)

  const reset = useMutation(gameState, mutations.reset)

  return (
    <div>
      {winner === null && (
        <div>{currentPlayer}'s move</div>
      )}
      {winner && (
        <div>{winner} won!</div>
      )}
      {winner === false && (
        <div>It's a tie!</div>
      )}
      <Board disabled={!!winner}/>
      <div className='button' onClick={reset}>Reset</div>

      <div className='scores'>
        <Score title='PLAYER 1' score={noughtScore}/>
        <Score title='TIE GAMES' score={ties}/>
        <Score title='PLAYER 2' score={crossScore}/>
      </div>
    </div>
  )
}

export default App
