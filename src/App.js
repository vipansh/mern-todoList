import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Index";
import HomePage from "./layouts/HomePage";
import AddTodoPage from "./layouts/AddTodoPage";
import EditTodoPage from "./layouts/EditTodoPage";
function App() {
  return (
    <Router>
      <div className="App"><Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/add-todo" component={AddTodoPage}/>
        <Route exact path="/edit-todo/:id" component={EditTodoPage}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
