import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component,socket, ...rest }) => {
  const isAuth = localStorage.getItem("isAuth");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === "true") {
          return <Component {...props} socket={socket} />;
        } else {
          return (
            <>
              <Redirect to="/login" />
              <Component {...props} />
            </>
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
