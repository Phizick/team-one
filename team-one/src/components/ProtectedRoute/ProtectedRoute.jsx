import { Redirect, Route } from "react-router-dom";
export const ProtectedRoute = ({ children, route, ...rest }) => {
  const login = window.localStorage.getItem("login");
  const password = window.localStorage.getItem("password");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return login && password ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
