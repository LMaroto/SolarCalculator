import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { CheckBoxContainer } from './styles';

const Checkbox = ({ label, required, onClick, name, ...props }) => {
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

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  required: false,
  onClick: undefined,
};

export default Checkbox;
