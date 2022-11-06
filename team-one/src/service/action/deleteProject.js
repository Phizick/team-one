import { REQUEST_DELETE_PROJECT } from "."
import { API } from "../../utils/api"

export const deleteProjectR = () => {
    return dispatch => {
        API.delete(`/projects`,{
            "project_id": "6367a00b3ec3dc905df93ef6"
        })
        .then((data) => {
            dispatch({type: REQUEST_DELETE_PROJECT, payload: 12})
            console.log(data)
        })
        .catch((err) => {
            if (err.response) {
                console.log(err)
            }
          });
    }
}