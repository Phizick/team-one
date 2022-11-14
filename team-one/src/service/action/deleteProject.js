// Редьюсер на удаление проекта
// Делаем запрос на API /projects

import { REQUEST_DELETE_PROJECT } from ".";
import { API } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";

export const deleteProjectR = (id) => {
  return (dispatch) => {
    API.delete("/projects", {
      project_id: `${id}`,
    })
      .then((data) => {
        checkResponse(data);
        dispatch({ type: REQUEST_DELETE_PROJECT, payload: id });
      })
      .catch((err) => {
        console.log("Что-то с АПИ: ", err.message);
        dispatch({ type: REQUEST_DELETE_PROJECT, payload: id });
      });
  };
};
