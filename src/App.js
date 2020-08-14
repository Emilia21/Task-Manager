import React, { Component } from "react";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import "./App.css";
import TaskForm from "./components/TaskForm";

class App extends Component {
  render() {
    return (
      <TaskListContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <div className="main">
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextProvider>
    );
  }
}

export default App;
