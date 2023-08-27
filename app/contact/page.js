import React from 'react'

const Contact = () => {
  return (
<div className="flex justify-center items-center h-[100vh] mt-9">
            <div className="w-full sm:w-96 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4 text-center text-slate-800">Contact Us</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md focus:ring focus:bg-sky-100" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:ring focus:bg-sky-100" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md focus:ring focus:bg-sky-100"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition duration-300">Submit</button>
                </form>
            </div>
        </div>
    );
};


export default Contact