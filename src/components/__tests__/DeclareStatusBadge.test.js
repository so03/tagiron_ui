import React from "react";
import { render, screen } from "@testing-library/react";
import DeclareStatusBudge from "../DeclareStatusBadgee";

it("renders declare status badge", () => {
  const declarationStatus = "Now";
  render(<DeclareStatusBudge declarationStatus={declarationStatus} />);
  expect(screen.getByText("Declaring now...")).toBeInTheDocument();
});
