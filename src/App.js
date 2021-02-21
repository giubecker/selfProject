import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Website from "./Components/Screens/Website";
import Login from "./Components/Screens/Login";
import System from './Components/Screens/System';
import Home from './Components/System/Home';
import Questionnaires from './Components/System/Questionnaires';
import Library from "./Components/System/Library";
import Booking from "./Components/System/Booking";
import Achievements from "./Components/System/Achievements";
import Doubts from "./Components/System/Doubts";
import Profile from "./Components/System/Profile";
import Protocols from "./Components/System/Protocols";
import Recipes from "./Components/System/Recipes";
import Contacts from "./Components/System/Contacts";
import Notifications from "./Components/System/Notifications";
import Graphics from "./Components/System/Graphics"; 
import {UserStorage} from './UserContext';


function App() {
  return  (
    <BrowserRouter>
    <UserStorage>
    <Router>
      <div>
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Website />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/system">
            <System />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/protocols">
            <Protocols />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/questionnaires">
            <Questionnaires />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/achievements">
            <Achievements />
          </Route>
          <Route exact path="/doubts">
            <Doubts />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/graphics">
            <Graphics />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserStorage>
    </BrowserRouter>
  );
}

export default App;