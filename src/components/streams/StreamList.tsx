import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import { StoreState } from '../../reducers';
import { Stream } from '../../types';

interface Props {
  streams: Stream[];
  currentUserId: string | null;
  isSignedIn: boolean | null;
  fetchStreams: () => Promise<void>;
}

const _StreamList = ({ fetchStreams, streams, currentUserId, isSignedIn }: Props) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdmin = (stream: Stream) => {
    if (stream.userId === currentUserId)
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
  };

  const renderedStreams = streams.map(stream => {
    return (
      <div className="item" key={stream.id}>
        {renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  });

  const renderCreate = () => {
    if (isSignedIn)
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      );
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderedStreams}
      </div>
      {renderCreate()}
    </div>
  );
};

const mapStateToProps = ({ streams, auth }: StoreState) => {
  return {
    streams: (Object.values(streams) as Stream[]),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn,
  };
};

export const StreamList =
  connect(mapStateToProps, { fetchStreams })(_StreamList);
