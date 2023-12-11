import React from 'react';
import classes from './Modal.module.css';

const Modal = ({active, setModalActive, children}) => {
    return (
        <div className={active ? `${classes.modal} ${classes.active}` : classes.modal} onClick={() => {setModalActive(false)}}>
            <div className={active ? `${classes.modalContent} ${classes.active}` : classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;