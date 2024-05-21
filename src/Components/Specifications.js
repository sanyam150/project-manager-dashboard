import React, { useEffect } from 'react';
import './Specifications.css';

const Specifications = ({
  rows,
  handleInputChange,
  handleAddRow,
  handleDeleteRow,
  selectedOptions,
  setRows,
}) => {
  const tableMockData = [
    { country: 'Brazil', language: 'Portuguese', id: 1 },
    { country: 'USA', language: 'English', id: 2 },
  ];

  const selectedFromDropDown = () => {
    tableMockData.forEach((data) => {
      if (selectedOptions.includes(data.country)) {
        setRows((prevRows) => [...prevRows, { ...data }]);
      }
    });
  };

  useEffect(() => {
    selectedFromDropDown();
  }, [selectedOptions]);

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Language</th>
            <th>Target Group</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input type='checkbox' />
              </td>
              <td>
                <input
                  type='text'
                  value={row.country}
                  onChange={(e) =>
                    handleInputChange(row.id, 'country', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.language}
                  onChange={(e) =>
                    handleInputChange(row.id, 'language', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type='text'
                  value={row.targetGroup}
                  onChange={(e) =>
                    handleInputChange(row.id, 'targetGroup', e.target.value)
                  }
                />
              </td>
              <td>
                <button type='button' onClick={() => handleAddRow(row.id)}>
                  +
                </button>
                <button type='button' onClick={() => handleDeleteRow(row.id)}>
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
