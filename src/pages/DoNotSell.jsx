// src/pages/DoNotSell.jsx
import React from "react";

const DoNotSell = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-0 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Do Not Contact Request Form</h1>
        <div className="border-t-2 border-[#89B8F6] my-4"></div>
        <p className="text-gray-700 leading-relaxed mb-4">
          We take your privacy seriously and are committed to respecting your choices. If you wish to opt out of receiving communications from us or our partners, please complete this form to exercise your rights. By submitting this form, you can:
        </p>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li>Request to opt out of receiving phone calls, text messages, or emails.</li>
          <li>Limit the use and disclosure of sensitive personal information.</li>
          <li>Request deletion of your personal data from our records.</li>
          <li>Request a copy of the data we have collected about you.</li>
          <li>Request corrections to inaccurate personal information.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Please provide accurate information to help us process your request efficiently. Submitting false or incomplete details may result in delays or errors. For additional assistance, contact us at <a href="mailto:support@localbathquotes.com" className="text-blue-500 hover:underline">support@localbathquotes.com</a>.
        </p>
        <form method="POST" action="mailto:support@localbathquotes.com" enctype="text/plain">
          <label htmlFor="first_name" className="block text-gray-800 font-bold mb-2">First Name *</label>
          <input type="text" id="first_name" name="First Name" placeholder="Enter your first name" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>

          <label htmlFor="last_name" className="block text-gray-800 font-bold mb-2">Last Name *</label>
          <input type="text" id="last_name" name="Last Name" placeholder="Enter your last name" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>

          <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Email Address *</label>
          <input type="email" id="email" name="Email" placeholder="Enter your email address" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>

          <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">Phone Number</label>
          <input type="text" id="phone" name="Phone Number" placeholder="Enter your phone number (optional)" className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>

          <label htmlFor="zip_code" className="block text-gray-800 font-bold mb-2">Zip Code</label>
          <input type="text" id="zip_code" name="Zip Code" placeholder="Enter your zip code (optional)" className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>

          <label htmlFor="request_type" className="block text-gray-800 font-bold mb-2">I am submitting this request:</label>
          <select id="request_type" name="Request Type" className="w-full p-2 mb-4 border border-gray-300 rounded-lg">
            <option value="For Myself">For Myself</option>
            <option value="On Behalf of Someone Else">On Behalf of Someone Else</option>
          </select>

          <label htmlFor="resident_state" className="block text-gray-800 font-bold mb-2">I am a resident of:</label>
          <select id="resident_state" name="Resident State" className="w-full p-2 mb-4 border border-gray-300 rounded-lg">
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Utah">Utah</option>
            <option value="Virginia">Virginia</option>
            <option value="Oregon">Oregon</option>
            <option value="Texas">Texas</option>
            <option value="Other">Other</option>
          </select>

          <p className="text-gray-800 font-bold mb-2">Please select the options you would like to request:</p>
          <label className="block text-gray-700 mb-2"><input type="checkbox" name="opt_out_options" value="No Calls" className="mr-2"/> Opt out of phone calls</label>
          <label className="block text-gray-700 mb-2"><input type="checkbox" name="opt_out_options" value="No Texts" className="mr-2"/> Opt out of text messages</label>
          <label className="block text-gray-700 mb-2"><input type="checkbox" name="opt_out_options" value="No Emails" className="mr-2"/> Opt out of emails</label>
          <label className="block text-gray-700 mb-2"><input type="checkbox" name="opt_out_options" value="Limit Sensitive Information" className="mr-2"/> Limit use of sensitive personal information</label>
          <label className="block text-gray-700 mb-2"><input type="checkbox" name="opt_out_options" value="Delete My Data" className="mr-2"/> Request deletion of personal data</label>
          <label className="block text-gray-700 mb-2"><input type="checkbox" name="opt_out_options" value="Send My Data" className="mr-2"/> Request a copy of personal data collected</label>
          <label className="block text-gray-700 mb-2"><input type="checkbox" name="opt_out_options" value="Correct Information" className="mr-2"/> Request corrections to inaccurate information</label>

          <label htmlFor="additional_info" className="block text-gray-800 font-bold mb-2">Additional Information</label>
          <textarea id="additional_info" name="Additional Information" rows="4" placeholder="Provide any additional details regarding your request (optional)" className="w-full p-2 mb-4 border border-gray-300 rounded-lg"></textarea>

          <p className="text-gray-600 text-sm mb-4">By submitting this form, I declare under penalty of perjury that I am the individual whose information is being requested or have the authority to act on their behalf.</p>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-400 transition duration-300">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default DoNotSell;