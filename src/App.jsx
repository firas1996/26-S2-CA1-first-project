import FirstComp from "./components/FirstComp";

const App = () => {
  const name = "Firas";
  return (
    <div>
      <h1>Hello, ... !</h1>
      <FirstComp name={name} />
    </div>
  );
};
export default App;
