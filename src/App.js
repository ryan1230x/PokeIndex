import React from "react"; 
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Import all pages
import Home from './pages/Home';
import DetailView from './pages/DetailView';
import Layout from "./layout/Layout";
import About from "./pages/About";
import Version from "./pages/Version";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/version">
              <Version />
            </Route>
            <Route path="/pokemon/:name" children={<DetailView />} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
