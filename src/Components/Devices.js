import React from 'react';
import './Devices.css';

const Devices = ({ checkboxes, handleCheckboxChange }) => {
  return (
    <div className='Devices-container'>
      <div style={{ padding: '5px 0px 0px 5px' }}>Devices</div>
      <form>
        {checkboxes.map((checkbox, index) => (
          <div className='device-group' key={index}>
            <label>
              <input
                type='checkbox'
                name={checkbox.name}
                checked={checkbox.checked}
                onChange={handleCheckboxChange}
              />
              {checkbox.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Devices;
