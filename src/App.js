import { useState } from 'react';
import './App.css';
import ListComponent from './Components/ListComponent';
import MapComponent from './Components/Map';

function App() {

  const [map, setMap] = useState("");

  const [hName, setHName] = useState("");
    const [hAdd, setHAdd] = useState("");
    const [hPhone, setHPhone] = useState("");
    const [hOpenTime, setHOpenTime] = useState("");
    const [hCloseTime, setHCloseTime] = useState("");
    const [hLatitude, setHLatitude] = useState("");
    const [hLongitude, setHLongitude] = useState("");
    const [hImageUrl, setHImageUrl] = useState("");

  return (
    <div className="App">
      {
      map === "" ? <ListComponent setMap={setMap} hName={hName} setHName={setHName} hAdd={hAdd} setHAdd={setHAdd} hPhone={hPhone} setHPhone={setHPhone} hLatitude={hLatitude} setHLatitude={setHLatitude} hLongitude={hLongitude} setHLongitude={setHLongitude} hImageUrl={hImageUrl} setHImageUrl={setHImageUrl} setHOpenTime={setHOpenTime} setHCloseTime={setHCloseTime} /> 
      : 
      <MapComponent hLatitude={hLatitude} hLongitude={hLongitude} hImageUrl={hImageUrl} />
      }
    </div>
  );
}

export default App;
