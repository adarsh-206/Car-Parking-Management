import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ExitTimeProps = {
    exitTime: string;
    setExitTime: React.Dispatch<React.SetStateAction<string>>;
    exitTimeModal: boolean;
    setExitTimeModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleExitTime: () => void;
};

const ExitTime = ({exitTime, setExitTime, exitTimeModal, setExitTimeModal, handleExitTime,}: ExitTimeProps) => {

  return (
    <Modal show={exitTimeModal} onHide={() => setExitTimeModal(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>{exitTime}</p>
          </div>
          <div>  
            <button type="submit" onClick={handleExitTime}>Proceed</button>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default ExitTime