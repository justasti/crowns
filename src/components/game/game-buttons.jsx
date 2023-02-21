import { PlayersContext } from '../../context/players.context'
import { useContext } from 'react'

const GameButtons = () => {
  const { players, setPlayers, resetPlayerScore } = useContext(PlayersContext)

  const resetGame = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Pradėti iš naujo?')) return
    for (let player of players) {
      resetPlayerScore(player.id)
    }
  }

  const endGame = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Ar tikrai norite baigti žaidimą?')) return
    setPlayers([])
  }

  return (
    <div className='game_buttons'>
      <p className='reset_game' onClick={resetGame}>
        &#8634;
      </p>
      <p className='end_game' onClick={endGame}>
        &#10005;
      </p>
    </div>
  )
}
export default GameButtons
