import React, { useState } from 'react';
import GenericForm from './shared/GenericForm';

const Modal = ({ isOpen, onClose, onSubmit, fields }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <GenericForm fields={fields} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
