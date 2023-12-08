import { GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_ERROR } from "../constants/Users";

const initialState = { users: [], loading: false, error: "" };

function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: payload,
        loading: false,
      };
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default usersReducer;
