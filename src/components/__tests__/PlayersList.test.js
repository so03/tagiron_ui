import React from "react";
import { render, screen } from "@testing-library/react";
import PlayersList from "../PlayersListt";

// 参考
// jest.mock('../hooks/usePlayer', () => {
//   return {
//     usePlayers: () => {
//       return {
//         playersReader: {
//           read: () => [{ id: 1, name: "sasaki" }]
//         }
//       }
//     }
//   }
// })

it("renders players list", () => {
  const players = {
    read: () => [{ id: 1, name: "sasaki", declarationStatus: "Yet" }],
  };
  render(<PlayersList players={players} />);
  expect(screen.getByText("sasaki")).toBeInTheDocument();
});
