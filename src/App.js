import React, { useState, Fragment } from 'react';

function App() {
  const [inputFields, setInputFields] = useState([
    {
      firstName: '',
      lastName: '',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  const handleInputChange = (i, e) => {
    const values = [...inputFields];

    if (e.target.name === 'firstName') {
      values[i].firstName = e.target.value;
    } else {
      values[i].lastName = e.target.value;
    }

    setInputFields(values);
  };

  const addField = () => {
    const values = [...inputFields];
    values.push({ firstName: '', lastName: '' });
    setInputFields(values);
  };

  const removeField = (i) => {
    let values = [...inputFields];
    if (values.length > 1) {
      values = values.filter((value, index) => i !== index);
      setInputFields(values);
    }
  };

  return (
    <div className="container pt-5">
      <h1 className="text-center mb-5">Dynamic Form Fields in React</h1>

      <form onSubmit={handleSubmit}>
        {inputFields.map((field, i) => (
          <div className="row" key={i}>
            <div className="form-group col-sm-5">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => handleInputChange(i, e)}
                value={field.firstName}
              />
            </div>
            <div className="form-group col-sm-5">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => handleInputChange(i, e)}
                value={field.lastName}
              />
            </div>
            <div className="form-group col-sm-2">
              <button
                className="btn btn-primary btn-sm mr-2"
                onClick={addField}
              >
                +
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeField(i)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <input type="submit" value="Save" className="btn btn-success" />
      </form>
    </div>
  );
}

export default App;
