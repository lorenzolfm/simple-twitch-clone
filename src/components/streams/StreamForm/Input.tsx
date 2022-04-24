import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

export const Input = (
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

