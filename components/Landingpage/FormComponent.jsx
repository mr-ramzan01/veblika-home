"use client";

import React, { useState } from "react";
import { TiTickOutline } from "react-icons/ti";
const initialState = {
  email: "",
  password: "",
  repeatPassword: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  company: "",
};
const FormComponent = () => {
  const [formData, setFormData] = useState(initialState);
  const inputClassValue =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelClassValue =
    "peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "FormData");
  };
  return (
    <div className=" justify-center">
      <form
        className=" w-full mobile:p-3 desktop:p-10 shadow-3xl rounded-md"
        onSubmit={handleFormSubmit}
      >
        <h2 className="mobile:text-2xl tablet:text-2xl desktop:text-3xl text-[#f3571a]">Start your free trial</h2>
        <h4 className="mobile:text-base desktop:text-lg my-1">
          Get Started with a demo account on veblika
        </h4>
        <div className="my-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                name="firstName"
                id="floating_first_name"
                className={inputClassValue}
                placeholder=" "
                required
              />
              <label for="floating_first_name" className={labelClassValue}>
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                name="lastName"
                id="floating_last_name"
                className={inputClassValue}
                placeholder=" "
                required
              />
              <label for="floating_last_name" className={labelClassValue}>
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="floating_email"
              className={inputClassValue}
              placeholder=" "
              required
            />
            <label for="floating_email" className={labelClassValue}>
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={formData.password}
              onChange={handleChange}
              type="password"
              name="password"
              id="floating_password"
              className={inputClassValue}
              placeholder=" "
              required
            />
            <label for="floating_password" className={labelClassValue}>
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={formData.repeatPassword}
              onChange={handleChange}
              type="password"
              name="repeatPassword"
              id="floating_repeat_password"
              className={inputClassValue}
              placeholder=" "
              required
            />
            <label for="floating_repeat_password" className={labelClassValue}>
              Confirm password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={formData.phoneNumber}
              onChange={handleChange}
              type="tel"
              pattern="[78956][0-9]{9}"
              name="phoneNumber"
              id="floating_phone"
              className={inputClassValue}
              placeholder=" "
              required
            />
            <label for="floating_phone" className={labelClassValue}>
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={formData.company}
              onChange={handleChange}
              type="text"
              name="company"
              id="floating_company"
              className={inputClassValue}
              placeholder=" "
              required
            />
            <label for="floating_company" className={labelClassValue}>
              {`Company (Ex. Google)`}
            </label>
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 mt-10 bg-[#f3571a] transition-all duration-300 text-white rounded-sm"
          >
            Start my free trail
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
