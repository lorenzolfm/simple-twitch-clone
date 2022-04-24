import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { StoreState } from '../../reducers';
import { Stream } from '../../types';

type Props = {
  match: { params: { id: number } };
  stream: Stream
  fetchStream: (id: number) => Promise<void>;
}

export const _StreamEdit = (
  {
    stream,
    fetchStream,
    match: { params: { id } },
  }: Props,
) => {
  useEffect(() => {
    fetchStream(id);
  }, []);

  if (!stream)
    return <div>Loading</div>;

  return <div>{stream.title}</div>;
};

const mapStateToProps = (
  { streams }: StoreState,
  { match: { params: { id } } }: Props,
) => {
  return { stream: streams[id] };
};

export const StreamEdit =
  connect(mapStateToProps, { fetchStream })(_StreamEdit);
