import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { nanoid } from "nanoid";

const UserModal = (props) => {
  const [form, setForm] = useState({});
	const {cars, setCars, toggle, car,} = props
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
		if (car.id) {
			let new_arr = cars.map((item, index)=>{
				if (item.id === car.id) {
					item.name = form.name ? form.name : item.name
					item.year = form.year ? form.year : item.year
					item.color = form.color ? form.color : item.color
					item.price = form.price ? form.price : item.price
					item.brand = form.brand ? form.brand : item.brand
				}
				return item
			})
			setCars([...new_arr])
		}else{
			let id = nanoid();
			cars.push({...form, id})
    	setCars([...cars])
		}
		toggle()
  };

  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1 className="text-center">Add Car</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control my-2"
						defaultValue={car.name}
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Year"
            name="year"
            className="form-control my-2"
						defaultValue={car.year}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="form-control my-2"
						defaultValue={car.color}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            className="form-control my-2"
						defaultValue={car.price}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
						defaultValue={car.brand}
            onChange={handleChange}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>
          Cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
