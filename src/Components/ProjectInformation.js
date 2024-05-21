import React from 'react';
import './ProjectInformation.css';

const FormComponent = ({ formData, handleChange, errors }) => {
  return (
    <div className='form-container'>
      <h4
        style={{
          textAlign: 'left',
          padding: '10px',
          margin: '0',
          backgroundColor: 'white',
        }}
      >
        PROJECT INFORMATION
      </h4>
      {/* Form group 1 */}
      <div className='form-group_1'>
        <div className='form-group'>
          <label htmlFor='projectName'>Project Name</label>
          <input
            type='text'
            id='projectName'
            name='projectName'
            value={formData.projectName}
            onChange={handleChange}
            placeholder='Project Name'
          />
          <div className='error'>{errors.projectName}</div>
        </div>

        <div className='form-group'>
          <label htmlFor='workOrderNo'>Work Order No:</label>
          <select
            id='workOrderNo'
            name='workOrderNo'
            value={formData.workOrderNo}
            onChange={handleChange}
          >
            <option value=''>Please Select</option>
            <option value='Work Order 1'>Work Order 1</option>
            <option value='Work Order 2'>Work Order 2</option>
            <option value='Work Order 3'>Work Order 3</option>
          </select>
          <div className='error'>{errors.workOrderNo}</div>
        </div>
      </div>
      {/* Form group 2 */}
      <div className='form-group_2'>
        <div className='form-group'>
          <label htmlFor='projectType'>Project Type</label>
          <select
            id='ProjectType'
            name='projectType'
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value=''>Project Type</option>
            <option value='Project1'>Project 1</option>
            <option value='Project2'>Project 2</option>
            <option value='Project3'>Project 3</option>
          </select>
          <div className='error'>{errors.projectType}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Category </label>
          <select
            id='category'
            name='category'
            value={formData.category}
            onChange={handleChange}
          >
            <option value=''>Select category </option>
            <option value='category1'>category 1</option>
            <option value='category2'>category 2</option>
            <option value='category3'>category 3</option>
          </select>
          <div className='error'>{errors.category}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='client'>client </label>
          <select
            id='client'
            name='client'
            value={formData.client}
            onChange={handleChange}
          >
            <option value=''>Select category </option>
            <option value='category1'>client 1</option>
            <option value='category2'>client 2</option>
            <option value='category3'>client 3</option>
          </select>
          <div className='error'>{errors.client}</div>
        </div>
      </div>
      {/* Form group 3 */}
      <div className='form-group_3'>
        <div className='form-group'>
          <label htmlFor='Client Contact'>client Contact</label>
          <select
            id='clientContact'
            name='clientContact'
            value={formData.clientContact}
            onChange={handleChange}
          >
            <option value=''>Select Client Contact</option>
            <option value='clientContact1'>client Contact 1</option>
            <option value='clientContact2'>client Contact 2</option>
            <option value='clientContact3'>client Contact 3</option>
          </select>
          <div className='error'>{errors.clientContact}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='Sales Person'>Sales Person</label>
          <select
            id='salesPerson'
            name='salesPerson'
            value={formData.salesPerson}
            onChange={handleChange}
          >
            <option value=''>Select Sales Person </option>
            <option value='category1'>sales Person 1</option>
            <option value='category2'>sales Person 2</option>
            <option value='category3'>sales Person 3</option>
          </select>
          <div className='error'>{errors.salesPerson}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='projectManager'>Project Manager </label>
          <select
            id='projectManager'
            name='projectManager'
            value={formData.projectManager}
            onChange={handleChange}
          >
            <option value=''>Select Project Manager </option>
            <option value='projectManager1'>Project Manager 1</option>
            <option value='projectManager2'>Project Manager 2</option>
            <option value='projectManager3'>Project Manager 3</option>
          </select>
          <div className='error'>{errors.projectManager}</div>
        </div>
      </div>
      {/* Form group 4 */}
      <div className='form-group_4'>
        <div className='form-group'>
          <label htmlFor='projectDescription'>Project Description</label>
          <textarea
            type='text'
            id='project Description'
            name='projectDescription'
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder='Project Description'
          />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
