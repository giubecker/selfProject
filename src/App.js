import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Website from "./Components/Screens/Website";
import 'bootstrap';
import Login from "./Components/Screens/Login";
import System from './Components/Screens/System';
import Home from './Components/System/Home';
import Questionnaires from './Components/Questionnaires/Questionnaires';
import Library from "./Components/Library/Library";
import Scheduling from "./Components/Scheduling/Scheduling";
import Schedule from "./Components/Scheduling/Schedule";
import Achievements from "./Components/System/Achievements";
import Doubts from "./Components/System/Doubts";
import Profile from "./Components/Profile/Profile";
import Protocols from "./Components/System/Protocols";
import Recipes from "./Components/Recipes/Recipes";
import Recipe from "./Components/Recipes/Recipe";
import ViewRecipe from "./Components/Recipes/ViewRecipe";
import Contacts from "./Components/System/Contacts";
import Notifications from "./Components/System/Notifications";
import Graphics from "./Components/System/Graphics"; 
import {UserStorage} from './UserContext';
import Questionnaire from './Components/Questionnaires/Questionnaire';
import StoreProvider from './Components/Store/Provider';
import RoutesPrivate from './Components/Routes/Private/Private';
import EditProfile from "./Components/Profile/EditProfile";
import LibraryRecipe from "./Components/Library/LibraryRecipe";
import LibraryVideo from "./Components/Library/LibraryVideo";
import LibraryText from "./Components/Library/LibraryText";

function App() {
  return  (
    <BrowserRouter>
    <UserStorage>
    <Router>
      <div>
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <StoreProvider>
       <Switch>
        {/* <Route exact path="/">
            <Website />
          </Route> */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/system">
            <System />
          </Route>
          <RoutesPrivate exact path="/home">
            <Home />
          </RoutesPrivate>
          <Route path="/protocols">
            <Protocols />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/recipes/new">
            <Recipe />
          </Route>
          <Route exact path="/recipes/view">
            <ViewRecipe />
          </Route>
          <Route exact path="/questionnaires">
            <Questionnaires />
          </Route>
          <Route exact path="/questionnaire/:id">
            <Questionnaire />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/library/recipes/:id">
            <LibraryRecipe />
          </Route>
          <Route exact path="/library/video/:id">
            <LibraryVideo />
          </Route>
          <Route exact path="/library/text/:id">
            <LibraryText />
          </Route>
          <Route exact path="/scheduling">
            <Scheduling />
          </Route>
          <Route exact path="/scheduling/schedule/:id">
            <Schedule />
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
          <Route exact path="/editprofile">
            <EditProfile />
          </Route>
          <Route exact path="/">
            <Website />
          </Route>
          <Route exact path="/graphics">
            <Graphics />
          </Route>
        </Switch>

       </StoreProvider>
      </div>
    </Router>
    </UserStorage>
    </BrowserRouter>
  );
}

export default App;