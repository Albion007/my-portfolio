import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Trainings from "./components/Trainings";
import Conferences from "./components/Conferences";
import Practics from "./components/Practics";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
        <Route component={Trainings} path='/trainings' />
        <Route component={Conferences} path='/conferences' />
        <Route component={Practics} path='/practics' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
