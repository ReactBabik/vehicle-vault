import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.scss";
import { useContext } from "react";
import { ShowAuthContext } from "../../context/showAuthContext/showAuthContext";

const Footer = () => {
  const { setShowRegister, setShowLogin, } = useContext(ShowAuthContext);

  return (
    <footer className="footer">
      <div className="container wrapper">
        <div className="left">
          <h1 className="logo">Vehicle Vault</h1>
          <span>
            The future of revolutionized car selling and buying in Pakistan. Vehicle Vault is an Easy,
            Fast and Free car selling and buying website for everyone and it tops it up with
            using state of the art security using blockchain to ensure integrity across all the transactions.
          </span>
          <div className="links">
            <Link>
              <BsYoutube />
            </Link>
            <Link>
              <BsTwitter />
            </Link>
            <Link>
              <BsFacebook />
            </Link>
            <Link>
              <BsInstagram />
            </Link>
          </div>
        </div>

        <div className="center">
          <div className="col">
            <span>Quick Links</span>
            <Link>About us</Link>
            <Link>Classifieds</Link>
            <Link onClick={() => setShowLogin(true)}>Log in</Link>
            <Link onClick={() => setShowRegister(true)}>Sign up</Link>
          </div>
          <div className="col">
            <span>Support</span>
            <Link>Affiliates Program</Link>
            <Link>Become a Partner</Link>
            <Link>Terms and Conditions</Link>
          </div>
        </div>

        <div className="footer-right">
          <div className="right-wrapper">
            <span className="top">Contact us</span>
            <div className="col">
              <span>Email</span>
              <div className="contact">
                <BsEnvelope className="icon" />
                <span>vehicevault@contact.com</span>
              </div>
            </div>

            <div className="col">
              <span>Whatsapp</span>
              <div className="contact">
                <BsWhatsapp className="icon" />
                <span>+92 123 456789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="copyrights">
        Copyright © Vehicle Vault 2024. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
