import GameEntry from "./entries/GameEntry";
import PlayGround from "./components/PlayGround";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentPlayerIdContext } from "./context";
import RoomEntry from "./entries/RoomEntry";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  // id
  const id = 1;

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentPlayerIdContext.Provider value={id}>
        <Routes>
          <Route path="/" element={<RoomEntry />} />
          <Route path="/game" element={<GameEntry />} />
          <Route path="/playground" element={<PlayGround />} />
        </Routes>
      </CurrentPlayerIdContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
