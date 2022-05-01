import { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';

import { Stream } from '../../types';
import { fetchStream } from '../../actions';
import { StoreState } from '../../reducers';

type Props = {
  match: { params: { id: number } };
  fetchStream: (id: number) => Promise<void>;
  stream: Stream;
}

const _StreamShowV2 = ({ match: { params: { id } }, fetchStream, stream }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  let player: flv.Player;

  useEffect(() => {
    fetchStream(id);
    buildPlayer();
  }, []);

  useEffect(() => {
    buildPlayer();

    return () => player && player.destroy();
  });

  const buildPlayer = () => {
    if (player || !stream) return;

    player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    if (videoRef.current) {
      player.attachMediaElement(videoRef.current);
      player.load();
    }
  };

  if (!stream) return <div>Loading...</div>;

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (
  { streams }: StoreState,
  { match: { params: { id } } }: Props,
) => {
  return { stream: streams[id] };
};

export const StreamShow = connect(
  mapStateToProps,
  { fetchStream },
)(_StreamShowV2);
