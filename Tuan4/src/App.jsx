import "bootstrap/dist/css/bootstrap.min.css";
import useRoutesElement from "./routes/useRoutesElement";


function App() {
  const object = useRoutesElement();
  return <>{object}</>;
}

export default App;
