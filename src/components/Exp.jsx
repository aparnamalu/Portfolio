import React, { useState } from 'react';
import Tilt from "react-parallax-tilt";
const Exp = () => {
  // State to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to update mouse position
  const updateMousePosition = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
    <div className="max-w-3xl mx-auto pb-12 text-center md:pb-20">
      <div className="inline-flex items-center gap-3 pb-3">
        <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-6xl"> Project Works</span>
      </div>
      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-2xl">My Recent Works</h2>
      <p className="text-lg text-indigo-200/65">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
    </div>
    <div class="bg-gray-900 flex justify-center items-center min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-14">

    
        <div class="bg-gray-800 shadow-lg rounded-lg p-6">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-500">
                    <img src="filpkart-modified.png"></img>
                </div>
                <h3 class="ml-4 text-xl font-semibold text-white">Filpkart Clone</h3>
            </div>
            <p class="mt-2 text-gray-400">An e-commerce platform replicating Flipkart's core features:<br></br>

           Secure user authentication with JWT.<br></br>
           Product search and filters for a seamless shopping experience.<br></br>
           Shopping cart integration with order checkout.<br></br>
           Admin dashboard for managing inventory and user data.</p>
        </div>
        <div class="bg-gray-800 shadow-lg rounded-lg p-6">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-500">
                    <img src="my.png"></img>
                </div>
                <h3 class="ml-4 text-xl font-semibold text-white">Book My Show</h3>
            </div>
            <p class="mt-2 text-gray-400">  
            This project involves creating a web-based application that replicates the functionality of the popular ticket booking platform, Book My Show. Users can browse events, movies, and shows, book tickets, and make payments online. 

Key Features:<br></br>
- User registration and login.<br></br>
- Browse and filter movies/events by categories, location, and timing.<br></br>
- Seat selection with real-time availability.<br></br>
- Secure online payment integration.<br></br>
- Admin panel for managing listings and bookings.<br></br>


</p>
        </div>
         
        <div class="bg-gray-800 shadow-lg rounded-lg p-6">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-500">
                   <img className='rounded-full w-12 h-12'  src="olx.png"></img>
                </div>
                <h3 class="ml-4 text-xl font-semibold text-white">OLX</h3>
            </div>
            <p class="mt-2 text-gray-400">This project focuses on building an online platform similar to OLX, enabling users to buy and sell products. Users can post ads, search for items, and interact with sellers/buyers via the platform.<br></br>

        Key Features:<br></br>
      - User authentication and profile management.<br></br>
      - Post, edit, and delete advertisements with images.<br></br>
      - Search and filter products by categories, price, and location.<br></br>
      - Integrated chat or messaging system for buyer-seller communication.<br></br>
      - Admin dashboard to moderate listings and users.
   </p>
        </div>
        <div class="bg-gray-800 shadow-lg rounded-lg p-6">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-500">
                    <img className='rounded-full w-12 h-12'src="insta-modified.png"></img>
                </div>
                <h3 class="ml-4 text-xl font-semibold text-white">Instagram</h3>
            </div>
            
            <p class="mt-2 text-gray-400">An Instagram clone is a social media application designed to mimic the features of Instagram.<br></br> The project includes: <br></br> 
   - User account creation and authentication. <br></br> 
   - Uploading and sharing photos or videos.<br></br>  
   - Commenting, liking, and following functionalities. <br></br> 
   - Direct messaging between users.<br></br>  
   - Backend storage for media and user data.  
</p>
        </div>
       
        

    </div>
    </div>          
       
     
    
  </section>
  
  

  );
};

export default Exp;
