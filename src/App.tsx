import { Route, Routes } from "react-router-dom";
import CollapsableSidebar from "./components/collapsable-sidebar/CollapsableSidebar";

function App() {
  return (
    <Routes>
      <Route path="/sidebar" element={<CollapsableSidebar />}/>
    </Routes>
  );
}

export default App;
