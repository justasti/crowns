import { PlayersContext } from '../../../context/players.context'
import { useContext } from 'react'
import {
  GameButtonsContainer,
  ResetButton,
  StyledResetSvg,
  StyledTimesSvg,
} from './game-buttons.styles'

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
    <GameButtonsContainer>
      <ResetButton onClick={resetGame}>
        <StyledResetSvg />
        Pradėti iš naujo
      </ResetButton>
      <ResetButton onClick={endGame}>
        <StyledTimesSvg /> Ištrinti žaidėjus
      </ResetButton>
    </GameButtonsContainer>
  )
}
export default GameButtons
