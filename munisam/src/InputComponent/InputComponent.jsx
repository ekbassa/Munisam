import React from 'react';
import './InputComponent.scss';

const InputComponent = ({ label, value, ...otherProps }) => {
  const isControlled = value !== undefined;

  return (
    <div className='group'>
      <input
        className='form-input'
        value={isControlled ? value : ''}
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            isControlled && value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputComponent;
