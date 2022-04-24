import _ from 'lodash';
import { Action, ActionTypes } from '../actions';
import { Stream, StreamsState } from '../types';

const stateWithNewStream = (state: StreamsState, payload: Stream) =>
  ({
    ...state,
    [payload.id]: payload,
  });

export const streamReducer = (
  state: StreamsState = {},
  action: Action,
): StreamsState => {
  switch (action.type) {
    case ActionTypes.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case ActionTypes.FETCH_STREAM:
      return stateWithNewStream(state, action.payload);
    case ActionTypes.CREATE_STREAM:
      return stateWithNewStream(state, action.payload);
    case ActionTypes.EDIT_STREAM:
      return stateWithNewStream(state, action.payload);
    case ActionTypes.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
