import { ERROR_PROJECTS, REQUEST_PROJECTS, SUCCESS_PROJECTS } from ".";
import { API } from "../../utils/api";

export const getProjects = (id) => {
  return (dispatch) => {
    API.get(`/projects/${id}`)
      .then((data) => {
        dispatch({ type: REQUEST_PROJECTS });
        if (data.status === 200) {
          dispatch({ type: SUCCESS_PROJECTS, payload: data.data });
        }
      })
      .catch((err) => {
        if (err.response) {
          dispatch({ type: ERROR_PROJECTS, payload: err.message });
        }
      });
  };
};
