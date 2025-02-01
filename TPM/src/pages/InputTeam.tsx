import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/instance'; // Import Axios instance
import { AxiosError } from 'axios'; // Import AxiosError untuk handling error

const InputTeam = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    line_id: '',
    github_id: '',
    birth_place: '',
    birth_date: { day: '', month: '', year: '' },
    cv: null,
    flazz_card: null,
    error: '', // Untuk menyimpan pesan error
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'day' || name === 'month' || name === 'year') {
      setFormData((prevData) => ({
        ...prevData,
        birth_date: { ...prevData.birth_date, [name]: value },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        birth_date: `${formData.birth_date.year}-${formData.birth_date.month}-${formData.birth_date.day}`,
      };

      const formDataToSend = new FormData();
      for (const key in payload) {
        if (key === 'error') continue; // Skip properti error
        if (payload[key] instanceof File) {
          formDataToSend.append(key, payload[key]);
        } else {
          formDataToSend.append(key, payload[key]);
        }
      }

      const response = await axiosInstance.post('/leaders', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      console.log('Success:', response.data);
      alert('Leader information submitted successfully!');
      navigate('/dashboard'); // Redirect ke halaman berikutnya
    } catch (error) {
      const axiosError = error as AxiosError;
      setFormData((prevData) => ({
        ...prevData,
        error: axiosError.response?.data?.message || 'Something went wrong, please try again.',
      }));
    }
  };

  return (
    <div className="flex flex-col items-center h-[800px] justify-center  bg-gradient-to-b from-indigo-950 via-indigo-750 to-indigo-600 w-full bg-cover bg-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 border border-gray-300 rounded-full px-4 py-2 text-white"
      >
        Back
      </button>
      <div className="flex w-full max-w-4xl mx-auto">
        <div className="flex-1">
          <h2 className="text-left text-4xl font-bold mb-4 text-white text-glow font-poppins">Team Leader Information</h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-10 border rounded-xl shadow-lg bg-white bg-opacity-15">
          {formData.error && (
            <div className="mb-4 text-red-500 text-sm font-medium">{formData.error}</div>
          )}
          <div className="mb-4">
            <label htmlFor="full_name" className="block text-sm font-medium text-white font-poppins">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-white font-poppins">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="line_id" className="block text-sm font-medium text-white font-poppins">Line ID</label>
            <input
              type="text"
              id="line_id"
              name="line_id"
              value={formData.line_id}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="github_id" className="block text-sm font-medium text-white font-poppins">GitHub/GitLab ID</label>
            <input
              type="text"
              id="github_id"
              name="github_id"
              value={formData.github_id}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birth_place" className="block text-sm font-medium text-white font-poppins">Birth Place</label>
            <input
              type="text"
              id="birth_place"
              name="birth_place"
              value={formData.birth_place}
              onChange={handleChange}
              required
              className="border rounded p-2 w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white font-poppins">Birth Date</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="DD"
                name="day"
                value={formData.birth_date.day}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full bg-white text-black"
              />
              <input
                type="text"
                placeholder="MM"
                name="month"
                value={formData.birth_date.month}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full bg-white text-black"
              />
              <input
                type="text"
                placeholder="YYYY"
                name="year"
                value={formData.birth_date.year}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full bg-white text-black"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="cv" className="block text-sm font-medium text-white font-poppins">Upload CV</label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleFileChange}
              required
              className="border rounded p-2 w-full bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="flazz_card" className="block text-sm font-medium text-white font-poppins">Upload Flazz/ID Card</label>
            <input
              type="file"
              id="flazz_card"
              name="flazz_card"
              onChange={handleFileChange}
              required
              className="border rounded p-2 w-full bg-white text-black"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InputTeam;
