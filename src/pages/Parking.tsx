import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ParkingSpace from "../components/ParkingSpace";
import "../App.css";
import Registration from "../components/Registration";
// import { CarDetails } from "../types";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

let charges_card = {
    width: '18rem',
    position: 'absolute' as any,
    right: '150px',
}

let addBtn = {
    margin: '20px'
}

type CarDetails = { 
    id: number; 
    time: string; 
    registration: string 
};



function Parking() {
  const [toast, setToast] = useState<boolean>(false);
  const [regModal, setRegModal] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [regDetails, setRegDetails] = useState<string>("");
  const [carsParked, setCarsParked] = useState<Array<CarDetails>>([]);

  const { state } = useLocation();
  const numberOfParkingsString = state as string;
  const numberOfParkings = parseInt(numberOfParkingsString);

  const [availableParkings, setAvailableParkings] = useState<Array<number>>(
    () => [...Array(numberOfParkings + 1).keys()].slice(1)
  );

  let parkingBoxes = [];
  for (let i = 1; i <= numberOfParkings; i++) {
    parkingBoxes.push(
      <ParkingSpace
        key={i}
        id={i}
        availableParkings={availableParkings}
        setAvailableParkings={setAvailableParkings}
        carsParked={carsParked}
        setCarsParked={setCarsParked}
      />
    );
  }

  function curr_date() {
    var currentdate = new Date(); 
    return currentdate;
  }
  
  
  const handleSubmitRegistration = () => {
    // setCurrentTime(curr_date())
    setRegModal(false);
    let currentSpace = Math.floor(Math.random() * numberOfParkings) + 1;
    while (availableParkings.indexOf(currentSpace) === -1) {
      currentSpace = Math.floor(Math.random() * numberOfParkings) + 1;
    }
    setAvailableParkings((prevSpaces) =>
      prevSpaces.filter((space: number) => space !== currentSpace)
    );
    setCarsParked((prevCars) => [
      ...prevCars,
      { id: currentSpace, time: currentTime, registration: regDetails },
    ]);
  };

  const addNewCarClick = () => {
    if (availableParkings.length > 0) {
      setRegModal(true);
      setCurrentTime("");
      setRegDetails("");
    } else {
      setToast(true);
    }
  };

  const handleToastClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToast(false);
  };

  return (
    <div>
        <div>
        <Button variant="primary" onClick={addNewCarClick}>Add New Car +</Button>
      </div>

      <Registration
        regModal={regModal}
        setRegModal={setRegModal}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        regDetails={regDetails}
        setRegDetails={setRegDetails}
        handleSubmitRegistration={handleSubmitRegistration}
      />

    {/* <div style={charges_card}>
    <Card>
      <Card.Body>
        <Card.Text>
          <ul>
            <h4>Parking Charges</h4>
            <li>$10 for first 2 hours</li>
            <li>$10 for each subsequent hours</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    </div> */}

    <div className="parking-container">{parkingBoxes}</div>

    </div>
    
  )
}

export default Parking
