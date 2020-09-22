import Modal from 'react-modal';
import React from 'react';

const OptionModal = (props) => (
  <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option">
    <h3>h3 from Modal</h3>
    <p>{props.selectedOption}</p>
  </Modal>
);
export default OptionModal;
