import React from 'react';

// eslint-disable-next-line react/prop-types
const Modal = ({ handleClose, show, children }) => (
  <div className={show ? 'modal display-block' : 'modal display-none'}>
    <section className="modal-main">
      {children}
      <button type="button" className="closeModal" onClick={handleClose}><img alt="close button" src="../close.svg" /></button>
    </section>
  </div>
);

export default Modal;
