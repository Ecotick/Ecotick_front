import { createUserDocument } from "./Firebase";
import { useState } from "react";
import "./Admin.css";

const data = {
  UserId: "",
  Commerce: false,
  Name: "",
};
function Admin() {
  const [formData, setFormData] = useState(data);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData => formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUserDocument(formData);
  };

  const { UserId, Commerce, Name } = formData;
  console.log(formData);

  return (
    <div>
      <form className='bloc-form' onSubmit={handleSubmit}>
        <label htmlFor='UserId'>Identifiant</label>
        <input
          onChange={handleChange}
          value={UserId}
          type='text'
          id='UserId'
          name='UserId'
          placeholder='Identifiant'
        />
        <br />

        <label htmlFor='Commerce'>Commerçant ?</label>
        <label htmlFor='isCommerce'>Oui</label>
        <input onChange={handleChange} value={true} type='radio' id='isCommerce' name='Commerce' />
        <label htmlFor='notCommerce'>Non</label>
        <input
          onChange={handleChange}
          value={false}
          type='radio'
          id='notCommerce'
          name='Commerce'
        />
        {/* <select id="Commerce" value={Commerce} onChange={handleChange}>
            <option value={true}>Oui</option>
            <option value={false}>Non</option>
          </select> */}
        <br />

        <label htmlFor='Name'>Nom</label>
        <input onChange={handleChange} value={Name} type='text' name='Name' placeholder='Nom' />
        <br />
        <button type='submit'>Valider</button>
      </form>
    </div>
  );
}

export default Admin;
