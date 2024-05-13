import Player from "./components/Player"
import GameBoard from "./components/GameBorad"
import { useState } from "react"
function App() {

  const [activePlayer,setActivePlayer] = useState('X');

  function handleBoxSelection(){
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ?'O' : 'X' );
  }
  

  return (
    <main>

      <div id="game-container">

        <ol id='players' className="highlight-player">
          
         <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
         <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
        </ol>

       <GameBoard  onSelectSquare={handleBoxSelection} activePlayerSymbol={activePlayer}/>
      </div>


     LOG

    </main>
  )
}

export default App
