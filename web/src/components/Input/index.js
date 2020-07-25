import React, { useRef } from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const Input = ({
  label, type, placeholder, required, disabled, ...props
}) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = React.useState(false);
  const [filled, setFilled] = React.useState(false);

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

    !disabled
    && (
    <Container focused={focused} filled={filled}>
      <span>{label}</span>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </Container>
    )

  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  required: true,
  disabled: false,
};

export default Input;
