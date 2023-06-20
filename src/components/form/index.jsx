import React, { memo, useState } from 'react';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onPressEnterHandler = (e) => {
    if (e.code === 'Enter' && value.trim() !== '') {
      onSubmit(value);
      setValue('');
      
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        onKeyUpCapture={onPressEnterHandler}
      />
      
    </div>
  );
};

export default memo(Form);