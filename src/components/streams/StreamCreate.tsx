import { Field, InjectedFormProps, reduxForm, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

interface Form {
  title?: string;
  description?: string;
}

type FieldProps = WrappedFieldProps & { label: string }

const _StreamCreate = (props: InjectedFormProps<Form>) => {
  const renderInput = ({ input, label, meta }: FieldProps) => {
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

  const onSubmit = (formValues: Form) => {
    console.log(formValues);
  };

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field name="description" component={renderInput} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

type Errors = Form

const validate = (formValues: Form) => {
  const errors: Errors = {};

  if (!formValues.title)
    errors.title = 'You must enter a title';

  if (!formValues.description)
    errors.description = 'You must enter a description';

  return errors;
};

export const StreamCreate = reduxForm<Form>({
  form: 'streamCreate',
  validate,
})(_StreamCreate);
