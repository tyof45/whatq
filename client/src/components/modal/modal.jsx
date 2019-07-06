import React from 'react';

const Modal = ({ handleClose, show, children }) => (
  <div className={show ? 'modal display-block' : 'modal display-none'}>
    <section className="modal-main">
      {children}
      <button type="button" className="closeModal" onClick={handleClose}><img alt="close button" src="../close.svg" /></button>
    </section>
  </div>
);

export default Modal;
