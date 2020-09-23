import Modal from 'react-modal';
import React from 'react';

const OptionModal = (props) => (
  <Modal
    // closeTimeoutMS={1000} // didn't work, make content dispear first
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    className="modal"
  >
    <h3 className="modal__title">h3 from Modal</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      OK!
    </button>
  </Modal>
);
export default OptionModal;
