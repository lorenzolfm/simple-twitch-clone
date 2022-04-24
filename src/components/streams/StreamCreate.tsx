import { connect } from 'react-redux';

import { createStream } from '../../actions';
import { CreateStreamForm } from '../../types';
import { StreamForm } from './StreamForm';

type Props = { createStream: (formValues: CreateStreamForm) => Promise<void> }

const _StreamCreate = ({ createStream }: Props) => {
  const onSubmit = (formValues: CreateStreamForm) => {
    createStream(formValues);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmitHandler={onSubmit}/>
    </div>
  );
};

export const StreamCreate = connect(null, { createStream })(_StreamCreate);
