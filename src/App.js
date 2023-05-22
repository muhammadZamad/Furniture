import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import Routes from "./pages/Routes"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
