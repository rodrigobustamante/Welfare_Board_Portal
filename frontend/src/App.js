import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import AllClubsPage from "./pages/AllClubsPage";
import EachClubPage from "./pages/ClubPage";
import EachEventPage from "./pages/EventPage";
import SWB from "./pages/SWB";
import Counsellors from "./pages/Counsellors";
import FoodCourt from "./pages/FoodCourt";
import Layout from "./components/Layout";
const BASEURL = process.env.REACT_APP_BASEURL||"/welfare-board";

function App() {
  return (
    <BrowserRouter basename={`${BASEURL}`} >
      <Routes>
        <Route element={<Layout />}> 
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="clubs" element={<AllClubsPage />} />
          <Route path="club/:name" element={<EachClubPage />} />
          <Route path="events" element={<EachEventPage />} />
          <Route path="event/:id" element={<EachEventPage />} />
          <Route path="resources" element={<SWB/>}/>
          <Route path="counsellors" element={<Counsellors/>}/>
          <Route path="foodcourt" element={<FoodCourt/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;