import React from "react";
import { FaDumbbell, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-tl-3xl">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>Dhakad</p>
              <p className="text-secondary">gYm</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              dolore laboriosam adipisci rerum ipsum unde!
            </p>
            <div className="flex items-center justify-start gap-5 mt-6">
              <a href="#">
                <IoLocation className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebookSquare className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <BsLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Important Links</h1>
              <ul className="flex flex-col gap-3">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Company</h1>
              <ul className="flex flex-col gap-3">
                <li><a href="#">Our services</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Resources</h1>
              <ul className="flex flex-col gap-3">
                <li><a href="#">Products</a></li>
                <li><a href="#">Yoga</a></li>
                <li><a href="#">Muscles</a></li>
                <li><a href="#">NearByGYM</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-6 border-t-2 border-gray-300/10">
          <span className="text-white">&copy; 2024 Github.com/soumya2611</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
