import React, { useState } from 'react';
import ProjectInformation from './Components/ProjectInformation';
import './RightMenuSection.css';

const App = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    workOrderNo: '',
    projectType: '',
    category: '',
    client: '',
    clientContact: '',
    salesPerson: '',
    projectManager: '',
    projectDescription:''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className='RightMenuSectionContainer'>
      <button>Back</button>
      <ProjectInformation
        formData={formData}
        handleChange={handleChange}
        errors={errors}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
