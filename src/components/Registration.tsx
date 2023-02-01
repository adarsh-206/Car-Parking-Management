import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type RegistrationProps = {
    regModal: boolean;
    setRegModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentTime: string;
    setCurrentTime: React.Dispatch<React.SetStateAction<string>>;
    regDetails: string;
    setRegDetails: React.Dispatch<React.SetStateAction<string>>;
    handleSubmitRegistration: () => void;
};

const Registration = ({regModal, setRegModal, currentTime, setCurrentTime, regDetails, setRegDetails, handleSubmitRegistration}: RegistrationProps) => {
  
  function curr_date() {
    var currentdate = new Date(); 
    return currentdate.toString();
  }

 function twoCalls(e: any) {
    setRegDetails(e.target.value)
    setCurrentTime(curr_date())
  }

  return (
    <Modal show={regModal} onHide={() => setRegModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Car Registration Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <div><input type="string" placeholder="Enter Registration Number" value={regDetails} onChange={(e) => {twoCalls(e)}}/></div><br></br>
            {/* <div><input type="datetime-local" placeholder="Select Date & Time" value={currentTime} onChange={(e) => setCurrentTime(e.target.value)}/></div><br></br> */}
            <div><button type="submit" onClick={handleSubmitRegistration}>Confirm</button></div>
        
        </Modal.Body>
      </Modal>
  )
}

export default Registration