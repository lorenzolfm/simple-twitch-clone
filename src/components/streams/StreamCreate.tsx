import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import { createStream } from '../../actions';
import { CreateStreamForm } from '../../types';

interface PropsFromRedux { createStream: typeof createStream }
type Props = InjectedFormProps<CreateStreamForm, PropsFromRedux> & PropsFromRedux;

const _StreamCreate = ({ handleSubmit, createStream }: Props) => {
  const renderInput = (
    { input, label, meta }:
    WrappedFieldProps & { label: string },
  ) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const renderError = ({ error, touched }: WrappedFieldMetaProps) => {
    if (touched && error)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  };

  const onSubmit = (formValues: CreateStreamForm) => {
    createStream(formValues);
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field name="description" component={renderInput} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

interface Form {
  title?: string;
  description?: string;
}

type Errors = Form

const validate = (formValues: Form) => {
  const errors: Errors = {};

  if (!formValues.title)
    errors.title = 'You must enter a title';

  if (!formValues.description)
    errors.description = 'You must enter a description';

  return errors;
};

const formWrapped = reduxForm<CreateStreamForm, Props>({
  form: 'streamCreate',
  validate,
})(_StreamCreate);

export const StreamCreate = connect<Promise<void>>(null, { createStream })(formWrapped);
