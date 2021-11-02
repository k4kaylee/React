import React, { useState } from "react";

const Home = () => {
  return(
    <>
  <div className="container">
  <h3>Registration field</h3>
  <ul>

  <li>
    <div className="input-field col s6">
      <i className="material-icons prefix">account_circle</i>
      <input
        id="name"
        type="text"
        className="required"
        maxlength = "15ы"
        placeholder="Name"></input>
      </div>
    </li>

    <li>
      <div className="input-field col s6">
      <i className="material-icons prefix"></i>
        <input
          id="surname"
          type="text"
          className="validate"
          maxlength = "20"
          placeholder="Surname"></input>
        </div>
      </li>

    <li>
    <div className="input-field col s6">
      <i className="material-icons prefix">phone</i>
      <input
        id="phone"
        type="tel"
        className="validate"
        maxlength = "10"
        placeholder="Phone number"></input>
      </div>
      </li>

      <li>
      <div className="input-field col s6">
        <i className="material-icons prefix">date_range</i>
        <input
          id="date"
          type="date"
          className="validate"
          placeholder="Date of birth"></input>
        </div>
        </li>

          <li>
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
              id="email"
              type="email"
              className="validate"
              maxlength="20"
              pattern = "/@/"
              placeholder="E-mail"></input>
            </div>
            </li>

            <li>
            <div className="input-field col s6">
              <i className="material-icons prefix">security</i>
              <input
                id="password"
                type="password"
                className="validate"
                minlength="8"
                placeholder="Password"></input>
              </div>
              </li>
      </ul>
  </div>
  </>
)
}
export default Home;
