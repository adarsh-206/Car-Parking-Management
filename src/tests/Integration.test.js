import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Parking from "../pages/Parking";

test("Entering number of parking spaces needed and submitting...", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const numInput = screen.getByPlaceholderText("Enter no. of spaces required");
  fireEvent.change(numInput, { target: { value: "5" } });
  const submitBtn = screen.getByText("Submit");
  fireEvent.click(submitBtn);
});

test("Adding a new car and entering details...", () => {
  render(
    <MemoryRouter initialEntries={[{ state: "1" }]}>
      <Parking />
    </MemoryRouter>
  );
  const addBtn = screen.getByText("Add New Car +");
  fireEvent.click(addBtn);
  expect(screen.queryByText("Confirm")).toBeInTheDocument();
  const registerBtn = screen.getByText("Confirm");
  fireEvent.click(registerBtn);
});

test("Exiting a car but then going back...", () => {
  render(
    <MemoryRouter initialEntries={[{ state: "1" }]}>
      <Parking />
    </MemoryRouter>
  );
  const addBtn = screen.getByText("Add New Car +");
  fireEvent.click(addBtn);
  const registerBtn = screen.getByText("Confirm");
  fireEvent.click(registerBtn);
  const exitBtn = screen.getByText("Exit");
  fireEvent.click(exitBtn);
  const exitTimeBtn = screen.getByText("Proceed");
  fireEvent.click(exitTimeBtn);
  expect(screen.queryByText("Go Back")).toBeInTheDocument();
  const backBtn = screen.getByText("Go Back");
  fireEvent.click(backBtn);
});

test("Exiting a car completely...", () => {
  render(
    <MemoryRouter initialEntries={[{ state: "1" }]}>
      <Parking />
    </MemoryRouter>
  );
  const addBtn = screen.getByText("Add New Car +");
  fireEvent.click(addBtn);
  const registerBtn = screen.getByText("Confirm");
  fireEvent.click(registerBtn);
  const exitBtn = screen.getByText("Exit");
  fireEvent.click(exitBtn);
  const exitTimeBtn = screen.getByText("Proceed");
  fireEvent.click(exitTimeBtn);
  expect(screen.queryByText("Confirm Payment and Exit")).toBeInTheDocument();
  const confirmExitBtn = screen.getByText("Confirm Payment and Exit");
  fireEvent.click(confirmExitBtn);
});

