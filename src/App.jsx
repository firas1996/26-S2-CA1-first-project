import { useState } from "react";
import FirstComp from "./components/FirstComp";

const App = () => {
  const name = "Firas";
  const [x, setX] = useState("");
  const getData = (data) => {
    setX(data);
    console.log(x);
  };
  return (
    <div>
      <h1>Hello, {x} !</h1>
      <FirstComp name={name} getData={getData} />
    </div>
  );
};
export default App;
