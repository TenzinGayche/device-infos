import logo from './logo.svg';
import './App.css';
import DeviceDetector from "device-detector-js";
function App() {

const deviceDetector = new DeviceDetector();
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
const device = deviceDetector.parse(userAgent);

  return (
    <div className="App">
      <h2 className="device-brand">Your device type is {device.device.type}</h2>
      <h2 className="device-brand">Your device brand is {device.device.brand}</h2>
      <h2 className="device-brand">Your device os is  {device.os.name}</h2>
      <h2 className="device-brand">Your device model is  {device.os.model}</h2>

      
     

    </div>
  );
}

export default App;
