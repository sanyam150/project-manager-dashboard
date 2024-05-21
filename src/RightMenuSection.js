import React, { useState } from 'react';
import ProjectInformation from './Components/ProjectInformation';
import Devices from './Components/Devices';
import FilterOptions from './Components/FilterOptions';
import './RightMenuSection.css';
import Regions from './Components/Regions';
import Specifications from './Components/Specifications';

const App = () => {
  const options = ['Brazil', 'USA'];
  const [checkboxes, setCheckboxes] = useState([
    { name: 'Mobile', label: 'Mobile', checked: false },
    { name: 'Tablet', label: 'Tablet', checked: false },
    { name: 'Desktop', label: 'Desktop', checked: false },
  ]);
  const [filterOptions, setFilterOptions] = useState([
    { name: 'Gate Survey', label: 'Gate Survey', checked: false },
    { name: 'fraud_detection', label: 'fraud_detection', checked: false },
  ]);
  const [formData, setFormData] = useState({
    projectName: '',
    workOrderNo: '',
    projectType: '',
    category: '',
    client: '',
    clientContact: '',
    salesPerson: '',
    projectManager: '',
    projectDescription: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [rows, setRows] = useState([]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.name === name ? { ...checkbox, checked } : checkbox
    );
    const updateFilterCheckBoxes = filterOptions.map((checkbox) =>
      checkbox.name === name ? { ...checkbox, checked } : checkbox
    );
    setFilterOptions(updateFilterCheckBoxes);
    setCheckboxes(updatedCheckboxes);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.projectName) formErrors.projectName = 'Field is required';
    if (!formData.workOrderNo) formErrors.workOrderNo = 'Field is required';
    if (!formData.projectType) formErrors.projectType = 'Field is required';
    if (!formData.category) formErrors.category = 'Field is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert('Open Console to check form data');
      console.log('Form Data:', formData, filterOptions, checkboxes);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((item) => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((item) => item !== option)
    );
  };

  const handleInputChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleAddRow = (id) => {
    const newRow = rows.find((row) => row.id === id);
    setRows([...rows, { ...newRow, id: Date.now() }]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <div className='RightMenuSectionContainer'>
      <div style={{ display: 'flex' }}>
        <ProjectInformation
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <div style={{ width: '35%' }}>
          <Devices
            checkboxes={checkboxes}
            handleCheckboxChange={handleCheckboxChange}
          />
          <FilterOptions
            filterOptions={filterOptions}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
      <Regions
        options={options}
        selectedOptions={selectedOptions}
        handleOptionClick={handleOptionClick}
        handleRemoveOption={handleRemoveOption}
      />
      <Specifications
        rows={rows}
        handleInputChange={handleInputChange}
        handleAddRow={handleAddRow}
        handleDeleteRow={handleDeleteRow}
        selectedOptions={selectedOptions}
        setRows={setRows}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
