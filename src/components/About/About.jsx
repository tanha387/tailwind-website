import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { ToastContainer, toast } from 'react-toastify';

export const About = () => {

  const { register, handleSubmit, formState: { errors }, watch ,reset} = useForm();
 


  const onSubmit = (data) => {
    toast("Your form has been submitted successfully!");
    reset();
  };

  return (

    
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <ToastContainer/>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
          <input
            id="firstName"
            type="text"
            {...register('firstName', { required: 'First name is required' })}
            className="form-input mt-1 block w-full bg-gray-100"
          />
          {errors.firstName && <span className="text-red-500 text-xs italic">{errors.firstName.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            className="form-input mt-1 block w-full bg-gray-100"
          />
          {errors.phone && <span className="text-red-500 text-xs italic">{errors.phone.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="form-input mt-1 block w-full bg-gray-100"
          />
          {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            className="form-input mt-1 block w-full bg-gray-100"
          />
          {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', { required: 'Confirm Password is required', validate: (value) => value === watch('password') || 'The passwords do not match' })}
            className="form-input mt-1 block w-full bg-gray-100"
          />
          {errors.confirmPassword && <span className="text-red-500 text-xs italic">{errors.confirmPassword.message}</span>}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};
