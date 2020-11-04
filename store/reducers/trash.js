import {
  TRASH_GET_ALL_REQUESTED,
  TRASH_GET_ALL_SUCCEEDED,
  TRASH_GET_ALL_FAILED,
} from '../actions/trash';

const initialState = {
  mapTrashes: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRASH_GET_ALL_REQUESTED:
      return {
        ...state,
      };
    case TRASH_GET_ALL_SUCCEEDED:
      return {
        ...state,
        mapTrashes: action.payload.mapTrashes,
      };
    case TRASH_GET_ALL_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
