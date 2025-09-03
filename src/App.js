import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

// import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App