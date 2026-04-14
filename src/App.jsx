import { useState } from "react";
import FirstComp from "./components/FirstComp";
import Login from "./components/Login";

const App = () => {
  const name = "Firas";
  const [x, setX] = useState("");
  const getData = (data) => {
    setX(data);
    console.log(x);
  };
  return (
    <div>
      {/* <h1>Hello, {x} !</h1>
      <FirstComp name={name} getData={getData} /> */}
      <Login />
    </div>
  );
};
export default App;
