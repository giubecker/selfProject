import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import 'bootstrap';
import Login from "./Components/Screens/Login";
import Home from './Components/Home/Home';
import NewQuestionnaire from './Components/Questionnaires/NewQuestionnaire';
import AnsweredQuestionnaire from './Components/Questionnaires/AnsweredQuestionnaire';
import Questionnaires from './Components/Questionnaires/Questionnaires';
import Library from "./Components/Library/Library";
import MyLibrary from "./Components/Library/MyLibrary";
import Scheduling from "./Components/Scheduling/Scheduling";
import NewSchedule from "./Components/Scheduling/NewSchedule";
import Scheduled from "./Components/Scheduling/Scheduled";
import Achievements from "./Components/Achievements/Achievements";
import Doubts from "./Components/Doubts/Doubts";
import Profile from "./Components/Profile/Profile";
import Protocols from "./Components/Protocols/Protocols";
import Recipes from "./Components/Recipes/Recipes";
import Recipe from "./Components/Recipes/Recipe";
import ViewRecipe from "./Components/Recipes/ViewRecipe";
import Contacts from "./Components/Contacts/Contacts";
import Notifications from "./Components/Notifications/Notifications";
import Exams from "./Components/Exams/Exams"; 
import {UserStorage} from './UserContext';
import StoreProvider from './Components/Store/Provider';
import RoutesPrivate from './Components/Routes/Private/Private';
import EditProfile from "./Components/Profile/EditProfile";
import LibraryRecipe from "./Components/Library/LibraryRecipe";
import LibraryVideo from "./Components/Library/LibraryVideo";
import LibraryText from "./Components/Library/LibraryText";
import ExitAlert from "./Components/Alerts/ExitAlert";
import SuccessDoubt from "./Components/Alerts/SuccessDoubt";
import SuccessAlert from "./Components/Alerts/SuccessAlert";
import Instructions from "./Components/Alerts/Instructions";
import Contact from "./Components/Contacts/Contact";
import Ranking from "./Components/Achievements/Ranking";
import Medal from "./Components/Achievements/Medal";
import EditSchedule from "./Components/Scheduling/EditSchedule";
import DeleteAlert from "./Components/Alerts/DeleteAlert";
import Trophy from "./Components/Achievements/Trophy";
import SuccessQuestionnaire from "./Components/Alerts/SuccessQuestionnaire";
import ExitQuestionnaire from "./Components/Alerts/ExitQuestionnaire";

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
          <Route exact path="/login">
            <Login />
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
          <Route exact path="/questionnaires/new/:id">
            <NewQuestionnaire />
          </Route>
          <Route exact path="/questionnaires/success">
            <SuccessQuestionnaire />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/contacts/contact/:id">
            <Contact />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/mylibrary">
            <MyLibrary />
          </Route>
          <Route exact path="/library/recipe/:id">
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
          <Route exact path="/scheduling/new">
            <NewSchedule />
          </Route>
          <Route exact path="/scheduling/scheduled/edit/:id">
            <EditSchedule />
          </Route>
          <Route exact path="/scheduling/scheduled/:id">
            <Scheduled />
          </Route>
          <Route exact path="/achievements">
            <Achievements />
          </Route>
          <Route exact path="/achievements/ranking">
            <Ranking />
          </Route>
          <Route exact path="/achievements/medals/:id">
            <Medal />
          </Route>
          <Route exact path="/achievements/trophies/:id">
            <Trophy />
          </Route>
          <Route exact path="/doubts">
            <Doubts />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/editprofile/:id">
            <EditProfile />
          </Route>
          <Route exact path="/exams">
            <Exams />
          </Route>
          <Route exact path="/exit">
            <ExitAlert />
          </Route>
          <Route exact path="/success">
            <SuccessAlert />
          </Route>
          <Route exact path="/doubts/success">
            <SuccessDoubt />
          </Route>
          <Route exact path="/delete">
            <DeleteAlert />
          </Route>
          <Route exact path="/questionnaires/answered/:id">
            <AnsweredQuestionnaire />
          </Route>
          <Route exact path="/questionnaires/instructions/:id">
            <Instructions />
          </Route>
          <Route exact path="/questionnaires/new/:id/exit">
            <ExitQuestionnaire />
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