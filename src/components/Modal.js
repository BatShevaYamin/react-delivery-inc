import React, { useState } from 'react';
import GenericForm from './shared/GenericForm';

const Modal = ({ isOpen, onClose, onSubmit, fields }) => {

  const handleSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} role="dialog" style={{ display: isOpen ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className="modal-dialog" role="document" style={{ backgroundColor: '#fefefe', padding: '20px', border: '1px solid #888', width: '80%', maxWidth: '600px' }}>
        <div className="modal-content" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="modal-header" style={{ padding: '10px 16px', backgroundColor: '#fefefe', borderBottom: '1px solid #ddd' }}>
            <button type="button" className="close" onClick={onClose} style={{ color: "black", marginLeft: 'auto', fontSize: '24px', fontWeight: 'bold', border: 'none', background: 'none', cursor: 'pointer', outline: 'none' }}>
              <span>&times;</span>
            </button>
          </div>
          <h5 className="modal-title" style={{ margin: 0 }}>Create Package</h5>
          <div className="modal-body" style={{ padding: '10px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <GenericForm fields={fields} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Modal;
