import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import TripsPage from "./pages/TripsPage";
import HomePage from "./pages/HomePage";
import ShowSingleTrip from "./pages/ShowSingleTrip";
import AddTripPage from "./pages/AddTripPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
            <Route path="/trips" element={<TripsPage />} />
            <Route path="/trips/create" element={<AddTripPage />} /> 
            <Route path="/trips/:id" element={<ShowSingleTrip />} />   
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;