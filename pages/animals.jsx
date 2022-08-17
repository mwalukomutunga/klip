import FormLayout from "../components/FormLayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";

const InsuredAnimal = () => {
  const user = useSelector((state) => state.user);
  const [input, setInputs] = useState({});
  const [animals, setAnimals] = useState({});
  const router = useRouter();

  useEffect(() => {
    requests.get("Auth/" + user?.user?.email).then((res) => {
      setInputs(res);
    });
  }, []);
  const handleSelectChange = (e) => {
    setAnimals((inputs) => ({ ...inputs, name: e.target.value }));
    // setInputs((inputs) => ({ ...inputs, farmerLocation:{...inputs.farmerLocation,[actionMeta.name]: e.target.value }}));
  };
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setAnimals((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setInputs((inputs) => ({
      ...inputs,
      insured: [...inputs.insured, animals],
    }));
    requests.put("Auth/" + user?.user?.email, {...input, insured: [...input.insured, animals]}).then((res) => {
        router.push("/");
      });   
  };
  return (
    <FormLayout Page="Insured amimals">
      <form
        className="form-horizontal"
        onSubmit={(e) => handleUpdate(e)}
        role="form"
      >
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" for="example-placeholder">
            Animal name
          </label>
          <div className="col-md-10">
            <select
              selected={input?.insured?.name}
              onChange={handleSelectChange}
              className="form-control"
            >
              <option>Oxen</option>
              <option>Cows</option>
              <option>Heifer</option>
              <option>Calfs</option>
              <option>Goats</option>
              <option>Sheep</option>
              <option>Camels</option>
            </select>
          </div>
        </div>
        <div className="mb-2 row">
          <label className="col-md-2 col-form-label" for="example-placeholder">
            Animal Count
          </label>
          <div className="col-md-10">
            <input
              type="number"
              className="form-control"
              placeholder="count"
              name="number"
              required
              defaultValue={input?.insured?.number}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label">Readonly</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" readonly="" value="Readonly value">
                                                    </div>
                                                </div>
                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label">Disabled</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" disabled="" value="Disabled value">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2  col-form-label" for="example-static">Static control</label>
                                                    <div className="col-md-10">
                                                        <input type="text" readonly="" className="form-control-plaintext" id="example-static" value="email@example.com">
                                                    </div>
                                                </div>
                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-helping">Helping text</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" id="example-helping" placeholder="Helping text">
                                                        <span className="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label">Input Select</label>
                                                    <div className="col-md-10">
                                                        <select className="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                        <h6>Multiple select</h6>
                                                        <select multiple className="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-fileinput">Default file input</label>
                                                    <div className="col-md-10">
                                                        <input type="file" className="form-control" id="example-fileinput">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-date">Date</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="date" name="date" id="example-date">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-month">Month</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="month" id="example-month" name="month">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-time">Time</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="time" id="example-time" name="time">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-week">Week</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="week" id="example-week" name="week">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-number">Number</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="number" id="example-number" name="number">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label">URL</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="url" name="url">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label">Search</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="search" name="search">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label">Tel</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control" type="tel" name="tel">
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="example-color">Color</label>
                                                    <div className="col-md-10">
                                                        <input className="form-control form-control-color w-100" type="color" id="example-color" name="color" value="#3bafda" >
                                                    </div>
                                                </div>

                                                <div className="mb-2 row">
                                                    <label className="col-md-2 col-form-label" for="form-range">Form range</label>
                                                    <div className="col-md-10 align-self-center">
                                                        <input className="form-range" type="range" id="form-range" name="range" min="0" max="10">
                                                    </div>
                                                </div> */}
        <div className="d-grid text-center">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </FormLayout>
  );
};

export default InsuredAnimal;
