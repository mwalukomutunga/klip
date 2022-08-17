const InPut = ({ Label, name,defaultValue,setInputs }) => {

    const handleInputChange = (event) => {
        event.persist();
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name)
        setInputs((inputs) => ({ ...inputs, [name]: value }));
      };
    return (
      <div className="mb-2">
        <label for="password" className="form-label">
          {Label}
        </label>
        <div className="input-group input-group-merge">
          <input
            type="text"
            name={name}
            defaultValue ={defaultValue}
            className="form-control"
            placeholder={`Enter your ${Label}`}
            onChange={handleInputChange}
          />
  
        </div>
      </div>
    );
  };
  
  export default InPut;
  