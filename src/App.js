import Button from "./components/Button";
import Login from "./main/login/login";
import { Input } from "./components/input";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Input
        className="input input-image"
        placeholder=" hannah.green@test.com"
      />
      <Input placeholder=" Password123@" />
    </div>
  );
}

export default App;
