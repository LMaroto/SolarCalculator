import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

const TextArea = ({ label, placeholder, name, required, rows, ...props }) => {
  const textAreaRef = useRef(null);

  const [focused, setFocused] = React.useState(false);
  const [filled, setFilled] = React.useState(false);

  const { registerField, fieldName, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const onFocus = React.useCallback(() => setFocused(true), []);

  const onBlur = React.useCallback(() => {
    setFocused(false);
    if (textAreaRef.current) {
      setFilled(!!textAreaRef.current.value);
    }
  }, []);

  return (
    <Container focused={focused} filled={filled} invalid={!!error}>
      <span>{label}</span>
      <textarea
        onFocus={onFocus}
        onBlur={onBlur}
        ref={textAreaRef}
        name={fieldName}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        rows={rows}
        {...props}
      />

      <Error>{error}</Error>
    </Container>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  placeholder: '',
  required: false,
  rows: 4,
};

export default TextArea;
