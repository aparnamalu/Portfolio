import { createElement, useRef } from "react";

const Contact = () => {
 
  return (
   
 
    <div
      class="max-w-3xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center space-x-6"
    >
      
      <div class="flex justify-center items-center pr-4">
        <img
          src="./developer-8764521.jpg"
          alt="Two models"
          class="rounded-md object-cover w-full h-auto"
        />
      </div>

      
      <div>
        <h1 class="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-white">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              class="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-white">E-mail</label>
            <input
              type="email"
              placeholder="Enter your email"
              class="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-white">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              class="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-black focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Contact Us
          </button>
        </form>

    
        <div class="mt-8 text-gray-700 ">
          <p class="font-bold text-lg text-white">Email</p>
          <p class="text-sm text-gray-400">jraparna04@gmail.com</p>
          <p class="mt-4 font-bold text-lg text-white">Contact</p>
          <p class="text-sm text-gray-400">+91 7025890818</p>
        </div>

      </div>
    </div>

          
       
         
         
  )
}

export default Contact;
