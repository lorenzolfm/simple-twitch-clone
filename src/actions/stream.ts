import { Dispatch } from 'redux';
import streams from '../apis/streams';
import history from '../history';
import { StoreState } from '../reducers';
import { CreateStreamForm, Stream } from '../types';
import { ActionTypes } from './types';

export interface CreateStreamAction {
  type: ActionTypes.CREATE_STREAM;
  payload: Stream;
}
export const createStream = (formValues: CreateStreamForm) =>
  async (dispatch: Dispatch, getState: () => StoreState) => {
    const { userId } = getState().auth;

    const response = await streams.post<Stream>('/streams', { ...formValues, userId });

    dispatch<CreateStreamAction>({
      type: ActionTypes.CREATE_STREAM,
      payload: response.data,
    });

    history.push('/');
  };

export interface FetchStreamsAction {
  type: ActionTypes.FETCH_STREAMS;
  payload: Stream[];
}

export const fetchStreams = () => async (dispatch: Dispatch) => {
  const response = await streams.get<Stream[]>('/streams');

  dispatch<FetchStreamsAction>({
    type: ActionTypes.FETCH_STREAMS,
    payload: response.data,
  });
};

export interface FetchStreamAction {
  type: ActionTypes.FETCH_STREAM;
  payload: Stream;
}

export const fetchStream = (id: number) => async (dispatch: Dispatch) => {
  const response = await streams.get<Stream>(`/streams/${id}`);

  dispatch<FetchStreamAction>({
    type: ActionTypes.FETCH_STREAM,
    payload: response.data,
  });
};

export interface EditStreamAction {
  type: ActionTypes.EDIT_STREAM;
  payload: Stream;
}

export const editStream = (id: number, formValues: CreateStreamForm) =>
  async (dispatch: Dispatch) => {
    const response = await streams.patch<Stream>(`/streams/${id}`, formValues);

    dispatch<EditStreamAction>({
      type: ActionTypes.EDIT_STREAM,
      payload: response.data,
    });

    history.push('/');
  };

export interface DeleteStreamAction {
  type: ActionTypes.DELETE_STREAM;
  payload: number;
}

export const deleteStream = (id: number) => async (dispatch: Dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch<DeleteStreamAction>({
    type: ActionTypes.DELETE_STREAM,
    payload: id,
  });

  history.push('/');
};
