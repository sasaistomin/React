import React, { useState } from 'react';

const FormMacek = () => {
      const [formData, setFormData] = useState({
            userid: '',
            password: '',
            username: '',
            address: '',
            country: '',
            zip: '',
            email: '',
            sex: 'Male',
            language: 'English',
            about: ''
      });

      const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData({
                  ...formData,
                  [name]: type === 'checkbox' ? (checked ? value : '') : value
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Данные формы:', formData);
            alert('Форма отправлена! Проверьте консоль.');
      };

      return (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px' }}>

                  <label>User id [5 to 7 characters] :
                        <input type="text" name="userid" value={formData.userid} onChange={handleChange} minLength="5" maxLength="7" required />
                  </label>

                  <label>Password [7 to 12 characters] :
                        <input type="password" name="password" value={formData.password} onChange={handleChange} minLength="7" maxLength="12" required />
                  </label>

                  <label>Name [Alphabetic characters] :
                        <input type="text" name="username" value={formData.username} onChange={handleChange} pattern="[A-Za-z\s]+" required />
                  </label>

                  <label>Address [alphanumeric characters] :
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                  </label>

                  <label>Country [Must select a country] :
                        <select name="country" value={formData.country} onChange={handleChange} required>
                              <option value="">(Please select a country)</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="USA">USA</option>
                              <option value="UK">UK</option>
                        </select>
                  </label>

                  <label>ZIP Code [alphanumeric characters] :
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                  </label>

                  <label>Email [Valid email] :
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </label>

                  <div>
                        Sex:
                        <label>
                              <input type="radio" name="sex" value="Male" checked={formData.sex === 'Male'} onChange={handleChange} /> Male
                        </label>
                        <label>
                              <input type="radio" name="sex" value="Female" checked={formData.sex === 'Female'} onChange={handleChange} /> Female
                        </label>
                  </div>

                  <div>
                        Language:
                        <label>
                              <input type="checkbox" name="language" value="English" checked={formData.language === 'English'} onChange={handleChange} /> English
                        </label>
                        <label>
                              <input type="checkbox" name="language" value="Non English" checked={formData.language === 'Non English'} onChange={handleChange} /> Non English
                        </label>
                  </div>

                  <label>About [Optional] : <br />
                        <textarea name="about" value={formData.about} onChange={handleChange} />
                  </label>

                  <button type="submit">Submit</button>
            </form>
      );
};

export default FormMacek;