import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {


  return (
    <UserContextProvider>
      <h1>React with Pankaj Thakur and share is important </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
