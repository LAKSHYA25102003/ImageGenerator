import "./App.css";
import Home from "./Pages/Home/Home";
import ImageState from "./Context/ImageState";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ImageState>
      <Toaster />
      <Home />
    </ImageState>
  );
}

export default App;
