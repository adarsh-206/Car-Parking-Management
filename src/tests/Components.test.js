import { render } from "@testing-library/react";
import Exit from "../components/Exit";
import ExitTime from "../components/ExitTime";
import ParkingSpace from "../components/ParkingSpace";
import Registration from "../components/Registration";
import Parking from "../pages/Parking";
import { MemoryRouter } from "react-router-dom";

const mockAvailableParkings = [6, 9];
const mockCarsParked = [
  { id: 2, time: "123", registration: "ABC" },
  { id: 7, time: "789", registration: "XYZ" },
];
const mockSetTotalPrice = jest.fn();

describe("Components...", () => {
    test("ParkingSpace...", () => {
      render(
        <ParkingSpace
          availableParkings={mockAvailableParkings}
          carsParked={mockCarsParked}
        />
      );
    });
    test("Exit...", () => {
      render(<Exit exitModal={true} setTotalPrice={mockSetTotalPrice} />);
    });
    test("ExitTime...", () => {
      render(<ExitTime exitTimeModal={true} />);
    });
    test("Registration...", () => {
      render(<Registration regModal={true} />);
    });
  });

  describe("Pages...", () => {
    test("Parking...", () => {
      render(
        <MemoryRouter initialEntries={[{ state: "2" }]}>
          <Parking />
        </MemoryRouter>
      );
    });
  });