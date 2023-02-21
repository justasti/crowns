import { PlayersContext } from '../../../context/players.context'
import { useContext, useRef } from 'react'
import {
  NewPlayerTitle,
  NewPlayerContainer,
  AddPlayerButton,
} from './new-player.styles'

const NewPlayer = () => {
  const { addNewPlayer } = useContext(PlayersContext)

  const newPlayerRef = useRef('')

  const handleAddNewPlayer = (e) => {
    e.preventDefault()

    addNewPlayer(newPlayerRef.current.value)

    newPlayerRef.current.value = ''
  }
  return (
    <>
      <NewPlayerTitle>Pridėti žaidėją</NewPlayerTitle>
      <NewPlayerContainer>
        <form onSubmit={handleAddNewPlayer}>
          <input placeholder='žaidėjo vardas' type='text' ref={newPlayerRef} />
          <AddPlayerButton>+</AddPlayerButton>
        </form>
      </NewPlayerContainer>
    </>
  )
}
export default NewPlayer
