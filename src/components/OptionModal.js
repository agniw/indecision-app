import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return(
        <div>
            <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.handleCloseModal}
        >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleCloseModal}> OK </button>
        </Modal>
        </div>
    )
}

export default OptionModal;