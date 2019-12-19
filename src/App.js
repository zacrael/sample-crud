import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

import { Provider } from "react-redux";
import store from "./store";

import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import EditClient from "./components/clients/EditClient";

import Profile from "./components/auth/Profile";
import Home from "./components/layout/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Settings from "./components/settings/Settings";

import "./App.css";
import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/home"
                  component={UserIsNotAuthenticated(Home)}
                />
                <Route
                  exact
                  path="/client/add"
                  component={UserIsAuthenticated(AddClient)}
                />
                <Route
                  exact
                  path="/client/edit/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path="/client/:id"
                  component={UserIsAuthenticated(Profile)}
                />

                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/register"
                  component={UserIsNotAuthenticated(Register)}
                />
                <Route
                  exact
                  path="/settings"
                  component={UserIsAuthenticated(Settings)}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
