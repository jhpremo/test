import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import './index.css'
import SpotsPage from "./components/SpotsPage";
import SpotDetails from "./components/SpotDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUserThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <SpotsPage isSearch={false} isSession={false} />
          </Route>
          <Route
            path='/search'
            exact={true}>
            <SpotsPage isSearch={true} isSession={false} />
          </Route>
          <Route path='/my-spots' exact>
            <SpotsPage isSearch={false} isSession={true} />
          </Route>
          <Route path='/spots/:spotId'>
            <SpotDetails />
          </Route>
          <Route>
            404 Page Not Found
          </Route>
        </Switch>
      )}
      <h6 className="about-links-footer">
        <div className="about-links-github-icon"> <a target="_blank" href="https://github.com/jhpremo/bearbnb"><i className="fa-brands fa-github" /></a> <a target="_blank" href="https://www.linkedin.com/in/jhpremo/"><i className="fa-brands fa-linkedin" /></a></div>
        <div className="about-links-creators">Website clone created by Jason Premo</div>
      </h6>
    </div >
  );
}

export default App;
