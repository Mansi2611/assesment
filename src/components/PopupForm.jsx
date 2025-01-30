import React, { useState } from "react";

export default function PopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    service: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim())
      formErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      formErrors.lastName = "Last name is required.";
    if (!formData.contact.trim()) {
      formErrors.contact = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      formErrors.contact = "Contact must be a valid 10-digit number.";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Email is not valid.";
    }
    if (!formData.service) formErrors.service = "Please select a service.";
    if (formData.website && !/^https?:\/\/.+\..+/.test(formData.website)) {
      formErrors.website =
        "Website must be a valid URL (e.g., https://example.com).";
    }
    if (!formData.message.trim())
      formErrors.message = "Message cannot be empty.";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
    //   console.log("Form Data Submitted:", formData);

      onClose();
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        service: "",
        website: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-10 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Let's Talk?</h2>
        <p className="text-lg text-center mb-6">
          Let's make something awesome together
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Contact"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Id"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-3 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Service Interested In</option>
                <option value="web-design">Search Engine Marketing</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="digital-marketing">Social Marketing</option>
                <option value="seo">Search Engine Optimization</option>
                <option value="seo">Website Development</option>
                <option value="seo">App Development</option>
                <option value="seo">Statergy And Consulting</option>
                <option value="seo">B2B Marketing</option>
                <option value="seo">Cloud Services</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Website URL"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              {errors.website && (
                <p className="text-red-500 text-sm mt-1">{errors.website}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-gray-100 py-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
