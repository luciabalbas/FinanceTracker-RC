import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from './hooks/useAuthContext'

// import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

// import Components
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App