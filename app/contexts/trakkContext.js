import createDataContext from "./createDataContext";
import api from "../../api";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRAKS_SUCCESS":
      return { ...state, traks: action.payload };
    default:
      return state;
  }
};

const fetchTraks = (dispatch) => async () => {
  const fetch = await api.get("/tracks");
  dispatch({
    type: "FETCH_TRAKS_SUCCESS",
    payload: fetch.data,
  });
};
const createTraks = (dispatch) => async (name, locations) => {
  try {
    const create = await api.post("/tracks", { name, locations });
    return create.status === 200 ? true : false;
  } catch (err) {
    return err.message;
  }
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTraks, createTraks },
  { traks: [] }
);
