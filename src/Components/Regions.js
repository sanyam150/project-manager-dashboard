import React from 'react';
import './Regions.css';

const Regions = ({
  options,
  selectedOptions,
  handleOptionClick,
  handleRemoveOption,
}) => {
  return (
    <div className='multi-select-container'>
      <div style={{ padding: '10px 0px 0px 10px' }}>Regions</div>
      <div className='selected-options'>
        {selectedOptions.map((option) => (
          <span key={option} className='selected-option'>
            {option}
            <button type='button' onClick={() => handleRemoveOption(option)}>
              x
            </button>
          </span>
        ))}
      </div>
      <div className='dropdown'>
        {options.map((option) => (
          <div
            key={option}
            className={`dropdown-option ${
              selectedOptions.includes(option) ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;
