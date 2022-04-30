import { connect } from 'react-redux';

import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

import { Modal } from '../Modal';
import { useEffect } from 'react';
import { StoreState } from '../../reducers';
import { Stream } from '../../types';
import { Link } from 'react-router-dom';

type Props = {
  deleteStream: (id: number) => Promise<void>;
  fetchStream: (id: number) => Promise<void>;
  match: { params: { id: number } };
  stream: Stream
}

export const _StreamDelete = ({
  stream,
  deleteStream,
  fetchStream,
  match: { params: { id } },
}: Props) => {
  useEffect(() => {
    fetchStream(id);
  }, []);

  const actions = (
    <>
      <button onClick={() => deleteStream(stream.id)} className="ui button negative">Delete</button>
      <Link to={'/'} className="ui button">Cancel</Link>
    </>
  );

  const renderContent = () => {
    if (!stream)
      return 'Are you sure you want to delete this stream?';

    return `Are you sure you want to delete stream "${ stream.title }"`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push('/')}
    />
  );
};

const mapStateToProps = (
  { streams }: StoreState,
  { match: { params: { id } } }: Props,
) => {
  return { stream: streams[id] };
};

export const StreamDelete = connect(
  mapStateToProps,
  { deleteStream, fetchStream },
)(_StreamDelete);
