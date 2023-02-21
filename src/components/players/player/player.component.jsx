import { useState } from 'react'
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
import Modal from '../../UI/modal/modal.component'

const Player = ({ player }) => {
  const { removePlayer, addPlayerScore } = useContext(PlayersContext)
  const playerScoreRef = useRef('')
  const [showModal, setShowModal] = useState(false)

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

  const timeoutRef = useRef(null)

  const startTouch = () => {
    timeoutRef.current = setTimeout(() => {
      setShowModal(true)
    }, 700)
  }

  const endTouch = () => {
    clearInterval(timeoutRef.current)
  }

  const confirmDelete = () => {
    removePlayer(player.id)
    setShowModal(false)
  }

  return (
    <PlayerContainer onTouchStart={startTouch} onTouchEnd={endTouch}>
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
      {showModal && (
        <Modal
          message={`Ištrinti žaidėją ${player.name}?`}
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </PlayerContainer>
  )
}
export default Player
