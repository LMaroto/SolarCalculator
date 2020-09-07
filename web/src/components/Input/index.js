import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { Container, CheckBoxContainer, Error } from './styles';

const Input = ({
  label,
  type,
  onClick,
  placeholder,
  name,
  required,
  disabled,
  ...props
}) => {
  const inputRef = useRef(null);

  const [focused, setFocused] = React.useState(false);
  const [filled, setFilled] = React.useState(false);

  const { registerField, fieldName, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const onFocus = React.useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = React.useCallback(() => {
    setFocused(false);
    if (inputRef.current) {
      setFilled(!!inputRef.current.value);
    }
  }, []);

  return (
    !disabled && (
      <Container focused={focused} filled={filled} invalid={!!error}>
        <span>{label}</span>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          name={fieldName}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          {...props}
        />

        <Error>{error}</Error>
      </Container>
    )
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  required: true,
  disabled: false,
};

export const CheckBox = ({ label, required, onClick, name, ...props }) => {
  const inputRef = useRef(null);
  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <CheckBoxContainer>
      <label>
        <input
          ref={inputRef}
          type="checkbox"
          name={name}
          {...(onClick ? { onClick } : {})}
          {...props}
        />
        {label}
      </label>
    </CheckBoxContainer>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onClick: PropTypes.func,
};

CheckBox.defaultProps = {
  required: false,
  onClick: undefined,
};

export default Input;
