// Редьюсер на получение проектов
// Делаем запрос на API /projects поп id пользователя

import { ERROR_PROJECTS, REQUEST_PROJECTS, SUCCESS_PROJECTS } from ".";
import { API } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";

export const getProjects = (id) => {
  return (dispatch) => {
    API.get(`/projects/${id}`)
      .then((data) => {
        checkResponse(data);
        dispatch({ type: REQUEST_PROJECTS });
        dispatch({ type: SUCCESS_PROJECTS, payload: data.data });
      })
      .catch((err) => {
        if (err.response) {
          dispatch({ type: ERROR_PROJECTS, payload: err.message });
        }
      });
  };
};
