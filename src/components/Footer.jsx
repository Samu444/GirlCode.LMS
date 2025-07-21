import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';


function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="footer"
        >
            <div className="footer-content container-fluid">
                <div className="footer-row row">
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                        <p>&copy; {new Date().getFullYear()} GirlCode. All rights reserved.</p>
                    </div>
                    <div className="social-icons col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                        <a href="https://web.facebook.com/GirlCodeZA/?_rdc=1&_rdr#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://x.com/GirlCode_za" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://www.instagram.com/girlcode_za/" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/girlcodeza/posts/?feedView=all" aria-label="LinkedinIn"><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/@GirlCodeZA" aria-label="YouTube"><FaYoutube /></a>
                        <a href="https://www.tiktok.com/@girlcodeza" arial-label="TikTok"><SiTiktok /></a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;