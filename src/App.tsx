import React from 'react';
import {useEffect, useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CenterFocusStrong } from '@mui/icons-material';
import { flexbox } from '@mui/system';
import { useNavigate } from 'react-router-dom';

let main_div = {
  width: '20rem',
  padding: '10px',
  "text-align": 'center',
  "margin-top": '15%',
  "margin-left": '32%',
}

let bttn = {
  margin: '20px',
}


function App() {
  
  const [parkingSpaces, setParkingSpaces] = useState<string>("");
  const navigate = useNavigate()
  const inputRef = useRef<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParkingSpaces(e.target.value);
    console.log(parkingSpaces)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/parking", { state: parkingSpaces });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
        <Card className='' style={main_div}>
      <Card.Body>
        <Card.Title>Welcome to Parking App</Card.Title>  <br></br>
        <Card.Text>
          <form action="" onSubmit={handleSubmit}>
            <input type="number" placeholder='Enter no. of spaces required' value={parkingSpaces} onChange={handleChange} ref={inputRef}/>
            <button type="submit" style={bttn}>Submit</button>
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default App;
