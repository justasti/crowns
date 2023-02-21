import { useContext, useRef } from 'react'
import { PlayersContext } from '../../../context/players.context'
import {
  PointsAddButton,
  ContainerLeft,
  ContainerRight,
  PlayerContainer,
  PlayerName,
  PlayerPointsInput,
  PlayerScore,
  PlayerPoints,
} from './player.styles'

const Player = ({ player }) => {
  const { removePlayer, addPlayerScore } = useContext(PlayersContext)
  const playerScoreRef = useRef('')

  const handlePlayerScoreChange = (e, type = 'increase') => {
    e.preventDefault()

    const score =
      type === 'increase'
        ? playerScoreRef.current.value
        : -playerScoreRef.current.value

    if (!score) return
    addPlayerScore(player.id, score)

    playerScoreRef.current.value = ''
  }

  return (
    <PlayerContainer onClick={() => removePlayer(player.id)}>
      <ContainerLeft>
        <PlayerName>{player.name}</PlayerName>
        <PlayerPoints>
          <form onSubmit={(e) => handlePlayerScoreChange(e)}>
            <PointsAddButton
              type='button'
              className='btn_add'
              style={{ color: 'red' }}
              onClick={(e) => handlePlayerScoreChange(e, 'decrease')}
            >
              -
            </PointsAddButton>
            <PlayerPointsInput
              id={player.id}
              type='number'
              ref={playerScoreRef}
              placeholder='taškai'
            />
            <PointsAddButton>+</PointsAddButton>
          </form>
        </PlayerPoints>
      </ContainerLeft>
      <ContainerRight>
        <PlayerScore>{player.score}</PlayerScore>
      </ContainerRight>
    </PlayerContainer>
  )
}
export default Player
