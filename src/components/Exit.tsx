import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ExitProps = {
    startTime: string;
    exitTime: string;
    exitModal: boolean;
    setExitModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleConfirmExit: () => void;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  };

const Exit = ({startTime, exitTime, exitModal, setExitModal, handleConfirmExit, setTotalPrice,}: ExitProps) => {

  const date1 = new Date(startTime);
  const date2 = new Date(exitTime);

  var diff = Math.abs(date2.getTime() - date1.getTime());
  var diffHours = Math.ceil(diff / (1000 * 3600));

  var totalPrice = 0;
  if (diffHours <= 2) {
    totalPrice = 10;
  } else if (diffHours > 2) {
    totalPrice = 10 + (diffHours - 2) * 10;
  }

  useEffect(() => {
    setTotalPrice(totalPrice);
  }, [totalPrice, setTotalPrice]);

  return (
    <Modal show={exitModal} onHide={() => setExitModal(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Time Spent in Parking Space:</h5>
            <h4>{diffHours} Hour(s)</h4>
          </div>
          <div>
            <h5>Your Current Parking Charges are:</h5>
            <h4> ${totalPrice}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={() => setExitModal(false)}>
            Go Back
          </Button>
          <Button type="submit" variant="primary" onClick={handleConfirmExit} >
            Confirm Payment and Exit
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Exit