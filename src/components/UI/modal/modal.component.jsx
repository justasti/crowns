import React from 'react'
import { createPortal } from 'react-dom'
import {
  ModalWrapper,
  ModalBackdrop,
  ModalBody,
  ModalCancelButton,
  ModalConfirmButton,
  ModalHeader,
} from './modal.styles'

const Modal = ({ message, onConfirm, onCancel }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel()
    }
  }
  return createPortal(
    <ModalWrapper>
      <ModalBackdrop onClick={handleBackdropClick}></ModalBackdrop>
      <ModalBody>
        <ModalHeader>{message}</ModalHeader>
        <div>
          <ModalConfirmButton onClick={onConfirm}>Yes</ModalConfirmButton>
          <ModalCancelButton onClick={onCancel}>No</ModalCancelButton>
        </div>
      </ModalBody>
    </ModalWrapper>,
    document.getElementById('portal')
  )
}

export default Modal
