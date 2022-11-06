import { ERROR_ADD_PROJECT, REQUEST_ADD_PROJECT } from ".";
import { API } from "../../utils/api";

export const addProject = (id, name, dateOn, dateFrom, about, subject) => {
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
        if (data.status === 200) {
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
            },
          });
        }
      })
      .catch((err) => {
        if (err.response) {
          dispatch({ type: ERROR_ADD_PROJECT, payload: err.message });
        }
      });
  };
};
