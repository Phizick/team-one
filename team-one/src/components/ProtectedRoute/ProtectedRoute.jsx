/**
 * @component
 * Компонент Защищенный Роутинг
 * @props
 * children - принимает JSX разметку или страницу, куда можно перейти в случае авторизации
 * route - принимает string, отправляет на указаный роут
 * ...rest - принимает остальные пропсы
 * @returns
 * возвращает страницу указанную в пропсе children или переводит на роут /login
 */

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
