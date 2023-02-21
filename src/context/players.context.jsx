import { createContext, useEffect, useState } from 'react'

export const PlayersContext = createContext({
  players: [],
  setPlayers: () => {},
  addNewPlayer: () => {},
  removePlayer: () => {},
  addPlayerScore: () => {},
  resetPlayerScore: () => {},
})

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem('players')) || []
  )

  // helper function
  const updateScore = (players, playerId, score) => {
    const playerIndex = players.findIndex(
      (playerToFind) => playerToFind.id === playerId
    )
    const updatedScore = score === 0 ? 0 : players[playerIndex].score + +score
    const updatedPlayer = { ...players[playerIndex], score: updatedScore }
    const updatedPlayers = [...players]
    updatedPlayers[playerIndex] = updatedPlayer

    return updatedPlayers
  }

  const addNewPlayer = (newPlayer) => {
    if (!newPlayer) return

    setPlayers((prevState) => [
      ...prevState,
      { id: players.length, name: newPlayer, score: 0 },
    ])
  }

  const resetPlayerScore = (playerId) => {
    setPlayers((prevPlayers) => updateScore(prevPlayers, playerId, 0))
  }

  const removePlayer = (playerId) => {
    setPlayers((prevState) =>
      prevState.filter((player) => player.id !== playerId)
    )
  }

  const addPlayerScore = (playerId, score, type = 'increase') => {
    if (type === 'decrease') score = score * -1
    setPlayers((prevPlayers) => updateScore(prevPlayers, playerId, score))
  }

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

  const value = {
    players,
    addNewPlayer,
    removePlayer,
    addPlayerScore,
    resetPlayerScore,
    setPlayers,
  }

  return (
    <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
  )
}
