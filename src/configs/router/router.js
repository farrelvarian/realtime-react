/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Home from "../../pages/home";
import EditProfile from "../../pages/edit-profile";
import Login from "../../pages/login";
import Register from "../../pages/register";
import PrivateRoute from "./module/PrivateRouter";
import PublicRoute from "./module/PublicRouter";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const Router = () => {
  const [socket, setSocket] = useState(null);
  const setupSocket = () => {
    const token = localStorage.getItem("token");

    if (token && !socket) {
      const resultSocket = io("http://localhost:4000", {
        query: {
          token: localStorage.getItem("token"),
        },
      });
      resultSocket.on();

      setSocket(resultSocket);
      console.log(token);
    }
  };

  useEffect(() => {
    setupSocket();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={Login}
          setSocket={setSocket}
        />
        <PublicRoute exact path="/register" component={Register} />
        <PublicRoute exact path="/forgot-password" component={ForgotPassword} />
        <PublicRoute
          exact
          path="/reset-password/:token"
          component={ResetPassword}
        />
        <PrivateRoute exact path="/" component={Home} socket={socket} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
