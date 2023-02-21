import styled from 'styled-components'
import { ReactComponent as ResetSvg } from '../../../assets/redo.svg'
import { ReactComponent as TimesSvg } from '../../../assets/times.svg'

export const StyledResetSvg = styled(ResetSvg)`
  height: 1.1rem;
  margin-right: 1rem;
`

export const StyledTimesSvg = styled(TimesSvg)`
  height: 1.25rem;
  margin-right: 1rem;
`

export const GameButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  width: 100%;
  margin-top: 2rem;
`

export const GameActionsButton = styled.button`
  outline: none;
  padding: 0.5rem 1rem;
  width: 80%;
  margin-inline: auto;
  background: linear-gradient(
    178deg,
    rgba(218, 178, 68, 1) 0%,
    rgba(237, 217, 163, 1) 100%
  );
  border: 4px solid #ffffff61;
  border-bottom: 4px solid #00000061;
  border-right: 4px solid #00000061;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
  :active,
  :hover {
    border: 4px solid #00000061;
    border-bottom: 4px solid #ffffff61;
    border-right: 4px solid #ffffff61;
    padding-top: 0.6rem;
    padding-bottom: 0.4rem;
  }
`
