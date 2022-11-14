// Редьюсер на добавление проекта
// Делаем запрос на API /projects

import { ERROR_ADD_PROJECT, REQUEST_ADD_PROJECT } from ".";
import { API } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";

export const addProject = (
  id,
  name,
  dateOn,
  dateFrom,
  about,
  subject,
  date
) => {
  return (dispatch) => {
    API.post(`/projects`, {
      user_id: id,
      name: name,
      dateOn: dateOn,
      dateFrom: dateFrom,
      about: about,
      subject: subject,
    })

      .then((data) => {
        checkResponse(data);
        dispatch({
          type: REQUEST_ADD_PROJECT,
          payload: data.data,
          data: {
            id: id,
            name: name,
            dateOn: dateOn,
            dateFrom: dateFrom,
            about: about,
            subject: subject,
            date: date,
          },
        });
      })
      .catch((err) => {
        if (err.response) {
          dispatch({ type: ERROR_ADD_PROJECT, payload: err.message });
        }
      });
  };
};
