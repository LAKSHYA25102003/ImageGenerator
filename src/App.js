import "./App.css";
import Home from "./Pages/Home/Home";
import ImageState from "./Context/ImageState";

function App() {
  return (
    <ImageState>
      <div className="App">
        <Home />
      </div>
    </ImageState>
  );
}

export default App;
