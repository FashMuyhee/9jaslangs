import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Result from "./result";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import Eroor404 from "./404";
const Layout = () => {
  return (
    <>
      <Switch>
        {/* <Route path="/" exact component={Result} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/result/:slang" component={Result} />
        <Route component={Eroor404} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default Layout;
