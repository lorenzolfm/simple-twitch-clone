import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { StoreState } from '../../reducers';
import { Stream } from '../../types';

interface Props {
  streams: Stream[];
  fetchStreams: () => Promise<void>;
}

const _StreamList = ({ fetchStreams, streams }: Props) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderedStreams = streams.map(stream => {
    return (
      <div className="item" key={stream.id}>
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderedStreams}
      </div>
    </div>
  );
};

const mapStateToProps = ({ streams }: StoreState) => {
  return { streams: (Object.values(streams) as Stream[]) };
};

export const StreamList =
  connect(mapStateToProps, { fetchStreams })(_StreamList);
