import BasicDemo from "./components";
import Button from "./components/Button";
import Login from "./main/login/login";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        
function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
