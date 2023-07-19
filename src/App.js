import Button from "./components/Button";
import Login, { Logins } from "./main/login/login";
import Admin from "./main/adim";

function App() {
  return (
    <div className="App">
      {/* <Admin /> */}
      <Login />
      <Logins />
    </div>
  );
}

export default App;
