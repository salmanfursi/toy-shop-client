import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from './../../assets/marvel-babies-cute-and-amusing-character-illustrations-by-topher-welsh-1-removebg-preview.png';

function Footer() {
  return (
    <footer className="footer p-10 bg-black bg-opacity-75 text-white">
      <div>
      <img src={logo} className='w-12 md:w-36' />

        <p className="font-bold"><span className="text-red-700 text-xl">ToyHub</span> ,united state of america .</p>
        <p>Providing reliable entertainment since 1992</p>
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>

      </div>

      <div>
        <span className="footer-title">Address</span>
        <a className="link link-hover">Aruail,Aarail</a>
        <a className="link link-hover">Brahmanbaria,Chittagong</a>
        <a className="link link-hover">Bangladesh</a>
      
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title ">Contact</span>
        <a className="link link-hover text-3xl"><FaFacebook /></a>
        <a className="link link-hover text-3xl"><FaInstagram /></a>
        <a className="link link-hover text-3xl"><FaTwitter /></a>
      </div>


    </footer>
  );
}

export default Footer;