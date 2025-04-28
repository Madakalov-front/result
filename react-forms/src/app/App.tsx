import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Index } from "../pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
}

export default App;
