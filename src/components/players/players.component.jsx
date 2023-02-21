import { PlayersContext } from '../../context/players.context'
import { useContext } from 'react'
import Player from './player.component'
const Players = () => {
  const { players } = useContext(PlayersContext)
  return players.map((player) => <Player key={player.id} player={player} />)
}

export default Players
