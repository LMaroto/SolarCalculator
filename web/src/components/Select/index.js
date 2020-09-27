import React, { useRef, useEffect } from 'react';

import ReactSelect from 'react-select';

import { useField } from '@unform/core';

import { Container, Error } from './styles';

const customSelectStyle = {
  control: (base, state) => ({
    ...base,

    background: '#e5e5e5',
    // match with the menu
    borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? '#ee8143' : '#e5e5e5',
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? '#ee8143' : '#e5e5e5',
    },
  }),

  menu: (base, state) => ({
    ...base,
    height: '200px',
  }),

  menuList: (base, state) => ({
    ...base,
    height: '200px',
  }),
};

const Select = ({ name, label, placeholder, options, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,

      ref: selectRef.current,

      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map(option => option.value);
        }

        if (!ref.state.value) {
          return '';
        }

        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const defaultSelectValue = options.find(
    option => option.value === defaultValue
  );
  return (
    <Container>
      <span>{label}</span>
      <ReactSelect
        defaultValue={defaultSelectValue}
        ref={selectRef}
        classNamePrefix="react-select"
        styles={customSelectStyle}
        placeholder={placeholder}
        options={options}
        {...rest}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Select;
