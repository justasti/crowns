import { GameButtonsContainer } from './game-buttons.styles'
import ResetButton from './reset-button.component/reset-button.component'
import NewGameButton from './new-game-button.component/new-game-button.component'

const GameButtons = () => {
  return (
    <>
      <GameButtonsContainer>
        <ResetButton />
        <NewGameButton />
      </GameButtonsContainer>
    </>
  )
}
export default GameButtons
