import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="footer"
        >
            <div className="footer-content">
                <div className="footer-row">
                    <p>&copy; 2025 GirlCode LMS. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="https://web.facebook.com/GirlCodeZA/?_rdc=1&_rdr#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/girlcode_za/" title="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://x.com/GirlCode_za" title="X"><i className="fab fa-x-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/girlcodeza/posts/?feedView=all" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.tiktok.com/@girlcodeza" title="TikTok"><i className="fab fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/@GirlCodeZA" title="YouTube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
