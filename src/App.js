import Countries from "./component/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import CountryDetails from "./component/CountryDetails";
import Error from "./component/Error";

function App() {
  return (
    <div className="bg-lightModeElement dark:bg-darkModeBackground">
      <BrowserRouter>
        < Header />
        <Routes>
          <Route path="/" exact element={< Countries />} />
          <Route path="/:name" element={< CountryDetails />} />
          <Route path="*" element={< Error />} />
        </Routes>
      
      </BrowserRouter>
      {/* <div className="bg-darkModeBackground">
      
      <div className="p-16">
        < Filter />
        < Countries/>
      </div>
     
      </div> */}
    </div>
    
  );
}

export default App;
