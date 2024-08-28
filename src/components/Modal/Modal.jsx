import React from 'react'
import './Modal.scss'

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null

    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal__body">{content.content}</div>
            </div>
        </div>
    )
}

export default Modal
