import { REQUEST_DELETE_PROJECT } from ".";
import { API } from "../../utils/api";

export const deleteProjectR = (id) => {
  return (dispatch) => {
    API.delete("/projects", {
      project_id: `${id}`,
    })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: REQUEST_DELETE_PROJECT, payload: id });
        }
      })
      .catch((err) => {
        console.log('Что-то с АПИ: ',err.message);
        dispatch({ type: REQUEST_DELETE_PROJECT, payload: id });
      });
  };
};
