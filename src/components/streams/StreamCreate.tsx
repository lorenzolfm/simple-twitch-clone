import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form';

//const _StreamCreate = (props: InjectedFormProps<Record<string, never>>) => {
const _StreamCreate = (): JSX.Element => {
  const renderInput = ({ input, label }: WrappedFieldProps & { label: string }) => {
    return (
      <div className="field">
        <label htmlFor={input.name}>{label}</label>
        <input {...input} />
      </div>
    );
  };

  return (
    <form className="ui form">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field name="description" component={renderInput} label="Enter Description" />
    </form>
  );
};

export const StreamCreate = reduxForm<Record<string, never>>({
  form: 'streamCreate',
})(_StreamCreate);
