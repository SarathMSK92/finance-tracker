import React, { useEffect } from 'react'
import './Modal.scss'

const Modal = (props) => {
    const { modalRef, overlayClass, closeOnClick, children, isModalOpen, hideModal } = props;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                hideModal();  // Close modal on pressing Esc key
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, hideModal]);

    if (!isModalOpen) return null;



    const handleClickOutside = (e) => {
        hideModal()
    }



    return (
        <div
            className={`modal-overlay ${overlayClass}`}
            onClick={(e) => handleClickOutside(e)}
            ref={modalRef}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div >
    )
}


export default Modal
