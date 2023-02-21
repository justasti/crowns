import { GameActionsButton, StyledTimesSvg } from '../game-buttons.styles'
import { useContext, useState } from 'react'
import { PlayersContext } from '../../../../context/players.context'
import Modal from '../../../UI/modal/modal.component'

const NewGameButton = () => {
  const [showModal, setShowModal] = useState(false)

  const { setPlayers } = useContext(PlayersContext)
  const newGame = () => {
    setPlayers([])
    setShowModal(false)
  }

  return (
    <>
      <GameActionsButton onClick={() => setShowModal(true)}>
        <StyledTimesSvg /> Ištrinti žaidėjus
      </GameActionsButton>
      {showModal && (
        <Modal
          message='Ištrinti visus žaidėjus?'
          onConfirm={newGame}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  )
}
export default NewGameButton
