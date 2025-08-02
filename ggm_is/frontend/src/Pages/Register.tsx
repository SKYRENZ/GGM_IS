import React from 'react';
import '../css/Register.css';
import { useRegisterForm } from '../hooks/useRegisterForm';

const Register: React.FC = () => {
  const { form, handleChange, handleSubmit } = useRegisterForm();

  return (
    <div className="register-bg">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Level:</label>
            <select name="level" value={form.level} onChange={handleChange}>
              <option value="FGKM">FGKM</option>
              <option value="MOVE">MOVE</option>
              <option value="JGEN">JGEN</option>
              <option value="DSYP">DSYP</option>
              <option value="TYA">TYA</option>
              <option value="IAM">IAM</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
          <p className="password-info">Password will be set to: <b>GGMILJ</b></p>
        </form>
      </div>
    </div>
  );
};

export default Register;