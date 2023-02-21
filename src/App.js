import React, { useContext } from 'react'
import GameButtons from './components/game/game-buttons/game-buttons.component'
import NewPlayer from './components/players/new-player/new-player.component'
import Players from './components/players/players/players.component'
import { PlayersContext } from './context/players.context'

function App() {
  const { players } = useContext(PlayersContext)

  return (
    <>
      <img src='https://i.imgur.com/vAb4wiq.png' alt='' />
      <Players />
      <NewPlayer />
      {players.length > 0 && <GameButtons />}
    </>
  )
}

export default App
