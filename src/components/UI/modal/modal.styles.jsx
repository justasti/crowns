import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
export const ModalBody = styled.div`
  position: relative;
  background-color: #edd9a3;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: min(90%, 350px);
  z-index: 4;
`
export const ModalHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
`
export const ModalConfirmButton = styled(ModalButton)`
  background-color: #420f60;
  color: white;
`
export const ModalCancelButton = styled(ModalButton)`
  background-color: #f44336;
  color: white;
`
