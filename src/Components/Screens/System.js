// import React from 'react';
// import Toolbar from '../System/Toolbar';
// import Header from '../../Components/Website/Header';
// import Sidebar from '../System/Sidebar';
// import 'bootstrap';
// import {UserStorage} from '../../UserContext';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     BrowserRouter
//   } from "react-router-dom";
//   import Login from "../../Components/Screens/Login";
// import Home from '../../Components/System/Home';
// import Questionnaires from '../Questionnaires/Questionnaires';
// import Library from "../Library/Library";
// import Scheduling from "../../Components/Scheduling/Scheduling";
// import Achievements from "../../Components/System/Achievements";
// import Doubts from "../../Components/System/Doubts";
// import Profile from "../../Components/Profile/Profile";
// import Protocols from "../../Components/System/Protocols";
// import Recipes from "../Recipes/Recipes";
// import Contacts from "../../Components/System/Contacts";
// import Notifications from "../../Components/System/Notifications";
// import Graphics from "../../Components/System/Graphics"; 
// import { Footer } from '../System/Footer';
// import Questionnaire from '../Questionnaires/Questionnaire';

// export const System = () => {
//     return (
//         <div>
//         <UserStorage>
//         <Sidebar/>
//         {/* <Header/> */}
//             SYSTEM
//         </UserStorage>

//         <BrowserRouter>
//     <UserStorage>
//     <Router>
//       <div>
    
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//         <Route exact path="/">
//           </Route>
//           <Route exact path="/login">
//             <Login />
//           </Route>
//           <Route exact path="/home" element={<Home/>}/>
//           <Route exact path="/protocols">
//             <Protocols />
//           </Route>
//           <Route exact path="/notifications">
//             <Notifications />
//           </Route>
//           <Route exact path="/recipes">
//             <Recipes />
//           </Route>
//           <Route exact path="/questionnaires">
//             <Questionnaires />
//           </Route>
//           <Route path="/questionnaire">
//             <Questionnaire />
//           </Route>
//           <Route exact path="/contacts">
//             <Contacts />
//           </Route>
//           <Route exact path="/library">
//             <Library />
//           </Route>
//           <Route exact path="/scheduling">
//             <Scheduling />
//           </Route>
//           <Route exact path="/achievements">
//             <Achievements />
//           </Route>
//           <Route exact path="/doubts">
//             <Doubts />
//           </Route>
//           <Route exact path="/profile">
//             <Profile />
//           </Route>
//           <Route exact path="/graphics">
//             <Graphics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//     </UserStorage>
//     </BrowserRouter>

// <Footer/>
//         </div>
//     )
// }

// export default System;
