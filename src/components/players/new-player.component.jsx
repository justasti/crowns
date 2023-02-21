import { PlayersContext } from '../../context/players.context'
import { useContext, useRef } from 'react'

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
      <h1>Pridėti žaidėją</h1>
      <div className='new_player'>
        <form onSubmit={handleAddNewPlayer}>
          <input
            placeholder='žaidėjo vardas'
            type='text'
            ref={newPlayerRef}
            className='player_points-input wide'
          />
          <button className='btn_add-alt'>+</button>
        </form>
      </div>
    </>
  )
}
export default NewPlayer
