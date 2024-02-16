import axios from "axios";
import { ERROR, LOADING, SUCCESS } from "./ActionType";

const popular = (dispatch) => {
    dispatch({ type: LOADING });
  
    axios
      .get("http://localhost:5555/popular")
      .then((res) => {
        console.log(res.data);  // Log the response
        dispatch({ type: SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
  export default popular;
  
