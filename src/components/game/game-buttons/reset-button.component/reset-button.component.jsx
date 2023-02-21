import { GameActionsButton, StyledResetSvg } from '../game-buttons.styles'
import { useContext, useState } from 'react'
import { PlayersContext } from '../../../../context/players.context'
import Modal from '../../../UI/modal/modal.component'

const ResetButton = () => {
  const [showModal, setShowModal] = useState(false)
  const { players, resetPlayerScore } = useContext(PlayersContext)
  const resetGame = () => {
    for (let player of players) {
      resetPlayerScore(player.id)
    }
    setShowModal(false)
  }

  return (
    <>
      <GameActionsButton onClick={() => setShowModal(true)}>
        <StyledResetSvg />
        Pradėti iš naujo
      </GameActionsButton>
      {showModal && (
        <Modal
          message='Atstatyti visų žaidėjų taškus?'
          onConfirm={resetGame}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  )
}
export default ResetButton
