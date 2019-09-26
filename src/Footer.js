import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (<footer>
        <img className="footer-elipses" src="./elipses.png" alt="elipses" />
        <section className="footer-container">
            <div className="flaticon-statement">Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </section>
    </footer>);
}

export default Footer;
