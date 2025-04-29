"use client";
import React from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState<string>("");
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "a4744bf8-bdcc-4945-af53-94dc8e8ed84f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("submitted.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-gray-800 p-5 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <label htmlFor="name" className="sr-only">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          name="name"
          required
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          required
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea
          id="message"
          placeholder="Your message"
          name="message"
          required
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button 
        type="submit" 
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        Send a message
      </button>
      {result && <p className="text-white">{result}</p>} {/* Display result message */}
    </form>
  );
};

export default ContactForm;
