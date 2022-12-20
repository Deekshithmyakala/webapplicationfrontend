import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <div className="App">
      {!localStorage.getItem("users") ? (
        <LoginPage />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
