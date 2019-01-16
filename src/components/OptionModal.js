import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return(
        <div>
            <Modal
            isOpen={!!props.selectedOption}
            contentLabel='Selected Option'
            onRequestClose={props.handleCloseModal}
            closeTimeoutMS={200}
            className = {'modal'}
        >
        <h3 className="modal__title">Selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button button--small" onClick={props.handleCloseModal}> OK </button>
        </Modal>
        </div>
    )
}

export default OptionModal;