import {
  Field,
  InjectedFormProps,
  reduxForm,
} from 'redux-form';

import { CreateStreamForm } from '../../../types';
import { Input } from './Input';
import { validate } from './validate';

interface Props extends Partial<InjectedFormProps<CreateStreamForm>> {
  onSubmitHandler: (formValues: CreateStreamForm) => void
}

const _StreamForm= ({ handleSubmit, onSubmitHandler }: Props) => {
  const onSubmit = (formValues: CreateStreamForm) => {
    onSubmitHandler(formValues);
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit && handleSubmit(onSubmit)}>
      <Field name="title" component={Input} label="Enter Title" />
      <Field name="description" component={Input} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

export const StreamForm = reduxForm<CreateStreamForm, Props>({
  form: 'streamForm',
  validate,
})(_StreamForm);
