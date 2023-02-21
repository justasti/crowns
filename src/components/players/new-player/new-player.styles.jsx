import styled from 'styled-components'

export const NewPlayerTitle = styled.h1`
  color: #edd9a3;
  text-transform: uppercase;
  font-weight: bold;
  margin-block: 2rem 1rem;
`

export const NewPlayerContainer = styled.div`
  display: flex;

  form {
    display: flex;
    align-items: center;
  }

  input {
    color: #fff;
    background-color: transparent;
    font-size: 1.75rem;
    font-weight: 500;
    padding: 0.25rem;
    color: #edd9a3;
    width: 300px;
    height: 2rem;
    outline: none;
    border: 2px #edd9a3 dotted;
    border-right: none;
  }
`

export const AddPlayerButton = styled.button`
  background-color: #edd9a3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(26, 138, 26);
  font-size: 2rem;
  font-weight: bold;
  width: 2rem;
  height: 2rem;
`
