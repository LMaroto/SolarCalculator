export default function extractValidationMessage(error) {
  const errors = {};

  error.inner.forEach(validationError => {
    errors[validationError.path] = validationError.message;
  });

  return errors;
}
