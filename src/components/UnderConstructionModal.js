import React from "react";
import "./UnderConstructionModal.css"; 

const UnderConstructionModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="construction-modal-overlay" onClick={onClose}>
      <div className="construction-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="construction-modal-header">
          <h5 className="modal-title ">Feature in Development</h5>
          <button className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>

        <div className="construction-modal-body">
          <p>This feature is currently in development. Thank you for your patience!</p>
        </div>

        <div className="construction-modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionModal;