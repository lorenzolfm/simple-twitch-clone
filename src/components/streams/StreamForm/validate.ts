export interface Form {
  title?: string;
  description?: string;
}

type Errors = Form

export const validate = (formValues: Form) => {
  const errors: Errors = {};

  if (!formValues.title)
    errors.title = 'You must enter a title';

  if (!formValues.description)
    errors.description = 'You must enter a description';

  return errors;
};
