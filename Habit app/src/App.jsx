import { Routes, Route } from "react-router-dom";
import "./App.css";
import HabitPage from "./components/habitPage";
import { HabitProvider } from "./UseContextProvider/HabitContext";

function App() {
  return (
    <HabitProvider>
      <h1>Nav-bar</h1>
      <Routes>
        <Route path="/" element={<HabitPage />} />
      </Routes>
    </HabitProvider>
  );
}

export default App;
