import _ from 'lodash';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../actions';
import { StoreState } from '../../reducers';
import { CreateStreamForm, Stream } from '../../types';
import { StreamForm } from './StreamForm';

type Props = {
  match: { params: { id: number } };
  stream: Stream
  fetchStream: (id: number) => Promise<void>;
  editStream: (id: number, formValues: CreateStreamForm) => Promise<void>
}

export const _StreamEdit = (
  {
    editStream,
    fetchStream,
    stream,
    match: { params: { id } },
  }: Props,
) => {
  useEffect(() => {
    fetchStream(id);
  }, []);

  const onSubmit = (formValues: CreateStreamForm) => {
    editStream(id, formValues);
  };

  if (!stream)
    return <div>Loading</div>;

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(stream, 'title', 'description')}
        onSubmitHandler={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (
  { streams }: StoreState,
  { match: { params: { id } } }: Props,
) => {
  return { stream: streams[id] };
};

export const StreamEdit = connect(
  mapStateToProps,
  { editStream, fetchStream },
)(_StreamEdit);
