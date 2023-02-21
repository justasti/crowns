import styled from 'styled-components'

export const PlayerContainer = styled.div`
  display: flex;
  width: min(500px, 80%);
  margin-bottom: 1rem;
`

export const ContainerLeft = styled.div`
  padding: 1rem;
  padding-right: 0;
  height: 100px;
  background-color: #edd9a3;
  border-radius: 10px 0 0 10px;
  width: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  form {
    display: flex;
    align-items: center;
  }
`

export const ContainerRight = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 0 10px 10px 0;
  background-color: #fcbf49;
  display: grid;
  place-content: center;
`

export const PlayerName = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
`

export const PlayerPoints = styled.div`
  position: relative;
`

export const PlayerPointsInput = styled.input`
  background-color: transparent;
  font-size: 1.75rem;
  font-weight: 500;
  padding: 0.25rem;
  color: #420f60;
  width: 100px;
  height: 2rem;
  outline: none;
  border: 2px #420f60 dotted;
  border-right: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const PointsAddButton = styled.button`
  left: 120px;
  bottom: 0px;
  background-color: #420f60;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-content: center;
  color: rgb(52, 195, 52);
  font-size: 2rem;
  font-weight: bold;
`

export const PlayerScore = styled.div`
  margin: 0;
  padding: 0;
  font-size: 2.75rem;
  font-weight: bold;
  color: #420f60;
`
