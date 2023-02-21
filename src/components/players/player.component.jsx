import { useContext, useRef } from 'react'
import { PlayersContext } from '../../context/players.context'

const Player = ({ player }) => {
  const { removePlayer, addPlayerScore } = useContext(PlayersContext)
  const playerScoreRef = useRef('')

  const handlePlayerScoreChange = (e, type = 'increase') => {
    e.preventDefault()

    const score =
      type === 'increase'
        ? playerScoreRef.current.value
        : -playerScoreRef.current.value
    addPlayerScore(player.id, score)

    playerScoreRef.current.value = ''
  }

  return (
    <div className='player_container' onClick={() => removePlayer(player.id)}>
      <div className='container_left'>
        <p className='player_name'>{player.name}</p>
        <div className='player_points'>
          <form onSubmit={(e) => handlePlayerScoreChange(e)}>
            <button
              type='button'
              className='btn_add'
              style={{ color: 'red' }}
              onClick={(e) => handlePlayerScoreChange(e, 'decrease')}
            >
              -
            </button>
            <input
              id={player.id}
              type='number'
              className='player_points-input'
              ref={playerScoreRef}
              placeholder='taškai'
            />
            <button className='btn_add'>+</button>
          </form>
        </div>
      </div>
      <div className='container_right'>
        <p className='player_score'>{player.score}</p>
      </div>
    </div>
  )
}
export default Player
