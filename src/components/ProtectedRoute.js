import React from "react";
import { decodeToken } from "../utils/auth";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component,  ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => 
        decodeToken() ? (
          <Component {...props}/>
        ) 
        : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;