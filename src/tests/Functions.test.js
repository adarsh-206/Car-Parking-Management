import { fireEvent, render, screen } from "@testing-library/react";
import Parking from "../pages/Parking";
import { MemoryRouter } from "react-router-dom";

test("Getting the toast message...", () => {
  render(
    <MemoryRouter initialEntries={[{ state: "0" }]}>
      <Parking />
    </MemoryRouter>
  );
  const addBtn = screen.getByText("Add New Car +");
  fireEvent.click(addBtn);
  const toastMsg = screen.queryByText("NO PARKING SPACE AVAILABLE");
//   expect(toastMsg).toBeInTheDocument();
});
