import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Exit from "./Exit";
import ExitTime from "./ExitTime";

type CarDetails = { id: number; time: string; registration: string };

type ParkingSpaceProps = {
  id: number;
  availableParkings: Array<number>;
  setAvailableParkings: React.Dispatch<React.SetStateAction<number[]>>;
  carsParked: Array<CarDetails>;
  setCarsParked: React.Dispatch<React.SetStateAction<CarDetails[]>>;
};

const ParkingSpace = ({id, availableParkings, setAvailableParkings, carsParked, setCarsParked}: ParkingSpaceProps) => {

  console.log("cars Parked", carsParked)
  const [bgTheme, setBgTheme] = useState<string>("");
  const [exitBtnDisabled, setExitBtnDisabled] = useState<boolean>(true);
  const [exitModal, setExitModal] = useState<boolean>(false);
  const [exitTime, setExitTime] = useState<string>("");
  const [exitTimeModal, setExitTimeModal] = useState<boolean>(false);
  const [currentStartTime, setCurrentStartTime] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (availableParkings.indexOf(id) >= 0) {
      setBgTheme("#518959");
    } else {
      setBgTheme("#F41434");
      setExitBtnDisabled(false);
    }
  }, [availableParkings, id]);

  function curr_date() {
    var currentdate = new Date(); 
    return currentdate.toString()
  }

  // exit 1
  const handleCarExit = () => {
    setExitTime(curr_date())
    setExitTimeModal(true);
    carsParked.map((car: CarDetails) => {
      if (car.id === id) {
        setCurrentStartTime(car.time);
      }
      return null;
    });
  };

  // exit 2
  const handleExitTime = () => {
    setExitTimeModal(false);
    setExitModal(true);
  };

  // exit 3
  const handleConfirmExit = () => {
    setAvailableParkings((prevSpaces) => [...prevSpaces, id]);
    setCarsParked((prevCars: Array<CarDetails>) =>
      prevCars.filter((car: CarDetails) => car.id !== id)
    );
    setExitBtnDisabled(true);
    setExitModal(false);

    // post request
    const currentReg = carsParked.filter((car: CarDetails) => car.id === id);
    const myValues = {
      "car-registration": currentReg[0].registration,
      charge: totalPrice,
    };
    console.log(myValues);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myValues),
    };
    fetch("https://httpstat.us/200", options)
      .then((response) => {
        console.log("Response ==", response);
        return response.json();
      })
      .then((response) => {
        console.log("Response.JSON ==", response);
      })
      .catch((error) => {
        console.log("Error ==", error);
      });
  };

  return (
    <div className="parking-cards">
    <Card>
      <Card.Body>
        <Card.Text>
          <ul>
            <li>{id}</li>
            <li><button type="submit" onClick={handleCarExit} style={{ display: exitBtnDisabled ? "none" : "inline-block" }}>Exit</button></li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>

    <Exit
        startTime={currentStartTime}
        exitTime={exitTime}
        exitModal={exitModal}
        setExitModal={setExitModal}
        handleConfirmExit={handleConfirmExit}
        setTotalPrice={setTotalPrice}
      />

      <ExitTime
        exitTime={exitTime}
        setExitTime={setExitTime}
        exitTimeModal={exitTimeModal}
        setExitTimeModal={setExitTimeModal}
        handleExitTime={handleExitTime}
      />

    </div>
  )
}

export default ParkingSpace